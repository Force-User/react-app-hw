import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {App} from "./components";
import reportWebVitals from "./reportWebVitals";
import image from "./assets/logo.svg";
const store = {
  user:{
    firstName:"Jack",
    lastName:"Sparrow",
  },
  avatar:{
    image:{image},
    alt:"logo",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App data={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
