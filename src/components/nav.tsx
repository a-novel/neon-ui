import { CountryType, LangSelector, LangSelectorProps } from "@/components/lang_selector";
import { ZIndexes } from "@/theme/common";
import { palette, palette as basePalette, withTransparency } from "@/theme/palette";
import { SPACINGS } from "@/theme/sizes";

import { ReactNode, useLayoutEffect, useRef, useState } from "react";

import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, AppBarProps, Box, Button, ButtonProps, Divider, IconButton, Stack } from "@mui/material";

export interface NavProps {
  active: boolean;
  color: "primary" | "secondary" | "error" | "success" | "info" | "warning";
  key: string;
  children: ReactNode;
}

export type NavBarProps<Langs extends Record<string, CountryType>> = Omit<AppBarProps, "children" | "lang"> & {
  homeButton: Omit<ButtonProps, "children" | "variant"> & {
    icon: string;
  };
  lang: Pick<LangSelectorProps<Langs>, "langs" | "selectedLang" | "onChange">;
  nav?: NavProps[];
  desktopActions?: ReactNode;
  mobileActions?: ReactNode;
};

export const NavBar = <Langs extends Record<string, CountryType>>({
  homeButton: { icon, ...homeButtonProps },
  lang,
  nav,
  desktopActions,
  mobileActions,
  ...props
}: NavBarProps<Langs>) => {
  const appBarRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const appBarWidth = appBarRef.current?.getBoundingClientRect().width ?? 0;
  const appBarHeight = appBarRef.current?.getBoundingClientRect().height ?? 0;

  const [showBurger, setShowBurger] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  useLayoutEffect(() => {
    // Display temporarily to take measurements.
    if (navRef.current) {
      navRef.current.style.display = "";
    }
    if (actionsRef.current) {
      actionsRef.current.style.display = "";
    }

    const fartherRight = (actionsRef.current ?? navRef.current)?.getBoundingClientRect().right ?? 0;

    if (fartherRight > appBarWidth) {
      setShowBurger(true);

      if (navRef.current) {
        navRef.current.style.display = "none";
      }
      if (actionsRef.current) {
        actionsRef.current.style.display = "none";
      }
    } else {
      setShowBurger(false);
      setOpenBurger(false);
    }
  }, [appBarWidth]);

  // Disable scroll when the burger menu is open.
  useLayoutEffect(() => {
    if (openBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openBurger]);

  return (
    <>
      <AppBar ref={appBarRef} {...props}>
        <Stack component="nav" direction="row" alignItems="center" padding={0} gap={SPACINGS.LARGE}>
          <Button
            color="info"
            variant="outlined"
            {...homeButtonProps}
            sx={{ padding: SPACINGS.SMALL, ...homeButtonProps.sx }}
          >
            <img style={{ height: "3rem" }} src={icon} alt="application logo" />
          </Button>

          <Stack ref={navRef} direction="row" alignItems="center" padding={0} gap={SPACINGS.MEDIUM}>
            {nav?.map(({ key, active, color, ...props }) => (
              <Button
                variant="list-item"
                aria-selected={active}
                key={key}
                color={color}
                sx={{
                  paddingX: SPACINGS.LARGE,
                  paddingY: SPACINGS.MEDIUM,
                  fontSize: "1rem",
                }}
                {...props}
              />
            ))}
          </Stack>
        </Stack>

        <Stack
          ref={actionsRef}
          component="div"
          flexDirection="row"
          alignItems="center"
          padding={0}
          gap={SPACINGS.LARGE}
        >
          {desktopActions}
          <LangSelector
            MenuProps={{
              anchorOrigin: { vertical: "bottom", horizontal: "left" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            }}
            {...lang}
          />
        </Stack>

        <IconButton sx={{ display: showBurger ? undefined : "none" }} onClick={() => setOpenBurger((prev) => !prev)}>
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Stack
        direction="column"
        alignItems="center"
        padding={SPACINGS.MEDIUM}
        gap={SPACINGS.LARGE}
        display={showBurger && openBurger ? undefined : "none"}
        position="fixed"
        top={`${appBarHeight}px`}
        right={0}
        bottom={0}
        zIndex={ZIndexes.POPOVER}
        overflow="auto"
        sx={{
          backgroundColor: withTransparency(basePalette.background!.default!, 66),
          backdropFilter: "blur(0.33rem)",
          "@media (max-width: 28rem)": {
            left: 0,
          },
          "@media (min-width: 28rem)": {
            width: "24rem",
          },
        }}
      >
        <LangSelector
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }}
          fullWidth
          {...lang}
        />
        {nav?.length ? (
          <>
            <Divider sx={(theme) => ({ borderColor: theme.palette.grey![100], width: "100%" })} />
            <Stack
              direction="column"
              alignItems="stretch"
              alignSelf="stretch"
              padding={0}
              gap={SPACINGS.MEDIUM}
              flexGrow={1}
            >
              {nav?.map(({ key, active, color, ...props }) => (
                <Button
                  variant="list-item"
                  aria-selected={active}
                  key={key}
                  color={color}
                  sx={{
                    paddingX: SPACINGS.LARGE,
                    paddingY: SPACINGS.MEDIUM,
                    fontSize: "1rem",
                  }}
                  {...props}
                />
              ))}
            </Stack>
          </>
        ) : (
          <Box flexGrow={1} />
        )}
        {mobileActions && (
          <Stack
            direction="column"
            alignItems="stretch"
            alignSelf="stretch"
            padding={0}
            gap={SPACINGS.LARGE}
            paddingBottom={SPACINGS.MEDIUM}
            position="sticky"
            bottom={0}
            zIndex={99}
            sx={{
              "&:before": {
                position: "absolute",
                content: '""',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "inherit",
                display: "block",
                backgroundColor: withTransparency(palette.background!.default!, 33),
                backdropFilter: "saturate(75%) blur(0.33rem)",
                zIndex: -1,
              },
            }}
          >
            <Divider sx={(theme) => ({ borderColor: theme.palette.grey![100], width: "100%" })} />
            {mobileActions}
          </Stack>
        )}
      </Stack>
    </>
  );
};
