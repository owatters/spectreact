import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className={this.props.className + " form-group"}>
        <label className="form-label" for={this.props.name}>{this.props.children}</label>
        <input className="form-input" type="checkbox" id={this.props.name} placeholder={this.props.children} />
      </div>
    );
  }
}
