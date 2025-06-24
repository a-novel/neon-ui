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
        index: "src/index.ts",
        ui: "src/ui/index.ts",
        ux: "src/ux/index.ts",
        storybook: "src/storybook/index.ts",
      },
      name,
      formats: ["es"],
      fileName: (format, entryName) =>
        entryName === "index" ? `${entryName}.${format}.js` : `${entryName}/${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});
