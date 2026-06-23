import type { ReactNode } from "react";
import { MockInput, MockLines } from "./ui-kit";

/* Brand accents used across the whitelabel scenes (real Brand-A value from the copy). */
const BRAND_A = "#3b82f6";
const BRAND_A_HOVER = "#2563eb";
const BRAND_B = "#7C3AED";
const BRAND_B_HOVER = "#6D28D9";

function BrandButton({
  color,
  variant = "fill",
  children,
}: {
  color: string;
  variant?: "fill" | "outline";
  children: ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-ds-sm px-3 py-1.5 font-ds-sans text-ds-caption font-semibold"
      style={
        variant === "fill"
          ? { background: color, color: "#fff" }
          : { border: `1.5px solid ${color}`, color }
      }
    >
      {children}
    </span>
  );
}

function ButtonMatrix({ color }: { color: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <BrandButton color={color}>Primary</BrandButton>
      <BrandButton color={color} variant="outline">
        Secondary
      </BrandButton>
      <span className="inline-flex items-center justify-center rounded-ds-sm px-3 py-1.5 font-ds-sans text-ds-caption font-semibold opacity-40" style={{ background: color, color: "#fff" }}>
        Disabled
      </span>
      <span className="inline-flex items-center justify-center rounded-ds-sm px-3 py-1.5 font-ds-sans text-ds-caption font-semibold" style={{ border: `1.5px dashed ${color}`, color }}>
        Focus
      </span>
    </div>
  );
}

function Panel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
      <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
        {label}
      </span>
      {children}
    </div>
  );
}

/* 1 — Parity proof: Figma matrix beside the code-rendered component. */
export function ParityProofMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">Brand A</span>
        <span className="h-3 w-3 rounded-ds-pill" style={{ background: BRAND_A }} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel label="Figma · component set">
          <ButtonMatrix color={BRAND_A} />
        </Panel>
        <Panel label="Code · rendered from tokens">
          <ButtonMatrix color={BRAND_A} />
        </Panel>
      </div>
      <p className="text-center font-ds-sans text-[12px] text-ds-ink-muted">
        Pixel-for-pixel — the same component, designed and built from one token source.
      </p>
    </div>
  );
}

/* 2 — Token taxonomy: component / variant / property / state. */
export function TokenTaxonomyMock() {
  const segs = [
    ["component", "button"],
    ["variant", "primary"],
    ["property", "fill"],
    ["state", "resting"],
  ];
  const tones = ["sky", "peach", "mint", "lilac"] as const;
  const toneClass: Record<string, string> = {
    sky: "bg-ds-tag-sky-bg text-ds-tag-sky-fg",
    peach: "bg-ds-tag-peach-bg text-ds-tag-peach-fg",
    mint: "bg-ds-tag-mint-bg text-ds-tag-mint-fg",
    lilac: "bg-ds-tag-lilac-bg text-ds-tag-lilac-fg",
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {segs.map(([role, val], i) => (
          <span key={role} className="flex items-center gap-1.5">
            <span className={`flex flex-col items-center rounded-ds-sm px-2.5 py-1.5 ${toneClass[tones[i]]}`}>
              <span className="font-mono text-[12px] font-semibold">{val}</span>
              <span className="text-[10px] uppercase tracking-wide opacity-70">{role}</span>
            </span>
            {i < segs.length - 1 && <span className="font-mono text-ds-ink-muted">/</span>}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-ds-ink-muted" fill="none" aria-hidden="true">
        <path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <BrandButton color={BRAND_A}>Primary button</BrandButton>
      <p className="text-center font-ds-sans text-[12px] text-ds-ink-muted">
        Read the token, know exactly where it lives.
      </p>
    </div>
  );
}

/* 3 — Token table: name → value → where used. */
export function TokenTableMock() {
  const rows: [string, string, string, string?][] = [
    ["button/primary/fill/resting", "#3b82f6", "Primary button background", BRAND_A],
    ["button/primary/fill/hover", "#2563eb", "Primary button :hover", BRAND_A_HOVER],
    ["button/secondary/content/resting", "#2563eb", "Secondary label color", BRAND_A_HOVER],
    ["button/secondary/outline/resting", "#e5e5e5", "Secondary border", "#e5e5e5"],
    ["spacing/button/gap", "8px", "Gap between icon + label"],
    ["size/label-md", "14px", "Button / input label size"],
  ];
  return (
    <div className="overflow-hidden rounded-ds-md border border-ds-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-ds-surface-sunken">
            {["Token", "Value", "Where used"].map((c) => (
              <th key={c} className="px-3 py-2 text-left font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, value, usage, swatch]) => (
            <tr key={name} className="bg-ds-surface-raised">
              <td className="border-t border-ds-border px-3 py-2">
                <code className="font-mono text-[12px] text-ds-ink">{name}</code>
              </td>
              <td className="border-t border-ds-border px-3 py-2">
                <span className="inline-flex items-center gap-2">
                  {swatch && <span className="h-3.5 w-3.5 rounded-ds-sm ring-1 ring-ds-border" style={{ background: swatch }} />}
                  <code className="font-mono text-[12px] text-ds-ink-soft">{value}</code>
                </span>
              </td>
              <td className="border-t border-ds-border px-3 py-2 font-ds-sans text-ds-caption text-ds-ink-muted">{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 4 — Brand A vs Brand B, same components. */
export function BrandCompareMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { name: "Brand A", color: BRAND_A, hover: BRAND_A_HOVER },
        { name: "Brand B", color: BRAND_B, hover: BRAND_B_HOVER },
      ].map((b) => (
        <Panel key={b.name} label={b.name}>
          <div className="flex flex-col gap-2.5">
            <ButtonMatrix color={b.color} />
            <label className="flex flex-col gap-1">
              <span className="font-ds-sans text-[11px] font-semibold text-ds-ink-muted">Input</span>
              <span className="flex h-9 items-center rounded-ds-sm border bg-ds-surface-raised px-3 font-ds-sans text-ds-caption text-ds-ink" style={{ borderColor: b.color }}>
                Focused field
              </span>
            </label>
            <span className="inline-flex w-fit items-center rounded-ds-pill px-2 py-0.5 font-ds-sans text-[11px] font-semibold" style={{ background: `${b.color}1f`, color: b.hover }}>
              Badge
            </span>
          </div>
        </Panel>
      ))}
    </div>
  );
}

/* 5 — Input anatomy: the 12 states. */
export function InputAnatomyMock() {
  const states: { label: string; cls: string }[] = [
    { label: "Resting · empty", cls: "border-ds-border-strong text-ds-ink-muted" },
    { label: "Resting · filled", cls: "border-ds-border-strong text-ds-ink" },
    { label: "Hover · empty", cls: "border-ds-ink-muted text-ds-ink-muted" },
    { label: "Hover · filled", cls: "border-ds-ink-muted text-ds-ink" },
    { label: "Focus · empty", cls: "border-ds-accent ring-2 ring-ds-accent/20 text-ds-ink-muted" },
    { label: "Focus · filled", cls: "border-ds-accent ring-2 ring-ds-accent/20 text-ds-ink" },
    { label: "Active · empty", cls: "border-ds-accent text-ds-ink-muted" },
    { label: "Active · filled", cls: "border-ds-accent text-ds-ink" },
    { label: "Error · empty", cls: "border-ds-tag-peach-fg text-ds-ink-muted" },
    { label: "Error · filled", cls: "border-ds-tag-peach-fg text-ds-ink" },
    { label: "Disabled · empty", cls: "border-ds-border bg-ds-surface-sunken text-ds-ink-muted opacity-60" },
    { label: "Disabled · filled", cls: "border-ds-border bg-ds-surface-sunken text-ds-ink-muted opacity-60" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {states.map((s) => (
        <div key={s.label} className="flex flex-col gap-1">
          <span className="font-ds-sans text-[10px] font-semibold uppercase tracking-wide text-ds-ink-muted">{s.label}</span>
          <span className={`flex h-8 items-center rounded-ds-sm border bg-ds-surface-raised px-2.5 font-ds-sans text-[12px] ${s.cls}`}>
            {s.label.includes("filled") ? "Label" : "Placeholder"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* 6 — Figma → code pipeline (inline SVG flow diagram). */
export function FigmaToCodePipelineMock() {
  const nodes = [
    "Figma components + variables",
    "Token JSON + MCP",
    "AI",
    "CSS tokens + React",
    "Storybook",
  ];
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
      {nodes.map((n, i) => (
        <div key={n} className="flex flex-1 flex-col items-center gap-2 sm:flex-row">
          <div className={`flex w-full items-center justify-center rounded-ds-md border px-3 py-2.5 text-center font-ds-sans text-[12px] font-semibold ${i === 2 ? "border-ds-accent bg-ds-accent-soft text-ds-accent" : "border-ds-border bg-ds-surface-raised text-ds-ink-soft"}`}>
            {n}
          </div>
          {i < nodes.length - 1 && (
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 rotate-90 text-ds-ink-muted sm:rotate-0" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/* 7 — Arksaber running in Storybook (themeable across brands). */
export function ArksaberStorybookMock() {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] overflow-hidden rounded-ds-md border border-ds-border">
      <aside className="flex flex-col gap-1 border-r border-ds-border bg-ds-surface-sunken p-2.5">
        <span className="mb-1 font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">Arksaber</span>
        {["Button", "Input", "Hint", "Icon", "Modal"].map((c, i) => (
          <span key={c} className={`rounded-ds-sm px-2 py-1 font-ds-sans text-[11px] ${i === 0 ? "bg-ds-accent-soft font-semibold text-ds-accent" : "text-ds-ink-muted"}`}>
            {c}
          </span>
        ))}
      </aside>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center justify-between border-b border-ds-border px-3 py-2">
          <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Button</span>
          <span className="flex items-center gap-1.5 font-ds-sans text-[11px] text-ds-ink-muted">
            Brand
            <span className="h-3 w-3 rounded-ds-pill" style={{ background: BRAND_A }} />
            <span className="h-3 w-3 rounded-ds-pill opacity-50" style={{ background: BRAND_B }} />
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-ds-surface-sunken p-6">
          <ButtonMatrix color={BRAND_A} />
        </div>
        <div className="border-t border-ds-border p-3">
          <MockLines count={2} />
        </div>
      </div>
    </div>
  );
}
