import React, { Component } from 'react';
import "./style.scss";
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className ? this.props.className : "",
        };
    }
    render() {
        return (
            <ul class={this.state.className + " menu"}>
                {this.props.children}
            </ul>
        );
    }
}

export default Menu;