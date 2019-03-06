import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class NavbarSection extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			
				<section className={(this.props.className!=null?this.props.className:"")+" navbar-section"}>
						{this.props.children}
				</section>
		)
	}
}
