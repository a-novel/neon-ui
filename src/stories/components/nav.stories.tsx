import logo from "@/assets/banner.png";
import { NavBar } from "@/components";
import { LANGS } from "@/stories/_common";
import { SPACINGS } from "@/theme/sizes";

import { Avatar, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <Stack direction="column" gap={SPACINGS.LARGE} padding={0} maxHeight="20rem" overflow="auto">
      <NavBar {...args} />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Typography>
    </Stack>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    homeButton: {
      icon: logo,
    },
    lang: {
      langs: LANGS,
      selectedLang: "fr",
      onChange: () => null,
    },
  },
};

export const WithNav: Story = {
  args: {
    homeButton: {
      icon: logo,
    },
    lang: {
      langs: LANGS,
      selectedLang: "fr",
      onChange: () => null,
    },
    nav: [{ children: "Home" }, { children: "Dashboard" }, { children: "Subscription", color: "error" }],
  },
};

export const WithDesktopActions: Story = {
  args: {
    homeButton: {
      icon: logo,
    },
    lang: {
      langs: LANGS,
      selectedLang: "fr",
      onChange: () => null,
    },
    desktopActions: <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>,
  },
};
