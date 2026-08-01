# SEO Аудит — Fluxo Landing (fluxo.today)

Дата: 2026-08-01
Автор: Claude (аудит)
Домен: https://fluxo.today/

---

## Стек і поточний стан

- Astro 6, static output
- 4 локалі: `en` (canonical `/`), `uk`, `es`, `de`
- 32 блог-пости (`blog-static` + `blog/generated`), через content-collections
- Layout-и в `landing-kit/src/layouts/`:
  - `LandingLayout.astro`
  - `PageLayout.astro`
  - `BlogIndexLayout.astro`
  - `BlogArticleLayout.astro`
  - `GeneratedBlogArticleLayout.astro`
- Trackers: Termly consent, Microsoft Clarity, GA4, Cloudflare Turnstile

---

## ✅ Що вже добре

- Canonical на кожній сторінці (`PageLayout`, `LandingLayout`)
- hreflang для 4 локалей + `x-default` (index / blog / articles)
- `sitemap.xml` генерується динамічно: landings, blog index (з `lastmod`), articles (з image), standalone (`/privacy/`, `/cookies/`)
- `robots.txt` з посиланням на sitemap
- JSON-LD:
  - `WebSite` (landing)
  - `Blog` (index)
  - `BlogPosting` + `FAQPage` (article)
- OG / Twitter повний набір; `og:image:width/height/type` на articles
- Article meta: `article:published_time`, `modified_time`, `author`, `section`
- Consent-gated analytics (`text/plain` + Termly auto-block) — GDPR коректно
- `preload` hero image, `preconnect` до Google Fonts
- Localized OG cover (`covers/{slug}-{locale}.png`)
- Related posts (внутрішня перелінковка, до 3 на пост)
- Breadcrumb component на article
- Sitemap ordered by freshness (mirror blog index)

---

## 🔴 P0 — Критичні пробіли (виправити зараз)

### 1. Landing БЕЗ FAQPage JSON-LD

Компонент `Faq.astro` рендерить FAQ на головній, але `LandingLayout` **не додає** `FAQPage` schema. У блог-статті — є, на landing — немає. Google не покаже rich-snippet.

**Файл:** `landing-kit/src/layouts/LandingLayout.astro`

**Фікс:** генерувати FAQ schema з `content.faq.items` аналогічно `BlogArticleLayout`.

```js
const faqSchema = content.faq.items.length ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.items.map((i) => ({
    "@type": "Question",
    name: i.question,
    acceptedAnswer: { "@type": "Answer", text: i.answer },
  })),
} : null;
```

### 2. Landing БЕЗ SoftwareApplication / Product schema

Fluxo — SaaS з тарифами. Зараз тільки `WebSite`. Треба `SoftwareApplication` (або `Product` + `Offer`) з `offers` зібраних з `Pricing` карток → rich-snippet ціни у SERP.

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Fluxo",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free" },
    { "@type": "Offer", "price": "9.99", "priceCurrency": "USD", "name": "Pro" }
  ]
}
```

### 3. Landing OG image БЕЗ dimensions

`LandingLayout` віддає `og:image` без `width/height/type`. Article — має. FB / LinkedIn можуть відкинути.

**Фікс:** додати `og:image:width=1200`, `og:image:height=630`, `og:image:type=image/png`.

### 4. `/unsubscribe/` індексується

Дефолт `robots: "index, follow"` у `PageLayout`. `src/pages/unsubscribe.astro` не передає override → Google може проіндексувати сторінку відписки з email у query.

**Фікс:** `<PageLayout robots="noindex, nofollow" ...>`.

### 5. `404.astro` індексується

Дефолт той самий. Хостинг має віддавати 404 status, але HTML doc — `noindex` обов'язково.

**Фікс:** `<PageLayout robots="noindex, follow" ...>` в `src/pages/404.astro`.

### 6. BreadcrumbList schema відсутній

Візуальний breadcrumb у article є, JSON-LD `BreadcrumbList` — немає. Google не покаже хлібні крихти у SERP.

**Файл:** `BlogArticleLayout.astro` + `GeneratedBlogArticleLayout.astro`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "..." },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "..." },
    { "@type": "ListItem", "position": 3, "name": "Article title" }
  ]
}
```

### 7. HowTo schema для how-to постів

`content.config.ts` має `pageType: "how_to"` для generated posts. Але `GeneratedBlogArticleLayout` віддає лише `BlogPosting`. How-to posts мають отримати додатковий `HowTo` schema (steps, tools) → окремий rich-result.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "...",
  "step": [{ "@type": "HowToStep", "name": "...", "text": "..." }]
}
```

---

## 🟠 P1 — Важливі покращення

### 8. Bing / Yandex / IndexNow

User TODO: "додати індексування як бінг".

- Bing Webmaster Tools акаунт → submit sitemap
- `<meta name="msvalidate.01" content="..." />` у `PageLayout` через env var
- [IndexNow](https://www.indexnow.org/) — post-deploy webhook пінгує Bing про змінені URL (з `dist/sitemap.xml`)
- Yandex Webmaster для RU / UA traffic

### 9. RSS / Atom feed

Немає `/rss.xml`, `/blog/rss.xml`. Blog + feed = стандарт. Дає підписки, Feedly, сигнал для Google Discover.

**Фікс:** створити `src/pages/blog/rss.xml.ts` (та per-locale) через `@astrojs/rss`.

### 10. `WebSite` schema без `SearchAction`

Landing має пошук у блозі. Додати:

```json
"potentialAction": {
  "@type": "SearchAction",
  "target": "https://fluxo.today/blog/?q={search_term_string}",
  "query-input": "required name=search_term_string"
}
```

→ Sitelinks searchbox у Google.

### 11. `Organization` schema

Немає окремого `Organization` node з `logo`, `sameAs` (соцмережі з `content.footer.socials`), `contactPoint`. E-E-A-T signal, лінкує brand у Knowledge Graph.

### 12. Google Site Verification

Немає `<meta name="google-site-verification">`. Search Console — must have. Додати у `PageLayout` через env var.

### 13. `changefreq=yearly` для блог-постів

Пости оновлюються (`modifiedAt` є), sitemap каже `yearly`. Поставити `monthly` статично, або динамічно:

- `weekly` якщо `lastmod < 30 days`
- `monthly` до 6 місяців
- `yearly` після

### 14. OG cover fallback для локалей

Article layout будує `covers/{slug}-{locale}.png` для non-EN. Якщо файл не згенеровано (`covers:generate --all` не проганявся) → 404 OG image → провал шеринга.

**Фікс:** existence check + fallback на EN cover.

### 15. Twitter card metadata неповний

Немає `twitter:site="@fluxo_app"`, `twitter:creator`. Додати в `PageLayout` через `brandTokens` або `siteConfig`.

### 16. Blog article body images — no lazy loading / alt контроль

Content collection не форсить `loading="lazy"` на images в MD body. Треба remark plugin або wrapper. Alt у markdown — не валідується schema-ю.

### 17. Google Fonts blocking

`<link rel="stylesheet" href="fonts.googleapis.com/...">` блокує рендер. Опції:

- Self-host Roboto Flex через `@fontsource-variable/roboto-flex`
- `media="print" onload="this.media='all'"` async pattern
- `font-display: swap` (вже є через `&display=swap`)

Self-host дає +10-15 LCP points.

### 18. Web App Manifest / dark `theme-color`

`theme-color` один (`#4C27E3`). Додати dark variant через `media="(prefers-color-scheme: dark)"`. `<link rel="manifest">` — Fluxo позиціонується як web app.

---

## 🟡 P2 — Nice to have

### 19. Article schema покращення

- `wordCount` — рахувати з `entry.body`
- `articleBody` (перші 500 chars) — покращує indexing
- `keywords` з тегів (якщо додасться)
- `about` / `mentions` для entity linking
- `speakable` selectors — voice search

### 20. Sitemap image для landing

`<image:image>` є для articles, немає для landings. Hero image кожної локалі варто додати.

### 21. Author pages (E-E-A-T)

`author.name`, `role`, `bio` вже в фронтматері. Створити `/authors/{slug}/` → `Person` schema, list їхніх постів. Google E-E-A-T signal 2026 — критично.

### 22. Internal linking depth

`relatedPosts` — max 3 per post. Додати pillar page ("Learning Science Hub") що лінкує на всі 32 пости → topical authority.

### 23. Canonical trailing slash consistency

Astro build → всі URL з `/`. Треба редірект на хостингу: `/blog/best-study-routine` → `/blog/best-study-routine/`. Інакше дві версії індексуються.

### 24. hreflang reciprocity

UK article посилається на EN / ES / DE — тільки якщо `bySlug` містить локаль. Fallback на EN є. **Ризик:** якщо ES версія відсутня → `hreflang="es"` → EN URL. Google може прочитати як конфлікт. Або пропустити той hreflang.

### 25. Core Web Vitals

Не міряно (потрібен prod). Рекомендую:

- PageSpeed Insights на `/`, `/blog/`, `/blog/best-study-routine/`
- LCP: hero image preload є, перевірити < 2.5s
- CLS: перевірити чи hero image має `aspect-ratio`
- INP: Termly скрипт може блокувати main thread

### 26. Header nav "About us" → `#cta`

Веде на CTA, не на About сторінку — misleading. Або створити `/about/` (E-E-A-T), або перейменувати пункт.

### 27. Footer blog links hardcoded

`locales.ts:414-424` — захардкоджений список 7 постів у футері. Якщо slug перейменується → 404. Генерувати з collection + featured tag.

### 28. `robots.txt` — no Disallow

Permissive — добре. Варто додати:

```
User-agent: *
Allow: /
Disallow: /unsubscribe/
Disallow: /*?*from=

Sitemap: https://fluxo.today/sitemap.xml
```

Блокує utm / tracking query variants від індексації.

### 29. AI crawlers policy

2026 — час явно вирішити щодо GPTBot, ClaudeBot, Google-Extended. Дефолт зараз — дозволено. Додати блок якщо контент — competitive moat.

### 30. Sitemap index file

При зростанні до 500+ URL — розділити на `sitemap-pages.xml`, `sitemap-blog.xml`, `sitemap-index.xml`. Зараз рано.

---

## Пріоритетний план дій

### Тиждень 1 (P0)

1. `noindex` для `/unsubscribe/` і `404`
2. `FAQPage` JSON-LD на landing
3. `SoftwareApplication` schema на landing
4. OG image dimensions на landing
5. `BreadcrumbList` JSON-LD в article layouts
6. `HowTo` schema для how-to posts

### Тиждень 2 (P1)

7. Google Search Console + verification meta
8. Bing Webmaster + IndexNow post-deploy hook
9. RSS feed (`/blog/rss.xml`, per-locale)
10. `Organization` schema з `sameAs`, `logo`
11. Twitter `site` / `creator` meta
12. Sitemap `changefreq` динамічний
13. OG cover fallback existence check

### Тиждень 3 (P2)

14. Self-host Roboto Flex
15. `/about/`, `/authors/{slug}/` сторінки
16. Web manifest + dark `theme-color`
17. `robots.txt` Disallow query variants
18. AI-crawler policy рішення
19. Замінити hardcoded footer blog links на generated
20. Core Web Vitals audit + фікс

---

## Файли для правки (мапа)

| Задача | Файл |
|---|---|
| FAQPage / SoftwareApplication landing schema | `landing-kit/src/layouts/LandingLayout.astro` |
| OG dimensions landing | `landing-kit/src/layouts/LandingLayout.astro` |
| BreadcrumbList schema | `landing-kit/src/layouts/BlogArticleLayout.astro`, `GeneratedBlogArticleLayout.astro` |
| HowTo schema | `landing-kit/src/layouts/GeneratedBlogArticleLayout.astro` |
| noindex 404 / unsubscribe | `src/pages/404.astro`, `src/pages/unsubscribe.astro` |
| Google / Bing verification | `landing-kit/src/layouts/PageLayout.astro`, `LandingLayout.astro` |
| Twitter site/creator | `landing-kit/src/layouts/PageLayout.astro` |
| Organization / SearchAction | `landing-kit/src/layouts/LandingLayout.astro` |
| Sitemap changefreq | `landing-kit/src/pages/sitemap.xml.ts` |
| Sitemap landing image | `landing-kit/src/pages/sitemap.xml.ts` |
| robots Disallow | `landing-kit/src/pages/robots.txt.ts` |
| RSS feeds | `src/pages/blog/rss.xml.ts` (новий) |
| OG cover fallback | `landing-kit/src/layouts/BlogArticleLayout.astro` |
| Font self-host | `package.json`, `src/styles/styles.css`, `brand.ts` |
| Web manifest | `public/site.webmanifest` (новий), `LandingLayout.astro` |
| Author pages | `src/pages/authors/[slug].astro` (новий) |
