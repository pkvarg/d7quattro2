import type { MiddlewareHandler } from "astro";

/** Required by `i18n.routing: "manual"`. Routes are served as written. */
export const onRequest: MiddlewareHandler = (_context, next) => next();
