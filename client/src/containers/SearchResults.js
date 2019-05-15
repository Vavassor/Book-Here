import Card from "../components/Card";
import {connect} from "react-redux";
import {saveBook} from "../actions";
import SearchResult from "../components/SearchResult";
import React from "react";

export function SearchResults(props) {
  const {dispatch} = props;

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

    dispatch(saveBook(book));
  }

  if (props.results
      && props.results.items
      && props.results.items.length) {
    return props.results.items.map(volume => (
      <SearchResult key={volume.id} volume={volume} handleSaveClick={handleSaveClick} />
    ));
  } else {
    return (
      <Card>
        <span>No results.</span>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const {search} = state;
  const {results} = search;
  return {
    results,
  };
}

export default connect(mapStateToProps)(SearchResults);