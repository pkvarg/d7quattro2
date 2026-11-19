type ImageModule = { default: ImageMetadata };

const order = (path: string) => Number(path.match(/-(\d+)\.\w+$/)?.[1] ?? 0);

const sorted = (modules: Record<string, ImageModule>) =>
  Object.entries(modules)
    .sort(([a], [b]) => order(a) - order(b))
    .map(([, module]) => module.default);

/** Exterior renders in file-number order. */
export const exteriorImages = sorted(
  import.meta.glob<ImageModule>("../assets/images/exterior/*.webp", {
    eager: true,
  }),
);

/** Interior renders in file-number order. */
export const interiorImages = sorted(
  import.meta.glob<ImageModule>("../assets/images/interior/*.webp", {
    eager: true,
  }),
);
