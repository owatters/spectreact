import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Figure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <figure className="figure">
        <img className={(this.props.className != null ? this.props.className : "") + "img-responsive ..."}
          src={this.props.src} alt={(this.props.alt != null ? this.props.alt : "") + " Image Not Found !!"} />

        <figcaption caption={(this.props.caption != null ? this.props.className : "") + "figure-caption center"}>
          {this.props.captionText}
        </figcaption>
      </figure>
    );
  }
}
