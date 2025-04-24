import { ComponentProps, ReactNode } from "react";

import { Color, Stack, Typography } from "@mui/material";

import { palette, withTransparency } from "../theme/palette";
import { SPACINGS } from "../theme/sizes";

export interface InfoboxProps extends ComponentProps<typeof Stack> {
  /**
   * Status used to decorate the input message.
   */
  color: "primary" | "secondary" | "error" | "success";
  /**
   * Icon to highlight the status of the input.
   */
  icon?: ReactNode;
}

export const InfoBox = ({ children, color, icon, ...props }: InfoboxProps) => (
  <Stack
    sx={{
      "& p": {
        margin: 0,
        padding: 0,
      },
      "& ul": {
        margin: 0,
        padding: "0 0 0 1rem",
      },
      "& strong": {
        color: palette.text?.primary,
      },
      borderWidth: `0 0 0 ${SPACINGS.SMALL}`,
      borderStyle: "solid",
      borderColor: (palette[color] as Color)[500],
      overflow: "hidden",
      padding: `${SPACINGS.SMALL} ${SPACINGS.MEDIUM}`,
      backgroundColor: withTransparency((palette[color] as Color)[50], 33),
      backdropFilter: "saturate(75%) blur(0.33rem)",
    }}
    boxShadow={`0 0 2px ${(palette[color] as Color)[500]}`}
    position="relative"
    borderRadius="0 0.5em 0.5em 0"
    zIndex={2}
    {...props}
  >
    <Typography variant="caption" color={color}>
      {children}
    </Typography>
    {icon && (
      <Typography
        position="absolute"
        top="50%"
        right={SPACINGS.SMALL}
        variant="h4"
        component="div"
        sx={{
          color: (palette[color] as Color)[100],
          transformOrigin: "center",
          transform: "translateY(-50%)",
          opacity: 0.4,
          userSelect: "none",
          lineHeight: "1em",
          height: "1em",
          ".MuiSvgIcon-root": {
            fontSize: "inherit",
            margin: "auto",
          },
        }}
        zIndex={-1}
      >
        {icon}
      </Typography>
    )}
  </Stack>
);
