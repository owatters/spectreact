import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

export default class BreadcrumbItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <li className={(this.props.className != null ? this.props.className : "") + " breadcrumb-item"}>
                <a href="#">{this.props.children}</a>
            </li>
        );
    }
}


