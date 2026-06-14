"use client";

import { useState } from "react";
import Link from "next/link";
import { Text, cn } from "@packages/ds-ui";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" }
];

export function DsNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 px-5 md:px-8">
      <nav className="pointer-events-auto mx-auto flex max-w-ds-content items-center justify-between gap-4 rounded-ds-pill border border-ds-border-subtle bg-ds-surface-nav px-5 py-3 shadow-ds-nav backdrop-blur-md">
        <Link href="/" className="font-ds-serif text-ds-h3 text-ds-ink">
          Rishabh<span className="text-ds-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-ds-sans text-ds-body-sm font-medium text-ds-ink-soft transition-colors duration-[var(--ds-dur-fast)] hover:text-ds-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-ds-pill bg-ds-accent px-4 py-2 font-ds-sans text-ds-body-sm font-semibold text-ds-on-ink transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-accent-hover"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-ds-pill md:hidden"
        >
          <span className={cn("h-0.5 w-5 bg-ds-ink transition-transform duration-[var(--ds-dur-fast)]", open && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-5 bg-ds-ink transition-opacity duration-[var(--ds-dur-fast)]", open && "opacity-0")} />
          <span className={cn("h-0.5 w-5 bg-ds-ink transition-transform duration-[var(--ds-dur-fast)]", open && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-ds-content rounded-ds-2xl border border-ds-border-subtle bg-ds-surface-raised p-4 shadow-ds-nav md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-t border-ds-border py-3 first:border-t-0">
                <Text variant="body" as="span">{l.label}</Text>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
