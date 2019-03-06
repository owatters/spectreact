import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import FaIcon from "./components/FaIcon";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import "./index.scss";

ReactDOM.render(
  <div>
    
    <Modal className="active">
    <a href="#close" className="modal-overlay" aria-label="Close"></a>
  <div className="modal-container">
    <div className="modal-header">
      <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
      <div className="modal-title h5">Modal title</div>
    </div>
    <div className="modal-body">
      <div className="content">
       Hello
      </div>
    </div>
    <div className="modal-footer">
      
    </div>
  </div>
    </Modal>
  </div>,
  document.querySelector("#root")
);
