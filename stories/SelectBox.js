import React from "react";
import "./SelectBox.css";

const Forms = (props) => {
  let boxsizes = ["small", "medium", "large"];
  let classList = "";
  let boxsize = props.boxsize;
  let filled = "";

  if (boxsizes.includes(props.boxsize)) {
    classList += ` select-${boxsize}`;
  }

  if (props.filled) {
    classList += ` select-${boxsize}-filled`;
  }
  return (
    <form>
      <label className="selectformbox">
        <div className={filled}>
          <select className={classList} name={classList} form="form">
            <option className="option1" value="1">
              {props.label}
            </option>
          </select>
        </div>
      </label>
    </form>
  );
};

export default Forms;
