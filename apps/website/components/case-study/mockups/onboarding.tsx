import { MockProgress, MockTable, MockInput, MockBadge, MockButton, MockLines } from "./ui-kit";

const STEPS_12 = [
  { label: "Email & mobile verification", status: "done" as const },
  { label: "Personal information", status: "done" as const },
  { label: "Document upload", status: "active" as const },
  { label: "Company policies", status: "todo" as const },
  { label: "Orientation", status: "todo" as const },
  { label: "Review & sign", status: "todo" as const },
];

/* 1 — Redesigned onboarding home: welcome + deadline + progress + steps. */
export function OnboardingHomeMock() {
  return (
    <div className="flex flex-col gap-4 rounded-ds-md border border-ds-border bg-ds-surface-raised p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="font-ds-serif text-ds-h3 text-ds-ink">Welcome, Aanya 👋</span>
          <p className="font-ds-sans text-ds-caption text-ds-ink-muted">Let&apos;s get your onboarding done.</p>
        </div>
        <div className="flex gap-2">
          <span className="flex flex-col items-center rounded-ds-sm bg-ds-surface-sunken px-3 py-1.5">
            <span className="font-ds-sans text-ds-body-sm font-bold text-ds-ink">Jun 30</span>
            <span className="font-ds-sans text-[10px] uppercase tracking-wide text-ds-ink-muted">Deadline</span>
          </span>
          <span className="flex flex-col items-center rounded-ds-sm bg-ds-accent-soft px-3 py-1.5">
            <span className="font-ds-sans text-ds-body-sm font-bold text-ds-accent">5 days</span>
            <span className="font-ds-sans text-[10px] uppercase tracking-wide text-ds-accent">Left</span>
          </span>
        </div>
      </div>
      <MockProgress percent={33} steps={STEPS_12} />
      <MockButton className="w-fit">Continue onboarding</MockButton>
    </div>
  );
}

/* 2 — The old admin-panel flow (before): task table + dense form. */
export function OldAdminPanelMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">Onboarding tasks</span>
        <MockTable
          legacy
          columns={["Task", "Status"]}
          rows={[
            ["Personal details", "Incomplete"],
            ["KYC documents", "Pending"],
            ["Bank details", "—"],
            ["Policy acceptance", "—"],
            ["Asset allocation", "—"],
          ]}
        />
      </div>
      <div className="flex flex-col gap-2 rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">New hire form</span>
        <div className="grid grid-cols-2 gap-2">
          {["First name", "Last name", "DOB", "Gender", "PAN", "Aadhar", "Address", "Pincode"].map((f) => (
            <MockInput key={f} label={f} placeholder="" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* 3 — Inspiration board: labeled reference tiles (illustrative, not real screenshots). */
export function InspirationBoardMock() {
  const refs = ["Zoho People", "Gusto", "Rippling", "Deel"];
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {refs.map((r, i) => (
        <div key={r} className="flex flex-col gap-2 rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
          <div className="flex items-center justify-between">
            <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">{r}</span>
            <MockBadge tone={(["sky", "mint", "lilac", "peach"] as const)[i]}>ref</MockBadge>
          </div>
          <span className="h-1.5 w-1/2 rounded-ds-pill bg-ds-accent" />
          <MockLines count={3} />
          <div className="mt-1 flex gap-1.5">
            <span className="h-5 w-12 rounded-ds-sm bg-ds-surface-sunken" />
            <span className="h-5 w-8 rounded-ds-sm bg-ds-surface-sunken" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* 4 — The progress system: tracker + step list, status + % always visible. */
export function ProgressSystemMock() {
  return (
    <div className="mx-auto max-w-md rounded-ds-md border border-ds-border bg-ds-surface-raised p-4">
      <MockProgress percent={33} steps={STEPS_12} />
    </div>
  );
}

/* 5 — Document-upload step with Aadhar/PAN parsing. */
export function DocUploadStepMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-2 rounded-ds-md border border-dashed border-ds-border-strong bg-ds-surface-sunken p-5 text-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-ds-ink-muted" fill="none" aria-hidden="true">
          <path d="M12 16V4m0 0L8 8m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="font-ds-sans text-ds-caption font-semibold text-ds-ink">Upload Aadhar / PAN</span>
        <span className="font-ds-sans text-[12px] text-ds-ink-muted">aadhar_front.jpg · parsed ✓</span>
        <MockBadge tone="positive">Auto-parsed</MockBadge>
      </div>
      <div className="flex flex-col gap-2.5 rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
        <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">
          Parsed from document
        </span>
        <MockInput label="Full name" value="Aanya Sharma" />
        <MockInput label="Date of birth" value="14 Mar 1998" />
        <MockInput label="ID number" value="XXXX-XXXX-4821" />
      </div>
    </div>
  );
}

/* 6 — Iteration boards side by side: layout → components → states. */
export function IterationBoardsMock() {
  const boards: { title: string; body: React.ReactNode }[] = [
    {
      title: "Layout explorations",
      body: (
        <div className="flex flex-col gap-1.5">
          <span className="h-3 rounded-ds-sm bg-ds-surface-sunken" />
          <div className="grid grid-cols-3 gap-1.5">
            <span className="h-8 rounded-ds-sm bg-ds-surface-sunken" />
            <span className="col-span-2 h-8 rounded-ds-sm bg-ds-surface-sunken" />
          </div>
          <span className="h-6 rounded-ds-sm bg-ds-surface-sunken" />
        </div>
      ),
    },
    {
      title: "Verification cards",
      body: (
        <div className="flex flex-col gap-1.5">
          {["Empty", "Error", "Success"].map((s) => (
            <span key={s} className="flex h-7 items-center justify-between rounded-ds-sm border border-ds-border px-2 font-ds-sans text-[11px] text-ds-ink-soft">
              OTP {s}
              <span className="font-mono text-ds-ink-muted">• • • •</span>
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Field & upload states",
      body: (
        <div className="flex flex-wrap gap-1.5">
          {["Uploading", "Reupload", "Too large", "Unsupported", "Error", "Done"].map((s, i) => (
            <MockBadge key={s} tone={i === 5 ? "positive" : i === 4 ? "peach" : "neutral"}>{s}</MockBadge>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {boards.map((b) => (
        <div key={b.title} className="flex flex-col gap-2 rounded-ds-md border border-ds-border bg-ds-surface-raised p-3">
          <span className="font-ds-sans text-[11px] font-bold uppercase tracking-wide text-ds-ink-muted">{b.title}</span>
          {b.body}
        </div>
      ))}
    </div>
  );
}

/* 7 — Completion celebration / completed-onboarding state. */
export function CompletionMock() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-ds-md border border-ds-border bg-ds-surface-raised p-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-ds-pill bg-ds-tag-mint-bg text-2xl text-ds-tag-mint-fg">
        ✓
      </span>
      <span className="font-ds-serif text-ds-h3 text-ds-ink">Good Job Filling Verification!</span>
      <p className="max-w-sm font-ds-sans text-ds-caption text-ds-ink-muted">
        You&apos;ve completed onboarding. HR will review and approve — nothing else needed from you.
      </p>
      <MockProgress percent={100} steps={STEPS_12.map((s) => ({ ...s, status: "done" as const }))} />
    </div>
  );
}
