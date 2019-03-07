import React, { Component } from "react";
import "./style.scss";

export default class MenuBadge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={(this.props.className != null ? this.props.className : "") + " menuBadge"}>
        {this.props.children}
      </div>
    )
  }
}