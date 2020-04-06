import React from "react";
import "./Icon.css";

const Icon = (props) => {
  let icon = "";
  let classList = "";
  if (props.icon == "cart") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallcart.png?raw=true";
  }
  if (props.icon == "favorite") {
    icon =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/smallheart.png?raw=true";
  }
  if (props.label == "") {
    classList += ` container-${props.label}`;
  }
  return (
    <div className="IconButton">
      <div className="IconOnlyButton">
        <img className="Icon" src={icon}></img>
      </div>
      <div className={props.label}>
        <a className="IconText">{props.label}</a>
      </div>
    </div>
  );
};

export default Icon;
