import type { BrandTokens } from "@kit/config/site";

// Fluxo brand tokens — visual/asset paths owned by the landing, not the kit.
// Every landing implements this at `@site/config/brand.ts`.
export const brandTokens: BrandTokens = {
  themeColor: "#4C27E3",
  trackingGlobal: "fluxoTrack",
  faviconPath: "assets/favicon.png",
  faviconDarkPath: "assets/favicon-dark.png",
  ogImagePath: "/assets/Photo_herosection_NEW.png",
  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..900&display=swap",
};
