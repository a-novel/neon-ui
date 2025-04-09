import { Meta, StoryObj } from "@storybook/react";

import { Container, Typography } from "../";

const meta: Meta<typeof Container> = {
  component: Container,
  parameters: {
    layout: "centered",
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
  render: (args) => <Container style={{ display: "flex", flexDirection: "column" }} {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Typography size="x-large" theme="primary">
          Lorem Ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
      </>
    ),
  },
};

export const Boxed: Story = {
  args: {
    boxed: true,
    children: (
      <>
        <Typography size="x-large" theme="primary">
          Lorem Ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
      </>
    ),
  },
};

export const PrimaryTheme: Story = {
  args: {
    boxed: true,
    theme: "primary",
    children: (
      <>
        <Typography size="x-large" theme="primary">
          Lorem Ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
      </>
    ),
  },
};

export const SecondaryTheme: Story = {
  args: {
    boxed: true,
    theme: "secondary",
    children: (
      <>
        <Typography size="x-large" theme="primary">
          Lorem Ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
      </>
    ),
  },
};

export const ContrastTheme: Story = {
  args: {
    boxed: true,
    theme: "contrast",
    children: (
      <>
        <Typography size="x-large" theme="primary">
          Lorem Ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
      </>
    ),
  },
};
