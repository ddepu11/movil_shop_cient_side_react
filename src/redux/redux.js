import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const createAStore = () => {
  return createStore(
    reducers,
    compose(applyMiddleware(thunk), enableReduxDevTools)
  );
};

export default createAStore;
