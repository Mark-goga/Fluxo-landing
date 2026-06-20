export type LocaleKey = "en" | "uk";

const requiredEnv = (key: string) => {
  const value = import.meta.env[key] ?? process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const optionalEnv = (key: string) => import.meta.env[key] ?? process.env[key] ?? "";

const normalizeAssetPath = (path: string) => path.replace(/^\/+/, "");

export const siteConfig = {
  name: requiredEnv("SITE_NAME"),
  clarityProjectId: requiredEnv("CLARITY_PROJECT_ID"),
  heroImagePath: normalizeAssetPath(requiredEnv("HERO_IMAGE_PATH")),
  scriptPath: normalizeAssetPath(requiredEnv("SITE_SCRIPT_PATH")),
  // Termly website UUID for the cookie-consent banner. Optional: when empty,
  // the banner simply does not render (e.g. local builds without a Termly id).
  termlyUuid: optionalEnv("TERMLY_WEBSITE_UUID"),
};

const rawSiteUrl = requiredEnv("SITE_URL");

export const siteUrl = rawSiteUrl.endsWith("/") ? rawSiteUrl : `${rawSiteUrl}/`;

export const absoluteUrl = (path: string) => new URL(path, siteUrl).href;

export const pageAssetUrl = (pagePath: string, assetPath: string) => {
  const depth = pagePath.split("/").filter(Boolean).length;
  const prefix = depth === 0 ? "./" : "../".repeat(depth);

  return `${prefix}${normalizeAssetPath(assetPath)}`;
};

export const supportedLocales = [
  {
    key: "en",
    hreflang: "en",
    path: "/",
  },
  {
    key: "uk",
    hreflang: "uk",
    path: "/uk/",
  },
] as const;

export const xDefaultPath = "/";
