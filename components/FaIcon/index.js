import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class FaIcon extends Component {
  render() {
    return (
      <i className={this.props.className} />
    )
  }
}