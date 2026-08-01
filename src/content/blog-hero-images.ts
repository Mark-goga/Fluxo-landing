import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Pool of blog hero cards. Auto-discovered from public/assets/ at import time
// by matching /card-<digits>.<ext>/. Drop any card-*.png|webp|jpg|... file
// into public/assets/ and it joins the pool — no code change needed.
const CARD_FILENAME_RE = /^card-(\d+)\.(png|webp|jpe?g|gif|avif|svg)$/i;

const publicAssetsDir = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../../public/assets",
);

const discoverCards = (): string[] => {
  let entries: string[];
  try {
    entries = readdirSync(publicAssetsDir);
  } catch {
    return [];
  }
  return entries
    .filter((name) => CARD_FILENAME_RE.test(name))
    .sort((a, b) => {
      const na = Number(a.match(CARD_FILENAME_RE)![1]);
      const nb = Number(b.match(CARD_FILENAME_RE)![1]);
      return na - nb;
    })
    .map((name) => `/assets/${name}`);
};

export const BLOG_HERO_IMAGES: readonly string[] = discoverCards();

export type BlogHeroImage = string;

export const HERO_IMAGE_PATH_RE =
  /^\/assets\/card-\d+\.(png|webp|jpe?g|gif|avif|svg)$/i;

export const isBlogHeroImage = (value: unknown): value is BlogHeroImage =>
  typeof value === "string" && HERO_IMAGE_PATH_RE.test(value);
