export type LocaleKey = "en" | "uk" | "es";

const requiredEnv = (key: string) => {
  const value = import.meta.env[key] ?? process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const optionalEnv = (key: string) => import.meta.env[key] ?? process.env[key] ?? "";

const normalizeAssetPath = (path: string) => path.replace(/^\/+/, "");

const stripTrailingSlash = (url: string) => url.replace(/\/+$/, "");

export const siteConfig = {
  name: requiredEnv("SITE_NAME"),
  clarityProjectId: requiredEnv("CLARITY_PROJECT_ID"),
  heroImagePath: normalizeAssetPath(requiredEnv("HERO_IMAGE_PATH")),
  scriptPath: normalizeAssetPath(requiredEnv("SITE_SCRIPT_PATH")),

  termlyUuid: optionalEnv("TERMLY_WEBSITE_UUID"),

  gaMeasurementId: optionalEnv("GA_MEASUREMENT_ID"),

  leadsApiUrl: stripTrailingSlash(requiredEnv("LEADS_API_URL")),
  applicationId: requiredEnv("APPLICATION_ID"),
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
  {
    key: "es",
    hreflang: "es",
    path: "/es/",
  },
] as const;

export const xDefaultPath = "/";
