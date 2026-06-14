"use client";

import Link from "next/link";
import { useState } from "react";
import type { WorkCard } from "@/lib/types";

const ACCENTS = ["#5EEAD4", "#A78BFA", "#FFD580", "#BBF451", "#5EEAD4"];

export function SpatialWorks({ heading, works }: { heading: string; works: WorkCard[] }) {
  return (
    <section
      id="works"
      style={{
        position: "relative",
        padding: "140px 24px",
        background: "var(--surface-base)",
        borderBottom: "1px solid var(--border-subtle)"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header style={{ marginBottom: 64, maxWidth: 880 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: 18
            }}
          >
            §03 · Selected ship logs
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.4vw, 72px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              margin: 0,
              color: "var(--text-primary)"
            }}
          >
            {heading}.
          </h2>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {works.map((w, i) => (
            <WorkRow key={w.id} work={w} accent={ACCENTS[i % ACCENTS.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ work, accent, index }: { work: WorkCard; accent: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
        gap: 0,
        borderRadius: "var(--radius-2xl)",
        border: "1px solid var(--border-default)",
        background: "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
        overflow: "hidden",
        transition: "transform 480ms cubic-bezier(0.19,1,0.22,1), box-shadow 480ms cubic-bezier(0.19,1,0.22,1), border-color 480ms cubic-bezier(0.19,1,0.22,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 30px 80px -24px rgba(0,0,0,0.7), 0 0 60px -12px ${accent}66`
          : "0 24px 56px -24px rgba(0,0,0,0.8)",
        borderColor: hovered ? `${accent}66` : "var(--border-default)"
      }}
      className="spatial-work-row"
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${hovered ? "var(--mx, 30%)" : "30%"} 0%, ${accent}26, transparent 60%)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 480ms cubic-bezier(0.19,1,0.22,1)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "40px 40px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
          minHeight: 320
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              marginBottom: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}
          >
            <span style={{ color: accent }}>0{index + 1}</span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span style={{ color: "var(--text-secondary)" }}>{work.role}</span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span style={{ color: "var(--text-secondary)" }}>{work.year || "—"}</span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <span style={{ color: "var(--text-secondary)" }}>{work.company || "Personal"}</span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 2.6vw, 32px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
              marginBottom: 14,
              color: "var(--text-primary)"
            }}
          >
            {work.title}
          </h3>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
              maxWidth: 520
            }}
          >
            {work.description}
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {work.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: "1px solid var(--border-default)",
                  color: "var(--text-secondary)"
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: work.active ? accent : "var(--text-muted)"
            }}
          >
            {work.active ? "Open case →" : "Coming soon"}
          </span>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          minHeight: 320,
          overflow: "hidden"
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={work.image}
          alt={work.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 1200ms cubic-bezier(0.19,1,0.22,1)",
            filter: "brightness(0.9) contrast(1.05)"
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(220deg, transparent 30%, ${accent}26 100%), linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)`,
            opacity: hovered ? 0.85 : 1
          }}
        />
      </div>
    </article>
  );

  if (work.active && work.href) {
    return (
      <Link href={work.href} style={{ display: "block" }}>
        {content}
      </Link>
    );
  }
  return content;
}
