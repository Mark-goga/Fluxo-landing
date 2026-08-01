# SEO аудит блогу Fluxo-landing

Дата: 2026-08-01
Скоуп: static blog (`src/content/blog-static/*`) + auto-generated (`src/content/blog/generated/*`)
Файли-джерела:
- `landing-kit/src/layouts/BlogArticleLayout.astro` — static articles
- `landing-kit/src/layouts/GeneratedBlogArticleLayout.astro` — LLM-generated
- `landing-kit/src/layouts/BlogIndexLayout.astro` — blog index
- `landing-kit/src/layouts/PageLayout.astro` — global head/meta
- `landing-kit/src/pages/sitemap.xml.ts` — sitemap generator

Legend severity: 🔴 critical · 🟠 high · 🟡 medium · 🔵 low

---

## Критичні баги

### 🔴 1. Schema.org author зламано (static)
**File:** `BlogArticleLayout.astro:85`

```js
author: {
  "@type": "Organization",
  name: article.author,  // ❌ article.author є object, не string
  url: absoluteUrl("/"),
}
```

`article.author` — це object `{ id, name, role, bio, ... }`. У JSON-LD піде `[object Object]` або серіалізований object в поле `name`. Google structured-data test покаже помилку.

**Fix:**
```js
author: {
  "@type": "Person",
  name: article.author.name,
  ...(article.author.links?.website ? { url: article.author.links.website } : {}),
}
```

Також `@type` має бути `Person`, не `Organization` (автор — фізособа з іменем, посадою, bio).

---

### 🔴 2. Hero image `loading="lazy"` — руйнує LCP
**Files:**
- `BlogArticleLayout.astro:122`
- `GeneratedBlogArticleLayout.astro:162`

Hero — це LCP (Largest Contentful Paint) елемент. `loading="lazy"` відкладає завантаження до появи в viewport, що для above-the-fold картинки означає високий LCP і поганий Core Web Vitals score.

**Fix:**
```astro
<img
  src={heroImage}
  alt={article.heroAlt}
  class="article-hero-image"
  loading="eager"
  fetchpriority="high"
  width="1600"
  height="900"
  decoding="async"
/>
```

Плюс додати в `<head>`:
```astro
<link rel="preload" as="image" href={heroImage} fetchpriority="high" />
```

---

### 🔴 3. Generated post без heroImage — розсинхрон schema vs DOM
**File:** `GeneratedBlogArticleLayout.astro:95, 105, 162`

```js
const heroImageAbsolute = data.heroImage ? absoluteUrl(data.heroImage) : absoluteUrl(brandTokens.ogImagePath);
// ...
image: [heroImageAbsolute],  // schema завжди має картинку
// ...
{data.heroImage && <img ... />}  // DOM — тільки коли heroImage є
```

Schema обіцяє картинку, DOM її не має → crawler flag "structured data claims image not present". Або завжди рендери fallback, або прибирай з schema коли `!data.heroImage`.

**Fix:**
```js
image: data.heroImage ? [heroImageAbsolute] : undefined,
```

---

### 🔴 4. Generated `alt` шаблонний і англомовний
**File:** `GeneratedBlogArticleLayout.astro:162`

```astro
alt={`Illustration for: ${data.title}`}
```

Проблеми:
- завжди англійська, навіть на uk/es/de сторінках
- не описує зображення, лише повторює title
- Google Images не індексує описове ключове слово

**Fix:** додати поле `heroAlt` в generated blog schema (як у static). Sync-скрипт має вимагати його з бекенда або генерувати з title-в-локалі.

---

## OG / Twitter / соцмережі

### 🟠 5. `twitter:card="summary"` для статей з cover
**File:** `PageLayout.astro:57`

`summary` = маленький 120×120 thumb. Для articles з cover-картинкою треба `summary_large_image` = великий банер 1200×628. Різниця в CTR у стрічці — 3-5×.

**Fix:** передавати `twitterCard` як props, default `"summary_large_image"` коли `openGraphImage` присутній.

---

### 🟠 6. OG article-specific теги відсутні
**File:** `PageLayout.astro:50-60`

Немає:
- `article:published_time`
- `article:modified_time`
- `article:author`
- `article:section` (категорія)
- `article:tag` (масив тегів)

Facebook, LinkedIn показують дату публікації з цих тегів. Без них пост виглядає застарілим.

**Fix:** додати опціональні `Props`:
```ts
interface Props {
  // ...existing
  articleMeta?: {
    publishedTime?: string;   // ISO
    modifiedTime?: string;    // ISO
    author?: string;
    section?: string;
    tags?: string[];
  };
}
```

І в `<head>`:
```astro
{articleMeta?.publishedTime && <meta property="article:published_time" content={articleMeta.publishedTime} />}
{articleMeta?.modifiedTime && <meta property="article:modified_time" content={articleMeta.modifiedTime} />}
{articleMeta?.author && <meta property="article:author" content={articleMeta.author} />}
{articleMeta?.section && <meta property="article:section" content={articleMeta.section} />}
{articleMeta?.tags?.map(tag => <meta property="article:tag" content={tag} />)}
```

Викликати з обох blog-layouts.

---

### 🟠 7. OG image без розмірів/alt
**File:** `PageLayout.astro:56`

Тільки `<meta property="og:image" content={...} />`. Немає:
- `og:image:width` (1200)
- `og:image:height` (630)
- `og:image:alt`
- `og:image:type` (`image/png`)

Без розмірів Facebook робить окремий HEAD-request → перший share може не показати картинку.

**Fix:**
```astro
{openGraphImageUrl && (
  <>
    <meta property="og:image" content={openGraphImageUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    {openGraphImageAlt && <meta property="og:image:alt" content={openGraphImageAlt} />}
  </>
)}
```

---

### 🟠 8. Немає `og:locale` / `og:locale:alternate`
**File:** `PageLayout.astro`

Facebook алгоритм показує український контент українським юзерам охочіше коли `og:locale=uk_UA`. Без цього трактує як en_US.

**Fix:**
```astro
<meta property="og:locale" content={ogLocaleMap[lang]} />
{alternates.map(a => a.hreflang !== 'x-default' && a.hreflang !== lang &&
  <meta property="og:locale:alternate" content={ogLocaleMap[a.hreflang]} />
)}
```

Де `ogLocaleMap = { en: 'en_US', uk: 'uk_UA', es: 'es_ES', de: 'de_DE' }`.

---

### 🟡 9. `<meta name="author">` відсутня
**File:** `PageLayout.astro`

Дрібно, але Google/Bing використовують для author-attribution панелей.

**Fix:** `<meta name="author" content={authorName} />` в blog-layouts.

---

### 🔴 10. OG cover може не існувати
**Files:** обидва blog layouts

```js
const ogCoverPath = locale === "en"
  ? `/assets/covers/${slug}.png`
  : `/assets/covers/${slug}-${locale}.png`;
```

Файла нема на диску → 404 у сокмед-превʼю. Generated posts зараз мають лише EN cover — коли додасться uk/es/de translation, `-uk.png`/`-es.png`/`-de.png` не існує, share ламається.

**Fix (варіанти):**
1. Build-time check: у `astro:build:done` hook перевіряти всі очікувані covers.
2. Runtime fallback: `fs.existsSync(cover) ? cover : brandTokens.ogImagePath`.
3. Sync-скрипт має генерувати всі локалі covers одночасно з локалізацією.

Рекомендація: варіант 3 + build-time check як safety net.

---

## Schema.org (JSON-LD)

### 🟠 11. `publisher` без `logo`
**Files:** обидва blog layouts

**Статус:** ⏸️ Не реалізовано. Потрібен окремий контрастний public logo asset для Google rich results; наявні favicon-варіанти призначені для browser UI, а поточний `logo-fluxo.png` білий на transparent background і не є надійним на світлому фоні результатів пошуку.

Google Article Rich Results вимагає:
```js
publisher: {
  "@type": "Organization",
  name: siteConfig.name,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(brandTokens.logoPath),
    width: 600,
    height: 60,
  },
}
```

Без `logo` рich-result eligibility втрачається — google.com/search не показує brand-логотип поруч зі snippet.

---

### 🟠 12. Static `BlogPosting` — hreflang дублі на EN
**File:** `BlogArticleLayout.astro:41-45`

```js
const alternates = supportedLocales.map((opt) => {
  const match = bySlug.find((e) => e.data.locale === opt.key);
  const href = (match ?? bySlug.find((e) => e.data.locale === "en"))?.data.routePath ?? routePath;
  return { hreflang: opt.hreflang, href: absoluteUrl(href) };
});
```

Коли переклад для локалі нема — вказує на EN URL. Кілька hreflang → один URL misleads Google, викликає warning в Search Console.

**Fix (як в generated layout):**
```js
const alternates = supportedLocales
  .map((opt): AlternateLink | null => {
    const match = bySlug.find((e) => e.data.locale === opt.key);
    if (!match) return null;
    return { hreflang: opt.hreflang, href: absoluteUrl(match.data.routePath) };
  })
  .filter((a): a is AlternateLink => a !== null);
```

---

### 🟡 13. `inLanguage` тільки в static, не в generated
**File:** `GeneratedBlogArticleLayout.astro:100-119`

Додати `inLanguage: data.locale` у `articleSchema`.

---

### 🟡 14. Title generated vs static — inconsistent
- Generated: `${data.title} | ${siteConfig.name}` (`GeneratedBlogArticleLayout.astro:138`)
- Static: чистий `article.metaTitle` (`BlogArticleLayout.astro:97`), а `metaTitle` вже містить `— Fluxo`

Дубль бренду в generated: `"Title | Fluxo | Fluxo"` (якщо `title` вже має suffix). Обʼєднати правило — рекомендація: brand suffix додає layout, а `metaTitle`/`title` не мають брендувати.

---

### 🟡 19. `timeRequired` (ISO 8601) відсутнє
**File:** `BlogArticleLayout.astro:73-93`

`readTime` в static зберігається як `"5 хв читання"` — не machine-readable. Додати в schema:
```js
timeRequired: "PT5M"
```

Треба або парсити `readTime` регексом, або зберігати число хвилин окремим полем.

---

### 🟡 20. `dateModified === datePublished` fallback
`article.modifiedAt` рідко заповнюється. Коли пост реально оновлюється — треба bumpити `modifiedAt`, інакше Google не помітить fresh content.

Convention: sync-скрипт має ставити `modifiedAt = now()` при кожному rebuild.

---

## Sitemap

### 🔴 15. `<lastmod>` відсутній
**File:** `landing-kit/src/pages/sitemap.xml.ts`

Sitemap не пише `<lastmod>` для жодного URL. Гуглу важко зрозуміти свіжість → рідший recrawl.

**Fix:**
```xml
<url>
  <loc>${loc}</loc>
  <lastmod>${entry.data.modifiedAt ?? entry.data.publishedAt}</lastmod>
  ...
</url>
```

Для generated — `data.createdAt` (краще додати `updatedAt` в схему).

---

### 🟠 16. Немає `<image:image>` в sitemap
**File:** `landing-kit/src/pages/sitemap.xml.ts`

Додати namespace `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"` і для кожного article URL:

```xml
<url>
  <loc>...</loc>
  <lastmod>...</lastmod>
  <image:image>
    <image:loc>${heroImageAbsolute}</image:loc>
    <image:title>${title}</image:title>
    <image:caption>${heroAlt}</image:caption>
  </image:image>
</url>
```

Google Images ранжує через це.

---

### 🔵 17. `<priority>` / `<changefreq>` опціонально
Google ignores, але Bing/Yandex ще читають. Index page priority 1.0, articles 0.7, cookies/privacy 0.3.

---

## Static markdown вміст

### 🟠 18. `metaDescription === subtitle` дословно
Приклад `src/content/blog-static/uk/best-study-routine.md`:
```yaml
subtitle: "Більшість людей вибудовують розклад..."
metaDescription: "Більшість людей вибудовують розклад..."
```

Google може вважати duplicate content signal. `metaDescription` має бути:
- ≤160 символів
- Містити primary keyword
- Мати CTA / hook, не переказувати subtitle

**Fix:** переписати всі `metaDescription` окремо. Це ручна робота копірайтера.

---

## Компоненти / accessibility

### 🔵 21. `KeepReading.astro:23` — `alt=""` на related-post thumbs
Якщо картинка декоративна і поруч є title — OK, але додати `role="presentation"` для явності. Або (краще для SEO images) — використати `alt={post.title}`.

### 🔵 22. Footer social icons `alt=""` + `aria-hidden="true"`
OK, label поруч є. Залишити.

### 🔵 23. `Header.astro:25` logo alt = `content.footer.brandAlt`
Використовує *footer* key для *header* — плутанина, функціонально працює. Rename `content.brand.logoAlt` для обох.

### 🟡 24. Немає `<link rel="preload">` для hero image
Пункт 2 (LCP fix). Preload зменшує LCP на 200-500 ms.

---

## Пріоритет виконання

**Спочатку (bug fixes):**
1. #1 — schema author object → `[object Object]` в JSON-LD
2. #2 — hero `loading="lazy"` руйнує LCP
3. #10 — broken OG covers для не-EN
4. #15 — sitemap `<lastmod>`

**Далі (soc-media/SEO impact):**
5. #5 — `summary_large_image`
6. #7 — OG image dimensions
7. #11 — schema `publisher.logo`
8. #12 — hreflang dupes на EN
9. #6 — `article:*` OG теги

**Далі (contentcopy):**
10. #18 — унікальні meta descriptions
11. #16 — image sitemap
12. #4 — generated `heroAlt` в схемі

**Nice-to-have:**
13. #8, #9, #13, #14, #17, #19, #20, #21, #23, #24

---

## Perf чек: Core Web Vitals

Після фікса #2 + preload:
- LCP: очікуваний drop 300-800 ms на mobile
- CLS: додати `width/height` на всі `<img>` (є в fix #2, треба також у BlogIndex/KeepReading cards)
- INP: N/A для static article, не змінюється

## Наступні кроки

1. Створити гілку `fix/seo-audit-blog`
2. Пофіксити #1, #2, #10, #15 одним PR (critical)
3. Другий PR на schema/OG (#5, #6, #7, #11, #12)
4. Content pass на metaDescription (#18) — окремо
