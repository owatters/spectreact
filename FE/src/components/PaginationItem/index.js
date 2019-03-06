import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class PaginationItem extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			<li className={(this.props.className!=null?this.props.className:"")+"  page-item"}> 
			{this.props.children}
			</li>
		)
	}
}
