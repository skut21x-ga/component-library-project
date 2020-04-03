import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.js";

storiesOf("Buttons", module)
  //default buttons
  .add("Default", () => <Button label="Default" />)

  .add("Default (Outlined)", () => (
    <Button label="Default (Outlined)" outlined />
  ))
  .add("Default (Opaque)", () => <Button label="Default (Opaque)" opaque />)
  .add("Default (Large)", () => <Button label="Default (Large)" large />)
  .add("Default (Large + Opaque)", () => (
    <Button label="Default (Large + Opaque)" opaque large />
  ))
  .add("Default (Large + Outlined)", () => (
    <Button label="Default (Large + Outlined)" outlined large />
  ))

  //primary buttons
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary (Outlined)", () => (
    <Button label="Primary (Outlined)" type="primary" outlined />
  ))
  .add("Primary (Opaque)", () => (
    <Button label="Primary (Opaque)" type="primary" opaque />
  ))
  .add("Primary (Large)", () => (
    <Button label="Primary (Large)" type="primary" large />
  ))
  .add("Primary (Large + Opaque)", () => (
    <Button label="Primary (Large + Opaque)" type="primary" opaque large />
  ))
  .add("Primary (Large + Outlined)", () => (
    <Button label="Primary (Large + Outlined)" type="primary" outlined large />
  ))

  //danger buttons
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger (Outlined)", () => (
    <Button label="Danger (Outlined)" type="danger" outlined />
  ))
  .add("Danger (Opaque)", () => (
    <Button label="Danger (Opaque)" type="danger" opaque />
  ))
  .add("Danger (Large)", () => (
    <Button label="Danger (Large)" type="danger" large />
  ))
  .add("Danger (Large + Opaque)", () => (
    <Button label="Danger (Large + Opaque)" type="danger" opaque large />
  ))
  .add("Danger (Large + Outlined)", () => (
    <Button label="Danger (Large + Outlined)" type="danger" outlined large />
  ))

  //success buttons
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success (Outlined)", () => (
    <Button label="Success (Outlined)" type="success" outlined />
  ))
  .add("Success (Opaque)", () => (
    <Button label="Success (Opaque)" type="success" opaque />
  ))
  .add("Success (Large)", () => (
    <Button label="Success (Large)" type="success" large />
  ))
  .add("Success (Large + Opaque)", () => (
    <Button label="Success (Large + Opaque)" type="success" opaque large />
  ))
  .add("Success (Large + Outlined)", () => (
    <Button label="Success (Large + Outlined)" type="success" outlined large />
  ))

  //warning buttons
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning (Outlined)", () => (
    <Button label="Warning (Outlined)" type="warning" outlined />
  ))
  .add("Warning (Opaque)", () => (
    <Button label="Warning (Opaque)" type="warning" opaque />
  ))
  .add("Warning (Large)", () => (
    <Button label="Warning (Large)" type="warning" large />
  ))
  .add("Warning (Large + Opaque)", () => (
    <Button label="Warning (Large + Opaque)" type="warning" opaque large />
  ))
  .add("Warning (Large + Outlined)", () => (
    <Button label="Warning (Large + Outlined)" type="warning" outlined large />
  ));
