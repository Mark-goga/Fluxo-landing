import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const distDir = join(root, "dist");

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
};

const prefixFor = (htmlPath) => {
  const relativeDir = relative(distDir, dirname(htmlPath));

  if (!relativeDir) {
    return "./";
  }

  const depth = relativeDir.split(sep).filter(Boolean).length;

  return "../".repeat(depth);
};

for (const htmlPath of await walk(distDir)) {
  const prefix = prefixFor(htmlPath);
  const html = await readFile(htmlPath, "utf8");
  const next = html
    .replaceAll('href="/_astro/', `href="${prefix}_astro/`)
    .replaceAll('src="/_astro/', `src="${prefix}_astro/`)
    .replaceAll('href="/assets/', `href="${prefix}assets/`)
    .replaceAll('src="/assets/', `src="${prefix}assets/`)
    .replaceAll('href="/script.js"', `href="${prefix}script.js"`)
    .replaceAll('src="/script.js"', `src="${prefix}script.js"`);

  if (next !== html) {
    await writeFile(htmlPath, next);
  }
}
