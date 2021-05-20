import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const createAStore = () => {
  return createStore(
    reducer,
    compose(applyMiddleware(thunk), enableReduxDevTools)
  );
};

export default createAStore;
