import Card from "./Card";
import PropTypes from "prop-types";
import React from "react";

export default function SearchResult(props) {
  const volume = props.volume;
  const info = volume.volumeInfo;

  return (
    <Card>
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
        onClick={event => props.handleSaveClick(volume)}
      >
        Save
      </button>
    </Card>
  );
}

SearchResult.propTypes = {
  volume: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      previewLink: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};