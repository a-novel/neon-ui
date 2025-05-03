import { Components, Theme } from "@mui/material";

import { ActionBase } from "./action";
import { palette } from "./palette";
import { SPACINGS } from "./sizes";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      "&.Mui-error": {
        ...ActionBase("error", palette),
      },
      ".MuiOutlinedInput-notchedOutline": {
        display: "none",
      },
      "& > .MuiInputBase-input": {
        lineHeight: "3em",
      },
      ".MuiInputBase-input:placeholder": {
        color: palette.text!.secondary,
      },
      "& >*": {
        padding: "0px!important",
        color: palette.text!.primary,
      },
      height: `calc(1.5 * 1em + 2 * ${SPACINGS.MEDIUM})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: SPACINGS.MEDIUM,
      padding: SPACINGS.MEDIUM,
      verticalAlign: "middle",
      ...ActionBase("grey", palette),
    },
  },
};
