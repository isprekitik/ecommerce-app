import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path"; // Import path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Fix `resolve` issue
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  assetsInclude: ["**/*.JPG"], // Keep your asset include rule
});
