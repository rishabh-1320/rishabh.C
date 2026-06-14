import type { Config } from "tailwindcss";

/**
 * The canonical design-system Tailwind namespace (`ds-*`).
 *
 * Every utility here references a `--ds-*` CSS variable produced by
 * `tokensToCss()` (src/tokens.ts), which the host app injects once at the root.
 * Add this preset to any app's tailwind config (`presets: [dsPreset]`) and
 * include `../../packages/ds-ui/src/**` in its `content` globs to get the whole
 * system. Values live in tokens.ts only — this file is pure name → var wiring.
 */
const dsPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ds: {
          "surface-page": "var(--ds-color-surface-page)",
          "surface-raised": "var(--ds-color-surface-raised)",
          "surface-sunken": "var(--ds-color-surface-sunken)",
          "surface-cream": "var(--ds-color-surface-cream)",
          "surface-ink": "var(--ds-color-surface-ink)",
          "surface-nav": "var(--ds-color-surface-nav)",
          ink: "var(--ds-color-ink)",
          "ink-soft": "var(--ds-color-ink-soft)",
          "ink-muted": "var(--ds-color-ink-muted)",
          "on-ink": "var(--ds-color-on-ink)",
          accent: "var(--ds-color-accent)",
          "accent-hover": "var(--ds-color-accent-hover)",
          "accent-soft": "var(--ds-color-accent-soft)",
          positive: "var(--ds-color-positive)",
          border: "var(--ds-color-border)",
          "border-strong": "var(--ds-color-border-strong)",
          "border-subtle": "var(--ds-color-border-subtle)",
          "tag-lilac-bg": "var(--ds-color-tag-lilac-bg)",
          "tag-lilac-fg": "var(--ds-color-tag-lilac-fg)",
          "tag-peach-bg": "var(--ds-color-tag-peach-bg)",
          "tag-peach-fg": "var(--ds-color-tag-peach-fg)",
          "tag-mint-bg": "var(--ds-color-tag-mint-bg)",
          "tag-mint-fg": "var(--ds-color-tag-mint-fg)",
          "tag-sky-bg": "var(--ds-color-tag-sky-bg)",
          "tag-sky-fg": "var(--ds-color-tag-sky-fg)"
        }
      },
      fontFamily: {
        "ds-serif": ["var(--ds-font-serif)", "serif"],
        "ds-sans": ["var(--ds-font-sans)", "sans-serif"],
        "ds-script": ["var(--ds-font-script)", "cursive"]
      },
      maxWidth: {
        "ds-content": "var(--ds-layout-container)",
        "ds-prose": "var(--ds-layout-prose)"
      },
      borderRadius: {
        "ds-sm": "var(--ds-radius-sm)",
        "ds-md": "var(--ds-radius-md)",
        "ds-lg": "var(--ds-radius-lg)",
        "ds-xl": "var(--ds-radius-xl)",
        "ds-2xl": "var(--ds-radius-2xl)",
        "ds-pill": "var(--ds-radius-pill)"
      },
      fontSize: {
        "ds-display": ["var(--ds-type-display-size)", { lineHeight: "var(--ds-type-display-lh)" }],
        "ds-h1": ["var(--ds-type-h1-size)", { lineHeight: "var(--ds-type-h1-lh)" }],
        "ds-h2": ["var(--ds-type-h2-size)", { lineHeight: "var(--ds-type-h2-lh)" }],
        "ds-h3": ["var(--ds-type-h3-size)", { lineHeight: "var(--ds-type-h3-lh)" }],
        "ds-lead": ["var(--ds-type-lead-size)", { lineHeight: "var(--ds-type-lead-lh)" }],
        "ds-body": ["var(--ds-type-body-size)", { lineHeight: "var(--ds-type-body-lh)" }],
        "ds-body-sm": ["var(--ds-type-body-sm-size)", { lineHeight: "var(--ds-type-body-sm-lh)" }],
        "ds-caption": ["var(--ds-type-caption-size)", { lineHeight: "var(--ds-type-caption-lh)" }],
        "ds-eyebrow": ["var(--ds-type-eyebrow-size)", { lineHeight: "var(--ds-type-eyebrow-lh)" }],
        "ds-script": ["var(--ds-type-script-size)", { lineHeight: "var(--ds-type-script-lh)" }]
      },
      boxShadow: {
        "ds-card": "var(--ds-shadow-card)",
        "ds-card-hover": "var(--ds-shadow-card-hover)",
        "ds-nav": "var(--ds-shadow-nav)"
      }
    }
  }
};

export default dsPreset;
