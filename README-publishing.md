# Fluxo Content Publishing

This document describes the DB → Git publishing pipeline that turns editorially-approved SEO content from the MindAI backend into committed markdown files under `src/content/blog/generated/` and rebuilds the static site.

## Flow

1. Editors approve a content rebuild in the MindAI admin dashboard.
2. Backend records the rebuild and issues `workflow_dispatch` against this repo with `rebuildId` and `applicationId`.
3. GitHub Actions (`.github/workflows/publish-content.yml`) checks out `main`, verifies `applicationId` matches `secrets.APPLICATION_ID`, and runs `scripts/sync-blog-content.ts` via `tsx`.
4. The sync script `GET`s `${BACKEND_URL}/content-seo/rebuilds/${rebuildId}/export` using `X-API-Key`, validates the payload with a Zod schema mirroring the backend contract, and writes each post as `.md` under `src/content/blog/generated/{en,uk,es,de}/`.
5. Files are staged into a sibling temp dir and swapped atomically. Round-trip parsing is verified per file. A `manifest.json` is written alongside.
6. The workflow generates OG covers, then runs `npx astro check` and `npm run build`. Vercel only builds the already-committed static site; it never syncs content from the backend.
7. Only `src/content/blog/generated/**` and the two dynamic route files (`src/pages/blog/[slug].astro`, `src/pages/[locale]/blog/[slug].astro`) are committed. Human-authored blog pages are never touched.
8. Workflow POSTs `.../rebuilds/${rebuildId}/complete` (or `.../fail`) with the resulting commit SHA and file map so the backend can mark the rebuild done.

## Required GitHub secrets

- `BACKEND_URL` — Base URL of the MindAI backend (no trailing slash), e.g. `https://api.mindai.example.com`.
- `PUBLISHING_API_KEY` — API key sent as `X-API-Key` on backend calls. Rotate via the backend admin.
- `APPLICATION_ID` — UUID of this Fluxo application in the MindAI DB. Guards against dispatch mixups; the workflow refuses to run if the input mismatches.

## Local dry-run

```bash
BACKEND_URL=https://api.mindai.example.com \
PUBLISHING_API_KEY=xxxx \
APPLICATION_ID=019e92d8-b331-7321-a2fc-a0f82fc0d2c3 \
npx tsx scripts/sync-blog-content.ts \
  --rebuild-id <uuid> \
  --api-key "$PUBLISHING_API_KEY" \
  --backend-url "$BACKEND_URL" \
  --managed-root src/content/blog/generated \
  --application-id "$APPLICATION_ID"
```

Then run `npx astro check && npm run build` to confirm the site builds.

## Guardrails

- Collisions with human-authored blog slugs are rejected at build time (`src/config/generated-blog-collision.ts`).
- `pageType` is a discriminated union — invalid payloads are rejected by Zod.
- The sync script refuses to touch any path outside `src/content/blog/generated`.
