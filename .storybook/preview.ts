import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import { withMuiTheme } from "../src";

themes.dark.appContentBg = "#000000";
themes.dark.appPreviewBg = "#000000";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withMuiTheme];

export default preview;
