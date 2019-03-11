import React, { Component } from "react";
import "./style.scss";

export default class PanelHeader extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <div className={this.state.className + " PanelHeader"}>
        {this.props.children}
      </div>
    )
  }
}

