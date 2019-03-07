import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class EmptyStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <div className="empty">
        <div className="empty-icon">
          <i className="icon icon-people"></i>
        </div>
        <p className="empty-title h5">You have no new messages</p>
        <p className="empty-subtitle">Click the button to start a conversation.</p>
        <div className="empty-action">
          <button className="btn btn-primary">Send a message</button>
        </div>
      </div>
    );
  }
}
