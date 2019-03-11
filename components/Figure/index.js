import React, { Component } from "react";
import "./style.scss";

export default class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className != null ? this.props.className : ""
    }
  }
  render() {
    return (
      <figure className={this.state.className + " figure"}>
        <img className={this.state.className + " img-responsive ..."}
          src={this.props.src} alt={(this.props.alt != null ? this.props.alt : "") + " Image Not Found !!"} />

        <figcaption className={this.state.className + " center"}>
          {this.props.caption}
        </figcaption>
      </figure>
    );
  }
}
