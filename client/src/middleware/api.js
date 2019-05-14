import axios from "axios";

export const CALL_API = "CALL_API";

const callApi = (body, endpoint, method, params) => {
  return axios
    .request({
      data: body,
      method: method,
      params: params,
      url: `/api${endpoint}`,
    })
    .then(response => response.data);
};

export default (store) => (next) => (action) => {
  const callApiInfo = action[CALL_API];

  if (typeof callApiInfo === "undefined") {
    return next(action);
  }

  let {body, endpoint, method, params} = callApiInfo;
  const {types} = callApiInfo;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== "string") {
    throw new Error("Specify a string endpoint URL.");
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expected action types to be strings.");
  }
  if (typeof method !== "string") {
    throw new Error("Please specify a string HTTP request method.");
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({type: requestType}));

  return callApi(body, endpoint, method, params)
    .then(response => next(actionWith({
      payload: response,
      type: successType,
    })))
    .catch(error => next(actionWith({
      type: failureType,
      error: error.message,
    })));
};