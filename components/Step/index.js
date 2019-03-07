import React, { Component } from "react";
import "./style.scss";

export default class Step extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul
        className={
          (this.props.className != null ? this.props.className : "") + " step"
        }
      >
        {this.props.children}
      </ul>
    );
  }
}
