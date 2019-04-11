import React, {Component} from "react";
import Card from "../components/Card";

class SavedBook extends Component {
  render() {
    return (
      <Card>
        <h3 className="card-title"><a href={this.props.link}>{this.props.title}</a></h3>
        <p className="card-text">Written by: {this.props.authors.join(", ")}</p>
        <div className="media">
          {
            this.props.image
              ? <a href={this.props.link}><img className="mr-3" src={this.props.image} alt={this.props.title} /></a>
              : ""
          }
          <div className="media-body">
            {this.props.description}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={event => this.props.handleDelete(this.props.id)}
        >
          Delete
        </button>
      </Card>
    );
  }
}

export default SavedBook;