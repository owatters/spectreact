import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import ModalOverlay from "./components/modalOverlay";
import ModalContainer from "./components/modalContainer";
import ModalHeader from "./components/modalHeader";
import ModalBody from "./components/modalBody";
import ModalFooter from "./components/modalFooter";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import MenuItemDivider from "./components/MenuItemDivider";
import FormCheckBox from "./components/FormCheckBox";
import MenuBadge from "./components/MenuBadge";
import DropDownMenu from "./components/DropDownMenu";
import Tooltip from "./components/Tooltip";
import Tile from "./components/Tile";
import TileContent from "./components/TileContent";
import TileTitle from "./components/TileTitle";
import TileSubtitle from "./components/TileSubtitle";
import Panel from "./components/Panel";
import PanelHeader from "./components/PanelHeader";
import PanelNav from "./components/PanelNav";
import PanelBody from "./components/PanelBody";
import PanelFooter from "./components/PanelFooter";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import Popover from "./components/Popover";
import PopoverContainer from "./components/PopoverContainer";
import Accordian from "./components/Accordian";
import AccordianBody from "./components/AccordianBody";
import Divider from "./components/Divider";
import Lables from "./components/Lables";
import Figures from "./components/Figure";
import Breadcrumb from "./components/Breadcrumb";
import Nav from "./components/Nav";
import EmptyState from "./components/EmptyStates";
import EmptyTitle from "./components/EmptyTitle";
import EmptyIcon from "./components/EmptyIcon";
import EmptySubtitle from "./components/EmptySubtitle";
import EmptyAction from "./components/EmptyAction";

ReactDOM.render(
  <div>
    {/* <Nav options={["hello", "higit "]}></Nav> */}
    <EmptyState> <EmptyIcon>

      <i className="icon fa fa-eye"></i>
    </EmptyIcon>
      <EmptyTitle>You have no new messages</EmptyTitle>
      <EmptySubtitle>Click the button to start a conversation.</EmptySubtitle>
      < EmptyAction >
        <Button>Send a message</Button>
      </EmptyAction>

    </EmptyState>
  </div>

    , document.getElementById("root"))
