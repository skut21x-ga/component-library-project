import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.js";
import Icon from "./Icon.js";

storiesOf("Buttons", module)
  //default buttons
  .add("Default", () => <Button label="Default" />)

  .add("Default (Outlined)", () => (
    <Button label="Default (Outlined)" outlined />
  ))
  .add("Default (Faded)", () => <Button label="Default (Faded)" faded />)
  .add("Default (Large)", () => <Button label="Default (Large)" large />)
  .add("Default (Large + Faded)", () => (
    <Button label="Default (Large + Faded)" faded large />
  ))
  .add("Default (Large + Outlined)", () => (
    <Button label="Default (Large + Outlined)" outlined large />
  ))

  //primary buttons
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary (Outlined)", () => (
    <Button label="Primary (Outlined)" type="primary" outlined />
  ))
  .add("Primary (Faded)", () => (
    <Button label="Primary (Faded)" type="primary" faded />
  ))
  .add("Primary (Large)", () => (
    <Button label="Primary (Large)" type="primary" large />
  ))
  .add("Primary (Large + Faded)", () => (
    <Button label="Primary (Large + Faded)" type="primary" faded large />
  ))
  .add("Primary (Large + Outlined)", () => (
    <Button label="Primary (Large + Outlined)" type="primary" outlined large />
  ))

  //danger buttons
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger (Outlined)", () => (
    <Button label="Danger (Outlined)" type="danger" outlined />
  ))
  .add("Danger (Faded)", () => (
    <Button label="Danger (Faded)" type="danger" faded />
  ))
  .add("Danger (Large)", () => (
    <Button label="Danger (Large)" type="danger" large />
  ))
  .add("Danger (Large + Faded)", () => (
    <Button label="Danger (Large + Faded)" type="danger" faded large />
  ))
  .add("Danger (Large + Outlined)", () => (
    <Button label="Danger (Large + Outlined)" type="danger" outlined large />
  ))

  //success buttons
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success (Outlined)", () => (
    <Button label="Success (Outlined)" type="success" outlined />
  ))
  .add("Success (Faded)", () => (
    <Button label="Success (Faded)" type="success" faded />
  ))
  .add("Success (Large)", () => (
    <Button label="Success (Large)" type="success" large />
  ))
  .add("Success (Large + Faded)", () => (
    <Button label="Success (Large + Faded)" type="success" faded large />
  ))
  .add("Success (Large + Outlined)", () => (
    <Button label="Success (Large + Outlined)" type="success" outlined large />
  ))

  //warning buttons
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning (Outlined)", () => (
    <Button label="Warning (Outlined)" type="warning" outlined />
  ))
  .add("Warning (Faded)", () => (
    <Button label="Warning (Faded)" type="warning" faded />
  ))
  .add("Warning (Large)", () => (
    <Button label="Warning (Large)" type="warning" large />
  ))
  .add("Warning (Large + Faded)", () => (
    <Button label="Warning (Large + Faded)" type="warning" faded large />
  ))
  .add("Warning (Large + Outlined)", () => (
    <Button label="Warning (Large + Outlined)" type="warning" outlined large />
  ))

  //icons
  .add("Add to Cart (Text + Icon)", () => (
    <Icon label="Add to Cart" type="icon" type="primary" faded icon="cart" />
  ))

  .add("Add to Favorites (Text + Icon)", () => (
    <Icon
      label="Add to Favorites"
      type="icon"
      type="primary"
      faded
      icon="favorite"
    />
  ))
  .add("Add to Cart (Icon Only)", () => (
    <Icon label="" type="icon" type="primary" faded icon="cart" />
  ))

  .add("Add to Favorites (Icon Only)", () => (
    <Icon label="" type="icon" type="primary" faded icon="favorite" />
  ));
