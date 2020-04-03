import React from "react";
import "./Icon.css";

const Icon = props => {
  let icon = "";
  if (props.icon == "cart") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/cart.png?raw=true";
  }
  if (props.icon == "favorite") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/hearts.png?raw=true";
  }
  return (
    <div className="IconButton">
      <div className="IconOnlyButton">
        <img className="Icon" src={icon}></img>
      </div>
      <div className="TextBox">
        <a className="Text">{props.label}</a>
      </div>
    </div>
  );
};

export default Icon;
