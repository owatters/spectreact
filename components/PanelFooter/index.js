import React, { Component } from "react";
import "./style.scss";

export default class PanelFooter extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <div className={this.state.className + " PanelFooter"}>
        {this.props.children}
      </div>
    )
  }
}

