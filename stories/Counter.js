import React from "react";
import "./Counter.css";

const Counter = (props) => {
  let value = props.startvalue;
  return (
    <div className="counter">
      <div className="subtractdiv">
        <a className="subtract">-</a>
      </div>
      <div className="valuediv">
        <a className="value">{value}</a>
      </div>
      <div className="adddiv">
        <a className="add">+</a>
      </div>
    </div>
  );
};
export default Counter;

// this counter is NOT functional besides passing through the value
