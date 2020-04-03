import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails.js";

storiesOf("Thumbnails", module)
  .add("Vertical Block + Clear Buttons", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="$599"
      type="vertical"
      icon="clear"
      rating="4"
    />
  ))
  .add("Vertical Block + Solid Buttons", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="$599"
      type="vertical"
      icon="solid"
      rating="4"
    />
  ))
  .add("Horizontal Block", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="$599"
      type="horizontal"
      rating="4"
    />
  ))
  .add("Small Block", () => (
    <Thumbnails
      label="Beats Solo 2 On Ear Headphones - Black"
      cost="$499"
      oldcost="$599"
      type="small"
      rating="4"
    />
  ))

  .add("Inline Block", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="$599"
      type="inline"
      rating="4"
      hot="true"
    />
  ));
