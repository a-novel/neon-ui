export const SPACINGS = {
  BASE: 12,
  SMALL: "6px",
  MEDIUM: "12px",
  LARGE: "24px",
  XLARGE: "48px",
};

export const FONT_SIZE = 16;

/**
 * Use golden ratio scales. 1.27 is the root of the actual ratio, for smoother scaling.
 */
export const scaleGolden = (base: number, factor: number) => base * 1.272 ** factor;

/**
 * Use linear scaling.
 */
export const scaleLinear = (base: number, factor: number) => base * factor;
