import * as ActionTypes from "../../actions";
import book from "../book";

describe("book reducer", () => {
  it("returns the initial state", () => {
    const initialState = {
      books: [],
      savedBook: {},
    };
    expect(book(undefined, {})).toEqual(initialState);
  });

  it("handles a `DELETE_BOOK_FAILURE` action", () => {
    const errorMessage = "Generic Error";
    expect(book(undefined, {
      type: ActionTypes.DELETE_BOOK_FAILURE,
      error: errorMessage,
    })).toEqual({
      books: [],
      error: errorMessage,
      savedBook: {},
    });
  });

  it("handles a `DELETE_BOOK_SUCCESS` action", () => {
    const books = [
      {
        authors: ["Anonymous"],
        description: "No description.",
        image: "/images/Untitled.png",
        link: "https://books.google.com/books?id=ZrsVZKWJg4UC",
        title: "Untitled",
      },
    ];

    const initialState = {
      books: books,
      savedBook: {},
    };

    expect(book(initialState, {
      type: ActionTypes.DELETE_BOOK_SUCCESS,
    })).toEqual({
      books: [],
      savedBook: {},
    });
  });

  it("handles a `GET_BOOK_FAILURE` action", () => {
    const errorMessage = "Generic Error";
    expect(book(undefined, {
      type: ActionTypes.GET_BOOK_FAILURE,
      error: errorMessage,
    })).toEqual({
      books: [],
      error: errorMessage,
      savedBook: {},
    });
  });

  it("handles a `GET_BOOK_SUCCESS` action", () => {
    const books = [
      {
        authors: ["Anonymous"],
        description: "No description.",
        image: "/images/Untitled.png",
        link: "https://books.google.com/books?id=ZrsVZKWJg4UC",
        title: "Untitled",
      },
    ];

    expect(book(undefined, {
      type: ActionTypes.GET_BOOK_SUCCESS,
      payload: books,
    })).toEqual({
      books: books,
      savedBook: {},
    });
  });

  it("handles a `SAVE_BOOK_FAILURE` action", () => {
    const errorMessage = "Generic Error";
    expect(book(undefined, {
      type: ActionTypes.SAVE_BOOK_FAILURE,
      error: errorMessage,
    })).toEqual({
      books: [],
      error: errorMessage,
      savedBook: {},
    });
  });

  it("handles a `SAVE_BOOK_SUCCESS` action", () => {
    const savedBook = {
      authors: ["Anonymous"],
      description: "No description.",
      image: "/images/Untitled.png",
      link: "https://books.google.com/books?id=ZrsVZKWJg4UC",
      title: "Untitled",
    };

    expect(book(undefined, {
      type: ActionTypes.SAVE_BOOK_SUCCESS,
      payload: savedBook,
    })).toEqual({
      books: [],
      savedBook: savedBook,
    });
  });
});