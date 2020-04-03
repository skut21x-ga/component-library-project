import "./Icon.css";
import React, { Component } from "react";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "google.com"
    };
  }
  render() {
    return (
      <div className="IconButton">
        <img className="Icon" src="/hearts.png"></img>
      </div>
    );
  }
}

export default Icon;
