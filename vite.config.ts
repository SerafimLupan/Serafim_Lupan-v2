import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // Spunem clar unde este folderul cu codul de client
  root: path.resolve(__dirname, "client"),
  build: {
    // Vercel se așteaptă ca fișierele finale să fie în 'dist', nu 'dist/public'
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
