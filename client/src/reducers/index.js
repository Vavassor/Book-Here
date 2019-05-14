import book from "./book";
import {combineReducers} from "redux";
import search from "./search";

export default combineReducers({
  book,
  search,
});