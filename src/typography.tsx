import css from "./typography.module.css";

import { ComponentProps, CSSProperties, JSX, JSXElementConstructor } from "react";

import { Scale, scaleToCss, Theme, Variant } from "./common";

export type TypographyProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentProps<T> & {
  component?: T;
  theme?: Theme;
  size?: Scale;
  variant?: Variant;
  bold?: boolean;
  italic?: boolean;
  font?: "arimo" | "rubik-glitch";
  glow?: boolean | Theme;
  gradient?: boolean | Theme;
  align?: CSSProperties["textAlign"];
};

export const Typography = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  component: Component = "span",
  theme = "default",
  size = "normal",
  variant = 100,
  bold,
  italic,
  align,
  font,
  gradient = false,
  glow = false,
  className = "",
  style,
  ...props
}: TypographyProps<T>) => (
  <Component
    data-theme={theme}
    data-variant={variant}
    data-bold={bold}
    data-italic={italic}
    data-font={font}
    data-gradient={gradient ? (gradient === true ? theme : gradient) : undefined}
    data-glow={glow ? (glow === true ? theme : glow) : undefined}
    className={`${css.typography} ${className}`}
    style={{ textAlign: align, fontSize: scaleToCss(size), ...style }}
    {...props}
  />
);
