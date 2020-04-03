import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails.js";

storiesOf("Thumbnails", module)
  .add("Block", () => <Thumbnails label="Block" type="block" />)
  .add("Inline", () => <Thumbnails label="inline" type="inline" />);
