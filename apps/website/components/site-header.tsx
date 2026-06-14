"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@packages/ds-ui";
import type { HomeContent } from "@/lib/types";

type SiteHeaderProps = {
  content: HomeContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleViewportChange() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    const onScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 font-ds-sans transition-all duration-[400ms] ease-[var(--ds-ease-out-quart)] ${
        isScrolled
          ? "border-b border-ds-border bg-ds-surface-nav backdrop-blur-[12px]"
          : "border-b border-transparent bg-white/40 backdrop-blur-[6px]"
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6">
        <div className="flex h-[72px] items-center justify-between gap-4 md:h-[80px]">

          {/* Left — name */}
          <Link href="/" className="flex min-w-fit items-center" onClick={() => setMenuOpen(false)}>
            <span className="text-lg font-bold tracking-[-0.02em] text-ds-ink md:text-[22px]">
              {content.siteName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {content.nav.map((item, index) => (
              <div key={item.href} className="flex items-center gap-6">
                <Link href={item.href} className="group inline-flex text-sm leading-6 tracking-[-0.01em] text-ds-ink">
                  <RollingNavText text={item.label} />
                </Link>
                {index < content.nav.length - 1 && <span className="select-none text-ds-border-strong">/</span>}
              </div>
            ))}
          </nav>

          {/* Resume CTA */}
          <div className="hidden md:block">
            <ButtonLink href={content.resumeUrl} target="_blank" rel="noreferrer" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M 8 12 L 3 7 L 4.4 5.55 L 7 8.15 L 7 0 L 9 0 L 9 8.15 L 11.6 5.55 L 13 7 Z M 2 16 C 1.45 16 0.979 15.804 0.588 15.413 C 0.197 15.022 0.001 14.551 0 14 L 0 11 L 2 11 L 2 14 L 14 14 L 14 11 L 16 11 L 16 14 C 16 14.55 15.804 15.021 15.413 15.413 C 15.022 15.805 14.551 16.001 14 16 Z" />
              </svg>
              Resume
            </ButtonLink>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-ds-md border border-ds-border bg-ds-surface-raised text-ds-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 block h-0.5 w-5 rounded-ds-pill bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-ds-pill bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-ds-pill bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen ? (
          <div id="mobile-site-menu" className="border-t border-ds-border py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {content.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-ds-md px-4 py-3 text-base font-semibold tracking-[-0.01em] text-ds-ink transition hover:bg-ds-surface-sunken"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href={content.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function RollingNavText({ text }: { text: string }) {
  return (
    <span className="relative inline-flex h-6 overflow-hidden">
      <span className="transition-transform duration-300 group-hover:-translate-y-6">
        <span className="block">{text}</span>
        <span className="block">{text}</span>
      </span>
    </span>
  );
}
