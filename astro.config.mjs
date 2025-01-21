import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: "server",
  adapter: netlify(),
  image: {
    service: {
      entrypoint: "@astrojs/image/netlify",
    },
    domains: ["netlify.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.netlify.app",
      },
    ],
  },
  build: {
    inlineStylesheets: "always",
    assets: "assets",
    assetsPrefix: "https://cdn.netlify.app",
  },
  vite: {
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 4096, // 4kb
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            "ui-components": ["@/components/ui", "@/components/magicui"],
          },
        },
      },
    },
    ssr: {
      noExternal: ["@radix-ui/*"],
    },
  },
});
