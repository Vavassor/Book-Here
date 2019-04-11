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

  handleDelete(id) {
    Api
      .deleteBook(id)
      .then(response => {
        this.setState((state, props) => {
          return {
            books: state.books.filter(book => book._id !== id),
          };
        });
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
                ? <a href={book.link}><img className="mr-3" src={book.image} alt={book.title} /></a>
                : ""
            }
            <div className="media-body">
              {book.description}
            </div>
          </div>

          <button
            type="button"
            className="btn btn-danger"
            onClick={event => this.handleDelete(book._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SavedBooks;