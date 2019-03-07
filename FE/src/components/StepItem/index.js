import React, { Component } from "react";
import "./style.scss";

export default class StepItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className={
          (this.props.className != null ? this.props.className : "") +
          " step-item"
        }
      >
        {this.props.children}
      </li>
    );
  }
}
