import { Components, Theme } from "@mui/material";

import { FONT_SIZE, SPACINGS } from "./sizes";

export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      position: "relative",
      transform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: SPACINGS.SMALL,
      lineHeight: "1.3em",
      fontSize: FONT_SIZE,
      verticalAlign: "middle",
      margin: 0,
    },
  },
};
