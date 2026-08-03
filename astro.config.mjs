import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { verifyOgCovers } from "./landing-kit/src/scripts/verify-og-covers.mjs";
import rehypeLazyImages from "./landing-kit/src/lib/rehype-lazy-images.mjs";

const requiredEnv = (env, key) => {
  const value = env[key] ?? process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    output: "static",
    site: requiredEnv(env, "SITE_URL"),
    base: requiredEnv(env, "ASTRO_BASE_PATH"),
    markdown: {
      rehypePlugins: [rehypeLazyImages],
    },
    integrations: [
      {
        name: "verify-og-covers",
        hooks: {
          "astro:build:done": ({ dir }) => {
            verifyOgCovers({
              outDir: fileURLToPath(dir),
              publicDir: resolve(projectRoot, "public"),
            });
          },
        },
      },
    ],
    vite: {
      resolve: {
        preserveSymlinks: true,
        alias: {
          "@site": resolve(projectRoot, "src"),
          "@kit": resolve(projectRoot, "landing-kit/src"),
        },
      },
    },
  };
});
