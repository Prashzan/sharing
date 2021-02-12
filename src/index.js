import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
