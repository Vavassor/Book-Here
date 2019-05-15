import * as actions from "../../actions";
import * as ActionTypes from "../../actions";
import api from "../../middleware/api";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";

const middlewares = [api, thunk];
const mockStore = configureMockStore(middlewares);

const axiosMock = new MockAdapter(axios);

describe("Asynchronous Action Creators", () => {
  afterEach(() => {
    axiosMock.restore();
  });

  it("creates `GET_BOOK_SUCCESS` when getting all books", () => {
    const books = [
      {
        authors: ["Anonymous"],
        description: "No description.",
        image: "/images/Untitled.png",
        link: "https://books.google.com/books?id=ZrsVZKWJg4UC",
        title: "Untitled",
      },
    ];

    const headers = {"Content-Type": "application/json"};
    axiosMock.onGet("/api/book").reply(200, books, headers);

    const expectedActions = [
      {
        type: ActionTypes.GET_BOOK_REQUEST,
      },
      {
        type: ActionTypes.GET_BOOK_SUCCESS,
        payload: books,
      },
    ];

    const store = mockStore();

    return store.dispatch(actions.getBook()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates `GET_BOOK_FAILURE` when a server error occurs", () => {
    axiosMock.onGet("/api/book").networkError();

    const expectedActions = [
      {
        type: ActionTypes.GET_BOOK_REQUEST,
      },
      {
        type: ActionTypes.GET_BOOK_FAILURE,
        error: "Network Error",
      },
    ];

    const store = mockStore();

    return store.dispatch(actions.getBook()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});