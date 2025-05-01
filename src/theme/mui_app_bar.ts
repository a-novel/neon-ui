import { ZIndexes } from "@/theme/common";
import { palette, withTransparency } from "@/theme/palette";
import { SPACINGS } from "@/theme/sizes";

import { Color, Components, CSSObject, Theme } from "@mui/material";

const backgroundElementSx: CSSObject = {
  position: "absolute",
  content: '""',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "inherit",
  display: "block",
  backgroundColor: "currentColor",
  backdropFilter: "saturate(75%) blur(0.33rem)",
  zIndex: -1,
};

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  defaultProps: {
    position: "sticky",
    color: "transparent",
    enableColorOnDark: true,
  },
  styleOverrides: {
    root: {
      top: 0,
      padding: SPACINGS.MEDIUM,
      gap: SPACINGS.LARGE,
      zIndex: ZIndexes.HEADER,
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      alignSelf: "stretch",
      width: "100%",
      color: palette.text!.primary!,
    },
    colorTransparent: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency(palette.background!.default!, 33),
      },
    },
    colorInfo: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.info as Color)[100], 33),
      },
    },
    colorError: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.error as Color)[100], 33),
      },
    },
    colorPrimary: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.primary as Color)[100], 33),
      },
    },
    colorDefault: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency(palette.background!.default!, 33),
      },
    },
    colorWarning: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.warning as Color)[100], 33),
      },
    },
    colorSuccess: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.success as Color)[100], 33),
      },
    },
    colorSecondary: {
      "&:before": {
        ...backgroundElementSx,
        color: withTransparency((palette.secondary as Color)[100], 33),
      },
    },
  },
};
