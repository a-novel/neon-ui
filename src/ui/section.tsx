import { Stack, StackProps } from "@mui/material";

export type SessionWidth = "xs" | "sm" | "md" | "lg" | "xl";

const SectionWidths: Record<SessionWidth, string> = {
  xs: "25ch",
  sm: "40ch",
  md: "64ch",
  lg: "102ch",
  xl: "163ch",
};

export interface SectionProps extends Omit<StackProps, "width"> {
  width?: SessionWidth;
}

export const Section = ({ width, ...props }: SectionProps) => {
  return <Stack width={SectionWidths[width ?? "md"]} {...props} />;
};
