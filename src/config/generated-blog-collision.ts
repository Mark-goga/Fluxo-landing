import type { LocaleKey } from "./site";

export const HUMAN_BLOG_SLUGS: readonly string[] = [
  "best-study-routine",
  "best-way-to-learn-new-vocabulary",
  "how-to-study-while-working-full-time",
  "the-second-brain-for-learning",
  "how-to-learn-without-forgetting",
  "how-to-remember-what-you-learn",
  "how-to-track-learning-progress",
] as const;

export const HUMAN_LOCALES: readonly LocaleKey[] = ["en", "uk", "es", "de"] as const;

export type GeneratedRouteEntry = { locale: LocaleKey; slug: string };

export const isCollision = (entry: GeneratedRouteEntry): boolean =>
  HUMAN_BLOG_SLUGS.includes(entry.slug);

export const assertNoRouteCollision = (entries: readonly GeneratedRouteEntry[]): void => {
  const collisions = entries.filter(isCollision);
  if (collisions.length > 0) {
    const list = collisions
      .map((c) => `${c.locale}/${c.slug}`)
      .join(", ");
    throw new Error(
      `Generated blog entries collide with human-authored routes: ${list}. ` +
        `Rename the generated slug or remove the human page before publishing.`,
    );
  }
};
