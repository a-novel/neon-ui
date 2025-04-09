import css from "./action.module.css";

import { ComponentProps, JSX, JSXElementConstructor } from "react";

import { Theme } from "./common";

export type ActionProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentProps<T> & {
  component?: T;
  theme?: Theme;
  glow?: boolean | Theme;
  gradient?: boolean | Theme;
  focusable?: boolean;
  clickable?: boolean;
  disabled?: boolean;
};

export const Action = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  component: Component = "div",
  theme = "default",
  glow = false,
  gradient = false,
  focusable = false,
  clickable = false,
  disabled = false,
  className = "",
  ...props
}: ActionProps<T>) => (
  <Component
    data-theme={theme}
    data-glow={glow ? (glow === true ? theme : glow) : undefined}
    data-gradient={gradient ? (gradient === true ? theme : gradient) : undefined}
    data-focusable={focusable}
    data-clickable={clickable}
    data-disabled={disabled}
    className={`${css.action} ${className}`}
    {...props}
  />
);
