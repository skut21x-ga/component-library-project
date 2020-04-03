import "./Icon.css";
import React, { Component } from "react";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon:
        "https://github.com/skut21x-ga/component-library-project/blob/master/stories/cart.png?raw=true",
      //    "https://github.com/skut21x-ga/component-library-project/blob/master/stories/hearts.png?raw=true",
      classList: "",
      props: ""
    };
  }
  render() {
    return (
      <div className="IconButton">
        <div className={this.state.classList}>
          <img className="Icon" src={this.state.icon}></img>
          {this.state.props.label}
        </div>
      </div>
    );
  }
}

export default Icon;
