import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Sample from "./components/Sample";

import "./index.scss";

ReactDOM.render(
  <div>

    <FaIcon className="fa fa-eye" />
    <br>
    </br>
    <Sample />
  </div>,
  document.querySelector("#root")
);
