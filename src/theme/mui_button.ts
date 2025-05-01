import { ButtonProps, Color, Components, ComponentsVariants, CSSObject, PaletteOptions, Theme } from "@mui/material";

import { ArrayElement } from "../utils";
import { ActionBase, ActionGlow, ActionGradient, ActionGradientGlow, ActionOutline } from "./action";
import { palette as basePalette } from "./palette";
import { SPACINGS } from "./sizes";

declare module "@mui/material" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
    glow: true;
    "gradient-glow": true;
    text: true;
  }
}

const buttonVariant = (
  baseStyle: CSSObject,
  props: Partial<ButtonProps>
): ArrayElement<ComponentsVariants<Theme>["MuiButton"]> => ({
  props,
  style: {
    ...baseStyle,
    "&:hover": {
      backgroundColor: baseStyle.backgroundColor,
      ...(baseStyle["&:hover"] ?? {}),
    },
    "&:active": {
      boxShadow: "none",
      transform: "translateY(0)",
      ...(baseStyle["&:active"] ?? {}),
    },
  },
});

const buttonTextVariant = (
  palette: PaletteOptions,
  paletteColor: "primary" | "secondary" | "error" | "success" | "info" | "warning"
): ArrayElement<ComponentsVariants<Theme>["MuiButton"]> => ({
  props: { variant: "text", color: paletteColor },
  style: {
    backgroundColor: "transparent",
    color: (palette[paletteColor] as Color)[500],
    padding: 0,
    margin: 0,
    display: "inline",
    transform: "none",
    backdropFilter: "none",
    fontSize: "inherit",
  },
});

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    disableRipple: true,
    color: "primary",
  },
  variants: [
    buttonVariant(ActionGradient("primary", basePalette), { variant: "gradient", color: "primary" }),
    buttonVariant(ActionGradient("secondary", basePalette), { variant: "gradient", color: "secondary" }),
    buttonVariant(ActionGradient("error", basePalette), { variant: "gradient", color: "error" }),
    buttonVariant(ActionGradient("success", basePalette), { variant: "gradient", color: "success" }),
    buttonVariant(ActionGradient("grey", basePalette), { variant: "gradient", color: "info" }),
    buttonVariant(ActionGradient("warning", basePalette), { variant: "gradient", color: "warning" }),

    buttonVariant(ActionGlow("primary", basePalette), { variant: "glow", color: "primary" }),
    buttonVariant(ActionGlow("secondary", basePalette), { variant: "glow", color: "secondary" }),
    buttonVariant(ActionGlow("error", basePalette), { variant: "glow", color: "error" }),
    buttonVariant(ActionGlow("success", basePalette), { variant: "glow", color: "success" }),
    buttonVariant(ActionGlow("grey", basePalette), { variant: "glow", color: "info" }),
    buttonVariant(ActionGlow("warning", basePalette), { variant: "glow", color: "warning" }),

    buttonVariant(ActionGradientGlow("primary", basePalette), { variant: "gradient-glow", color: "primary" }),
    buttonVariant(ActionGradientGlow("secondary", basePalette), {
      variant: "gradient-glow",
      color: "secondary",
    }),
    buttonVariant(ActionGradientGlow("error", basePalette), { variant: "gradient-glow", color: "error" }),
    buttonVariant(ActionGradientGlow("success", basePalette), { variant: "gradient-glow", color: "success" }),
    buttonVariant(ActionGradientGlow("grey", basePalette), { variant: "gradient-glow", color: "info" }),
    buttonVariant(ActionGradientGlow("warning", basePalette), { variant: "gradient-glow", color: "warning" }),

    buttonTextVariant(basePalette, "primary"),
    buttonTextVariant(basePalette, "secondary"),
    buttonTextVariant(basePalette, "error"),
    buttonTextVariant(basePalette, "success"),
    buttonTextVariant(basePalette, "info"),
    buttonTextVariant(basePalette, "warning"),
  ],
  styleOverrides: {
    root: {
      textTransform: "none",
      fontWeight: 500,
      padding: SPACINGS.MEDIUM,
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: SPACINGS.SMALL,
      userSelect: "none",
      cursor: "pointer",
      variants: [
        buttonVariant(ActionBase("primary", basePalette), { variant: "contained", color: "primary" }),
        buttonVariant(ActionBase("secondary", basePalette), { variant: "contained", color: "secondary" }),
        buttonVariant(ActionBase("error", basePalette), { variant: "contained", color: "error" }),
        buttonVariant(ActionBase("success", basePalette), { variant: "contained", color: "success" }),
        buttonVariant(ActionBase("grey", basePalette), { variant: "contained", color: "info" }),
        buttonVariant(ActionBase("warning", basePalette), { variant: "contained", color: "warning" }),

        buttonVariant(ActionOutline("primary", basePalette), { variant: "outlined", color: "primary" }),
        buttonVariant(ActionOutline("secondary", basePalette), { variant: "outlined", color: "secondary" }),
        buttonVariant(ActionOutline("error", basePalette), { variant: "outlined", color: "error" }),
        buttonVariant(ActionOutline("success", basePalette), { variant: "outlined", color: "success" }),
        buttonVariant(ActionOutline("grey", basePalette), { variant: "outlined", color: "info" }),
        buttonVariant(ActionOutline("warning", basePalette), { variant: "outlined", color: "warning" }),
      ],
    },
  },
};
