import React, { Component } from "react";

import "./style.scss";
import Button from "../Button";

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <div className={this.state.className + " Panel"}>
        {this.props.children}
      </div>
    )
  }
}

