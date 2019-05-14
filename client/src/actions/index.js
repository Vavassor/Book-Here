import {CALL_API} from "../middleware/api";
import GoogleBooksApi from "../utilities/GoogleBooksApi";

export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";
export const DELETE_BOOK_REQUEST = "DELETE_BOOK_REQUEST";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";

export function deleteBook(id) {
  return {
    [CALL_API]: {
      endpoint: "/book/" + id,
      method: "DELETE",
      types: [DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE],
    },
    id,
  }
}

export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";
export const GET_BOOK_REQUEST = "GET_BOOK_REQUEST";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";

export function getBook(id) {
  const endpoint = (id) ? "/book/" + id : "/book";
  return {
    [CALL_API]: {
      endpoint: endpoint,
      method: "GET",
      types: [GET_BOOK_REQUEST, GET_BOOK_SUCCESS, GET_BOOK_FAILURE],
    },
  }
}

export const SAVE_BOOK_FAILURE = "SAVE_BOOK_FAILURE";
export const SAVE_BOOK_REQUEST = "SAVE_BOOK_REQUEST";
export const SAVE_BOOK_SUCCESS = "SAVE_BOOK_SUCCESS";

export function saveBook(book) {
  return {
    [CALL_API]: {
      body: book,
      endpoint: "/book",
      method: "POST",
      types: [SAVE_BOOK_REQUEST, SAVE_BOOK_SUCCESS, SAVE_BOOK_FAILURE],
    },
  }
}

export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

function searchFailure(query) {
  return {
    type: SEARCH_FAILURE,
    lastQuery: query,
  };
}

function searchSuccess(results) {
  return {
    type: SEARCH_SUCCESS,
    results: results,
  };
}

function searchRequest(query) {
  return {
    type: SEARCH_REQUEST,
    query: query,
  };
}

export function search(query) {
  return (dispatch) => {
    dispatch(searchRequest(query));
    return GoogleBooksApi
      .search(query)
      .then(response => dispatch(searchSuccess(response.data)))
      .catch(error => dispatch(searchFailure(query)));
  };
}