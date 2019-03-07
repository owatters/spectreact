import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavItem from "../NavItems";

import "./style.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className ? this.props.className : "",
    };
  }
  render() {
    return (

      <ul className={(this.props.className != null ? this.props.className : "") + " nav"} >
        {this.props.options.map((option) => <NavItem key={option} className=" nav-item">
          {option}
        </NavItem>)}
      </ul>
      // <div>

      //   <ul class="nav">
      //     <li class="nav-item">
      //       <a href="#">Elements</a>
      //     </li>
      //     <li class="nav-item active">
      //       <a href="#">Layout</a>
      //       <ul class="nav">
      //         <li class="nav-item">
      //           <a href="#">Flexbox grid</a>
      //         </li>
      //         <li class="nav-item">
      //           <a href="#">Responsive</a>
      //         </li>
      //         <li class="nav-item">
      //           <a href="#">Navbar</a>
      //         </li>
      //         <li class="nav-item">
      //           <a href="#">Empty states</a>
      //         </li>
      //       </ul>
      //     </li>
      //     <li class="nav-item">
      //       <a href="#">Components</a>
      //     </li>
      //     <li class="nav-item">
      //       <a href="#">Utilities</a>
      //     </li>
      //   </ul>

      // </div>
    );
  }
}
