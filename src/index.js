import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import store, {persistor} from "./redux/store";

import {buildHttpClient} from "./utils/buildHttpClient";
const token = localStorage.getItem("token");
if (token) {
  buildHttpClient(token);
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);
