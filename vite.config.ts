import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), env({ prefix: "VITE", mountedPath: "process.env" })],
  base: "/Idol",
  build: {
    outDir: "dist",
  },
});
