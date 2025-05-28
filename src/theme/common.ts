import { SxProps, Theme } from "@mui/material";

import { withTransparency } from "./palette";

export const ZIndexes = {
  MODAL: 900,
  HEADER: 800,
  POPOVER: 700,
};

export const ContainerSX: SxProps<Theme> = (theme) => ({
  backgroundColor: withTransparency(theme.palette.background.paper, 66),
  backdropFilter: "saturate(75%) blur(0.33rem)",
});
