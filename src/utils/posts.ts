import { getCollection, type CollectionEntry } from "astro:content";
import { isLocale, type Locale } from "../i18n/locales.ts";

export type Post = CollectionEntry<"posts">;

/** Splits a post id such as `de/welcome` into its locale and slug. */
export function parsePostId(id: string): { locale?: Locale; slug: string } {
  const [first, ...rest] = id.split("/");
  return isLocale(first)
    ? { locale: first, slug: rest.join("/") }
    : { slug: id };
}

/** Lists one locale's posts, newest first. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection(
    "posts",
    ({ id }) => parsePostId(id).locale === locale,
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
