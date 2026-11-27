import { GET as kitSitemap } from "@kit/pages/sitemap.xml";
import { absoluteUrl, supportedLocales } from "@kit/config/site";
import type { LocaleKey } from "@kit/config/site";
import { aboutPath } from "@site/data/about";
import { downloadSitemapUrls } from "@kit/lib/download";

// The kit's sitemap knows nothing about site-specific pages, so append the localized
// About and Download pages (with hreflang alternates) to whatever it generates.
const localizedUrls = (pathFor: (locale: LocaleKey) => string, priority: string) => {
  const alternates = [
    ...supportedLocales.map(
      (locale) => `    <xhtml:link rel="alternate" hreflang="${locale.hreflang}" href="${absoluteUrl(pathFor(locale.key))}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(pathFor("en"))}"/>`,
  ].join("\n");

  return supportedLocales
    .map(
      (locale) => `  <url>
    <loc>${absoluteUrl(pathFor(locale.key))}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
${alternates}
  </url>`,
    )
    .join("\n");
};

const aboutUrls = localizedUrls(aboutPath, "0.5");
const downloadUrls = downloadSitemapUrls();

// The kit lists /privacy/ and /cookies/ but not /terms/ or /refund/, which this site adds.
const legalUrls = ["/terms/", "/refund/"]
  .map(
    (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`,
  )
  .join("\n");

export async function GET() {
  const response = await kitSitemap();
  const xml = (await response.text()).replace("</urlset>", `${aboutUrls}\n${downloadUrls}\n${legalUrls}\n</urlset>`);
  return new Response(xml, { headers: response.headers });
}
