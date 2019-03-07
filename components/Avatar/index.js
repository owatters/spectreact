import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
      <div>
        <figure className={this.state.className + "avatar avatar-xl"}>
          <img src="img/avatar-1.png" alt="..." />
          <img src="img/avatar-5.png" className="avatar-icon" alt="..." />
        </figure>

        <figure className="avatar avatar-xl">
          <img src="img/avatar-1.png" alt="..." />
          <i className="away "></i>
        </figure>
        {this.props.children}



      </div>
    );
  }
}
