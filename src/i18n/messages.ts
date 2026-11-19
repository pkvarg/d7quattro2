import type { Locale } from "./locales.ts";
import sk from "./messages/sk.json";
import de from "./messages/de.json";
import en from "./messages/en.json";

export type Messages = typeof en;

const messages: Record<Locale, Messages> = { sk, de, en };

/** Returns one locale's page texts. */
export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
