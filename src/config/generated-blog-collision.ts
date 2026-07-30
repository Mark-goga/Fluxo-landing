// Human-authored blog slugs — dynamic route (`blog/[slug]`) refuses to build
// generated posts that collide with any of these.
export const HUMAN_BLOG_SLUGS: readonly string[] = [
  "best-study-routine",
  "best-way-to-learn-new-vocabulary",
  "how-to-study-while-working-full-time",
  "the-second-brain-for-learning",
  "how-to-learn-without-forgetting",
  "how-to-remember-what-you-learn",
  "how-to-track-learning-progress",
] as const;
