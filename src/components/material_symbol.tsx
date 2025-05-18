import { ComponentProps } from "react";

export interface MaterialSymbolProps extends Omit<ComponentProps<"span">, "children"> {
  icon: string;
}

export const MaterialSymbol = ({ icon, style, className, ...props }: MaterialSymbolProps) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontSize: "inherit", lineHeight: "inherit", ...style }}
    {...props}
  >
    {icon}
  </span>
);
