import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "./components/Select";
import Step from "./FE/src/components/Step";
import StepItem from "./FE/src/components/StepItem";

ReactDOM.render(
  <Step className="hello">
    <StepItem className="hi">
      <a href="#" class="tooltip" data-tooltip="Step 1">
        Step 1
      </a>
    </StepItem>{" "}
    <StepItem className="hi">
      <a href="#" class="tooltip" data-tooltip="Step 2">
        Step 2
      </a>
    </StepItem>{" "}
    <StepItem className="hi">
      <a href="#" class="tooltip" data-tooltip="Step 3">
        Step 3
      </a>
    </StepItem>{" "}
    <StepItem className="hi">
      <a href="#" class="tooltip" data-tooltip="Step 4">
        Step 4
      </a>
    </StepItem>
  </Step>,
  document.getElementById("root")
);
