import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  trailingSlash: "always",
  site: "https://idexsupply.nl",
  integrations: [sitemap()],
});
