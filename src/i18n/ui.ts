import type { Locale } from "./locales.ts";

const sk = {
  "nav.home": "Domov",
  "nav.blog": "Blog",
  "nav.menu": "Menu",
  "nav.main": "Hlavná navigácia",
  "nav.footer": "Pätička",
  "nav.language": "Jazyk",
  "home.title": "Vitajte",
  "blog.title": "Blog",
  "blog.description": "Novinky a články.",
  "blog.empty": "Zatiaľ tu nie sú žiadne články.",
  "blog.read": "Čítať článok",
  "blog.back": "Späť na blog",
  "notFound.title": "Stránka sa nenašla",
  "notFound.description": "Stránka, ktorú hľadáte, neexistuje.",
  "notFound.heading": "Táto stránka neexistuje",
  "notFound.text":
    "Stránka, ktorú hľadáte, mohla byť presunutá alebo odkaz, ktorý vás sem priviedol, už nie je aktuálny.",
  "notFound.back": "Späť na úvod",
};

type Key = keyof typeof sk;

const de: Record<Key, string> = {
  "nav.home": "Startseite",
  "nav.blog": "Blog",
  "nav.menu": "Menü",
  "nav.main": "Hauptnavigation",
  "nav.footer": "Fußzeile",
  "nav.language": "Sprache",
  "home.title": "Willkommen",
  "blog.title": "Blog",
  "blog.description": "Neuigkeiten und Artikel.",
  "blog.empty": "Hier gibt es noch keine Artikel.",
  "blog.read": "Artikel lesen",
  "blog.back": "Zurück zum Blog",
  "notFound.title": "Seite nicht gefunden",
  "notFound.description": "Die gesuchte Seite existiert nicht.",
  "notFound.heading": "Diese Seite existiert nicht",
  "notFound.text":
    "Die gesuchte Seite wurde möglicherweise verschoben, oder der Link, der Sie hierher geführt hat, ist veraltet.",
  "notFound.back": "Zurück zur Startseite",
};

const en: Record<Key, string> = {
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.menu": "Menu",
  "nav.main": "Main",
  "nav.footer": "Footer",
  "nav.language": "Language",
  "home.title": "Welcome",
  "blog.title": "Blog",
  "blog.description": "News and articles.",
  "blog.empty": "There are no articles here yet.",
  "blog.read": "Read article",
  "blog.back": "Back to blog",
  "notFound.title": "Page not found",
  "notFound.description": "The page you're looking for doesn't exist.",
  "notFound.heading": "This page doesn't exist",
  "notFound.text":
    "The page you're looking for may have moved, or the link that brought you here might be out of date.",
  "notFound.back": "Back to home",
};

const ui: Record<Locale, Record<Key, string>> = { sk, de, en };

/** Returns the lookup for one locale's interface strings. */
export function useTranslations(locale: Locale) {
  return (key: Key) => ui[locale][key];
}
