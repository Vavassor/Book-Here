import React, {Component} from "react";

class SearchResults extends Component {
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
    return (
      <div className="card mt-4" key={volume.id}>
        <div className="card-body">
          <h3>{volume.volumeInfo.title}</h3>
          <p>{volume.volumeInfo.authors.join(", ")}</p>
          <p>{volume.volumeInfo.description}</p>
        </div>
      </div>
    );
  }
}

export default SearchResults;