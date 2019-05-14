import React from "react";
import Api from "../utilities/Api";
import Card from "../components/Card";

function SearchResults(props) {
  const handleSaveClick = (volume) => {
    const info = volume.volumeInfo;
    
    const book = {
      title: info.title,
      authors: info.authors,
      link: info.previewLink,
    };

    if (info.description
        && info.description.length) {
      book.description = info.description;
    }

    if (info.imageLinks
        && info.imageLinks.thumbnail
        && info.imageLinks.thumbnail.length) {
      book.image = info.imageLinks.thumbnail;
    }

    Api
      .saveBook(book)
      .then(book => console.log(book))
      .catch(error => console.error(error));
  }

  const renderBook = (volume) => {
    const info = volume.volumeInfo;

    return (
      <Card key={volume.id}>
        <h3 className="card-title"><a href={info.previewLink}>{info.title}</a></h3>
        <p className="card-text">by {info.authors.join(", ")}</p>
        <div className="media">
          {
            info.imageLinks
              ? <a href={info.previewLink}><img className="mr-3" src={info.imageLinks.thumbnail} alt={info.title} /></a>
              : ""
          }
          <div className="media-body">
            {info.description}
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={event => handleSaveClick(volume)}
        >
          Save
        </button>
      </Card>
    );
  }

  if (props.results.items) {
    return props.results.items.map(volume => renderBook(volume));
  } else {
    return (
      <Card>
        <span>No results</span>
      </Card>
    );
  }
}

export default SearchResults;