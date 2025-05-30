import { Button, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";

import { MaterialSymbol, StatusPage } from "../../src/ui";

const meta: Meta<typeof StatusPage> = {
  component: StatusPage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    footer: { control: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Stack minHeight="100vh" padding={0} boxSizing="border-box" direction="column">
      <StatusPage {...args} />
    </Stack>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <MaterialSymbol icon="check" />,
    color: "primary",
  },
};

export const WithFooter: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <MaterialSymbol icon="check" />,
    footer: <Button>Do something</Button>,
    color: "primary",
  },
};

export const StatusSuccess: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <MaterialSymbol icon="check" />,
    color: "success",
  },
};

export const StatusWarning: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <MaterialSymbol icon="check" />,
    color: "warning",
  },
};

export const StatusError: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <MaterialSymbol icon="check" />,
    color: "error",
  },
};
