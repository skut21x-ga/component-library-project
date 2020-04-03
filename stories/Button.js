import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!

const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outlined) {
    classList += ` button-${props.type}-outlined`;
  }
  if (props.opaque) {
    classList += ` button-${props.type}-opaque`;
  }
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
