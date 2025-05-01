import { PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
  primary: {
    main: "#1fadff",
    500: "#1fadff",
    400: "#0087d6",
    300: "#0079bf",
    200: "#005a8f",
    100: "#003d61",
    50: "#002e47",
    A700: "#1fffe3",
    A400: "#00d6bb",
    A200: "#008f7d",
    A100: "#00473e",
  },
  secondary: {
    main: "#ffab33",
    500: "#ffab33",
    400: "#e58600",
    300: "#cd7800",
    200: "#995900",
    100: "#683d00",
    50: "#4c2c00",
    A700: "#ffd433",
    A400: "#e5b500",
    A200: "#997800",
    A100: "#4c3c00",
  },
  error: {
    main: "#f52d76",
    500: "#f52d76",
    400: "#cf0952",
    300: "#b90849",
    200: "#8a0636",
    100: "#5e0425",
    50: "#45031b",
    A700: "#ff33bf",
    A400: "#e5009d",
    A200: "#990069",
    A100: "#4c0034",
  },
  warning: {
    main: "#ffab33",
    500: "#ffab33",
    400: "#e58600",
    300: "#cd7800",
    200: "#995900",
    100: "#683d00",
    50: "#4c2c00",
    A700: "#ffd433",
    A400: "#e5b500",
    A200: "#997800",
    A100: "#4c3c00",
  },
  info: {
    main: "#1fadff",
    500: "#1fadff",
    400: "#0087d6",
    300: "#0079bf",
    200: "#005a8f",
    100: "#003d61",
    50: "#002e47",
    A700: "#1fffe3",
    A400: "#00d6bb",
    A200: "#008f7d",
    A100: "#00473e",
  },
  success: {
    main: "#2FF53D",
    500: "#2FF53D",
    400: "#0ad018",
    300: "#08ba15",
    200: "#068b10",
    100: "#045e0a",
    50: "#034508",
    A700: "#C4F52F",
    A400: "#9fd00a",
    A200: "#6a8b06",
    A100: "#354503",
  },
  mode: "dark",
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  grey: {
    500: "#d3d9dc",
    400: "#9ea8ae",
    300: "#8c9aa4",
    200: "#566976",
    100: "#404e58",
    50: "#1d2328",
    A700: "#bfbfbf",
    A400: "#7f7f7f",
    A200: "#4f4f4f",
    A100: "#2f2f2f",
  },
  text: {
    primary: "#ffffff",
    secondary: "#bfbfbf",
    disabled: "#7f7f7f",
  },
  background: {
    default: "#000000",
    paper: "#1d2328",
  },
};

// For making transparent palette variations, check:
// https://stackoverflow.com/questions/71281969/how-to-make-the-default-color-theme-in-mui-transparent
export const PALETTE_TRANSPARENCY = {
  // 75% opacity.
  75: "BF",
  // 66% opacity.
  66: "A8",
  // 50% opacity.
  50: "80",
  // 33% opacity.
  33: "54",
  // 25% opacity.
  25: "40",
};

/**
 * Make MUI colors transparent.
 */
export const withTransparency = (color: string, transparency: keyof typeof PALETTE_TRANSPARENCY) =>
  `${color}${PALETTE_TRANSPARENCY[transparency]}`;
