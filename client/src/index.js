import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import index from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom"

const stores = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={stores}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
