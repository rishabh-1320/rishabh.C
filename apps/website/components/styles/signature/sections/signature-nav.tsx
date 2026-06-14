"use client";

import { useState } from "react";
import Link from "next/link";
import { Text, cn } from "../ui";

const LINKS = [
  { label: "Work", href: "#works" },
  { label: "Ideology", href: "#ideology" },
  { label: "AI", href: "#ai" },
  { label: "About", href: "#about" }
];

export function SignatureNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 px-5 md:px-8">
      <nav className="pointer-events-auto mx-auto flex max-w-content items-center justify-between gap-4 rounded-pill border border-[color:var(--border-subtle)] bg-[color:var(--surface-raised)]/80 px-5 py-3 shadow-nav backdrop-blur-md">
        <Link href="/styles/signature" className="font-serif text-h4 text-[color:var(--text-primary)]">
          Rishabh<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-body-sm font-medium text-[color:var(--text-secondary)] transition-colors duration-[var(--dur-fast)] hover:text-[color:var(--text-primary)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-pill bg-accent px-4 py-2 font-sans text-body-sm font-semibold text-[color:var(--text-inverse)] transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-pill md:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-5 bg-[color:var(--text-primary)] transition-transform duration-[var(--dur-fast)]",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-[color:var(--text-primary)] transition-opacity duration-[var(--dur-fast)]",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-[color:var(--text-primary)] transition-transform duration-[var(--dur-fast)]",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-content rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-raised)] p-4 shadow-nav md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-t border-[color:var(--border-default)] py-3 first:border-t-0"
              >
                <Text variant="body" as="span">
                  {l.label}
                </Text>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
