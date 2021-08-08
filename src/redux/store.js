import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const NODE_ENV = process.env.REACT_APP_NODE_ENV;

const composeEnhancer =
  NODE_ENV === 'development' ? composeWithDevTools : compose;

const createAStore = () =>
  createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default createAStore;
