import React, { Component } from "react";
import "./style.scss";
import EmptyIcon from "../EmptyIcon";
import EmptyTitle from "../EmptyTitle";
import EmptySubtitle from "../EmptySubtitle";
import EmptyAction from "../EmptyAction";
import Button from "../Button";

import "font-awesome/css/font-awesome.css";
export default class EmptyStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <div className={this.state.className + "Empty"}>
        {this.props.children}

      </div >
    );
  }
}
