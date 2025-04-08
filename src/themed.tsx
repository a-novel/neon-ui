import { ComponentProps, JSX, JSXElementConstructor } from "react";

export type ThemedProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentProps<T> & {
  component?: T;
  theme?: "default" | "primary" | "secondary" | "contrast";
  box?: boolean;
  glow?: boolean;
  clickable?: boolean;
  focusable?: boolean;
  gradient?: boolean;
  font?: "arimo" | "rubik-glitch";
};

export const Themed = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  component: Component = "div",
  theme = "default",
  box,
  glow,
  clickable,
  focusable,
  gradient,
  font,
  ...props
}: ThemedProps<T>) => (
  <Component
    data-theme={theme}
    data-box={box}
    data-focusable={focusable}
    data-clickable={clickable}
    data-glow={glow}
    data-font={font}
    data-gradient={gradient}
    {...props}
  />
);
