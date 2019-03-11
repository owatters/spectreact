import React, { Component } from "react";
import "./style.scss";

export default class NavItem extends Component {
  render() {
    return (

      <li className={(this.props.className != null ? this.props.className : "") + " navItem"}>
        <a href="#">{this.props.children}</a>
      </li>
    );
  }
}
