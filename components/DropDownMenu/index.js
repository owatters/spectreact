import React, { Component } from 'react';
import "./style.scss";
import "font-awesome/css/font-awesome.css";
import Menu from '../Menu';
import Button from '../Button';
class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className ? this.props.className : "",
        };
    }
    render() {
        return (
            <div className={this.state.className + " dropDown"}>
  <Button className="dropdown-toggle" tabindex="0">
    <span className="btnText">{this.props.label}</span>
      <i class="icon fa fa-angle-down" ></i>
    </Button>
    <Menu>
    {this.props.children }
    </Menu>
    </div>
        );
    }
}

export default DropDownMenu;