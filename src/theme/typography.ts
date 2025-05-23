import { TypographyVariantsOptions } from "@mui/material";

export const FONTS = {
  DEFAULT: "Arimo, sans-serif",
  BUNGEE: "Bungee, sans-serif",
};

export const typography: TypographyVariantsOptions = {
  fontFamily: FONTS.DEFAULT,
  fontSize: 16,
  allVariants: {
    verticalAlign: "middle",
  },
};
