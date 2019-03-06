import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Button from "./components/Button";

import "./index.scss";

ReactDOM.render(
  <div>
    <Button className="primary">
      <FaIcon className="fa fa-eye" />
      </Button>
  </div>,
  document.querySelector("#root")
);
