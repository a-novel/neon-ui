import { TypographyVariantsOptions } from "@mui/material";

import { FONT_SIZE, scaleGolden } from "./sizes";

export const typography: TypographyVariantsOptions = {
  fontFamily: "Arimo, sans-serif",
  fontSize: FONT_SIZE,
  allVariants: {
    verticalAlign: "middle",
    lineHeight: "1.5em",
    maxWidth: "120ch",
  },
  h1: {
    fontSize: scaleGolden(FONT_SIZE, 8),
  },
  h2: {
    fontSize: scaleGolden(FONT_SIZE, 7),
  },
  h3: {
    fontSize: scaleGolden(FONT_SIZE, 6),
  },
  h4: {
    fontSize: scaleGolden(FONT_SIZE, 5),
  },
  h5: {
    fontSize: scaleGolden(FONT_SIZE, 4),
  },
  h6: {
    fontSize: scaleGolden(FONT_SIZE, 3),
  },
  subtitle1: {
    fontSize: scaleGolden(FONT_SIZE, 2),
  },
  subtitle2: {
    fontSize: scaleGolden(FONT_SIZE, 1),
  },
  body1: {
    fontSize: FONT_SIZE,
  },
  body2: {
    fontSize: scaleGolden(FONT_SIZE, -0.25),
  },
  button: {
    fontSize: scaleGolden(FONT_SIZE, 0.5),
  },
  caption: {
    fontSize: scaleGolden(FONT_SIZE, -0.25),
  },
  overline: {
    fontSize: scaleGolden(FONT_SIZE, -0.5),
  },
};
