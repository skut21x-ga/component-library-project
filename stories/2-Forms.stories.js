import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms.js";
import Checkbox from "./Checkbox.js";
import InputButton from "./InputButton.js";
import SelectBox from "./SelectBox.js";
import Counter from "./Counter.js";

<link
  href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
  rel="stylesheet"
></link>;

storiesOf("Form", module)
  //text input forms
  .add("Text Input (Small)", () => (
    <Forms label="Email" placeholder="" type="textinput" boxsize="small" />
  ))
  .add("Text Input (Medium)", () => (
    <Forms label="Email" placeholder="" type="textinput" boxsize="medium" />
  ))
  .add("Text Input (Large)", () => (
    <Forms label="Email" placeholder="" type="textinput" boxsize="large" />
  ))

  //select input forms
  .add("Select (Small Outlined)", () => (
    <SelectBox label="Select" type="selectinput" boxsize="small" />
  ))
  .add("Select (Medium Outlined)", () => (
    <SelectBox label="Select" type="selectinput" boxsize="medium" />
  ))
  .add("Select (Large Outlined)", () => (
    <SelectBox label="Select" type="selectinput" boxsize="large" />
  ))

  .add("Select (Small Filled)", () => (
    <SelectBox
      label="Select"
      type="selectinput"
      boxsize="small"
      filled="true"
    />
  ))

  .add("Select (Medium Filled)", () => (
    <SelectBox
      label="Select"
      type="selectinput"
      boxsize="medium"
      filled="true"
    />
  ))
  .add("Select (Large Filled)", () => (
    <SelectBox
      label="Select"
      type="selectinput"
      boxsize="large"
      filled="true"
    />
  ))

  //number counter

  .add("Number Counter", () => (
    <Counter startvalue="0" type="numberinput" min="1" max="1" step="1" />
  ))

  // text input with button
  .add("Input Button (Small)", () => (
    <InputButton
      label="Voucher Code"
      buttonlabel="Redeem"
      type="textinputbutton"
      size="small"
    />
  ))
  .add("Input Button (Large)", () => (
    <InputButton
      label="Voucher Code"
      buttonlabel="Redeem"
      type="textinputbutton"
      size="large"
    />
  ))

  //checkboxes
  .add("Black Checkbox", () => <Checkbox color="black" value="0" text="" />)
  .add("Blue Checkbox", () => <Checkbox color="blue" value="1" text="" />)
  .add("Checkbox with Text", () => (
    <Checkbox color="black" value="0" text="Don't show this popup again" />
  ));
