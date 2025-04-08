import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src";

themes.dark.appContentBg = "#000000";
themes.dark.appPreviewBg = "#000000";
themes.dark.textColor = "#ffffff";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#000000" },
        { name: "Contrasted", value: "center no-repeat url(/background-test-contrast.png)" },
      ],
    },
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

export default preview;
