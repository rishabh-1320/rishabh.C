import type { ReactNode } from "react";

/**
 * ui-kit — token-styled "fake product" primitives used to assemble the
 * case-study mockups in code (no screenshots). Everything here is purely
 * presentational and uses the `ds` tokens, so the scenes read as one product.
 */

/* ----------------------------------------------------------------- atoms -- */

export function MockButton({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles: Record<string, string> = {
    primary: "bg-ds-accent text-ds-on-ink",
    secondary: "border border-ds-border-strong bg-ds-surface-raised text-ds-ink",
    ghost: "text-ds-ink-soft",
  };
  return (
    <span
      className={`inline-flex items-center justify-center rounded-ds-sm px-3 py-1.5 font-ds-sans text-ds-caption font-semibold ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export function MockBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "positive" | "lilac" | "mint" | "sky" | "peach";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-ds-surface-sunken text-ds-ink-soft",
    accent: "bg-ds-accent-soft text-ds-accent",
    positive: "bg-ds-tag-mint-bg text-ds-tag-mint-fg",
    lilac: "bg-ds-tag-lilac-bg text-ds-tag-lilac-fg",
    mint: "bg-ds-tag-mint-bg text-ds-tag-mint-fg",
    sky: "bg-ds-tag-sky-bg text-ds-tag-sky-fg",
    peach: "bg-ds-tag-peach-bg text-ds-tag-peach-fg",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-ds-pill px-2 py-0.5 font-ds-sans text-[11px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function MockInput({
  label,
  value,
  placeholder,
  focused = false,
  className,
}: {
  label?: string;
  value?: string;
  placeholder?: string;
  focused?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      {label && (
        <span className="font-ds-sans text-[11px] font-semibold uppercase tracking-wide text-ds-ink-muted">
          {label}
        </span>
      )}
      <span
        className={`flex h-9 items-center rounded-ds-sm border bg-ds-surface-raised px-3 font-ds-sans text-ds-caption ${
          focused ? "border-ds-accent ring-2 ring-ds-accent/20" : "border-ds-border-strong"
        } ${value ? "text-ds-ink" : "text-ds-ink-muted"}`}
      >
        {value || placeholder}
        {focused && <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-ds-accent" />}
      </span>
    </label>
  );
}

/** Skeleton text line(s) — for representing body copy without lorem. */
export function MockLines({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-2 rounded-ds-pill bg-ds-border"
          style={{ width: `${[100, 92, 78, 85, 60][i % 5]}%` }}
        />
      ))}
    </div>
  );
}

export function MockAvatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-ds-pill bg-ds-accent-soft font-ds-sans text-[11px] font-bold text-ds-accent ${className ?? ""}`}
    >
      {initials}
    </span>
  );
}

/* --------------------------------------------------------------- molecules -- */

/** Type-ahead dropdown: filtered list + an optional pinned footer action. */
export function MockDropdown({
  query,
  items,
  footerAction,
}: {
  query?: string;
  items: string[];
  footerAction?: string;
}) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-ds-md border border-ds-border-strong bg-ds-surface-raised shadow-ds-card">
      <div className="flex h-9 items-center gap-2 border-b border-ds-border px-3">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-ds-ink-muted" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="font-ds-sans text-ds-caption text-ds-ink">{query}</span>
        <span className="inline-block h-4 w-px animate-pulse bg-ds-accent" />
      </div>
      <ul className="max-h-44 overflow-hidden py-1">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-center px-3 py-1.5 font-ds-sans text-ds-caption text-ds-ink-soft"
          >
            {it}
          </li>
        ))}
      </ul>
      {footerAction && (
        <div className="border-t border-ds-border bg-ds-surface-sunken px-3 py-2">
          <span className="inline-flex items-center gap-1.5 font-ds-sans text-ds-caption font-semibold text-ds-accent">
            <span className="text-base leading-none">+</span>
            {footerAction}
          </span>
        </div>
      )}
    </div>
  );
}

export function MockTable({
  columns,
  rows,
  legacy = false,
}: {
  columns: string[];
  rows: ReactNode[][];
  legacy?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-ds-md border border-ds-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-ds-surface-sunken">
            {columns.map((c) => (
              <th
                key={c}
                className="px-3 py-2 text-left font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 ? (legacy ? "bg-ds-surface-sunken/40" : "bg-ds-surface-raised") : "bg-ds-surface-raised"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border-t border-ds-border px-3 py-2 font-ds-sans text-ds-caption text-ds-ink-soft"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Stepped modal: a step rail on the left, the active panel on the right. */
export function MockModalStepper({
  title,
  steps,
  active = 0,
  children,
}: {
  title: string;
  steps: string[];
  active?: number;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-ds-md border border-ds-border-strong bg-ds-surface-raised shadow-ds-card">
      <div className="flex items-center justify-between border-b border-ds-border px-4 py-3">
        <span className="font-ds-sans text-ds-body-sm font-semibold text-ds-ink">{title}</span>
        <span className="font-ds-sans text-ds-caption text-ds-ink-muted">✕</span>
      </div>
      <div className="grid gap-0 sm:grid-cols-[160px_minmax(0,1fr)]">
        <ul className="flex flex-row gap-2 border-b border-ds-border bg-ds-surface-sunken p-3 sm:flex-col sm:border-b-0 sm:border-r">
          {steps.map((s, i) => (
            <li key={s} className="flex shrink-0 items-center gap-2">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-ds-pill text-[11px] font-bold ${
                  i === active ? "bg-ds-accent text-ds-on-ink" : i < active ? "bg-ds-tag-mint-bg text-ds-tag-mint-fg" : "bg-ds-surface-raised text-ds-ink-muted ring-1 ring-ds-border"
                }`}
              >
                {i < active ? "✓" : i + 1}
              </span>
              <span
                className={`hidden font-ds-sans text-ds-caption sm:inline ${
                  i === active ? "font-semibold text-ds-ink" : "text-ds-ink-muted"
                }`}
              >
                {s}
              </span>
            </li>
          ))}
        </ul>
        <div className="min-w-0 p-4">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ progress & tokens -- */

type StepStatus = "done" | "active" | "todo";

export function MockProgress({
  percent,
  steps,
}: {
  percent: number;
  steps: { label: string; status: StepStatus }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between font-ds-sans text-ds-caption">
          <span className="font-semibold text-ds-ink">{percent}% complete</span>
          <span className="text-ds-ink-muted">{steps.filter((s) => s.status === "done").length}/{steps.length} steps</span>
        </div>
        <span className="block h-2 overflow-hidden rounded-ds-pill bg-ds-surface-sunken">
          <span className="block h-full rounded-ds-pill bg-ds-accent" style={{ width: `${percent}%` }} />
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {steps.map((s) => (
          <li key={s.label} className="flex items-center gap-2.5">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-ds-pill text-[11px] font-bold ${
                s.status === "done"
                  ? "bg-ds-tag-mint-bg text-ds-tag-mint-fg"
                  : s.status === "active"
                    ? "bg-ds-accent text-ds-on-ink"
                    : "bg-ds-surface-sunken text-ds-ink-muted ring-1 ring-ds-border"
              }`}
            >
              {s.status === "done" ? "✓" : ""}
            </span>
            <span
              className={`font-ds-sans text-ds-caption ${
                s.status === "todo" ? "text-ds-ink-muted" : "text-ds-ink"
              } ${s.status === "active" ? "font-semibold" : ""}`}
            >
              {s.label}
            </span>
            {s.status === "active" && <MockBadge tone="accent">Now</MockBadge>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MockTokenRow({
  name,
  value,
  usage,
  swatch,
}: {
  name: string;
  value: string;
  usage: string;
  swatch?: string;
}) {
  return (
    <tr className="bg-ds-surface-raised">
      <td className="border-t border-ds-border px-3 py-2">
        <code className="font-mono text-[12px] text-ds-ink">{name}</code>
      </td>
      <td className="border-t border-ds-border px-3 py-2">
        <span className="inline-flex items-center gap-2">
          {swatch && (
            <span
              className="h-3.5 w-3.5 rounded-ds-sm ring-1 ring-ds-border"
              style={{ background: swatch }}
            />
          )}
          <code className="font-mono text-[12px] text-ds-ink-soft">{value}</code>
        </span>
      </td>
      <td className="border-t border-ds-border px-3 py-2 font-ds-sans text-ds-caption text-ds-ink-muted">
        {usage}
      </td>
    </tr>
  );
}

/** App shell: optional left rail + topbar wrapping a content slot. */
export function MockWindow({
  title,
  nav = ["Dashboard", "Producers", "Payouts", "Reports", "Settings"],
  activeNav,
  legacy = false,
  children,
}: {
  title?: string;
  nav?: string[];
  activeNav?: string;
  legacy?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`grid grid-cols-[96px_minmax(0,1fr)] overflow-hidden rounded-ds-md border border-ds-border ${legacy ? "bg-ds-surface-sunken" : "bg-ds-surface-raised"}`}>
      <aside className="flex flex-col gap-1 border-r border-ds-border bg-ds-surface-sunken p-2.5">
        <span className="mb-2 px-1 font-ds-serif text-ds-body-sm font-semibold text-ds-ink">
          {legacy ? "Admin" : "Chestnut"}
        </span>
        {nav.map((n) => (
          <span
            key={n}
            className={`rounded-ds-sm px-2 py-1 font-ds-sans text-[11px] ${
              n === activeNav ? "bg-ds-accent-soft font-semibold text-ds-accent" : "text-ds-ink-muted"
            }`}
          >
            {n}
          </span>
        ))}
      </aside>
      <div className="flex min-w-0 flex-col">
        {title && (
          <div className="flex items-center justify-between border-b border-ds-border px-4 py-2.5">
            <span className="truncate font-ds-sans text-ds-body-sm font-semibold text-ds-ink">{title}</span>
            <MockAvatar initials="RC" />
          </div>
        )}
        <div className="min-w-0 p-4">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- SVG charts -- */

const ACCENT = "var(--ds-color-accent)";
const INK_MUTED = "var(--ds-color-ink-muted)";
const BORDER = "var(--ds-color-border)";

export function MockDotPlot({ className }: { className?: string }) {
  const groups = [
    [28, 42, 55, 61],
    [35, 48, 52, 70, 80],
    [22, 38, 44],
    [50, 63, 72, 88],
  ];
  return (
    <svg viewBox="0 0 240 120" className={`w-full ${className ?? ""}`} role="img" aria-label="Dot plot of performance distribution">
      <line x1="20" y1="100" x2="232" y2="100" stroke={BORDER} strokeWidth="1" />
      {groups.map((g, gi) => {
        const x = 40 + gi * 56;
        return (
          <g key={gi}>
            <line x1={x} y1="20" x2={x} y2="100" stroke={BORDER} strokeWidth="1" strokeDasharray="2 3" />
            {g.map((v, vi) => (
              <circle key={vi} cx={x} cy={100 - v} r="3.5" fill={ACCENT} opacity={0.55 + vi * 0.1} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function MockAreaChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 120" className={`w-full ${className ?? ""}`} role="img" aria-label="Smoothened area chart of trend over time">
      <defs>
        <linearGradient id="mockArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.30" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M10 95 C 45 70, 70 78, 100 55 S 150 30, 180 42 S 220 22, 232 28 L232 110 L10 110 Z"
        fill="url(#mockArea)"
      />
      <path
        d="M10 95 C 45 70, 70 78, 100 55 S 150 30, 180 42 S 220 22, 232 28"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MockBars({ className }: { className?: string }) {
  const bars = [40, 64, 52, 78, 60, 88, 70];
  return (
    <svg viewBox="0 0 240 120" className={`w-full ${className ?? ""}`} role="img" aria-label="Bar chart">
      <line x1="10" y1="100" x2="232" y2="100" stroke={BORDER} strokeWidth="1" />
      {bars.map((b, i) => (
        <rect key={i} x={20 + i * 30} y={100 - b} width="18" height={b} rx="3" fill={i === 5 ? ACCENT : INK_MUTED} opacity={i === 5 ? 1 : 0.35} />
      ))}
    </svg>
  );
}
