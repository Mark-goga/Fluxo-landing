import { siteConfig, type LocaleKey } from "../config/site";

type Link = {
  label: string;
  href: string;
};

type Action = Link & {
  clarityEvent: string;
};

export type LandingContent = {
  key: LocaleKey;
  lang: string;
  path: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  header: {
    homeAria: string;
    languageLink: Link & { lang: string };
    cta: Action;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: Action;
    secondaryCta: Action;
    imageAlt: string;
  };
  footer: {
    copyright: string;
    links: Link[];
  };
  structuredData: {
    description: string;
  };
};

export const landingContent = {
  en: {
    key: "en",
    lang: "en",
    path: "/",
    ogLocale: "en_US",
    ogLocaleAlternate: "uk_UA",
    meta: {
      title: `${siteConfig.name} - multilingual SEO landing template`,
      description:
        "A static Astro landing page template with multilingual routing, SEO metadata, hreflang, sitemap, robots.txt, and Microsoft Clarity tracking.",
      ogTitle: `${siteConfig.name} - SEO landing template`,
      ogDescription:
        "Start a fast multilingual landing page with canonical URLs, hreflang, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt, and Clarity.",
      twitterTitle: `${siteConfig.name} - Astro landing template`,
      twitterDescription: "A fast static landing template with SEO and analytics foundations.",
    },
    header: {
      homeAria: `${siteConfig.name} home`,
      languageLink: { label: "UK", href: "/uk/", lang: "uk" },
      cta: { label: "Start setup", href: "#start", clarityEvent: "header_start_setup" },
    },
    hero: {
      eyebrow: "Astro landing template",
      title: "A clean static base for multilingual SEO landing pages.",
      text:
        "Use this template to launch a fast landing page with localized URLs, canonical metadata, hreflang, sitemap, robots.txt, Open Graph, Twitter cards, JSON-LD, and Microsoft Clarity already wired in.",
      primaryCta: { label: "Edit the content", href: "#start", clarityEvent: "hero_edit_content" },
      secondaryCta: { label: "Open Ukrainian", href: "/uk/", clarityEvent: "hero_switch_language" },
      imageAlt: "Abstract landing page template preview with simple content blocks",
    },
    footer: {
      copyright: `© 2026 ${siteConfig.name}. Static multilingual landing template.`,
      links: [
        { label: "Українська", href: "/uk/" },
        { label: "Top", href: "#start" },
      ],
    },
    structuredData: {
      description:
        "Static multilingual landing page template with SEO metadata, localized routes, and Microsoft Clarity tracking.",
    },
  },
  uk: {
    key: "uk",
    lang: "uk",
    path: "/uk/",
    ogLocale: "uk_UA",
    ogLocaleAlternate: "en_US",
    meta: {
      title: `${siteConfig.name} - мультимовний SEO landing template`,
      description:
        "Статичний Astro-шаблон лендінгу з мультимовними URL, SEO metadata, hreflang, sitemap, robots.txt і Microsoft Clarity.",
      ogTitle: `${siteConfig.name} - SEO шаблон лендінгу`,
      ogDescription:
        "Стартуй швидкий мультимовний landing page з canonical URL, hreflang, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt і Clarity.",
      twitterTitle: `${siteConfig.name} - Astro landing template`,
      twitterDescription: "Швидкий статичний шаблон лендінгу з SEO та analytics foundation.",
    },
    header: {
      homeAria: `${siteConfig.name} home`,
      languageLink: { label: "EN", href: "/", lang: "en" },
      cta: { label: "Почати setup", href: "#start", clarityEvent: "header_start_setup" },
    },
    hero: {
      eyebrow: "Astro landing template",
      title: "Чиста статична база для мультимовних SEO лендінгів.",
      text:
        "Використовуй цей шаблон, щоб швидко запускати landing page з локалізованими URL, canonical metadata, hreflang, sitemap, robots.txt, Open Graph, Twitter cards, JSON-LD і Microsoft Clarity.",
      primaryCta: { label: "Редагувати контент", href: "#start", clarityEvent: "hero_edit_content" },
      secondaryCta: { label: "Open English", href: "/", clarityEvent: "hero_switch_language" },
      imageAlt: "Абстрактний preview шаблону лендінгу з простими контент-блоками",
    },
    footer: {
      copyright: `© 2026 ${siteConfig.name}. Static multilingual landing template.`,
      links: [
        { label: "English", href: "/" },
        { label: "Вгору", href: "#start" },
      ],
    },
    structuredData: {
      description:
        "Статичний мультимовний шаблон landing page з SEO metadata, локалізованими маршрутами та Microsoft Clarity.",
    },
  },
} satisfies Record<LocaleKey, LandingContent>;
