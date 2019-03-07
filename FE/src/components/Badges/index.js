import React, { Component } from "react";
import "./style.scss";

export default class Badges extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={
          (this.props.className != null ? this.props.className : "") + " badge"
        }
        data-badge="8"
      >
        {this.props.children}
      </button>
    );
  }
}
