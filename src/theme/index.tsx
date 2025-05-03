import { MuiAppBar } from "@/theme/mui_app_bar";

import "@fontsource/arimo/400-italic.css";
import "@fontsource/arimo/400.css";
import "@fontsource/arimo/500-italic.css";
import "@fontsource/arimo/500.css";
import "@fontsource/arimo/600-italic.css";
import "@fontsource/arimo/600.css";
import "@fontsource/arimo/700-italic.css";
import "@fontsource/arimo/700.css";
import "@fontsource/bungee/400.css";

import { createTheme, responsiveFontSizes } from "@mui/material";

import { MuiButton } from "./mui_button";
import { MuiFormHelperText } from "./mui_form_helper_text";
import { MuiInputBase } from "./mui_input_base";
import { MuiInputLabel } from "./mui_input_label";
import { MuiPopover } from "./mui_popover";
import { MuiTextField } from "./mui_text_field";
import { palette } from "./palette";
import { SPACINGS } from "./sizes";
import { typography } from "./typography";

let theme = createTheme({
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
    MuiAppBar,
  },
});

theme = responsiveFontSizes(theme);

export { theme };
