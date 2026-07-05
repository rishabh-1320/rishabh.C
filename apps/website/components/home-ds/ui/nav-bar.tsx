"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Text, cn } from "@packages/ds-ui";
import { SectionRow } from "./section-row";
import { Block } from "./block";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" }
];

/**
 * The homepage's own nav shell — a floating rounded-16 pill that's transparent
 * over the hero and frosts in once the page scrolls past it. Self-contained
 * (content + frost state) so `home.tsx` just drops it in.
 */
export function NavBar({ resumeUrl }: { resumeUrl: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <SectionRow>
      <Block width="wide" border="none" pad="none">
        <nav
          className={cn(
            "flex items-center justify-between rounded-ds-shell px-4 py-2 transition-[background-color,box-shadow] duration-[var(--ds-dur-default)]",
            scrolled && "bg-ds-surface-nav shadow-ds-nav backdrop-blur-md"
          )}
        >
          <Link href="/" className="font-ds-inter text-[24px] font-light text-ds-nav-muted">
            Portfolio website
            <span className="text-ds-accent">.</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-ds-control px-4 py-2 font-ds-inter text-[14px] font-light tracking-[-0.015em] text-ds-nav-muted transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-surface-sunken"
              >
                {l.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 rounded-ds-pill bg-ds-accent px-4 py-2 font-ds-inter text-[14px] font-light tracking-[-0.015em] text-white transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-accent-hover"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-ds-pill md:hidden"
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-ds-nav-muted transition-transform duration-[var(--ds-dur-fast)]",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ds-nav-muted transition-opacity duration-[var(--ds-dur-fast)]",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ds-nav-muted transition-transform duration-[var(--ds-dur-fast)]",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-ds-card border border-ds-hairline bg-ds-surface-paper p-4 md:hidden">
            <div className="flex flex-col">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-t border-ds-hairline py-3 first:border-t-0"
                >
                  <Text variant="hp-body" as="span">
                    {l.label}
                  </Text>
                </a>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-ds-pill bg-ds-accent px-4 py-3 text-center font-ds-inter text-[14px] font-light text-white"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </Block>
      </SectionRow>
    </header>
  );
}
