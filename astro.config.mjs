import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import preact from "@astrojs/preact";
import vercel from '@astrojs/vercel/static';
export default defineConfig({
  site: "https://fraserws.dev",
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

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
  }), tailwind(), prefetch(), preact({ compat: true }),
  ]
});