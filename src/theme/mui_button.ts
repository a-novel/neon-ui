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

const buttonVariantVariant = (
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
    buttonVariantVariant(ActionGradient("primary", basePalette), { variant: "gradient", color: "primary" }),
    buttonVariantVariant(ActionGradient("secondary", basePalette), { variant: "gradient", color: "secondary" }),
    buttonVariantVariant(ActionGradient("error", basePalette), { variant: "gradient", color: "error" }),
    buttonVariantVariant(ActionGradient("success", basePalette), { variant: "gradient", color: "success" }),
    buttonVariantVariant(ActionGradient("info", basePalette), { variant: "gradient", color: "info" }),
    buttonVariantVariant(ActionGradient("warning", basePalette), { variant: "gradient", color: "warning" }),

    buttonVariantVariant(ActionGlow("primary", basePalette), { variant: "glow", color: "primary" }),
    buttonVariantVariant(ActionGlow("secondary", basePalette), { variant: "glow", color: "secondary" }),
    buttonVariantVariant(ActionGlow("error", basePalette), { variant: "glow", color: "error" }),
    buttonVariantVariant(ActionGlow("success", basePalette), { variant: "glow", color: "success" }),
    buttonVariantVariant(ActionGlow("info", basePalette), { variant: "glow", color: "info" }),
    buttonVariantVariant(ActionGlow("warning", basePalette), { variant: "glow", color: "warning" }),

    buttonVariantVariant(ActionGradientGlow("primary", basePalette), { variant: "gradient-glow", color: "primary" }),
    buttonVariantVariant(ActionGradientGlow("secondary", basePalette), {
      variant: "gradient-glow",
      color: "secondary",
    }),
    buttonVariantVariant(ActionGradientGlow("error", basePalette), { variant: "gradient-glow", color: "error" }),
    buttonVariantVariant(ActionGradientGlow("success", basePalette), { variant: "gradient-glow", color: "success" }),
    buttonVariantVariant(ActionGradientGlow("info", basePalette), { variant: "gradient-glow", color: "info" }),
    buttonVariantVariant(ActionGradientGlow("warning", basePalette), { variant: "gradient-glow", color: "warning" }),

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
        buttonVariantVariant(ActionBase("primary", basePalette), { variant: "contained", color: "primary" }),
        buttonVariantVariant(ActionBase("secondary", basePalette), { variant: "contained", color: "secondary" }),
        buttonVariantVariant(ActionBase("error", basePalette), { variant: "contained", color: "error" }),
        buttonVariantVariant(ActionBase("success", basePalette), { variant: "contained", color: "success" }),
        buttonVariantVariant(ActionBase("info", basePalette), { variant: "contained", color: "info" }),
        buttonVariantVariant(ActionBase("warning", basePalette), { variant: "contained", color: "warning" }),

        buttonVariantVariant(ActionOutline("primary", basePalette), { variant: "outlined", color: "primary" }),
        buttonVariantVariant(ActionOutline("secondary", basePalette), { variant: "outlined", color: "secondary" }),
        buttonVariantVariant(ActionOutline("error", basePalette), { variant: "outlined", color: "error" }),
        buttonVariantVariant(ActionOutline("success", basePalette), { variant: "outlined", color: "success" }),
        buttonVariantVariant(ActionOutline("grey", basePalette), { variant: "outlined", color: "info" }),
        buttonVariantVariant(ActionOutline("warning", basePalette), { variant: "outlined", color: "warning" }),
      ],
    },
  },
};
