import { Stack, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import { SPACINGS, FONTS } from "../src";

const SampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    children: { control: { disable: true } },
  },
  render: (args) => (
    <Stack direction="column" gap={SPACINGS.MEDIUM}>
      <Typography variant="h1" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h1" color="primary">
          h1.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="h2" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h2" color="primary">
          h2.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="h3" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h3" color="primary">
          h3.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="h4" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h4" color="primary">
          h4.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="h5" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h5" color="primary">
          h5.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="h6" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="h6" color="primary">
          h6.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="subtitle1" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="subtitle1" color="primary">
          subtitle1.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="subtitle2" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="subtitle2" color="primary">
          subtitle2.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="body1" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="body1" color="primary">
          body1.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="body2" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="body2" color="primary">
          body2.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="button" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="button" color="primary">
          button.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="caption" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="caption" color="primary">
          caption.
        </Typography>{" "}
        {SampleText}
      </Typography>
      <Typography variant="overline" fontFamily={args.fontFamily} fontWeight={400}>
        <Typography fontFamily={args.fontFamily} variant="overline" color="primary">
          overline.
        </Typography>{" "}
        {SampleText}
      </Typography>
    </Stack>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fontFamily: FONTS.DEFAULT,
  },
};

export const Bungee: Story = {
  args: {
    fontFamily: FONTS.BUNGEE,
  },
};
