import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import icon from "astro-icon";
import { expressiveCodeOptions, siteConfig } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt(),
    icon(), // Adding the icon integration with default settings
    webmanifest({
      name: siteConfig.title,
      short_name: siteConfig.title,
      description: siteConfig.description,
      lang: siteConfig.lang,
      background_color: "#FFFFFF", // Neutral-000 from tokens.json
      theme_color: "#1869CC", // Brand-primary-600 from tokens.json
      display: "standalone",
      icons: [
        {
          src: "/icon.svg",
          sizes: "any",
          type: "image/svg+xml"
        }
      ]
    })
  ],
  vite: {
    plugins: [tailwind()]
  }
});
