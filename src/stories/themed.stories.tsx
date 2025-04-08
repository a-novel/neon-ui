import { Meta, StoryObj } from "@storybook/react";

import { Themed } from "../themed.tsx";

const meta: Meta<typeof Themed> = {
  component: Themed,
  parameters: {
    layout: "centered",
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
  },
};

export const ColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
  },
};

export const ColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
  },
};

export const ColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
  },
};

export const Box: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    box: true,
  },
};

export const BoxColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
    box: true,
  },
};

export const BoxColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
    box: true,
  },
};

export const BoxColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    box: true,
  },
};

export const Focusable: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    box: true,
    tabindex: "0",
    focusable: true,
  },
};

export const FocusableColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
    box: true,
    tabindex: "0",
    focusable: true,
  },
};

export const FocusableColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
    box: true,
    tabindex: "0",
    focusable: true,
  },
};

export const FocusableColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    box: true,
    tabindex: "0",
    focusable: true,
  },
};

export const Clickable: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    box: true,
    clickable: true,
  },
};

export const ClickableColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
    box: true,
    clickable: true,
  },
};

export const ClickableColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
    box: true,
    clickable: true,
  },
};

export const ClickableColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    box: true,
    clickable: true,
  },
};

export const Glow: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    glow: true,
  },
};

export const GlowColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
    glow: true,
  },
};

export const GlowColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
    glow: true,
  },
};

export const GlowColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    glow: true,
  },
};

export const BoxGlow: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    box: true,
    glow: true,
  },
};

export const BoxGlowColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "primary",
    box: true,
    glow: true,
  },
};

export const BoxGlowColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "secondary",
    box: true,
    glow: true,
  },
};

export const BoxGlowColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    box: true,
    glow: true,
  },
};

export const FontRubikGlitch: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    font: "rubik-glitch",
  },
};

export const Gradient: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
  },
};

export const GradientColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    theme: "primary",
  },
};

export const GradientColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    theme: "secondary",
  },
};

export const GradientColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    theme: "contrast",
  },
};

export const BoxGradient: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    box: true,
  },
};

export const BoxGradientColorPrimary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    theme: "primary",
    box: true,
  },
};

export const BoxGradientColorSecondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    gradient: true,
    theme: "secondary",
    box: true,
  },
};

export const BoxGradientColorContrast: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
      "aliquip ex ea commodo consequat.",
    theme: "contrast",
    gradient: true,
    box: true,
  },
};
