import { useEffect } from "react";

import { Stack, TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { FieldApi, useStore } from "@tanstack/react-form";
import { T } from "@tolgee/react";

import { tolgee } from "../../.storybook/decorators";
import { SPACINGS } from "../theme/sizes";
import { InfoBox, MaterialSymbol } from "../ui";
import { ErrorBox } from "../ui";

export type TantstackTextFieldProps<Variant extends TextFieldVariants = TextFieldVariants> = Omit<
  TextFieldProps<Variant>,
  "value" | "onChange" | "onBlur"
> & {
  field: FieldApi<any, any, string, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>;
  maxLength?: number;
};

export const TanstackTextField = <Variant extends TextFieldVariants>({
  field,
  id,
  name,
  error,
  maxLength,
  disabled,
  slotProps,
  ...props
}: TantstackTextFieldProps<Variant>) => {
  const errors = useStore(field.store, (state) => state.meta.errors);
  const isSubmitting = useStore(field.form.store, (state) => state.isSubmitting);

  // Load / unload translations.
  useEffect(() => {
    tolgee.addActiveNs("form").catch(console.error);
    return () => tolgee.removeActiveNs("form");
  }, []);

  return (
    <Stack direction="column" gap={SPACINGS.SMALL}>
      <TextField
        id={id ?? field.name}
        name={name ?? field.name}
        error={error ?? errors.length > 0}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(maxLength ? e.target.value.substring(0, maxLength) : e.target.value)}
        disabled={disabled ?? isSubmitting}
        slotProps={{
          ...slotProps,
          htmlInput: { maxLength, ...slotProps?.htmlInput },
        }}
        {...props}
      />
      <ErrorBox error={errors} />
      {maxLength && field.state.value.length >= maxLength ? (
        <InfoBox icon={<MaterialSymbol icon="cancel" />} color="secondary">
          <T keyName="text.errors.tooLong" ns="form" params={{ count: maxLength }} />
        </InfoBox>
      ) : null}
    </Stack>
  );
};
