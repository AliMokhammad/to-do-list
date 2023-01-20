import * as React from "react";
import { Provider } from "react-redux";
import App from "./pages";
import store from "./redux/store";
import "./Main.css";

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Main;
