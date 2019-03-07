import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Slider extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			<input class="slider" type="range" min="0" max="100" value="10" oninput="this.setAttribute('value', this.value);"/>
		)
	}
}
