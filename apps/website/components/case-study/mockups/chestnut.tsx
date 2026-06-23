import {
  MockWindow,
  MockTable,
  MockButton,
  MockBadge,
  MockInput,
  MockDropdown,
  MockModalStepper,
  MockLines,
} from "./ui-kit";

/* 1 — Hero: redesigned product screen + the Bonsai design system beside it. */
export function ChestnutHeroMock() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
      <MockWindow title="Producer Performance" activeNav="Producers">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MockButton>New payout run</MockButton>
            <MockButton variant="secondary">Filter</MockButton>
            <MockBadge tone="positive">Live</MockBadge>
          </div>
          <MockTable
            columns={["Producer", "NPN", "Persistency", "Status"]}
            rows={[
              ["A. Okafor", "8841302", "92.4%", <MockBadge tone="positive" key="s">On track</MockBadge>],
              ["M. Reyes", "7720945", "87.1%", <MockBadge tone="positive" key="s">On track</MockBadge>],
              ["J. Cole", "9015573", "74.8%", <MockBadge tone="peach" key="s">Review</MockBadge>],
            ]}
          />
        </div>
      </MockWindow>

      <div className="flex flex-col gap-3 rounded-ds-md border border-ds-border bg-ds-surface-sunken p-4">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
          Bonsai · design system
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <MockButton>Primary</MockButton>
          <MockButton variant="secondary">Secondary</MockButton>
          <MockButton variant="ghost">Ghost</MockButton>
        </div>
        <MockInput label="Field" value="Premium" focused />
        <div className="flex flex-wrap gap-1.5">
          <MockBadge tone="accent">Accent</MockBadge>
          <MockBadge tone="mint">Success</MockBadge>
          <MockBadge tone="sky">Info</MockBadge>
          <MockBadge tone="peach">Warn</MockBadge>
        </div>
      </div>
    </div>
  );
}

/* 2 — Bonsai running in Storybook: explorer + canvas + controls. */
export function BonsaiStorybookMock() {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] overflow-hidden rounded-ds-md border border-ds-border">
      <aside className="flex flex-col gap-1 border-r border-ds-border bg-ds-surface-sunken p-2.5">
        <span className="mb-1 font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
          Components
        </span>
        {["Button", "Input", "Table", "Tabs", "Dropdown", "Modal", "Toast"].map((c, i) => (
          <span
            key={c}
            className={`rounded-ds-sm px-2 py-1 font-ds-sans text-[11px] ${i === 0 ? "bg-ds-accent-soft font-semibold text-ds-accent" : "text-ds-ink-muted"}`}
          >
            {c}
          </span>
        ))}
      </aside>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-2 border-b border-ds-border px-3 py-2">
          <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Button</span>
          <span className="font-ds-sans text-ds-caption text-ds-ink-muted">/ Primary</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-ds-surface-sunken p-6">
          <MockButton>Default</MockButton>
          <MockButton variant="secondary">Hover</MockButton>
          <MockButton variant="ghost">Disabled</MockButton>
        </div>
        <div className="border-t border-ds-border p-3">
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Controls
          </span>
          <MockLines count={2} className="mt-2" />
        </div>
      </div>
    </div>
  );
}

/* 3 — The trigger: Payment Logic field with the type-ahead open. */
export function PaymentTypeaheadMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
          Payment logic · add variable
        </span>
        <MockDropdown
          query="persist"
          items={["Premium", "Persistency rate (13-mo)", "Producer level"]}
          footerAction="New variable"
        />
      </div>
      <p className="font-ds-sans text-ds-caption text-ds-ink-muted">
        The admin keeps typing in the search they already use — the new option waits at the bottom.
      </p>
    </div>
  );
}

/* 4 — Steps 1 & 2: variable type, then analytic type with examples. */
export function CreateVariableSteps12Mock() {
  return (
    <MockModalStepper
      title="Create variable"
      steps={["Type", "Analytic", "Metrics", "Period"]}
      active={1}
    >
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Variable type
          </span>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Custom", "Expression", "Analytic"].map((t) => (
              <div
                key={t}
                className={`rounded-ds-sm border p-2 text-center font-ds-sans text-ds-caption ${t === "Analytic" ? "border-ds-accent bg-ds-accent-soft font-semibold text-ds-accent" : "border-ds-border text-ds-ink-soft"}`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Analytic type
          </span>
          <div className="mt-2 flex flex-col gap-1.5">
            {[
              ["Summation", "Total premium booked in a period"],
              ["Growth", "Year-over-year change in production"],
              ["Persistency", "13th-month policy retention rate"],
            ].map(([t, ex], i) => (
              <label key={t} className="flex items-start gap-2 rounded-ds-sm border border-ds-border p-2">
                <span className={`mt-0.5 h-3.5 w-3.5 shrink-0 rounded-ds-pill ring-2 ${i === 2 ? "bg-ds-accent ring-ds-accent" : "ring-ds-border-strong"}`} />
                <span>
                  <span className="block font-ds-sans text-ds-caption font-semibold text-ds-ink">{t}</span>
                  <span className="block font-ds-sans text-[12px] text-ds-ink-muted">{ex}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </MockModalStepper>
  );
}

/* 5 — Step 3: configure metrics with described dropdowns. */
export function ConfigureMetricsMock() {
  return (
    <MockModalStepper
      title="Create variable · Persistency"
      steps={["Type", "Analytic", "Metrics", "Period"]}
      active={2}
    >
      <div className="flex flex-col gap-3">
        <MockInput label="Variable name" value="13-mo Persistency" />
        <div className="flex flex-col gap-1.5">
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Persistency metric
          </span>
          <MockDropdown
            items={[
              "% of policies retained",
              "Dollar value of premium retained",
              "Recurring premium persistency",
            ]}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Type of date
          </span>
          <MockInput value="Policy effective date" />
          <span className="font-ds-sans text-[12px] text-ds-ink-muted">
            The anchor each policy's retention window is measured from.
          </span>
        </div>
      </div>
    </MockModalStepper>
  );
}

/* 6 — Step 4: period & filters with the live preview loaded. */
export function LivePreviewMock() {
  return (
    <MockModalStepper
      title="Create variable · Preview"
      steps={["Type", "Analytic", "Metrics", "Period"]}
      active={3}
    >
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <MockInput label="Baseline period" value="Jan 2025" />
          <MockInput label="Window" value="13 months" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <MockBadge>Line: Life</MockBadge>
          <MockBadge>Status: Active</MockBadge>
          <MockBadge>Level: Producer</MockBadge>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
            Live preview
          </span>
          <MockBadge tone="positive">12 producers</MockBadge>
        </div>
        <MockTable
          columns={["NPN", "Policies", "Persistency"]}
          rows={[
            ["8841302", "318", "92.4%"],
            ["7720945", "204", "87.1%"],
            ["9015573", "176", "74.8%"],
          ]}
        />
      </div>
    </MockModalStepper>
  );
}
