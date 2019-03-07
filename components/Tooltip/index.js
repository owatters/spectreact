import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={(this.props.className != null ? this.props.className : "") + " tooltip"} data-tooltip={this.props.text}> {this.props.children}
      </span>
    )
  }
}

