import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import store, {persistor} from "./redux/store";
import {TokenSetter} from "./components/TokenSetter";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TokenSetter />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
);
