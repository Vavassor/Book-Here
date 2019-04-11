import React, {Component} from "react";
import Api from "../utilities/Api";
import Card from "../components/Card";
import SavedBook from "../components/SavedBook";

class SavedBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
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
      return this.state.books.map((book) => {
        return (
          <SavedBook
            id={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            handleDelete={this.handleDelete}
          />
        );
      });
    } else {
      return (
        <Card>
          <span>No books saved.</span>
        </Card>
      );
    }
  }
}

export default SavedBooks;