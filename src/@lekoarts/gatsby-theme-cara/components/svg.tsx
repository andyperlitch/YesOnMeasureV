/** @jsx jsx */
import { jsx } from "theme-ui";
import { withPrefix } from "gatsby";
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils";

type IconType =
  | "pencil"
  | "compass"
  | "cap"
  | "backpack"
  | "upDown"
  | "books"
  | "hexa"
  | "calculator"
  | "apple";

type SVGProps = {
  stroke?: boolean;
  color?: string | number | any;
  width:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64
    | string;
  icon: IconType;
  left: string;
  top: string;
  hiddenMobile?: boolean;
};

const viewBox = {
  pencil: `0 0 75.02 74.74`,
  compass: `0 0 70.42 77.84`,
  cap: `0 0 81.41 70.87`,
  backpack: `0 0 70.28 79.79`,
  upDown: `0 0 50 54.58`,
  books: `0 0 79.55 69.75`,
  hexa: `0 0 30 30`,
  calculator: `0 0 59.44 79.98`,
  apple: `0 0 201.04 213.23`,
};

const Svg = ({
  stroke = false,
  color = ``,
  width,
  icon,
  left,
  top,
  hiddenMobile = false,
}: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={viewBox[icon]}
  >
    <use href={withPrefix(`/icons.svg#${icon}`)} />
  </svg>
);

export default Svg;
