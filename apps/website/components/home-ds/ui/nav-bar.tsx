"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Text, cn } from "@packages/ds-ui";
import { SectionRow } from "./section-row";
import { Block } from "./block";
import { LinkedinIcon } from "./cta-footer";

/** How far past the very top the page must scroll before the nav frosts in. */
const SCROLL_THRESHOLD = 24;

const HOME_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" }
];

const ArrowUpRightIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type NavLink = { label: string; href: string };

/**
 * The site's own nav shell — a floating rounded-16 pill. Transparent at the
 * very top (page load, no scroll yet) so it reads as part of the page, then
 * frosts in — soft translucent background, backdrop blur, a very soft
 * diffuse shadow — once the page has scrolled past SCROLL_THRESHOLD, so it
 * stays legible over whatever content is now behind it. The two states
 * cross-fade via a transition rather than snapping. Self-contained so any
 * page drops it in.
 *
 * `links` defaults to the homepage's in-page anchors; pages away from home
 * (case studies) pass absolute anchors (e.g. `/#work`) so the same nav works
 * from any route.
 */
export function NavBar({
  resumeUrl,
  linkedinUrl,
  links = HOME_LINKS
}: {
  resumeUrl: string;
  linkedinUrl: string;
  links?: NavLink[];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <SectionRow>
      {/* padX="none": the pill must span the full 1200-wide column edge-to-edge
          (its own px-4 handles the Figma px-[16px]) — Block's default gutter
          padding would otherwise inset it an extra 24px past the rails. */}
      <Block width="wide" border="none" pad="none" padX="none">
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

          <div className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-ds-control px-4 py-2 font-ds-inter text-[14px] font-light leading-6 tracking-[-0.015em] text-ds-nav-muted transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-surface-sunken"
              >
                {l.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-ds-pill bg-ds-accent px-4 py-2 font-ds-inter text-[14px] font-light leading-6 tracking-[-0.015em] text-ds-on-accent transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-accent-hover"
            >
              {/* 4px padding around the 16px icon = 24px total, matching the
                  Figma export's own wrapper — keeps every nav item's content
                  box the same 24px height (so every button is exactly 40px
                  tall with py-2). */}
              <span className="flex items-center justify-center p-1">{ArrowUpRightIcon}</span>
              Resume
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center rounded-ds-pill bg-ds-accent px-4 py-2 text-ds-on-accent transition-colors duration-[var(--ds-dur-fast)] hover:bg-ds-accent-hover"
            >
              {/* 2px padding around the 20px icon = 24px total, same reasoning as Resume's icon above. */}
              <span className="flex items-center justify-center p-0.5">{LinkedinIcon}</span>
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
              {links.map((l) => (
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
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-ds-pill bg-ds-accent px-4 py-3 font-ds-inter text-[14px] font-light leading-6 text-ds-on-accent"
                >
                  <span className="flex items-center justify-center p-1">{ArrowUpRightIcon}</span>
                  Resume
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-ds-pill bg-ds-accent px-4 py-3 text-ds-on-accent"
                >
                  <span className="flex items-center justify-center p-0.5">{LinkedinIcon}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Block>
      </SectionRow>
    </header>
  );
}
