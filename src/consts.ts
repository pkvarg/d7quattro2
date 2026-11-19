/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "D7 Quattro";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Exclusive residences in Wolfsthal, Austria, 15 minutes from Bratislava and 35 minutes from Vienna.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://astro.d7quattro.at";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];
/** Umami tracker script. Loaded only after the visitor accepts measurement. */
export const ANALYTICS_SRC = "https://analytics.pictusweb.com/script.js";
/** Umami website ID for this site. */
export const ANALYTICS_WEBSITE_ID = "356f16bf-27a7-4110-93a8-c2b381de85fb";
