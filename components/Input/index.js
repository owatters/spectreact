import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Input extends Component {
    constructor(props) {
      super(props);
      
    }
    render() {
      return (
        <div className={this.state.className + " form-group"}>
  <label className="form-label" for={this.props.name}>{this.props.children}</label>
  <input className="form-input" type="text" id={this.props.name} placeholder={this.props.children} />
</div>
      );
    }
  }
  