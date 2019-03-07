import React, { Component } from "react";
import ReactDOM from "react-dom";
import BreadcrumbItem from "../BreadcrumbItem";

import "./style.scss";

export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ul className={(this.props.className != null ? this.props.className : "") + " breadcrumb"} >
                {this.props.options.map((option) => <BreadcrumbItem key={option} className=" breadcrumb-item">
                    {option}
                </BreadcrumbItem>)}
            </ul>
        );
    }
}


