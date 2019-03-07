import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class FormCheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className={(this.props.className != null ? this.props.className : "") + " formCheckBox"}>
         <input type="checkbox"/>
         <i class="form-icon"></i> {this.props.label}
      </label>
    )
  }
}