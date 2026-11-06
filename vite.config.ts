import devServer from "@hono/vite-dev-server"
import path from "path"
const __dirname = import.meta.dirname
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    {
      name: "kimi-preview-host",
      config(config) {
        const hosts = config.server?.allowedHosts;
        if (hosts === true || hosts?.includes("3000.proxy.internal")) return;
        return { server: { allowedHosts: ["3000.proxy.internal"] } };
      },
    },
    devServer({ entry: "api/boot.ts", exclude: [/^\/(?!api\/).*$/] }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Capital Study — Interactive Marx Reader",
        short_name: "Capital Study",
        description: "A source-based interactive course through Marx's Capital.",
        theme_color: "#f4efdc",
        background_color: "#f4efdc",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "/capital-study-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          { src: "/capital-study-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,svg,woff,woff2}"],
        navigateFallback: null,
        runtimeCaching: [{ urlPattern: ({ request }) => request.mode === "navigate", handler: "NetworkOnly" }]
      }
    })
  ],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@contracts": path.resolve(__dirname, "./contracts"),
      "@db": path.resolve(__dirname, "./db"),
      "db": path.resolve(__dirname, "./db"),
    },
  },
  envDir: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
