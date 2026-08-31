/**
 * The design system — single source of truth.
 *
 * Every visual value the site can use lives here, once. The token object is
 * flattened to `--ds-*` CSS custom properties by `tokensToCss()` and injected
 * once at the app root (apps/website/app/layout.tsx) onto `:root`. The Tailwind
 * `ds-*` namespace (tailwind-preset.ts) references these same variable names —
 * so primitives stay readable while values never duplicate.
 *
 * This is the ONLY canonical token namespace. The legacy `:root` tokens and the
 * quarantined experiment themes (vs3, signature, …) keep their own namespaces
 * and never collide with `--ds-*`. New designs extend this file, never fork it.
 */

export const dsTokens = {
  color: {
    // Surfaces — warm whites + peach, deep ink
    "surface-page": "#FCFBF9",
    "surface-raised": "#FFFFFF",
    "surface-sunken": "#F4F1EC",
    "surface-cream": "#F7E7DA",
    "surface-ink": "#1E1515",
    "surface-nav": "rgba(255, 255, 255, 0.82)", // translucent pill nav (backdrop-blur)

    // Text — warm near-black
    "ink": "#1E1515",
    "ink-soft": "rgba(30, 21, 21, 0.72)",
    "ink-muted": "rgba(30, 21, 21, 0.50)",
    "on-ink": "#FCFBF9",

    // Accent — signature orange
    "accent": "#E06C41",
    "accent-hover": "#CC5D34",
    "accent-soft": "#FBE4D8",

    // Status — availability indicator
    "positive": "#34C759",

    // Borders
    "border": "rgba(30, 21, 21, 0.10)",
    "border-strong": "rgba(30, 21, 21, 0.22)",
    "border-subtle": "rgba(30, 21, 21, 0.06)",

    // Tag pairs (playful pastels)
    "tag-lilac-bg": "#E9E4FB",
    "tag-lilac-fg": "#5B4B9E",
    "tag-peach-bg": "#FBE4D8",
    "tag-peach-fg": "#B5532C",
    "tag-mint-bg": "#DDEFE6",
    "tag-mint-fg": "#2F7355",
    "tag-sky-bg": "#DEEAF4",
    "tag-sky-fg": "#2C6486",

    // ── Homepage 2026 refresh (additive only — never repurpose the keys above;
    // other routes/components still consume the legacy values as-is) ──
    "surface-paper": "#FFFFFF", // pure-white page bg for the new homepage
    "surface-mist": "#F5F5F9", // metrics band gradient start (fades to white)
    "heading": "#181818", // strong heading/emphasis text
    "body-muted": "#666666", // paragraph/description copy
    "nav-muted": "#71717A", // nav links + headline connector words
    "caption-muted": "#909090", // tiny captions ("AI tools that I use")
    "tag-muted": "#B08888", // badge/tag/meta-label mauve
    "hairline": "#E4E4E7", // primary hairline rule between content columns
    "hairline-faint": "rgba(30, 21, 21, 0.06)", // arrow-circle button + card borders
    "hairline-dark": "#341A1A", // CTA section top divider
    "hairline-on-ink": "rgba(255, 255, 255, 0.05)", // footer bar divider on dark
    "surface-veil": "rgba(255, 255, 255, 0.1)", // CTA secondary button bg/border
    "accent-wash": "rgba(224, 107, 58, 0.1)", // "CURRENT" badge bg
    "on-ink-warm": "#FEF6F2", // footer logo text on dark
    "on-ink-faint": "rgba(255, 255, 255, 0.5)", // footer copyright text on dark
    "on-accent": "#F4F4F5", // text/icon on the orange accent pill (nav Resume/LinkedIn buttons)

    // Homepage 6 refresh (additive) — ledger intersection dots + striped panel
    "dot": "#000000", // intersection-dot fill — black, with a page-colored mask hiding lines around it
    "dot-on-ink": "rgba(255, 255, 255, 0.25)", // intersection-dot fill on dark sections
    "stripe-line": "rgba(30, 21, 21, 0.05)", // AI-tools panel pinstripe

    // Homepage final — uniform page background (#FCFCFC) + hero blue wash
    "hp-page": "#FCFCFC", // the whole homepage background; also the dot line-mask color
    "hero-blue": "#EDF5FF", // hero lower-area gradient blue (light) — tune vs Figma render

    // Case-study template — mockup window-chrome frame
    "mockup-bg": "#F4F1EC", // warm cream body behind a mockup screenshot
    "mockup-bar": "rgba(0, 0, 0, 0.02)", // the 32px chrome bar above the screenshot
    "hp-muted": "#A5A19C", // THE single muted-text grey in Homepage 6 (eyebrows, descriptions, badges, meta)
    "avatar-placeholder": "#D9D9D9", // testimonial avatar fallback fill before a real photo is set

    // ── Case-study template, Figma "Port 26" case-study frames (additive) ──
    // Reading-context greys. Deliberately NOT folded into `heading`/`body-muted`:
    // the case-study frames use their own near-black/grey pair, and merging them
    // would silently restyle the homepage.
    "case-heading": "#212121", // Heading/H3 + quote-big text (Figma node 573:8042, 573:8083)
    "case-body": "#595959", // Body/Default paragraph grey
    "case-caption": "#27272A", // Figma `gray/800` — italic figure caption under a visual

    // Visual Block empty state (node 572:7926) — the "Image / Video" placeholder
    "media-play-bg": "rgba(255, 255, 255, 0.9)",
    "media-play-glyph": "#333333",
    "media-placeholder": "#8C8C99",

    // Category accents — one {default, wash, eyebrow} triple per category.
    // Blue is the only category the Figma file defines today; more drop in here.
    // NOTE: `category-blue` is the same hex as `tag-sky-fg` above — same color,
    // different semantic role, kept separate on purpose.
    "category-blue": "#2C6486", // Figma var `category/blue/default` — the 2px quote liner
    "category-blue-wash": "#EEF7FC", // Figma var `blue/50` — quote block background
    "category-blue-eyebrow": "#2E54D9", // eyebrow text (raw override in node 573:8042 — see CASE_STUDY_TEMPLATE.md)

    // Assembled case-study template (Figma node 573:8093).
    // Figma sets Display/Hero + Heading/H1 + Heading/H2 to literal #000000, but
    // pure black reads wrong next to everything else here — those roles use
    // `case-heading` #212121 instead, so all case-study headings share one colour.
    "case-muted": "#52525B", // Figma `gray/600` — the hero subtitle
    "canvas-muted": "#BFB3A3" // Figma `canvas/muted` — end-of-article marker shapes
  },

  // 4-based spacing — the rationalization of the reference's messy values
  space: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "24px",
    "6": "32px",
    "7": "48px",
    "8": "64px",
    "9": "96px",
    "10": "128px"
  },

  radius: {
    sm: "8px",
    md: "14px",
    lg: "24px",
    xl: "32px",
    "2xl": "44px",
    pill: "999px",

    // Homepage 2026 refresh (additive; the keys above are untouched)
    tag: "4px",
    control: "6px",
    card: "8px",
    chrome: "10px",
    shell: "16px",

    // Case-study template — mockup window-chrome frame
    mockup: "12px"
  },

  /*
   * Inter everywhere, with one deliberate exception: `script` is Caveat, used
   * by the `display-script` role and nothing else — the handwritten "Rishabh."
   * in the homepage hero. Fraunces and Hanken Grotesk are gone for good;
   * `serif` and `sans` are kept as keys only so existing `font-ds-*` utilities
   * keep resolving, and both point at Inter.
   *
   * Before repointing `script` at anything new, check what consumes it: today
   * it is exactly one text node, which is why a second family is affordable
   * here and wasn't anywhere else.
   */
  font: {
    serif: '"Inter", "Segoe UI", sans-serif',
    sans: '"Inter", "Segoe UI", sans-serif',
    script: '"Caveat", "Segoe Script", cursive',
    inter: '"Inter", "Segoe UI", sans-serif'
  },

  /*
   * Locked type presets — size / line-height / weight / tracking per role.
   * Consumed by the Text primitive so a size can never pair with a wrong lh.
   *
   * House rule: any role under 20px is weight 400 and line-height 1.4. Small
   * text carries no weight contrast — emphasis at these sizes comes from colour
   * and spacing instead. Roles at 20px and above keep their own weight and
   * line-height. Adding a sub-20px role means following the same rule.
   */
  type: {
    display: { size: "60px", lh: "1.04", weight: "400", tracking: "-0.02em", family: "serif" },
    h1: { size: "47px", lh: "1.08", weight: "400", tracking: "-0.02em", family: "serif" },
    h2: { size: "36px", lh: "1.12", weight: "400", tracking: "-0.01em", family: "serif" },
    h3: { size: "22px", lh: "1.3", weight: "600", tracking: "-0.01em", family: "sans" },
    lead: { size: "20px", lh: "1.5", weight: "400", tracking: "0em", family: "sans" },
    body: { size: "16px", lh: "1.4", weight: "400", tracking: "0em", family: "sans" },
    "body-sm": { size: "14px", lh: "1.4", weight: "400", tracking: "0em", family: "sans" },
    caption: { size: "13px", lh: "1.4", weight: "400", tracking: "0em", family: "sans" },
    eyebrow: { size: "12px", lh: "1.4", weight: "400", tracking: "0.18em", family: "sans" },
    // Homepage-only reuse: neither role is referenced outside the home-ds hero/CTA,
    // so both are safely repointed to the 2026 refresh's handwritten-accent sizing.
    script: { size: "48px", lh: "1.1", weight: "600", tracking: "0em", family: "script" },
    "display-script": { size: "64px", lh: "0.9", weight: "600", tracking: "-0.015em", family: "script" },
    stat: { size: "52px", lh: "1.0", weight: "400", tracking: "-0.02em", family: "serif" },

    // Homepage 2026 refresh — new roles only; existing roles above are untouched
    // so other routes (case studies, global chrome) render exactly as before.
    "hp-eyebrow": { size: "14px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-eyebrow-loose": { size: "14px", lh: "1.4", weight: "400", tracking: "0.1em", family: "inter" },
    "hp-title": { size: "48px", lh: "1.3", weight: "300", tracking: "-0.025em", family: "inter" },
    "hp-headline": { size: "36px", lh: "1.1", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-card-title": { size: "24px", lh: "1.1", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-body": { size: "15px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-year": { size: "32px", lh: "1.1", weight: "300", tracking: "-0.025em", family: "inter" },
    "hp-bio": { size: "24px", lh: "1.3", weight: "300", tracking: "-0.025em", family: "inter" },
    "hp-meta": { size: "12px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-caption": { size: "13px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-subtitle": { size: "16px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-lede": { size: "24px", lh: "1.3", weight: "300", tracking: "-0.025em", family: "inter" },

    // Homepage 6 refresh — new roles traced from the Figma export (Inter, weight 400,
    // ‑0.025em everywhere except hp-metric which Figma sets to 0 tracking)
    "hp-label": { size: "14px", lh: "1.4", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-section-title": { size: "40px", lh: "1.3", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-card-title-lg": { size: "32px", lh: "1.1", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-card-title-sm": { size: "20px", lh: "1.1", weight: "400", tracking: "-0.025em", family: "inter" },
    "hp-metric": { size: "48px", lh: "1", weight: "400", tracking: "0em", family: "inter" },
    // Figma's footer wordmark is explicitly tracking-[-0.96px] at 64px (-0.96/64 = -0.015em),
    // not the -0.025em every other hp-* role uses — measured, not a typo.
    "hp-brand": { size: "64px", lh: "0.9", weight: "400", tracking: "-0.015em", family: "inter" },

    // Case-study restyle — reading-context roles (section headings + long-form
    // body copy); additive, only used inside components/case-study/*.
    "hp-heading": { size: "30px", lh: "1.25", weight: "400", tracking: "-0.02em", family: "inter" },
    "hp-prose": { size: "17px", lh: "1.4", weight: "400", tracking: "-0.01em", family: "inter" }
  },

  // Mobile display overrides (applied via the :root media block in tokensToCss)
  typeMobile: {
    display: "40px",
    h1: "36px",
    h2: "28px",
    "display-script": "48px",
    stat: "40px",
    script: "36px",
    "hp-title": "32px",
    "hp-section-title": "30px",
    "hp-card-title-lg": "26px",
    "hp-brand": "48px",
    "hp-headline": "26px",
    "hp-lede": "18px",
    "hp-heading": "24px",
    "hp-prose": "16px"
  },

  shadow: {
    card: "0 1px 2px rgba(30,21,21,0.03), 0 8px 24px -8px rgba(30,21,21,0.08)",
    "card-hover": "0 2px 6px rgba(30,21,21,0.05), 0 18px 48px -12px rgba(30,21,21,0.16)",
    nav: "0 2px 8px rgba(30,21,21,0.06), 0 12px 32px -12px rgba(30,21,21,0.12)",
    // Visual Block play-button lift (Figma node 572:7922)
    "media-play": "0 2px 8px rgba(0,0,0,0.15)"
  },

  motion: {
    "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
    "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    "dur-fast": "180ms",
    "dur-default": "360ms",
    "dur-slow": "640ms"
  },

  layout: {
    "container": "1088px",
    "prose": "680px",
    // Homepage 2026 refresh — new widths only; `container`/`prose` untouched
    // since other routes (case studies, nav, footer) rely on those values.
    "hp": "1200px",
    "hp-wide": "1200px"
  }
} as const;

/** Token-flip values for inverted (dark) sections. Only the keys that change. */
const INVERTED: Record<string, string> = {
  "color-ink": "#FCFBF9",
  "color-ink-soft": "rgba(252, 251, 249, 0.72)",
  "color-ink-muted": "rgba(252, 251, 249, 0.55)",
  "color-accent": "#F08A5D",
  "color-accent-soft": "rgba(240, 138, 93, 0.18)",
  "color-border": "rgba(252, 251, 249, 0.15)",
  "color-border-strong": "rgba(252, 251, 249, 0.30)",
  "color-border-subtle": "rgba(252, 251, 249, 0.10)",
  "color-surface-raised": "rgba(252, 251, 249, 0.05)",
  "color-surface-sunken": "rgba(252, 251, 249, 0.06)",
  "color-surface-cream": "rgba(252, 251, 249, 0.08)"
};

/**
 * Flatten the token object into the CSS injected once at the app root. Produces:
 * the base variables on `:root` (inert until an element opts in via `.ds-root`),
 * a mobile type-override block, and the global `.ds-inverted` token-flip block
 * for dark sections — all in the `--ds-*` namespace.
 */
export function tokensToCss(): string {
  const lines: string[] = [];

  for (const [k, v] of Object.entries(dsTokens.color)) lines.push(`--ds-color-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.space)) lines.push(`--ds-space-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.radius)) lines.push(`--ds-radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.font)) lines.push(`--ds-font-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.shadow)) lines.push(`--ds-shadow-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.motion)) lines.push(`--ds-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.layout)) lines.push(`--ds-layout-${k}: ${v};`);
  for (const [role, t] of Object.entries(dsTokens.type)) {
    lines.push(`--ds-type-${role}-size: ${t.size};`);
    lines.push(`--ds-type-${role}-lh: ${t.lh};`);
    lines.push(`--ds-type-${role}-weight: ${t.weight};`);
    lines.push(`--ds-type-${role}-tracking: ${t.tracking};`);
  }

  const invertedLines = Object.entries(INVERTED).map(([k, v]) => `--ds-${k}: ${v};`);
  const mobileLines = Object.entries(dsTokens.typeMobile).map(
    ([role, size]) => `--ds-type-${role}-size: ${size};`
  );

  return [
    `:root{${lines.join("")}}`,
    `.ds-inverted{${invertedLines.join("")}}`,
    `@media (max-width: 809px){:root{${mobileLines.join("")}}}`
  ].join("");
}
