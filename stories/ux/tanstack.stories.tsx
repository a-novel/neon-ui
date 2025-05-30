import { FC } from "react";

import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { ReactFormExtendedApi } from "@tanstack/react-form";

import { SPACINGS } from "../../src";
import { FormRenderer, NewMockForm } from "../../src/storybook";
import { TanstackTextField } from "../../src/ux";

interface DemoForm {
  foo: string;
}

const TanstackFormRenderer: FC<{
  form: ReactFormExtendedApi<DemoForm, any, any, any, any, any, any, any, any, any>;
}> = ({ form }) => (
  <Stack
    direction="column"
    gap={SPACINGS.LARGE}
    component="form"
    width="64ch"
    alignItems="stretch"
    maxWidth="100vw"
    boxSizing="border-box"
  >
    <form.Field name="foo">
      {(field) => <TanstackTextField field={field} label="Foo field" maxLength={128} />}
    </form.Field>
  </Stack>
);

const meta: Meta<typeof TanstackFormRenderer> = {
  component: TanstackFormRenderer,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    form: { control: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args) => <FormRenderer component={TanstackFormRenderer} {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    form: NewMockForm({
      values: {
        foo: "",
      },
    }),
  },
};

export const WithValues: Story = {
  args: {
    form: NewMockForm({
      values: {
        foo: "Some input text",
      },
    }),
  },
};

export const ValuesTooLong: Story = {
  args: {
    form: NewMockForm({
      values: {
        foo: String("a").repeat(128),
      },
    }),
  },
};

export const FieldErrors: Story = {
  args: {
    form: NewMockForm({
      values: {
        foo: "Some input text",
      },
      fieldErrors: {
        foo: ["Some error message", "Another error message"],
      },
    }),
  },
};

export const Submitting: Story = {
  args: {
    form: NewMockForm({
      values: {
        foo: "Some input text",
      },
      isSubmitting: true,
    }),
  },
};
