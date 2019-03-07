import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";
import Button from "../Button";

export default class Panel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={(this.props.className != null ? this.props.className : "") + " panel"}>
        {this.props.children}
      </div>
    )
  }
}

