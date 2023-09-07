import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  experimental: {
    viewTransitions: true
  },
  integrations: [mdx(), sitemap({
    serialize(item) {
      if (/exclude-from-sitemap/.test(item.url)) {
        return undefined;
      }
      if (/your-special-page/.test(item.url)) {
        item.changefreq = "daily";
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      return item;
    }
  }), tailwind(), prefetch(), preact(),
]
});