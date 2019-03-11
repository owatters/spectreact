import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class PopoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <div className={this.state.className + " PopOverContainer"}>
        {this.props.children}
      </div>
    )
  }
}

