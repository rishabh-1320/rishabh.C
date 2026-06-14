/**
 * ds imagery — one distinct, topical, internet-sourced image per slot
 * (verified to resolve). No image is reused across slots. Centralized here so
 * swapping any picture is a one-line change. Keyed by the content ids from
 * lib/site-content.ts so sections look images up instead of hardcoding them.
 */

const base = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const heroPhoto = base("1558730234-d8b2281b0d00", 900); // B&W portrait

/** Work case-study cards, keyed by WorkCard.id */
export const workImages: Record<string, string> = {
  "work-chestnut": base("1560264280-88b68371db39"), // insurance / producer platform
  "work-hrms": base("1666875753105-c63a6f3bdc86"), // analytics dashboard
  "work-onboarding": base("1560265036-021b3652b490"), // onboarding / welcome team
  "work-design-system": base("1581079948988-537795b40f5f") // color swatches / system
};

/** AI exploration cards, keyed by AIExplorationCard.id */
export const explorationImages: Record<string, string> = {
  "ai-audit-tool": base("1591696205602-2f950c417cb9"), // data / audit
  "ai-shopping": base("1674027392887-751d6396b710"), // mobile shopping
  "whitelabel-starter": base("1576153192396-180ecef2a715"), // ui kit / components
  "spec-diff": base("1515879218367-8466d910aaa4") // code editor
};

/** About gallery — distinct workspace/process shots */
export const galleryImages = [
  { src: base("1621111848501-8d3634f82336"), alt: "Design workspace" },
  { src: base("1581291518633-83b4ebd1d83e"), alt: "Wireframe sketches" },
  { src: base("1487338875411-8880f74114a2"), alt: "Desk and notes" }
];

/** Fallback for any slot without an explicit image */
export const fallbackImage = base("1551288049-bebda4e38f71");
