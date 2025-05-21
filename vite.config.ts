import { peerDependencies, name } from "./package.json";
import yamlLoader from "./plugins/yaml";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [yamlLoader],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: "src/index.ts",
        ui: "src/ui/index.ts",
        ux: "src/ux/index.ts",
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
