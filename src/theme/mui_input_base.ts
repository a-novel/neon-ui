import { Components, Theme } from "@mui/material";

import { ActionBase } from "./action";
import { palette } from "./palette";
import { FONT_SIZE, SPACINGS } from "./sizes";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      ".MuiOutlinedInput-notchedOutline": {
        display: "none",
      },
      "& > .MuiInputBase-input": {
        lineHeight: "3em",
      },
      ".MuiInputBase-input:placeholder": {
        color: palette.text!.secondary,
        fontSize: FONT_SIZE,
      },
      "& >*": {
        fontSize: `${FONT_SIZE}px!important`,
        padding: "0px!important",
        color: palette.text!.primary,
      },
      height: `calc(1.5 * ${FONT_SIZE}px + 2 * ${SPACINGS.MEDIUM})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: SPACINGS.MEDIUM,
      padding: SPACINGS.MEDIUM,
      fontSize: FONT_SIZE,
      verticalAlign: "middle",
      ...ActionBase("grey", palette),
    },
  },
};
