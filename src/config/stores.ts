// The App Store listing itself, as Google and directories should see it.
export const appStoreListing = "https://apps.apple.com/app/fluxo-learn-remember/id6825772359";

// App store links used throughout the landing: footer buttons, modal,
// platform-aware redirects, etc. `pt` is the App Store Connect provider token, so the
// `ct` campaign the store buttons add for a /go visit is attributed.
export const storeLinks = {
  appStore: `${appStoreListing}?pt=129042279`,
  googlePlay: "https://play.google.com/store/apps/details?id=today.fluxo.app",
};
