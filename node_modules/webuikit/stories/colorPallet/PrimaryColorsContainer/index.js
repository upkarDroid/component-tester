import React from "react";
import ColorPalette from "../Common";

import { grey, black, white, red, green, blue, yellow, purple } from "ZColors";

const allColors = [
  {
    name: "Black",
    color: black,
    variant: "000",
    offsets: {}
  },
  {
    name: "White",
    color: white,
    variant: "000",
    offsets: {}
  },
  {
    name: "Grey",
    color: grey.z500,
    variant: "z500",
    offsets: grey
  },
  {
    name: "Red",
    color: red.z500,
    variant: "z500",
    offsets: red
  },
  {
    name: "Green",
    color: green.z500,
    variant: "z500",
    offsets: green
  },
  {
    name: "Blue",
    color: blue.z500,
    variant: "z500",
    offsets: blue
  },
  {
    name: "Yellow",
    color: yellow.z500,
    variant: "z500",
    offsets: yellow
  },
  {
    name: "Purple",
    color: purple.z500,
    variant: "z500",
    offsets: purple
  }
];

const PrimaryColorsContainer = () => (
  <ColorPalette colors={allColors} heading="Primary Colors" />
);

export default PrimaryColorsContainer;
