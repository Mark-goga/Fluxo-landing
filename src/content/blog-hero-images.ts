export const BLOG_HERO_IMAGES = [
  "/assets/card-1.png",
  "/assets/card-2.png",
  "/assets/card-3.png",
] as const;

export type BlogHeroImage = (typeof BLOG_HERO_IMAGES)[number];

export const isBlogHeroImage = (value: unknown): value is BlogHeroImage =>
  typeof value === "string" && BLOG_HERO_IMAGES.includes(value as BlogHeroImage);
