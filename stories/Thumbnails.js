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
  let cost = "";
  let prices = "";
  let text = "";
  let line = "";
  let thumbnail = "";
  let classList = "";
  let oldcost = "";
  let ratingbox = "";
  let productImage = "";

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

  if (types.includes(props.type)) {
    classList += ` container-${props.type}`;
    line += ` Line-${props.type}`;
    prices += ` Prices-${props.type}`;
    text += ` Text-${props.type}`;
    cost += ` Cost-${props.type}`;
    oldcost += ` Oldcost-${props.type}`;
    ratingbox += ` RatingBox-${props.type}`;
    thumbnail += ` Thumbnail-${props.type}`;
    productImage += ` Product-${props.type}`;
  }

  return (
    <div className="Container">
      <div className={classList}>
        <div className={thumbnail}>
          <div className="Icons">
            <img className="Icon1" src={heart}></img>
            <img className="Icon2" src={cart}></img>
          </div>
          <img className={productImage} src={product}></img>
        </div>
        <div className={line}></div>
        <div className="TextBox">
          <a className={text}>{props.label}</a>
        </div>
        <div className={ratingbox}>
          <img className="Rating" src={rating}></img>
        </div>
        <div className={prices}>
          <div className={cost}>{props.cost}</div>
          <div className={oldcost}>{props.oldcost}</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
