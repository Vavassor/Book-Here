import React, {Component} from "react";
import Api from "../utilities/Api";

class SavedBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    Api
      .getBooks()
      .then(response => {
        this.setState({books: response.data});
      })
      .catch(error => console.error(error));
  }
  
  render() {
    if (this.state.books.length) {
      return this.state.books.map(book => this.renderBook(book));
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <span>No books saved.</span>
          </div>
        </div>
      );
    }
  }

  renderBook(book) {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title"><a href={book.link}>{book.title}</a></h3>
          <p className="card-text">Written by: {book.authors.join(", ")}</p>
          <div className="media">
            {
              book.image
                ? <img className="mr-3" src={book.image} alt="" />
                : ""
            }
            <div className="media-body">
              {book.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;