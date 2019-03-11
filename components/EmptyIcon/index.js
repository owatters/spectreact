import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class EmptyIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <div className={this.state.className + " EmptyIcon"}>
        {this.props.children}

      </div>
    );
  }
}
