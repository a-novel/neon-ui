export type Theme = "primary" | "secondary" | "contrast" | "default";

export type Spacing = "none" | "small" | "normal" | "large" | "x-large";

export type Scale = "none" | "smaller" | "small" | "normal" | "large" | "x-large" | "xx-large";

export type Variant = 25 | 33 | 50 | 66 | 75 | 100;

export const scaleToCss = (scale: Scale) => {
  switch (scale) {
    case "none":
      return "0";
    case "smaller":
      return "var(--scale-xs)";
    case "small":
      return "var(--scale-s)";
    case "normal":
      return "var(--scale)";
    case "large":
      return "var(--scale-l)";
    case "x-large":
      return "var(--scale-xl)";
    case "xx-large":
      return "var(--scale-xxl)";
  }
};

export const spacingToCss = (spacing: Spacing) => {
  switch (spacing) {
    case "none":
      return "0";
    case "small":
      return "var(--spacing-s)";
    case "normal":
      return "var(--spacing)";
    case "large":
      return "var(--spacing-l)";
    case "x-large":
      return "var(--spacing-xl)";
  }
};
