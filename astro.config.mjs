import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/*.{jsx,tsx}"],
    }),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: "server",
  adapter: netlify(),

  vite: {
    ssr: {
      noExternal: ["@radix-ui/*", "framer-motion", "react-icon-cloud"],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion", "react-icon-cloud"],
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
          },
        },
        external: ["virtual:image-service"],
      },
    },
  },
});
