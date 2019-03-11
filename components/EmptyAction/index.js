import React, { Component } from "react";
import "./style.scss";

export default class EmptyAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <div className={this.state.className + " EmptyAction"}>
        {this.props.children}

      </div>
    );
  }
}
