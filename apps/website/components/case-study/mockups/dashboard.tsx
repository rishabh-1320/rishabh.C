import { MockTable, MockBadge, MockDotPlot, MockAreaChart } from "./ui-kit";

/* 1 — The "before": a wall of numbers with no hierarchy. */
export function ExistingDashboardMock() {
  const tiles = [
    "Present", "Absent", "On leave", "Late", "Active", "Inactive",
    "Unmapped", "Joiners", "Leavers", "Avg hours", "Overtime", "Devices",
  ];
  return (
    <div className="grid grid-cols-[96px_minmax(0,1fr)] overflow-hidden rounded-ds-md border border-ds-border bg-ds-surface-sunken">
      <aside className="flex flex-col gap-1 border-r border-ds-border p-2.5">
        <span className="mb-1 font-ds-sans text-ds-body-sm font-semibold text-ds-ink">Admin</span>
        {["Overview", "Attendance", "Workforce", "Reports"].map((n) => (
          <span key={n} className="rounded-ds-sm px-2 py-1 font-ds-sans text-[11px] text-ds-ink-muted">{n}</span>
        ))}
      </aside>
      <div className="min-w-0 p-3">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <div key={t} className="rounded-ds-sm border border-ds-border bg-ds-surface-raised px-2 py-1.5">
              <span className="block font-ds-sans text-[10px] uppercase tracking-wide text-ds-ink-muted">{t}</span>
              <span className="block font-ds-sans text-ds-body-sm font-bold text-ds-ink-soft">{[64, 12, 7, 9, 218, 14, 3, 6, 2, 8.1, 21, 240][i]}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center font-ds-sans text-[11px] italic text-ds-ink-muted">
          Everything shown, nothing surfaced.
        </p>
      </div>
    </div>
  );
}

/* 2 — The final dashboard, annotated: dot plot + head-count table + area chart. */
function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-ds-sm bg-ds-accent-soft px-2 py-0.5 font-ds-sans text-[10px] font-semibold text-ds-accent">
      <span className="text-ds-accent">◆</span>
      {children}
    </span>
  );
}

export function FinalDashboardMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Attendance Trends</span>
          <Annotation>dot plot — shows the spread, not an average</Annotation>
        </div>
        <MockDotPlot />
        <div className="mt-1 flex justify-around font-ds-sans text-[10px] text-ds-ink-muted">
          <span>Eng</span><span>Sales</span><span>Ops</span><span>Support</span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Head Count</span>
            <Annotation>table, not a pie (20+ branches)</Annotation>
          </div>
          <MockTable
            columns={["Branch", "Head count"]}
            rows={[
              ["Bengaluru", "318"],
              ["Mumbai", "204"],
              ["Delhi NCR", "176"],
              ["Pune", "98"],
            ]}
          />
        </div>
        <div className="rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Working Hours</span>
            <Annotation>smoothened — trend over noise</Annotation>
          </div>
          <MockAreaChart />
        </div>
      </div>
    </div>
  );
}

/* 3 — Public reviews (illustrative copy — real quotes to be dropped in). */
export function ReviewsMock() {
  const reviews = [
    { quote: "The dashboard finally tells us what's happening with attendance at a glance.", who: "HR Director", src: "G2" },
    { quote: "Clean, readable charts — we stopped exporting to spreadsheets to understand our own data.", who: "Ops Lead", src: "G2" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {reviews.map((r) => (
          <div key={r.who} className="flex flex-col gap-2 rounded-ds-md border border-ds-border bg-ds-surface-raised p-4">
            <span className="text-ds-accent" aria-label="5 out of 5 stars">★★★★★</span>
            <p className="font-ds-sans text-ds-caption text-ds-ink">&ldquo;{r.quote}&rdquo;</p>
            <div className="flex items-center justify-between">
              <span className="font-ds-sans text-[12px] font-semibold text-ds-ink-soft">{r.who}</span>
              <MockBadge tone="sky">{r.src}</MockBadge>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center font-ds-sans text-[11px] italic text-ds-ink-muted">
        Illustrative — replace with the real G2 / support quotes.
      </p>
    </div>
  );
}
