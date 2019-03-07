import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "./components/Select";

//ReactDOM.render(<Input className="primary"> Test </Input> , document.getElementById("root"))

ReactDOM.render(<Select className="hello" options={['Hello','Hi'] }/> , document.getElementById("root"))