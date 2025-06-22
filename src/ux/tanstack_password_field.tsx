import { useState } from "react";

import { IconButton, TextFieldVariants } from "@mui/material";

import { MaterialSymbol } from "../ui";
import { TanstackTextField, TantstackTextFieldProps } from "./tanstack_text_field";

export const PasswordInput = <Variant extends TextFieldVariants = TextFieldVariants>({
  label,
  field,
  slotProps,
  ...props
}: Omit<TantstackTextFieldProps<Variant>, "type">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TanstackTextField
      field={field}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <MaterialSymbol icon="visibility_off" /> : <MaterialSymbol icon="visibility" />}
            </IconButton>
          ),
        },
        ...slotProps,
      }}
      label={
        label ? (
          <>
            <MaterialSymbol icon="password" />
            {label}
          </>
        ) : null
      }
      {...props}
    />
  );
};
