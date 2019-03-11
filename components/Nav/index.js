import React, { Component } from "react";
import NavItem from "../NavItems";

import "./style.scss";

export default class Nav extends Component {

    render() {
        return (

            <ul className={(this.props.className != null ? this.props.className : "") + " nav"} >
                {this.props.options.map((option) => <NavItem key={option} >
                    {option}
                </NavItem>)}
            </ul>

        );
    }
}
