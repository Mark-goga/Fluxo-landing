import { GET as kitSitemap } from "@kit/pages/sitemap.xml";
import { absoluteUrl, supportedLocales } from "@kit/config/site";
import { aboutPath } from "@site/data/about";

// The kit's sitemap knows nothing about site-specific pages, so append the localized
// About pages (with hreflang alternates) to whatever it generates.
const aboutAlternates = [
  ...supportedLocales.map(
    (locale) => `    <xhtml:link rel="alternate" hreflang="${locale.hreflang}" href="${absoluteUrl(aboutPath(locale.key))}"/>`,
  ),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(aboutPath("en"))}"/>`,
].join("\n");

const aboutUrls = supportedLocales
  .map(
    (locale) => `  <url>
    <loc>${absoluteUrl(aboutPath(locale.key))}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
${aboutAlternates}
  </url>`,
  )
  .join("\n");

// The kit lists /privacy/ and /cookies/ but not /terms/, which this site adds.
const termsUrl = `  <url>
    <loc>${absoluteUrl("/terms/")}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;

export async function GET() {
  const response = await kitSitemap();
  const xml = (await response.text()).replace("</urlset>", `${aboutUrls}\n${termsUrl}\n</urlset>`);
  return new Response(xml, { headers: response.headers });
}
