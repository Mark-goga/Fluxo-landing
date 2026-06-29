import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const header = read("src/components/Header.astro");
const footer = read("src/components/Footer.astro");
const hero = read("src/components/Hero.astro");
const features = read("src/components/Features.astro");
const landing = read("src/components/LandingPage.astro");
const blog = read("src/layouts/BlogArticleLayout.astro");

assert.match(header, /const resolveHeaderHref = /, "Header should resolve in-page anchors against the locale home path.");
assert.match(header, /data-modal-open/, "Header CTA should open the lead modal.");
assert.match(header, /data-from="header-cta"/, "Header CTA should identify its lead source.");
assert.match(footer, /const resolveFooterHref = /, "Footer should resolve in-page anchors against the locale home path.");

assert.match(hero, /data-modal-open/, "Hero primary CTA should open the lead modal.");
assert.match(hero, /data-from="hero-primary"/, "Hero primary CTA should identify its lead source.");

assert.match(features, /data-modal-open/, "Features CTA should open the lead modal.");
assert.match(features, /data-from="features-cta"/, "Features CTA should identify its lead source.");

for (const [name, source] of [
  ["landing", landing],
  ["blog", blog],
]) {
  assert.match(source, /buildLeadMetadata/, `${name} lead flow should build structured metadata.`);
  assert.match(source, /page: window\.location\.href/, `${name} metadata should include the full page URL.`);
  assert.match(source, /path: window\.location\.pathname/, `${name} metadata should include the path.`);
  assert.match(source, /referrer: document\.referrer/, `${name} metadata should include referrer.`);
  assert.match(source, /timezone: Intl\.DateTimeFormat\(\)\.resolvedOptions\(\)\.timeZone/, `${name} metadata should include timezone.`);
}
