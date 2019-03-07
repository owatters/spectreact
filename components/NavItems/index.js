import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (

      <li className={(this.props.className != null ? this.props.className : "") + " nav-item"}>
        <a href="#">{this.props.children}</a>
      </li>
    );
  }
}
