import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class TileContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={(this.props.className != null ? this.props.className : "") + " tile-content"}>
        {this.props.children}
      </div>
    )
  }
}

