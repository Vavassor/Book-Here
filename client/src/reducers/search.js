import * as ActionTypes from "../actions";
import loadStatus from "../utilities/loadStatus";

const initialState = {
  lastQuery: "",
  results: [],
  status: loadStatus.NONE,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_FAILURE:
      return Object.assign({}, state, {
        lastQuery: action.lastQuery,
        status: loadStatus.FAILURE,
      });
    
    case ActionTypes.SEARCH_REQUEST:
      return Object.assign({}, state, {
        status: loadStatus.LOADING,
      });

    case ActionTypes.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        status: loadStatus.SUCCESS,
        results: action.results,
      });

    default:
      return state;
  }
};

export default search;