import { absoluteUrl, supportedLocales, xDefaultPath } from "../config/site";

const urls = supportedLocales
  .map((locale) => {
    const alternates = supportedLocales
      .map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${absoluteUrl(
            alternate.path,
          )}" />`,
      )
      .join("\n");

    return `  <url>
    <loc>${absoluteUrl(locale.path)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(xDefaultPath)}" />
  </url>`;
  })
  .join("\n");

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
