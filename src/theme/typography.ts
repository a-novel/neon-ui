import { TypographyVariantsOptions } from "@mui/material";

import { FONT_SIZE, scaleGolden } from "./sizes";

export const FONTS = {
  DEFAULT: "Arimo, sans-serif",
  BUNGEE: "Bungee, sans-serif",
};

export const typography: TypographyVariantsOptions = {
  fontFamily: FONTS.DEFAULT,
  fontSize: FONT_SIZE,
  allVariants: {
    verticalAlign: "middle",
    lineHeight: "1.25em",
    maxWidth: "120ch",
  },
  h1: {
    fontSize: scaleGolden(FONT_SIZE, 3),
  },
  h2: {
    fontSize: scaleGolden(FONT_SIZE, 2.5),
  },
  h3: {
    fontSize: scaleGolden(FONT_SIZE, 2),
  },
  h4: {
    fontSize: scaleGolden(FONT_SIZE, 1.5),
  },
  h5: {
    fontSize: scaleGolden(FONT_SIZE, 1),
  },
  h6: {
    fontSize: scaleGolden(FONT_SIZE, 0.5),
  },
  subtitle1: {
    fontSize: scaleGolden(FONT_SIZE, 0.5),
  },
  subtitle2: {
    fontSize: scaleGolden(FONT_SIZE, 0.25),
  },
  body1: {
    fontSize: FONT_SIZE,
  },
  body2: {
    fontSize: scaleGolden(FONT_SIZE, -0.25),
  },
  button: {
    fontSize: scaleGolden(FONT_SIZE, 0.25),
  },
  caption: {
    fontSize: scaleGolden(FONT_SIZE, -0.25),
  },
  overline: {
    fontSize: scaleGolden(FONT_SIZE, -0.5),
  },
};
