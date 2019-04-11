import React, {Component} from "react";
import Api from "../utilities/Api";

class SearchResults extends Component {
  handleSaveClick(volume) {
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

  render() {
    if (this.props.results.items) {
      return this.props.results.items.map(volume => this.renderBook(volume));
    } else {
      return (
        <div className="card mt-4">
          <div className="card-body">
            <span>No results</span>
          </div>
        </div>
      );
    }
  }

  renderBook(volume) {
    const info = volume.volumeInfo;

    return (
      <div className="card mt-4" key={volume.id}>
        <div className="card-body">
          <h3 className="card-title"><a href={info.previewLink}>{info.title}</a></h3>
          <p className="card-text">Written by: {info.authors.join(", ")}</p>
          <div className="media">
            {
              info.imageLinks
                ? <img className="mr-3" src={info.imageLinks.thumbnail} alt="" />
                : ""
            }
            <div className="media-body">
              {info.description}
            </div>
          </div>
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={event => this.handleSaveClick(volume)}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default SearchResults;