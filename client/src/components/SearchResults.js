import React, {Component} from "react";

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.renderResults(this.props.results)}
      </div>
    );
  }

  renderResults(results) {
    if (!results.length) {
      return (
        <h2>No results</h2>
      );
    } else {
      return results.map(book => this.renderBook(book));
    }
  }

  renderBook(book) {
    return (
      <div>
        <h3>{book.title}</h3>
      </div>
    );
  }
}

export default SearchResults;