import { Components, Theme } from "@mui/material";

import { SPACINGS } from "./sizes";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      border: "none",
      borderColor: "transparent",
      gap: SPACINGS.SMALL,
    },
  },
};
