/** Locales the site is published in. The order sets the language switcher. */
export const LOCALES = ["sk", "de", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Locale the root URL redirects to and untranslated pages render in. */
export const DEFAULT_LOCALE: Locale = "sk";

/** BCP 47 tags used for `hreflang`, the sitemap, and date formatting. */
export const LOCALE_TAGS: Record<Locale, string> = {
  sk: "sk-SK",
  de: "de-DE",
  en: "en-US",
};

/** Names shown to assistive technology in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  sk: "Slovenčina",
  de: "Deutsch",
  en: "English",
};

/** Checks whether a string is one of the site's locales. */
export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Narrows `Astro.currentLocale`, falling back to the default locale. */
export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Builds a locale-prefixed path with a trailing slash. */
export function localizePath(locale: Locale, path = "/"): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** Swaps the locale of a localized path. Returns nothing for other paths. */
export function translatePath(
  pathname: string,
  locale: Locale,
): string | undefined {
  const [first, ...rest] = pathname.replace(/^\/+/, "").split("/");
  return isLocale(first) ? localizePath(locale, rest.join("/")) : undefined;
}
