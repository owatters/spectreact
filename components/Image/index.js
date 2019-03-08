import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (
     

        <img 
      src={(this.props.src != null ? this.props.src : "")}
      alt={(this.props.alt != null ? this.props.alt : "")}
      className={(this.props.className != null ? this.props.className : "") + " img-responsive"} />

       

      
    );
  }
}
