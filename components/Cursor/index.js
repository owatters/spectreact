import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Cursor extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <div class={(this.props.className != null ? this.props.className : "") + " " + (this.props.cursor != null ? this.props.cursor : "")}>
        {this.props.children}
      </div>
    );
  }
}
