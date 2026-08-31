import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/ds-ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        // Homepage 2026 refresh — Figma's asymmetric section padding (pt-24/pb-72)
        // isn't on Tailwind's default scale; named here so sections never need
        // an arbitrary `[72px]` bracket (which the ds drift-lint disallows).
        "18": "4.5rem",
        // Homepage 6 — section-title top padding (Figma pt-120 / pb-24)
        "30": "7.5rem",
        // Homepage final — section-title top padding grew to 140px on the 1200 grid
        "35": "8.75rem"
      },
      colors: {
        surface: {
          base: "var(--surface-base)",
          soft: "var(--surface-soft)",
          muted: "var(--surface-muted)",
          raised: "var(--surface-raised)",
          cream: "var(--surface-cream)",
          dark: "var(--surface-dark)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)"
        },
        tag: {
          "lilac-bg": "var(--tag-lilac-bg)",
          "lilac-fg": "var(--tag-lilac-fg)",
          "peach-bg": "var(--tag-peach-bg)",
          "peach-fg": "var(--tag-peach-fg)",
          "mint-bg": "var(--tag-mint-bg)",
          "mint-fg": "var(--tag-mint-fg)",
          "sky-bg": "var(--tag-sky-bg)",
          "sky-fg": "var(--tag-sky-fg)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)"
        },
        brand: {
          lime: "var(--brand-lime)",
          "lime-hover": "var(--brand-lime-hover)",
          blue: "var(--brand-blue)",
          warm: "var(--brand-warm)"
        },
        border: {
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          subtle: "var(--border-subtle)"
        },
        // ── canonical design system (values from packages/ds-ui/src/tokens.ts) ──
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
          "tag-sky-fg": "var(--ds-color-tag-sky-fg)",
          // Homepage 2026 refresh (additive)
          "surface-paper": "var(--ds-color-surface-paper)",
          "surface-mist": "var(--ds-color-surface-mist)",
          heading: "var(--ds-color-heading)",
          "body-muted": "var(--ds-color-body-muted)",
          "nav-muted": "var(--ds-color-nav-muted)",
          "caption-muted": "var(--ds-color-caption-muted)",
          "tag-muted": "var(--ds-color-tag-muted)",
          hairline: "var(--ds-color-hairline)",
          "hairline-faint": "var(--ds-color-hairline-faint)",
          "hairline-dark": "var(--ds-color-hairline-dark)",
          "hairline-on-ink": "var(--ds-color-hairline-on-ink)",
          "surface-veil": "var(--ds-color-surface-veil)",
          "accent-wash": "var(--ds-color-accent-wash)",
          "on-ink-warm": "var(--ds-color-on-ink-warm)",
          "on-ink-faint": "var(--ds-color-on-ink-faint)",
          dot: "var(--ds-color-dot)",
          "dot-on-ink": "var(--ds-color-dot-on-ink)",
          "stripe-line": "var(--ds-color-stripe-line)",
          "hp-muted": "var(--ds-color-hp-muted)",
          "hp-page": "var(--ds-color-hp-page)",
          "hero-blue": "var(--ds-color-hero-blue)",
          "on-accent": "var(--ds-color-on-accent)",
          "mockup-bg": "var(--ds-color-mockup-bg)",
          "mockup-bar": "var(--ds-color-mockup-bar)",
          "avatar-placeholder": "var(--ds-color-avatar-placeholder)",
          // Case-study template (Figma "Port 26" case-study frames)
          "case-heading": "var(--ds-color-case-heading)",
          "case-body": "var(--ds-color-case-body)",
          "case-caption": "var(--ds-color-case-caption)",
          "media-play-bg": "var(--ds-color-media-play-bg)",
          "media-play-glyph": "var(--ds-color-media-play-glyph)",
          "media-placeholder": "var(--ds-color-media-placeholder)",
          "category-blue": "var(--ds-color-category-blue)",
          "category-blue-wash": "var(--ds-color-category-blue-wash)",
          "category-blue-eyebrow": "var(--ds-color-category-blue-eyebrow)",
          // Assembled case-study template (Figma node 573:8093)
          "case-muted": "var(--ds-color-case-muted)",
          "canvas-muted": "var(--ds-color-canvas-muted)"
        },
        // ── vs3 isolated namespace (quarantined; values from components/styles/vs3/tokens.ts) ──
        vs3: {
          "surface-page": "var(--vs3-color-surface-page)",
          "surface-raised": "var(--vs3-color-surface-raised)",
          "surface-sunken": "var(--vs3-color-surface-sunken)",
          "surface-tint": "var(--vs3-color-surface-tint)",
          "surface-ink": "var(--vs3-color-surface-ink)",
          "surface-ink-veil": "var(--vs3-color-surface-ink-veil)",
          "surface-nav": "var(--vs3-color-surface-nav)",
          ink: "var(--vs3-color-ink)",
          "ink-soft": "var(--vs3-color-ink-soft)",
          "ink-muted": "var(--vs3-color-ink-muted)",
          "on-ink": "var(--vs3-color-on-ink)",
          accent: "var(--vs3-color-accent)",
          "accent-hover": "var(--vs3-color-accent-hover)",
          "accent-soft": "var(--vs3-color-accent-soft)",
          "viz-blue": "var(--vs3-color-viz-blue)",
          "viz-amber": "var(--vs3-color-viz-amber)",
          "viz-purple": "var(--vs3-color-viz-purple)",
          "viz-green": "var(--vs3-color-viz-green)",
          "viz-pink": "var(--vs3-color-viz-pink)",
          "viz-blue-soft": "var(--vs3-color-viz-blue-soft)",
          "viz-amber-soft": "var(--vs3-color-viz-amber-soft)",
          "viz-purple-soft": "var(--vs3-color-viz-purple-soft)",
          "viz-green-soft": "var(--vs3-color-viz-green-soft)",
          "viz-pink-soft": "var(--vs3-color-viz-pink-soft)",
          border: "var(--vs3-color-border)",
          "border-strong": "var(--vs3-color-border-strong)",
          "border-subtle": "var(--vs3-color-border-subtle)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        "ds-serif": ["var(--ds-font-serif)", "serif"],
        "ds-sans": ["var(--ds-font-sans)", "sans-serif"],
        "ds-script": ["var(--ds-font-script)", "cursive"],
        "ds-inter": ["var(--ds-font-inter)", "sans-serif"],
        "vs3-display": ["var(--vs3-font-display)", "sans-serif"],
        "vs3-sans": ["var(--vs3-font-sans)", "sans-serif"],
        "vs3-mono": ["var(--vs3-font-mono)", "monospace"]
      },
      maxWidth: {
        content: "1088px",
        prose: "680px",
        "ds-content": "var(--ds-layout-container)",
        "ds-prose": "var(--ds-layout-prose)",
        "ds-hp": "var(--ds-layout-hp)",
        "ds-hp-wide": "var(--ds-layout-hp-wide)",
        "vs3-content": "var(--vs3-layout-container)",
        "vs3-prose": "var(--vs3-layout-prose)"
      },
      letterSpacing: {
        "display-tight": "-0.02em",
        "head-tight": "-0.01em",
        eyebrow: "0.18em"
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill, 999px)",
        "ds-sm": "var(--ds-radius-sm)",
        "ds-md": "var(--ds-radius-md)",
        "ds-lg": "var(--ds-radius-lg)",
        "ds-xl": "var(--ds-radius-xl)",
        "ds-2xl": "var(--ds-radius-2xl)",
        "ds-pill": "var(--ds-radius-pill)",
        "ds-tag": "var(--ds-radius-tag)",
        "ds-control": "var(--ds-radius-control)",
        "ds-card": "var(--ds-radius-card)",
        "ds-chrome": "var(--ds-radius-chrome)",
        "ds-shell": "var(--ds-radius-shell)",
        "ds-mockup": "var(--ds-radius-mockup)",
        "vs3-sm": "var(--vs3-radius-sm)",
        "vs3-md": "var(--vs3-radius-md)",
        "vs3-lg": "var(--vs3-radius-lg)",
        "vs3-xl": "var(--vs3-radius-xl)",
        "vs3-2xl": "var(--vs3-radius-2xl)",
        "vs3-pill": "var(--vs3-radius-pill)"
      },
      fontSize: {
        display: ["var(--text-display-size)", { lineHeight: "var(--text-display-lh)" }],
        h1: ["var(--text-h1-size)", { lineHeight: "var(--text-h1-lh)" }],
        h2: ["var(--text-h2-size)", { lineHeight: "var(--text-h2-lh)" }],
        h3: ["var(--text-h3-size)", { lineHeight: "var(--text-h3-lh)" }],
        h4: ["var(--text-h4-size)", { lineHeight: "var(--text-h4-lh)" }],
        "display-sm": ["var(--text-display-size-sm)", { lineHeight: "var(--text-display-lh)" }],
        "h1-sm": ["var(--text-h1-size-sm)", { lineHeight: "var(--text-h1-lh)" }],
        "h2-sm": ["var(--text-h2-size-sm)", { lineHeight: "var(--text-h2-lh)" }],
        "h3-sm": ["var(--text-h3-size-sm)", { lineHeight: "var(--text-h3-lh)" }],
        body: ["var(--text-body-size)", { lineHeight: "var(--text-body-lh)" }],
        "body-sm": ["var(--text-body-sm-size)", { lineHeight: "var(--text-body-sm-lh)" }],
        caption: ["var(--text-caption-size)", { lineHeight: "var(--text-caption-lh)" }],
        eyebrow: ["var(--text-eyebrow-size)", { lineHeight: "var(--text-eyebrow-lh)" }],
        "ds-display": ["var(--ds-type-display-size)", { lineHeight: "var(--ds-type-display-lh)" }],
        "ds-h1": ["var(--ds-type-h1-size)", { lineHeight: "var(--ds-type-h1-lh)" }],
        "ds-h2": ["var(--ds-type-h2-size)", { lineHeight: "var(--ds-type-h2-lh)" }],
        "ds-h3": ["var(--ds-type-h3-size)", { lineHeight: "var(--ds-type-h3-lh)" }],
        "ds-lead": ["var(--ds-type-lead-size)", { lineHeight: "var(--ds-type-lead-lh)" }],
        "ds-body": ["var(--ds-type-body-size)", { lineHeight: "var(--ds-type-body-lh)" }],
        "ds-body-sm": ["var(--ds-type-body-sm-size)", { lineHeight: "var(--ds-type-body-sm-lh)" }],
        "ds-caption": ["var(--ds-type-caption-size)", { lineHeight: "var(--ds-type-caption-lh)" }],
        "ds-eyebrow": ["var(--ds-type-eyebrow-size)", { lineHeight: "var(--ds-type-eyebrow-lh)" }],
        "ds-script": ["var(--ds-type-script-size)", { lineHeight: "var(--ds-type-script-lh)" }],
        "ds-display-script": ["var(--ds-type-display-script-size)", { lineHeight: "var(--ds-type-display-script-lh)" }],
        "ds-stat": ["var(--ds-type-stat-size)", { lineHeight: "var(--ds-type-stat-lh)" }],
        "ds-hp-label": ["var(--ds-type-hp-label-size)", { lineHeight: "var(--ds-type-hp-label-lh)" }],
        "ds-hp-section-title": ["var(--ds-type-hp-section-title-size)", { lineHeight: "var(--ds-type-hp-section-title-lh)" }],
        "ds-hp-card-title-lg": ["var(--ds-type-hp-card-title-lg-size)", { lineHeight: "var(--ds-type-hp-card-title-lg-lh)" }],
        "ds-hp-card-title-sm": ["var(--ds-type-hp-card-title-sm-size)", { lineHeight: "var(--ds-type-hp-card-title-sm-lh)" }],
        "ds-hp-metric": ["var(--ds-type-hp-metric-size)", { lineHeight: "var(--ds-type-hp-metric-lh)" }],
        "ds-hp-brand": ["var(--ds-type-hp-brand-size)", { lineHeight: "var(--ds-type-hp-brand-lh)" }],
        "ds-hp-eyebrow": ["var(--ds-type-hp-eyebrow-size)", { lineHeight: "var(--ds-type-hp-eyebrow-lh)" }],
        "ds-hp-eyebrow-loose": ["var(--ds-type-hp-eyebrow-loose-size)", { lineHeight: "var(--ds-type-hp-eyebrow-loose-lh)" }],
        "ds-hp-title": ["var(--ds-type-hp-title-size)", { lineHeight: "var(--ds-type-hp-title-lh)" }],
        "ds-hp-headline": ["var(--ds-type-hp-headline-size)", { lineHeight: "var(--ds-type-hp-headline-lh)" }],
        "ds-hp-card-title": ["var(--ds-type-hp-card-title-size)", { lineHeight: "var(--ds-type-hp-card-title-lh)" }],
        "ds-hp-body": ["var(--ds-type-hp-body-size)", { lineHeight: "var(--ds-type-hp-body-lh)" }],
        "ds-hp-year": ["var(--ds-type-hp-year-size)", { lineHeight: "var(--ds-type-hp-year-lh)" }],
        "ds-hp-bio": ["var(--ds-type-hp-bio-size)", { lineHeight: "var(--ds-type-hp-bio-lh)" }],
        "ds-hp-meta": ["var(--ds-type-hp-meta-size)", { lineHeight: "var(--ds-type-hp-meta-lh)" }],
        "ds-hp-caption": ["var(--ds-type-hp-caption-size)", { lineHeight: "var(--ds-type-hp-caption-lh)" }],
        "ds-hp-subtitle": ["var(--ds-type-hp-subtitle-size)", { lineHeight: "var(--ds-type-hp-subtitle-lh)" }],
        "ds-hp-lede": ["var(--ds-type-hp-lede-size)", { lineHeight: "var(--ds-type-hp-lede-lh)" }],
        "ds-hp-heading": ["var(--ds-type-hp-heading-size)", { lineHeight: "var(--ds-type-hp-heading-lh)" }],
        "ds-hp-prose": ["var(--ds-type-hp-prose-size)", { lineHeight: "var(--ds-type-hp-prose-lh)" }],
        "vs3-display": ["var(--vs3-type-display-size)", { lineHeight: "var(--vs3-type-display-lh)" }],
        "vs3-h1": ["var(--vs3-type-h1-size)", { lineHeight: "var(--vs3-type-h1-lh)" }],
        "vs3-h2": ["var(--vs3-type-h2-size)", { lineHeight: "var(--vs3-type-h2-lh)" }],
        "vs3-h3": ["var(--vs3-type-h3-size)", { lineHeight: "var(--vs3-type-h3-lh)" }],
        "vs3-lead": ["var(--vs3-type-lead-size)", { lineHeight: "var(--vs3-type-lead-lh)" }],
        "vs3-body": ["var(--vs3-type-body-size)", { lineHeight: "var(--vs3-type-body-lh)" }],
        "vs3-body-sm": ["var(--vs3-type-body-sm-size)", { lineHeight: "var(--vs3-type-body-sm-lh)" }],
        "vs3-caption": ["var(--vs3-type-caption-size)", { lineHeight: "var(--vs3-type-caption-lh)" }],
        "vs3-eyebrow": ["var(--vs3-type-eyebrow-size)", { lineHeight: "var(--vs3-type-eyebrow-lh)" }],
        "vs3-stat": ["var(--vs3-type-stat-size)", { lineHeight: "var(--vs3-type-stat-lh)" }]
      },
      boxShadow: {
        "card-rest": "var(--shadow-card-rest)",
        "card-hover": "var(--shadow-card-hover)",
        "card-feature": "var(--shadow-card-feature)",
        "nav-card": "var(--shadow-nav-card)",
        "btn-primary": "var(--shadow-btn-primary-rest)",
        "btn-primary-hover": "var(--shadow-btn-primary-hover)",
        "btn-secondary": "var(--shadow-btn-secondary-rest)",
        "btn-secondary-hover": "var(--shadow-btn-secondary-hover)",
        "chip-blue": "var(--shadow-chip-blue)",
        "chip-lime": "var(--shadow-chip-lime)",
        "glass-card": "var(--shadow-glass-card)",
        nav: "var(--shadow-nav)",
        "ds-card": "var(--ds-shadow-card)",
        "ds-card-hover": "var(--ds-shadow-card-hover)",
        "ds-nav": "var(--ds-shadow-nav)",
        "ds-media-play": "var(--ds-shadow-media-play)",
        "vs3-card": "var(--vs3-shadow-card)",
        "vs3-card-hover": "var(--vs3-shadow-card-hover)",
        "vs3-nav": "var(--vs3-shadow-nav)"
      },
      transitionTimingFunction: {
        "out-quart": "var(--ease-out-quart)",
        "out-expo": "var(--ease-out-expo)"
      },
      transitionDuration: {
        fast: "200ms",
        DEFAULT: "400ms",
        slow: "700ms",
        reveal: "900ms"
      },
      animation: {
        "fade-up": "fade-up 0.7s var(--ease-out-quart) forwards",
        // Very slow, ambient — moving by exactly one copy-width (25% of the
        // 4x track, see Marquee) takes 59s. motion-safe: only so it's inert
        // under prefers-reduced-motion.
        marquee: "marquee 59s linear infinite"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
