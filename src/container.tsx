import css from "./container.module.css";

import { ComponentProps, JSX, JSXElementConstructor } from "react";

import { Scale, Spacing, spacingToCss, Theme } from "./common";

export type ContainerProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentProps<T> & {
  component?: T;
  boxed?: boolean;
  theme?: Theme;
  scale?: Scale;
  spacing?:
    | Spacing
    | { v: Spacing; h: Spacing; gap: Spacing }
    | { top: Spacing; right: Spacing; bottom: Spacing; left: Spacing; gap: Spacing };
  margin?: Spacing | { v: Spacing; h: Spacing } | { top: Spacing; right: Spacing; bottom: Spacing; left: Spacing };
};

export const Container = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  component: Component = "div",
  boxed = false,
  theme = "default",
  scale = "small",
  spacing = "normal",
  margin = "none",
  className = "",
  style,
  ...props
}: ContainerProps<T>) => (
  <Component
    data-boxed={boxed}
    data-theme={theme}
    data-scale={scale}
    className={`${css.container} ${className}`}
    style={{
      gap: typeof spacing === "object" ? spacingToCss(spacing.gap) : spacingToCss(spacing),
      paddingTop:
        typeof spacing === "object"
          ? "v" in spacing
            ? spacingToCss(spacing.v)
            : spacingToCss(spacing.top)
          : spacingToCss(spacing),
      paddingRight:
        typeof spacing === "object"
          ? "h" in spacing
            ? spacingToCss(spacing.h)
            : spacingToCss(spacing.right)
          : spacingToCss(spacing),
      paddingBottom:
        typeof spacing === "object"
          ? "v" in spacing
            ? spacingToCss(spacing.v)
            : spacingToCss(spacing.bottom)
          : spacingToCss(spacing),
      paddingLeft:
        typeof spacing === "object"
          ? "h" in spacing
            ? spacingToCss(spacing.h)
            : spacingToCss(spacing.left)
          : spacingToCss(spacing),
      marginTop:
        typeof margin === "object"
          ? "v" in margin
            ? spacingToCss(margin.v)
            : spacingToCss(margin.top)
          : spacingToCss(margin),
      marginRight:
        typeof margin === "object"
          ? "h" in margin
            ? spacingToCss(margin.h)
            : spacingToCss(margin.right)
          : spacingToCss(margin),
      marginBottom:
        typeof margin === "object"
          ? "v" in margin
            ? spacingToCss(margin.v)
            : spacingToCss(margin.bottom)
          : spacingToCss(margin),
      marginLeft:
        typeof margin === "object"
          ? "h" in margin
            ? spacingToCss(margin.h)
            : spacingToCss(margin.left)
          : spacingToCss(margin),
      ...style,
    }}
    {...props}
  />
);
