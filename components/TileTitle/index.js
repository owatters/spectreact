import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class TileTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={(this.props.className != null ? this.props.className : "") + " tile-title"}>
        {this.props.children}
      </p>
    )
  }
}

