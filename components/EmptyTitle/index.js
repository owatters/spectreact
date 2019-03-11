import React, { Component } from "react";
import "./style.scss";

export default class EmptyTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <p className={this.state.className + " EmptyTitle"}>
        {this.props.children}

      </p>
    );
  }
}
