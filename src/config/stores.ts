// Numeric App Store id: the listing URL below and the iOS Smart App Banner (brand.ts).
export const appStoreId = "6825772359";

// The App Store listing itself, as Google and directories should see it.
export const appStoreListing = `https://apps.apple.com/app/fluxo-learn-remember/id${appStoreId}`;

// The web app. Its root sends a signed-in visitor home and a new one into onboarding
// (resuming where they stopped), so it is the sign-up entry; sign-in has its own screen.
export const webAppLinks = {
  signUp: "https://app.fluxo.today/",
  signIn: "https://app.fluxo.today/onboarding/sign-in",
};

// App store links used throughout the landing: footer buttons, modal,
// platform-aware redirects, etc. `pt` is the App Store Connect provider token, so the
// `ct` campaign the store buttons add for a /go visit is attributed. `webApp` is where
// desktop "Get started" goes.
export const storeLinks = {
  appStore: `${appStoreListing}?pt=129042279`,
  googlePlay: "https://play.google.com/store/apps/details?id=today.fluxo.app",
  webApp: webAppLinks.signUp,
};
