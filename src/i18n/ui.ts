import type { Locale } from "./locales.ts";

const sk = {
  "nav.menu": "Menu",
  "nav.main": "Hlavná navigácia",
  "nav.footer": "Pätička",
  "nav.language": "Jazyk",
  "gallery.enlarge": "Zväčšiť obrázok",
  "gallery.slide": "Prejsť na snímku",
  "gallery.previous": "Predchádzajúca snímka",
  "gallery.next": "Ďalšia snímka",
  "notFound.title": "Stránka sa nenašla",
  "notFound.description": "Stránka, ktorú hľadáte, neexistuje.",
  "notFound.heading": "Táto stránka neexistuje",
  "notFound.text":
    "Stránka, ktorú hľadáte, mohla byť presunutá alebo odkaz, ktorý vás sem priviedol, už nie je aktuálny.",
  "notFound.back": "Späť na úvod",
};

type Key = keyof typeof sk;

const de: Record<Key, string> = {
  "nav.menu": "Menü",
  "nav.main": "Hauptnavigation",
  "nav.footer": "Fußzeile",
  "nav.language": "Sprache",
  "gallery.enlarge": "Bild vergrößern",
  "gallery.slide": "Zu Bild",
  "gallery.previous": "Vorheriges Bild",
  "gallery.next": "Nächstes Bild",
  "notFound.title": "Seite nicht gefunden",
  "notFound.description": "Die gesuchte Seite existiert nicht.",
  "notFound.heading": "Diese Seite existiert nicht",
  "notFound.text":
    "Die gesuchte Seite wurde möglicherweise verschoben, oder der Link, der Sie hierher geführt hat, ist veraltet.",
  "notFound.back": "Zurück zur Startseite",
};

const en: Record<Key, string> = {
  "nav.menu": "Menu",
  "nav.main": "Main",
  "nav.footer": "Footer",
  "nav.language": "Language",
  "gallery.enlarge": "Enlarge image",
  "gallery.slide": "Go to slide",
  "gallery.previous": "Previous slide",
  "gallery.next": "Next slide",
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
