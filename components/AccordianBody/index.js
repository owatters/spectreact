import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class AccordianBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={(this.props.className != null ? this.props.className : "") + " accordion-body"}>
        {this.props.children}
      </div>
    )
  }
}

