import Card from "../components/Card";
import {connect} from "react-redux";
import {deleteBook, getBook} from "../actions";
import React, {useEffect} from "react";
import SavedBook from "../components/SavedBook";

function SavedBooks(props) {
  const {dispatch} = props;

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  
  if (props.books.length) {
    return props.books.map((book) => {
      return (
        <SavedBook
          key={book._id}
          id={book._id}
          title={book.title}
          authors={book.authors}
          description={book.description}
          image={book.image}
          link={book.link}
          handleDelete={handleDelete}
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

function mapStateToProps(state) {
  const {book} = state;
  const {books} = book;
  return {
    books: books,
  };
}

export default connect(mapStateToProps)(SavedBooks);