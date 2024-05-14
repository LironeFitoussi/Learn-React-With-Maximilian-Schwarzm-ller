// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Redux imports
import { Provider } from "react-redux";
import store from "./store/index.js";

// CSS imports
import "./index.css";

// Component imports
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
