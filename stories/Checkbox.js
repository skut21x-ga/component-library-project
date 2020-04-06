import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  let classList = "";
  let checkstatus = "";
  let imageurl = `{props.color}{checkstatus}.png`;
  let text = "";

  if (props.text == "") {
    text = "notext";
  }

  if (props.value == 0) {
    checkstatus = "unchecked";
  }
  if (props.value == 1) {
    checkstatus = "checked";
  }

  return (
    <div className={classList}>
      <img src={imageurl}></img>
      <a className={text}>{props.text}</a>
    </div>
  );
};
export default Checkbox;

//label, type, color, value (0 = unchecked), text = don't show ,etc
