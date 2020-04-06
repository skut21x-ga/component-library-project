import React from "react";
import "./InputButton.css";

const InputButton = (props) => {
  let boxsize = ["small", "medium"];
  let classList1 = "";
  let button1 = "";
  if (boxsize.includes(props.boxsize)) {
    classList1 += ` form1-${props.boxsize}`;
    button1 += `button1-${props.boxsize}`;
  }

  return (
    <form className="form">
      <div className={classList1}>
        <label className="text">
          <br></br>
          <input type="text" name="name" value={props.label} />
        </label>
      </div>
      <div className={button1}>{props.buttonlabel}</div>
    </form>
  );
};

export default InputButton;

// Didn't implement this:
//  An action prop should accept a callback that is invoked when submit is clicked.
// The value of the input text should be passed into this callback when it’s invoked.
