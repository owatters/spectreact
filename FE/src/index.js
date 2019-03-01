import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./index.scss";

import Sample from "./components/sample";

ReactDOM.render(
  <div>

    <Sample />
  </div>,
  document.querySelector("#root")
);
