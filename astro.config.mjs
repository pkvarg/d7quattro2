// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";
import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS } from "./src/i18n/locales.ts";

export default defineConfig({
  site: SITE_URL,
  redirects: { "/": `/${DEFAULT_LOCALE}/` },
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: "manual",
  },
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
      i18n: { defaultLocale: DEFAULT_LOCALE, locales: LOCALE_TAGS },
    }),
  ],
  fonts: [
    {
      name: "Gilda Display",
      cssVariable: "--font-gilda",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      name: "Figtree",
      cssVariable: "--font-figtree",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
