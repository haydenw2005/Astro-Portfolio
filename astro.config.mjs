import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: netlify({ imageCDN: true }),
});
