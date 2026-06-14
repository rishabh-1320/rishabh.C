export function CaseFigurePlaceholder({ description, caption }: { description: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div
        className="relative flex aspect-video items-center justify-center overflow-hidden rounded-ds-2xl border border-dashed border-ds-border-strong"
        style={{
          background:
            "linear-gradient(135deg, var(--ds-color-surface-sunken) 0%, var(--ds-color-surface-raised) 50%, var(--ds-color-surface-sunken) 100%)",
        }}
      >
        {/* subtle grid pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--ds-color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ds-color-ink) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative flex flex-col items-center gap-4 px-8 text-center">
          {/* image icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-ds-pill bg-ds-surface-raised ring-1 ring-ds-border">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-ds-ink-muted" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 15l-4.5-4.5L7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="max-w-md font-ds-sans text-ds-body-sm font-medium leading-relaxed text-ds-ink-soft">
            {description}
          </p>

          <span className="font-ds-sans text-ds-eyebrow font-bold uppercase tracking-[0.14em] text-ds-ink-muted">
            Visual pending
          </span>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center font-ds-sans text-ds-caption italic text-ds-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
