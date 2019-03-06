import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import "./index.scss";
import Pagination from "./components/Pagination";
import PaginationItem from "./components/PaginationItem";
import Tooltip from "./components/Tooltip";

ReactDOM.render(
  <div>
    <Tooltip text="Hello">Hello</Tooltip>
  </div>,
  document.querySelector("#root")
);
