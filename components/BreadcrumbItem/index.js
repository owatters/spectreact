import React, { Component } from "react";
import "./style.scss";

export default class BreadcrumbItem extends Component {

    render() {
        return (
            <li className={(this.props.className != null ? this.props.className : "") + " breadcrumb-item"}>
                <a href="#">{this.props.children}</a>
            </li>
        );
    }
}


