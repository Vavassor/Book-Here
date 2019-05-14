import React from "react";
import Card from "../components/Card";

function SavedBook(props) {
  return (
    <Card>
      <h3 className="card-title"><a href={props.link}>{props.title}</a></h3>
      <p className="card-text">by {props.authors ? props.authors.join(", ") : ""}</p>
      <div className="media">
        {
          props.image
            ? <a href={props.link}><img className="mr-3" src={props.image} alt={props.title} /></a>
            : ""
        }
        <div className="media-body">
          {props.description}
        </div>
      </div>

      <button
        type="button"
        className="btn btn-danger mt-3"
        onClick={event => props.handleDelete(props.id)}
      >
        Delete
      </button>
    </Card>
  );
}

export default SavedBook;