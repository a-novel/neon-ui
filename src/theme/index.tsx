import { ComponentType } from "react";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { MuiButton } from "./mui_button";
import { MuiFormHelperText } from "./mui_form_helper_text";
import { MuiInputBase } from "./mui_input_base";
import { MuiInputLabel } from "./mui_input_label";
import { MuiPopover } from "./mui_popover";
import { MuiTextField } from "./mui_text_field";
import { palette } from "./palette";
import { SPACINGS } from "./sizes";
import { typography } from "./typography";

export const theme = createTheme({
  palette,
  spacing: SPACINGS.BASE,
  typography,
  components: {
    MuiButton,
    MuiTextField,
    MuiInputLabel,
    MuiInputBase,
    MuiFormHelperText,
    MuiPopover,
  },
});

export const withMuiTheme = (Component: ComponentType) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component />
  </ThemeProvider>
);
