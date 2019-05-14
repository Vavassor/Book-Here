import api from "./middleware/api";
import App from "./containers/App";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk, api));

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById("root")
);
