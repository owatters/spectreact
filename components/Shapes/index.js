import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Shapes extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <div class={(this.props.className != null ? this.props.className : "") + " " + (this.props.shape != null ? this.props.shape : "")}>
        {this.props.children}
      </div>
    );
  }
}
