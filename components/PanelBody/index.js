import React, { Component } from "react";
import "./style.scss";

export default class PanelBody extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <div className={this.state.className + " PanelBody"}>
        {this.props.children}
      </div>
    )
  }
}

