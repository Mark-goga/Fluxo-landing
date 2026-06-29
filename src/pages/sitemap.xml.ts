import { absoluteUrl, supportedLocales, xDefaultPath, type LocaleKey } from "../config/site";
import { blogContent, type BlogSlug } from "../data/locales";

const blogSlugs = Object.keys(blogContent.en) as BlogSlug[];

const alternateLinks = (hrefFor: (locale: (typeof supportedLocales)[number]) => string, xDefaultHref: string) =>
  [
    ...supportedLocales.map(
      (alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${hrefFor(alternate)}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />`,
  ].join("\n");

const localeUrls = supportedLocales
  .map(
    (locale) => `  <url>
    <loc>${absoluteUrl(locale.path)}</loc>
${alternateLinks((alternate) => absoluteUrl(alternate.path), absoluteUrl(xDefaultPath))}
  </url>`,
  )
  .join("\n");

const blogUrls = blogSlugs
  .map((slug) => {
    const pathFor = (locale: LocaleKey) => (blogContent[locale] ?? blogContent.en)[slug].routePath;
    const xDefaultHref = absoluteUrl(pathFor("en"));

    return supportedLocales
      .map(
        (locale) => `  <url>
    <loc>${absoluteUrl(pathFor(locale.key))}</loc>
${alternateLinks((alternate) => absoluteUrl(pathFor(alternate.key)), xDefaultHref)}
  </url>`,
      )
      .join("\n");
  })
  .join("\n");

const standaloneUrls = ["/privacy/", "/cookies/"]
  .map(
    (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
  </url>`,
  )
  .join("\n");

const urls = [localeUrls, blogUrls, standaloneUrls].join("\n");

export function GET() {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
