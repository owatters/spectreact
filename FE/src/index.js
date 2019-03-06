import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Navbar from "./components/Navbar";

import "./index.scss";

ReactDOM.render(
  <div>
    <Navbar></Navbar>
  </div>,
  document.querySelector("#root")
);
