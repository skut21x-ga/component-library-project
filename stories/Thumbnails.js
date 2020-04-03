import React from "react";
import "./Thumbnails.css";

const Thumbnails = props => {
  let classList = "";
  let types = ["block", "inline"];
  if (props.large) {
    classList += ` Thumbnails-large`;
  }
  if (types.includes(props.type)) {
    classList += ` Thumbnails-${props.type}`;
  }
  return <div className={classList}>{props.label}</div>;
};

export default Thumbnails;
