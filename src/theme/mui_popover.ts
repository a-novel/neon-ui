import { buttonListItemVariant } from "@/theme/mui_button";

import { Components, Theme } from "@mui/material";

import { ZIndexes } from "./common";
import { palette as basePalette, withTransparency } from "./palette";
import { SPACINGS } from "./sizes";

export const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    root: {
      ".MuiPopover-paper": {
        backgroundColor: withTransparency(basePalette.grey![50]!, 66),
        backdropFilter: "saturate(75%) blur(0.33rem)",
        zIndex: ZIndexes.POPOVER,
        margin: SPACINGS.MEDIUM,
        padding: SPACINGS.SMALL,
        borderRadius: SPACINGS.SMALL,
        "& > .MuiList-root": {
          display: "flex",
          flexDirection: "column",
          gap: SPACINGS.SMALL,
          padding: 0,
          "& > .MuiButtonBase-root": buttonListItemVariant(basePalette, "info").style,
        },
      },
    },
  },
};
