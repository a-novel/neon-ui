import { Stack, TextField } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import { SPACINGS } from "../../src/theme/sizes";

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args) => <TextField sx={{ maxWidth: "16rem" }} {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "",
  },
};

export const Overflow: Story = {
  args: {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
      "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
      "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est " +
      "laborum.",
  },
};

export const Base: Story = {
  render: () => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <TextField sx={{ maxWidth: "16rem" }} />
      <TextField sx={{ maxWidth: "16rem" }} placeholder="text goes here" />
      <TextField sx={{ maxWidth: "16rem" }} value="foo" />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <TextField disabled sx={{ maxWidth: "16rem" }} />
      <TextField disabled sx={{ maxWidth: "16rem" }} placeholder="text goes here" />
      <TextField disabled sx={{ maxWidth: "16rem" }} value="foo" />
    </Stack>
  ),
};

export const Error: Story = {
  render: () => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <TextField error sx={{ maxWidth: "16rem" }} />
      <TextField error sx={{ maxWidth: "16rem" }} placeholder="text goes here" />
      <TextField error sx={{ maxWidth: "16rem" }} value="foo" />
    </Stack>
  ),
};

export const LabelAndHelper: Story = {
  render: () => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <TextField sx={{ maxWidth: "16rem" }} label="Label" helperText="Helper Text" />
      <TextField error sx={{ maxWidth: "16rem" }} label="Label error" helperText="Helper Text" />
      <TextField disabled sx={{ maxWidth: "16rem" }} label="Label disabled" helperText="Helper Text" />
    </Stack>
  ),
};
