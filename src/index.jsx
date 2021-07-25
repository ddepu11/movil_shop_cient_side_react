import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import createAStore from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={createAStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
