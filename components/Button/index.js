import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {
        className: this.props.className ? this.props.className : "",
      };
    }
    render() {
      return (
        <button className={this.state.className + " button"}>
          {this.props.children}
        </button>
      );
    }
  }
  