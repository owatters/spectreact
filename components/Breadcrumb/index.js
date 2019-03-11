import React, { Component } from "react";
import BreadcrumbItem from "../BreadcrumbItem";

import "./style.scss";

export default class Breadcrumb extends Component {

    render() {
        return (
            <ul className={(this.props.className != null ? this.props.className : "") + " breadCrumb"} >
                {this.props.options.map((option) => <BreadcrumbItem key={option}>
                    {option}
                </BreadcrumbItem>)}
            </ul>
        );
    }
}


