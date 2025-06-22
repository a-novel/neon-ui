import { ReactComponent as GearLoader } from "../assets/icons/spinners/gear.svg";

import { IconButton, TextFieldVariants } from "@mui/material";
import { useStore } from "@tanstack/react-form";

import { MaterialSymbol } from "../ui";
import { TanstackTextField, TantstackTextFieldProps } from "./tanstack_text_field";

export const EmailInput = <Variant extends TextFieldVariants = TextFieldVariants>({
  label,
  field,
  slotProps,
  ...props
}: TantstackTextFieldProps<Variant>) => {
  const isValidating = useStore(field.store, (state) => state.meta.isValidating);

  return (
    <TanstackTextField
      field={field}
      type="email"
      slotProps={{
        input: {
          endAdornment: isValidating ? (
            <IconButton sx={{ pointerEvents: "none" }}>
              <GearLoader />
            </IconButton>
          ) : undefined,
        },
        ...slotProps,
      }}
      label={
        label ? (
          <>
            <MaterialSymbol icon="mail" />
            {label}
          </>
        ) : null
      }
      {...props}
    />
  );
};
