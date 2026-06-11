import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/edu-portals/myPAW/",
  server: {
    port: 5173,
  },
});
