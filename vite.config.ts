import { enhancedImages } from '@sveltejs/enhanced-img';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    enhancedImages(),
  ],
  server: {
    port: 4000,
  }
});
