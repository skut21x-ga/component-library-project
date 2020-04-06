import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  let imageurl = `https://github.com/skut21x-ga/component-library-project/blob/master/stories/${props.color}unchecked.png?raw=true`;
  let text = "";
  let p = parseInt(props.value);

  if (props.text == "") {
    text = "notext";
  }
  if (props.text !== "") {
    text = "textclass";
  }

  if (p === 1) {
    imageurl = ` https://github.com/skut21x-ga/component-library-project/blob/master/stories/${props.color}checked.png?raw=true`;
  }

  const ClickedBox = (e) => {
    e.preventDefault();
    if (p === 0) {
      imageurl = `https://github.com/skut21x-ga/component-library-project/blob/master/stories/${props.color}checked.png?raw=true`;
      document.querySelector("img").setAttribute("src", imageurl);
      p++;
    } else if (p === 1) {
      imageurl = `https://github.com/skut21x-ga/component-library-project/blob/master/stories/${props.color}unchecked.png?raw=true`;
      document.querySelector("img").setAttribute("src", imageurl);
      p--;
    }
  };
  return (
    <div className="checkbox" onClick={ClickedBox}>
      <img src={imageurl}></img>
      <a className={text}>{props.text}</a>
    </div>
  );
};
export default Checkbox;

//color, value (0 = unchecked), text = don't show ,etc
