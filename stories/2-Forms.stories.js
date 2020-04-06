import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms.js";

<link
  href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
  rel="stylesheet"
></link>;

storiesOf("Form", module)
  //text input forms
  .add("TextInput", () => (
    <Forms label="Email" placeholder="Email" type="textinput" boxsize="small" />
  ))
  .add("TextInput", () => (
    <Forms
      label="Email"
      placeholder="Email"
      type="textinput"
      boxsize="medium"
    />
  ))
  .add("TextInput", () => (
    <Forms label="Email" placeholder="Email" type="textinput" boxsize="large" />
  ))

  //select input forms
  .add("SelectInput", () => (
    <Forms label="Select" type="selectinput" filled="false" outlined="true" />
  ))

  .add("SelectInput", () => (
    <Forms label="Select" type="selectinput" filled="true" outlined="false" />
  ))

  //number input

  .add("NumberInput", () => (
    <Forms startvalue="0" type="numberinput" min="1" max="1" step="1" />
  ))

  // text input with button
  .add("TextInputButton (Small)", () => (
    <Forms
      label="Voucher Code"
      buttonlabel="Redeem"
      type="textinputbutton"
      size="small"
    />
  ))
  .add("TextInputButton (Large)", () => (
    <Forms
      label="Voucher Code"
      buttonlabel="Redeem"
      type="textinputbutton"
      size="small"
    />
  ))

  //checkboxes
  .add("Black Checkbox", () => (
    <Forms label="Checkbox" type="checkbox" color="black" />
  ))
  .add("Blue Checkbox", () => (
    <Forms label="Checkbox" type="checkbox" color="blue" />
  ))
  .add("Checkbox with Text", () => (
    <Forms label="Checkbox" type="checkbox" color="black" />
  ));
