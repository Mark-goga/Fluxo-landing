# Multilingual SEO Landing Template

Static Astro template for fast landing pages with multilingual routing, SEO metadata, hreflang, sitemap, robots.txt,
JSON-LD, Open Graph, Twitter cards, Microsoft Clarity events, and file-friendly static build output.

The template is intentionally small: header, hero, and footer. Build the real landing by editing localized content and
adding only the sections the domain needs.

## What Is Included

- Astro static output, no SSR.
- English main page at `/`.
- Ukrainian secondary page at `/uk/`.
- No `/en/` route, because English is already canonical at `/`.
- Centralized SEO and localized copy in `src/data/locales.ts`.
- Environment-driven site config in `src/config/site.ts`.
- Generated `robots.txt` and `sitemap.xml`.
- Microsoft Clarity loader and `data-clarity-event` click tracking.
- Post-build relative asset paths, so `dist/index.html` can be opened directly in a browser.

## Local Setup

```bash
npm install
```

Create or edit `.env`:

```env
SITE_URL=https://example.com
ASTRO_BASE_PATH=./
SITE_NAME=Landing Template
CLARITY_PROJECT_ID=your_clarity_project_id
HERO_IMAGE_PATH=assets/hero-template.png
SITE_SCRIPT_PATH=script.js
```

Run development server:

```bash
npm run dev
```

Build static files:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

The build is written to `dist/`. You can also open `dist/index.html` directly because the build step rewrites local
asset URLs to relative paths.

## Creating A New Landing

1. Update `.env`.
2. Replace `SITE_URL` with the production domain.
3. Replace `SITE_NAME` with the product or brand name.
4. Add the real Microsoft Clarity project id to `CLARITY_PROJECT_ID`.
5. Replace `public/assets/hero-template.png` or point `HERO_IMAGE_PATH` to a new image.
6. Edit English and Ukrainian content in `src/data/locales.ts`.
7. Add new components only when the landing needs more than the current header, hero, and footer.
8. Run `npm run build`.
9. Check `dist/index.html`, `dist/uk/index.html`, `dist/sitemap.xml`, and `dist/robots.txt`.

## File Map

- `src/config/site.ts`  
  Reads required environment variables and defines locale routes.

- `src/data/locales.ts`  
  Main place to edit localized text, SEO metadata, hero copy, CTA labels, footer links, and JSON-LD descriptions.

- `src/layouts/LandingLayout.astro`  
  Owns `<html>`, `<head>`, canonical, hreflang, OG, Twitter cards, JSON-LD, Clarity, CSS, and JS loading.

- `src/components/Header.astro`  
  Brand, language switcher, and header CTA.

- `src/components/Hero.astro`  
  First viewport content and hero image.

- `src/components/Footer.astro`  
  Copyright and simple footer links.

- `src/pages/index.astro`  
  English main route at `/`.

- `src/pages/uk/index.astro`  
  Ukrainian route at `/uk/`.

- `src/pages/sitemap.xml.ts`  
  Generates sitemap and hreflang alternates from `supportedLocales`.

- `src/pages/robots.txt.ts`  
  Generates robots.txt with the configured sitemap URL.

- `scripts/fix-static-paths.mjs`  
  Rewrites local asset paths in built HTML so static files work from `file://` and regular hosting.

## SEO Checklist

Before deploying a new landing, confirm:

- `SITE_URL` is the final production domain.
- English canonical URL is `SITE_URL/`.
- Ukrainian canonical URL is `SITE_URL/uk/`.
- `sitemap.xml` contains only canonical language routes.
- `hreflang="en"`, `hreflang="uk"`, and `hreflang="x-default"` are present.
- Page title and description are unique per language.
- Open Graph and Twitter metadata match the page intent.
- JSON-LD description matches the actual landing.
- Hero image path exists and is referenced by OG/Twitter image URLs.
- Clarity id is set before production traffic.

## Clarity Events

Any clickable element with `data-clarity-event` is tracked by `public/script.js`.

Example:

```astro
<a class="button" href="#signup" data-clarity-event="hero_signup">
  Join waitlist
</a>
```

Use short, stable event names:

- `hero_primary_click`
- `header_cta_click`
- `pricing_click`
- `signup_submit`

## Adding Another Language

1. Add a new key to `LocaleKey` in `src/config/site.ts`.
2. Add the route to `supportedLocales`.
3. Add a matching content object in `src/data/locales.ts`.
4. Create a page in `src/pages/<locale>/index.astro`.
5. Update language links in each locale object.
6. Run `npm run build` and inspect `dist/sitemap.xml`.

Keep one canonical URL per language. Avoid alias routes unless you intentionally need a redirect or compatibility page.

## Guidance For AI Agents

This repository is a landing-page template, not a finished product landing. When adapting it:

- Preserve static Astro output.
- Preserve canonical, hreflang, sitemap, robots.txt, OG, Twitter, JSON-LD, and Clarity behavior.
- Do not introduce duplicated language routes such as `/en/` when `/` is already English.
- Edit content in `src/data/locales.ts` before changing components.
- Keep components small and purpose-specific.
- Add sections as new components only when the landing needs them.
- Keep `src/layouts/LandingLayout.astro` responsible for SEO and document-level markup.
- Keep environment-specific values in `.env` or deployment environment variables.
- Run `npm run build` after changes and inspect generated HTML.

## Deployment

Deploy the contents of `dist/` to any static host.

For a production domain:

```bash
SITE_URL=https://your-domain.com npm run build
```

If the host injects environment variables, set:

- `SITE_URL`
- `ASTRO_BASE_PATH`
- `SITE_NAME`
- `CLARITY_PROJECT_ID`
- `HERO_IMAGE_PATH`
- `SITE_SCRIPT_PATH`
