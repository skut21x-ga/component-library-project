import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms.js";

storiesOf("Form", module)
  .add("TextInput", () => <Forms label="Text Input" type="textinput" />)
  .add("SelectInput", () => <Forms label="Select Input" type="selectinput" />)
  .add("NumberInput", () => <Forms label="Number Input" type="numberinput" />)
  .add("TextInputButton", () => (
    <Forms label="Text Input and Button" type="textinputbutton" />
  ))
  .add("Checkbox", () => <Forms label="Checkbox" type="checkbox" />);
