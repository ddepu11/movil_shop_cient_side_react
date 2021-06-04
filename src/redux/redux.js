import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const createAStore = () =>
  createStore(reducers, compose(applyMiddleware(thunk), enableReduxDevTools));

export default createAStore;
