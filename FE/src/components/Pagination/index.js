import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class Pagination extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			<ul className={(this.props.className!=null?this.props.className:"")+"  pagination"}> 
			{this.props.children}
			</ul>
		)
	}
}
