import { defineConfig } from "vite";

export default defineConfig({
  build: { chunkSizeWarningLimit: 1600 },
  server: {
    open: true,
    port: 1337,
  },
});
