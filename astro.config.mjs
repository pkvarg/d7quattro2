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
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-regular.woff2"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
