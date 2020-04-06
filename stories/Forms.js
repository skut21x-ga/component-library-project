import React from "react";
import "./Forms.css";

const Forms = (props) => {
  let boxsize = ["small", "medium", "large"];
  let classList = "";
  let value = "";

  if (boxsize.includes(props.boxsize)) {
    classList += ` form-${props.boxsize}`;
  }
  if (props.placeholder == "") {
    value = props.label;
  } else if (props.placeholder !== "") {
    value = props.placeholder;
  }

  return (
    <form className={classList}>
      <label className="text">
        {props.label}
        <br></br>
        <input type="text" name="name" value={value} />
      </label>
    </form>
  );
};

export default Forms;

/*
.add("TextInput (Small)", () => (
  <Forms label="Email" placeholder="Email" type="textinput" boxsize="small" />
)) */
