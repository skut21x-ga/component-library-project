import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "royalblue",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "midnightblue",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 10,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "black",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "white",
  inputBorderRadius: 4,

  brandTitle: "Scott Kutler's Storybook",
  brandUrl: "http://github.com/skut21x-ga/"
});
