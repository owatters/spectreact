import React, { Component } from 'react';
import "./style.scss";
class MenuItemDivider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className ? this.props.className : "",
        };
    }
    render() {
        return (
            <li className={this.state.className+ " menuItemDivider"} data-content={this.props.label}/>
            // <li className={this.state.className + "divider"}/>
        );
    }
}

export default MenuItemDivider;