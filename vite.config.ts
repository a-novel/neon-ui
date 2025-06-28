import { peerDependencies, name } from "./package.json";

import svgr from "@svgr/rollup";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    // SVGO is disabled because it messes up with some icons by removing intermediate tags.
    svgr({ icon: true, svgo: false }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        "src/index": "src/index.ts",
        "src/ui/index": "src/ui/index.ts",
        "src/ux/index": "src/ux/index.ts",
        "src/storybook/index": "src/storybook/index.ts",
      },
      name,
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});
