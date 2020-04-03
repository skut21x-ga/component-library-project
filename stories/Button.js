import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outlined) {
    classList += ` button-${props.type}-outlined`;
  }
  if (props.faded) {
    classList += ` button-${props.type}-faded`;
  }
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
