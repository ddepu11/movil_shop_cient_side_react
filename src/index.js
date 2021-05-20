import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createAStore from "./redux/redux";

ReactDOM.render(
  <Provider store={createAStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
