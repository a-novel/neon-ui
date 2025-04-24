import { Color, Components, Theme } from "@mui/material";

import { ZIndexes } from "./common";
import { palette as basePalette, withTransparency } from "./palette";
import { SPACINGS } from "./sizes";

export const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    root: {
      ".MuiPopover-paper": {
        backgroundColor: withTransparency(basePalette.grey![100]!, 66),
        backdropFilter: "saturate(75%) blur(0.33rem)",
        zIndex: ZIndexes.POPOVER,
        marginTop: SPACINGS.MEDIUM,
        marginBottom: SPACINGS.MEDIUM,
        padding: SPACINGS.SMALL,
        borderRadius: SPACINGS.SMALL,
        "& > .MuiList-root": {
          display: "flex",
          flexDirection: "column",
          gap: SPACINGS.SMALL,
          padding: 0,
          "& > .MuiButtonBase-root": {
            padding: SPACINGS.SMALL,
            borderRadius: SPACINGS.SMALL,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: SPACINGS.SMALL,
            flexDirection: "row",
            color: basePalette.text!.primary,
            transition: "linear 0.2s",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: (basePalette.grey as Color)[200],
              transition: "linear 0s",
            },
            "&.Mui-selected": {
              backgroundColor: `${(basePalette.primary as Color)[300]}!important`,
            },
          },
        },
      },
    },
  },
};
