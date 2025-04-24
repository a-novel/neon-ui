import { CheckOutlined } from "@mui-symbols-material/w400";
import { Button } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import { StatusPage } from "../../src";

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
    <div style={{ height: "60rem" }}>
      <StatusPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <CheckOutlined />,
    color: "primary",
  },
};

export const WithFooter: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <CheckOutlined />,
    footer: <Button>Do something</Button>,
    color: "primary",
  },
};

export const StatusSuccess: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <CheckOutlined />,
    color: "success",
  },
};

export const StatusWarning: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <CheckOutlined />,
    color: "warning",
  },
};

export const StatusError: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et " +
      "dolore magna aliqua.",
    icon: <CheckOutlined />,
    color: "error",
  },
};
