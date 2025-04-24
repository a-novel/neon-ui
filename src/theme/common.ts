import { SxProps, Theme } from "@mui/material";

import { withTransparency } from "./palette";

export const ZIndexes = {
  HEADER: 900,
  POPOVER: 800,
};

export const ContainerSX: SxProps<Theme> = (theme) => ({
  backgroundColor: withTransparency(theme.palette.background.paper, 66),
  backdropFilter: "saturate(75%) blur(0.33rem)",
});
