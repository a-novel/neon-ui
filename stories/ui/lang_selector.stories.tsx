import { Meta, StoryObj } from "@storybook/react";

import { LangSelector } from "../../src/ui";
import { LANGS } from "../_common";

const meta: Meta<typeof LangSelector> = {
  component: LangSelector,
  parameters: {
    layout: "centered",
  },
  args: {
    langs: LANGS,
    selectedLang: "fr",
    onChange: (lang) => {
      console.log("Selected language:", lang);
    },
  },
  argTypes: {
    langs: { control: { disable: true } },
    selectedLang: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const FullWidth: Story = {
  args: {
    langs: LANGS,
    selectedLang: "fr",
    fullWidth: true,
  },
};
