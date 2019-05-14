import * as ActionTypes from "../actions";

const initialState = {
  books: [],
  savedBook: {},
};

function book(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DELETE_BOOK_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });

    case ActionTypes.DELETE_BOOK_REQUEST:
      return Object.assign({}, state);

    case ActionTypes.DELETE_BOOK_SUCCESS:
      return Object.assign({}, state, {
        books: state.books.filter(book => book._id !== action.id),
      });

    case ActionTypes.GET_BOOK_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });

    case ActionTypes.GET_BOOK_REQUEST:
      return Object.assign({}, state);

    case ActionTypes.GET_BOOK_SUCCESS:
      return Object.assign({}, state, {
        books: action.payload,
      });

    case ActionTypes.SAVE_BOOK_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });

    case ActionTypes.SAVE_BOOK_REQUEST:
      return Object.assign({}, state);

    case ActionTypes.SAVE_BOOK_SUCCESS:
      return Object.assign({}, state, {
        savedBook: action.payload,
      });

    default:
      return state;
  }
}

export default book;