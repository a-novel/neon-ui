import { ReactNode } from "react";

import { Button, ButtonProps, Stack, StackProps } from "@mui/material";
import { ReactFormExtendedApi, useStore } from "@tanstack/react-form";

import { SPACINGS } from "../theme/sizes";
import { ErrorBox } from "../ui";

export interface TanstackFormWrapperProps extends Partial<StackProps> {
  form: ReactFormExtendedApi<any, any, any, any, any, any, any, any, any, any>;
  submitButton: ReactNode | ((submitting: boolean) => ReactNode);
  submitButtonProps?: Partial<ButtonProps>;
  footer?: ReactNode;
}

export const TanstackFormWrapper = ({
  form,
  children,
  footer,
  submitButton,
  submitButtonProps,
  ...props
}: TanstackFormWrapperProps) => {
  const submitError = useStore(form.store, (state) => state.errorMap.onSubmit);
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <Stack direction="column" alignItems="stretch" boxSizing="border-box" spacing={SPACINGS.LARGE} {...props}>
      <Stack
        component="form"
        direction="column"
        alignItems="stretch"
        boxSizing="border-box"
        spacing={SPACINGS.MEDIUM}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit().catch(console.error);
        }}
      >
        {children}

        <div style={{ height: SPACINGS.MEDIUM }} />

        <Button color="primary" type="submit" disabled={isSubmitting} {...submitButtonProps}>
          {typeof submitButton === "function" ? submitButton(isSubmitting) : submitButton}
        </Button>
      </Stack>

      {footer}

      <ErrorBox error={submitError} />
    </Stack>
  );
};
