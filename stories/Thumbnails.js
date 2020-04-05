import React from "react";
import "./Thumbnails.css";
<link
  href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
  rel="stylesheet"
></link>;

const Thumbnails = (props) => {
  let heart = "";
  let cart = "";
  let product = "";
  let rating = "";
  let classList = "";
  let types = ["vertical", "horizontal", "small", "inline"];

  if (props.icon == "clear") {
    heart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/heart.png?raw=true";
    cart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/cart.png?raw=true";
  }
  if (props.icon == "solid") {
    heart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/solidheart.png?raw=true";
    cart =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/solidcart.png?raw=true";
  }
  if (props.label == "Apple Macbook Pro") {
    product =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/laptop.png?raw=true";
  }
  if (props.label == "Beats Solo 2 On Ear Headphones - Black") {
    product =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/beats.png?raw=true";
  }
  if (props.rating == "4") {
    rating =
      "https://github.com/skut21x-ga/component-library-project/blob/master/stories/rate.png?raw=true";
  }

  //need to make separate container or conditional statements for solid icons on second div.

  if (types.includes(props.type)) {
    classList += ` container-${props.type}`;
  }
  console.dir(props.type);
  return (
    <div className="Container">
      <div className={classList}>
        <div className="Thumbnail">
          <div className="Icons">
            <img className="Icon1" src={heart}></img>
            <img className="Icon2" src={cart}></img>
          </div>
          <img className="Product" src={product}></img>
        </div>
        <div className="Line"></div>
        <div className="TextBox">
          <a className="Text">{props.label}</a>
        </div>
        <div className="RatingBox">
          <img className="Rating" src={rating}></img>
        </div>
        <div className="Prices">
          <div className="Cost">{props.cost}</div>
          <div className="Oldcost">{props.oldcost}</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
