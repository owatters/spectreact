import React, { Component } from "react";
import "./style.scss";

export default class Divider extends Component {
  render() {
    return (
      <div
        className={(this.props.className != null ? this.props.className : "") + " " + (this.props.orientation != null ? this.props.orientation : "divider")}
        data-content={(this.props.data != null ? this.props.data : "") + " " + (this.props.divider != null ? this.props.divider : "")}>
      </div>
    );
  }
}
