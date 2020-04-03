import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails.js";

storiesOf("Thumbnails", module)
  .add("Vertical Block + Clear Buttons", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="599"
      type="verticalblock"
    />
  ))
  .add("Vertical Block + Solid Buttons", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="599"
      type="verticalblock"
    />
  ))
  .add("Horizontal Block", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="599"
      type="horizontalblock"
    />
  ))
  .add("Small Block", () => (
    <Thumbnails label="Beats" cost="$499" oldcost="599" type="small" />
  ))

  .add("Inline Block", () => (
    <Thumbnails
      label="Apple Macbook Pro"
      cost="$499"
      oldcost="599"
      type="horizontalblock"
    />
  ));
