import { peerDependencies, name } from "./package.json";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name,
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});
