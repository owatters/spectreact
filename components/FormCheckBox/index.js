import React, { Component } from "react";
import "./style.scss";

export default class FormCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className != null ? this.props.className : "",
    }
  }
  render() {
    return (
      <label className={this.state.className + " formCheckBox"}>
        <input type="checkbox" />
        <i className="form-icon"></i> {this.props.label}
      </label>
    )
  }
}