import { SPACINGS } from "@/theme/sizes";

import { Button, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args) => <Button {...args}>Click me !</Button>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Contained: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="contained" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="contained" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="contained" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="contained" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="contained" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="outlined" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="outlined" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="outlined" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="outlined" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="outlined" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="outlined" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};

export const Gradient: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="gradient" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="gradient" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="gradient" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="gradient" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="gradient" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="gradient" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};

export const Glow: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="glow" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="glow" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="glow" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="glow" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="glow" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="glow" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};

export const GradientGlow: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="gradient-glow" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="gradient-glow" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="gradient-glow" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="gradient-glow" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="gradient-glow" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="gradient-glow" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};

export const Text: Story = {
  render: (args) => (
    <Stack direction="row" gap={SPACINGS.LARGE}>
      <Button variant="text" color="primary" {...args}>
        Click me !
      </Button>
      <Button variant="text" color="secondary" {...args}>
        Click me !
      </Button>
      <Button variant="text" color="error" {...args}>
        Click me !
      </Button>
      <Button variant="text" color="success" {...args}>
        Click me !
      </Button>
      <Button variant="text" color="info" {...args}>
        Click me !
      </Button>
      <Button variant="text" color="warning" {...args}>
        Click me !
      </Button>
    </Stack>
  ),
};
