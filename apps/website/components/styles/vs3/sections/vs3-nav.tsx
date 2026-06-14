"use client";

import { useState } from "react";
import Link from "next/link";
import { Text, cn } from "../ui";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#capability" },
  { label: "About", href: "#social" }
];

export function Vs3Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-vs3-border-subtle bg-vs3-surface-nav backdrop-blur-md">
      <div className="mx-auto flex max-w-vs3-content items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/vs3" className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-vs3-sm bg-vs3-accent" aria-hidden="true" />
          <span className="font-vs3-display text-vs3-h3 font-[var(--vs3-type-h3-weight)] text-vs3-ink">
            Rishabh
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-vs3-sans text-vs3-body-sm font-medium text-vs3-ink-soft transition-colors duration-[var(--vs3-dur-fast)] hover:text-vs3-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-vs3-pill bg-vs3-accent px-4 py-2 font-vs3-sans text-vs3-body-sm font-medium text-vs3-on-ink transition-colors duration-[var(--vs3-dur-fast)] hover:bg-vs3-accent-hover"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={cn("h-0.5 w-5 bg-vs3-ink transition-transform duration-[var(--vs3-dur-fast)]", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-5 bg-vs3-ink transition-opacity duration-[var(--vs3-dur-fast)]", open && "opacity-0")} />
          <span className={cn("h-0.5 w-5 bg-vs3-ink transition-transform duration-[var(--vs3-dur-fast)]", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {open && (
        <div className="border-t border-vs3-border bg-vs3-surface-page px-5 pb-4 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-t border-vs3-border py-3 first:border-t-0">
                <Text variant="body" as="span">
                  {l.label}
                </Text>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
