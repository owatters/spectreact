import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import "./index.scss";
import Pagination from "./components/Pagination";
import PaginationItem from "./components/PaginationItem";

ReactDOM.render(
  <div>
    <Pagination className="">
    <PaginationItem className="disabled">
    <a href="#" tabIndex="-1">Previous</a>
  </PaginationItem>
  <PaginationItem className=" active">
    <a href="#">1</a>
  </PaginationItem>
  <PaginationItem >
    <a href="#">2</a>
  </PaginationItem>
  <PaginationItem  >
    <a href="#">3</a>
  </PaginationItem>
  <PaginationItem  >
    <span>...</span>
  </PaginationItem>
  <PaginationItem  >
    <a href="#">12</a>
  </PaginationItem>
  <PaginationItem  >
    <a href="#">Next</a>
  </PaginationItem>
    </Pagination>
  </div>,
  document.querySelector("#root")
);
