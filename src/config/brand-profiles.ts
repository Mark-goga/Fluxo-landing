import { appStoreListing, storeLinks } from "./stores";

// Public profiles of Fluxo elsewhere, rendered as `sameAs` on the Organization so Google
// ties the brand name to this site. Add a directory listing only once its page is live
// (`pnpm listings:check` in the monorepo prints the confirmed ones).
export const brandProfiles = [appStoreListing, storeLinks.googlePlay];
