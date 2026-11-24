import { LOCALES } from "./i18n/locales.ts";

/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "D7 Quattro";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://d7quattro.at";
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
export const ANALYTICS_WEBSITE_ID = "e569ef9d-e5b9-4220-bba6-f9ecf701d987";
