import type { BrandTokens } from "@kit/config/site";

// Fluxo brand tokens — visual/asset paths owned by the landing, not the kit.
// Every landing implements this at `@site/config/brand.ts`.
export const brandTokens: BrandTokens = {
  themeColor: "#4C27E3",
  themeColorDark: "#0A0716",
  trackingGlobal: "fluxoTrack",
  faviconPath: "assets/favicon.png",
  faviconDarkPath: "assets/favicon-dark.png",
  ogImagePath: "/assets/Photo_herosection_NEW.png",
  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..900&display=swap",
  logoPath: "assets/logo-fluxo.png",
  twitterSite: "@fluxo_app",
  twitterCreator: "@fluxo_app",
  footerBadges: [
    {
      href: "https://fazier.com",
      imageUrl: "https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=dark",
      imageUrlLight: "https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=light",
      alt: "Fazier badge",
      width: 120,
    },
    {
      href: "https://tinylaunch.com",
      imageUrl: "https://tinylaunch.com/tinylaunch_badge_launching_soon.svg",
      alt: "TinyLaunch Badge",
      width: 168,
    },
    {
      href: "https://twelve.tools",
      imageUrl: "https://twelve.tools/badge0-dark.svg",
      imageUrlLight: "https://twelve.tools/badge0-light.svg",
      alt: "Featured on Twelve Tools",
      width: 189,
    },
    {
      href: "https://smollaunch.com",
      imageUrl: "https://smollaunch.com/badges/featured-dark.svg",
      imageUrlLight: "https://smollaunch.com/badges/featured.svg",
      alt: "Fluxo — Featured on Smol Launch",
      width: 180,
    },
    {
      href: "https://startupbase.io",
      imageUrl: "https://statics.startupbase.io/site/badges/launched-on-sb-dark.svg",
      imageUrlLight: "https://statics.startupbase.io/site/badges/launched-on-sb.svg",
      alt: "Launched on StartupBase",
      width: 165,
    },
    {
      href: "https://launchigniter.com/product/fluxo?ref=badge-fluxo",
      imageUrl: "https://launchigniter.com/api/badge/fluxo?theme=dark",
      imageUrlLight: "https://launchigniter.com/api/badge/fluxo?theme=light",
      alt: "Fluxo — Featured on LaunchIgniter",
      width: 212,
    },
    {
      href: "https://foundrlist.com/product/fluxo?utm_source=badge&utm_medium=embed",
      imageUrl: "https://foundrlist.com/api/badge/fluxo?theme=dark",
      imageUrlLight: "https://foundrlist.com/api/badge/fluxo?theme=light",
      alt: "Fluxo — Featured on FoundrList",
      width: 150,
    },
  ],
};
