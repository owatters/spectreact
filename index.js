import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import ModalOverlay from "./components/modalOverlay";
import ModalContainer from "./components/modalContainer";
import ModalHeader from "./components/modalHeader";
import ModalBody from "./components/modalBody";
import ModalFooter from "./components/modalFooter";
import Badges from "./components/Badges";

ReactDOM.render(
  //   <div>hello</div>,
  // <Modal className="primary">
  //     <ModalOverlay />
  //     <ModalContainer>
  //         <ModalHeader>Demo title</ModalHeader>
  //         <ModalBody> content</ModalBody>
  //         <ModalFooter>Footer</ModalFooter>
  //     </ModalContainer>
  // </Modal>
  <Badges className="btn">Button</Badges>,
  document.getElementById("root")
);
