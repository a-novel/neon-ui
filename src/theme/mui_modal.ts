import { Components, Theme } from "@mui/material";

export const MuiModal: Components<Theme>["MuiModal"] = {
  styleOverrides: {
    root: {
      backdropFilter: "blur(0.33rem) saturate(75%)",
    },
  },
};
