import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "@a-novel/neon-ui",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
