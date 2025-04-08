import { ComponentProps, FC } from "react";

export interface MaterialSymbolProps extends Omit<ComponentProps<"span">, "children"> {
  symbol: string;
}

/**
 * Display a symbol From {@link https://fonts.google.com/icons?icon.set=Material+Symbols Material Symbols library}.
 */
export const MaterialSymbol: FC<MaterialSymbolProps> = ({ className, symbol, ...props }) => (
  <span className={`material-symbols-outlined ${className}`} {...props}>
    {symbol}
  </span>
);
