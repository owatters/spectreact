import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";
import NavbarSection from "../NavbarSection";

export default class Navbar extends Component {
	constructor(props){
		super(props);
	}
		
	render() {
		return (
			<header className={(this.props.className!=null?this.props.className:"")+" navbar"}>
				<NavbarSection>
						<a href="..." className="navbar-brand mr-2">Spectre.css</a>
						<a href="..." className="btn btn-link">Docs</a>
						<a href="..." className="btn btn-link">GitHub</a>
				</NavbarSection>
				<NavbarSection>
					<div className="input-group input-inline">
						<input className="form-input" type="text" placeholder="search"/>
						<button className="btn btn-primary input-group-btn">Search</button>
					</div>
				</NavbarSection>
			</header>
		)
	}
}
