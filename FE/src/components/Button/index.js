import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Button extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			<button className={(this.props.className!=null?this.props.className:"")+" button"}> {this.props.children}
			</button>
		)
	}
}
