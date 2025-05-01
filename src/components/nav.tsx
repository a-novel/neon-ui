import { CountryType, LangSelector, LangSelectorProps } from "@/components/lang_selector";
import { FONT_SIZE, scaleGolden, SPACINGS } from "@/theme/sizes";

import { ReactNode } from "react";

import { AppBar, AppBarProps, Button, ButtonProps, Stack } from "@mui/material";

export type NavBarProps<Langs extends Record<string, CountryType>> = Omit<AppBarProps, "children" | "lang"> & {
  homeButton: Omit<ButtonProps, "children" | "variant"> & {
    icon: string;
  };
  lang: Pick<LangSelectorProps<Langs>, "langs" | "selectedLang" | "onChange">;
  nav?: (ButtonProps & { key: string })[];
  desktopActions?: ReactNode;
};

export const NavBar = <Langs extends Record<string, CountryType>>({
  homeButton: { icon, ...homeButtonProps },
  lang,
  nav,
  desktopActions,
  ...props
}: NavBarProps<Langs>) => (
  <AppBar {...props}>
    <Stack component="nav" direction="row" alignItems="center" padding={0} gap={SPACINGS.LARGE}>
      <Button
        color="info"
        variant="outlined"
        {...homeButtonProps}
        sx={{ padding: SPACINGS.SMALL, ...homeButtonProps.sx }}
      >
        <img style={{ height: scaleGolden(FONT_SIZE, 2.5) }} src={icon} alt="application logo" />
      </Button>

      <Stack direction="row" alignItems="center" padding={0} gap={SPACINGS.MEDIUM}>
        {nav?.map((buttonProps) => <Button {...buttonProps} key={buttonProps.key} />)}
      </Stack>
    </Stack>

    <Stack component="div" flexDirection="row" alignItems="center" padding={0} gap={SPACINGS.LARGE}>
      {desktopActions}
      <LangSelector
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
        }}
        {...lang}
      />
    </Stack>
  </AppBar>
);
