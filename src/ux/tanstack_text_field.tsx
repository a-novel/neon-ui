import { Stack, TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { FieldApi, useStore } from "@tanstack/react-form";
import { Translation } from "react-i18next";

import { SPACINGS } from "../theme/sizes";
import { InfoBox, MaterialSymbol } from "../ui";
import { i18nPKG } from "./i18n";

export type TantstackTextFieldProps<Variant extends TextFieldVariants = TextFieldVariants> = Omit<
  TextFieldProps<Variant>,
  "value" | "onChange" | "onBlur"
> & {
  field: FieldApi<any, any, string, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>;
  maxLength?: number;
};

const printFieldErrors = (err: any): string[] => {
  // Error is already a string, youhou.
  if (typeof err === "string") {
    return [err];
  }

  // Recursive call on all errors.
  if (Array.isArray(err)) {
    return err.flatMap((e) => printFieldErrors(e));
  }

  // Best attempt to extract the message from the error.
  return [err?.message ?? err?.toString() ?? JSON.stringify(err)];
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
  const errors = useStore(field.store, (state) => state.meta.errors.flatMap(printFieldErrors));
  const isSubmitting = useStore(field.form.store, (state) => state.isSubmitting);

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
      {errors.length === 1 ? (
        <InfoBox icon={<MaterialSymbol icon="error" />} color="error">
          {errors}
        </InfoBox>
      ) : null}
      {errors.length > 1 ? (
        <InfoBox icon={<MaterialSymbol icon="error" />} color="error">
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}
      {maxLength && field.state.value.length >= maxLength ? (
        <InfoBox icon={<MaterialSymbol icon="cancel" />} color="secondary">
          <Translation i18n={i18nPKG} ns="input">
            {(t) => t("input:text.errors.tooLong", { count: maxLength })}
          </Translation>
        </InfoBox>
      ) : null}
    </Stack>
  );
};
