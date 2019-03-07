import React, { Component } from 'react';
import "./style.scss";
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className ? this.props.className : "",
        };
    }
    render() {
        return (
            <li class={this.state.className + " menuItem"}>
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;