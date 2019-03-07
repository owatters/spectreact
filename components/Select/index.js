import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Select extends Component {
    constructor(props) {
      super(props);
      
    }
    render() {
      return (
        <div className={this.props.className + " form-group"}>
  <select className="form-select">
    {this.props.options.map((option)=><option>{option}</option>)}
  </select>
</div>
      );
    }
  }
  