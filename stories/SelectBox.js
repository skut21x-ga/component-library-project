import React from "react";
import "./Checkbox.css";

const SelectBox = (props) => {
  let classList = "";
  let types = [
    "textinput",
    "selectinput",
    "numberinput",
    "textinputbutton",
    "checkbox",
  ];
  if (props.large) {
    classList += ` Forms-large`;
  }
  if (types.includes(props.type)) {
    classList += ` Forms-${props.type}`;
  }
  return <div className={classList}>{props.label}</div>;
};

export default SelectBox;
