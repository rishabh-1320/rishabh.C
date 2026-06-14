"use client";

import Link from "next/link";

export function AtelierChrome() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 40px",
        background: "transparent",
        color: "var(--text-primary)"
      }}
    >
      <Link
        href="/styles"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          fontStyle: "italic"
        }}
      >
        Rishabh Choudhary
      </Link>
      <nav
        style={{
          display: "flex",
          gap: 32,
          fontSize: 14,
          fontFamily: "var(--font-body)",
          color: "var(--text-secondary)"
        }}
      >
        <a href="#works">Works</a>
        <a href="#ideology">Manifesto</a>
        <a href="#about">About</a>
        <a
          href="mailto:rishabh1320@gmail.com"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "var(--brand-lime)"
          }}
        >
          Write →
        </a>
      </nav>
    </header>
  );
}
