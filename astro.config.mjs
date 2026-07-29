import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

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
