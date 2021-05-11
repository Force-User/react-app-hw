import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components";
import reportWebVitals from "./reportWebVitals";
import image from "./assets/logo.svg";
import { BrowserRouter } from "react-router-dom";
const store = {
  user: {
    firstName: "Jack",
    lastName: "Sparrow",
  },
  avatar: {
    image: image,
    alt: "logo",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={store} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
