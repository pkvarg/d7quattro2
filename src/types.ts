/** Page metadata for `BaseHead` and layouts. */
export interface SeoProps {
  /** Page title. The site name is appended. */
  title?: string;
  /** Page and social description. Defaults to the hero text of the page locale. */
  description?: string;
  /** Title shown when the page is shared. Defaults to the page title. */
  socialTitle?: string;
  /** Text shown when the page is shared. Defaults to the description. */
  socialDescription?: string;
  /** Social image. Defaults to `/og-image.jpg`. */
  image?: string;
  /** Open Graph type. */
  type?: "website" | "article";
  /** Override `NOINDEX_ROUTES` for this page's robots tag. */
  noindex?: boolean;
}

/** One titled block of a legal page. */
export interface LegalSection {
  /** Anchor id. */
  id: string;
  /** Section heading. */
  title: string;
  /** A string is a paragraph; an array of strings is a bullet list. */
  body: (string | string[])[];
}

/** Content of a legal page such as the privacy policy. */
export interface LegalText {
  /** Page title. */
  title: string;
  /** Line under the title, such as the effective date. */
  effective: string;
  /** Opening paragraph. */
  intro?: string;
  /** Page sections in order. */
  sections: LegalSection[];
}
