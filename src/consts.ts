import { LOCALES } from "./i18n/locales.ts";

/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "D7 Quattro";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://astro.d7quattro.at";
/** Shows the under-construction notice on every page. */
export const UNDER_CONSTRUCTION = true;
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/example-components",
  ...LOCALES.map((locale) => `/${locale}/404`),
];
/** Umami tracker script. Loaded only after the visitor accepts measurement. */
export const ANALYTICS_SRC = "https://analytics.pictusweb.com/script.js";
/** Umami website ID for this site. */
export const ANALYTICS_WEBSITE_ID = "f7fd685d-176c-4dc2-8ee6-82b68ebd6f1e";
