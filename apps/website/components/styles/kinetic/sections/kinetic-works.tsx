"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { WorkCard } from "@/lib/types";

export function KineticWorks({ heading, works }: { heading: string; works: WorkCard[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const canScrollX = el.scrollWidth > el.clientWidth;
      if (!canScrollX) return;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="works"
      style={{
        background: "var(--surface-base)",
        color: "var(--text-primary)",
        padding: "120px 0 80px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <header
        style={{
          maxWidth: 1400,
          margin: "0 auto 64px",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              display: "block",
              marginBottom: 24
            }}
          >
            §03 — Field Notes
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              margin: 0
            }}
          >
            {heading.split(" ")[0]}{" "}
            <span style={{ fontStyle: "italic", color: "#FF4D1A" }}>{heading.split(" ").slice(1).join(" ")}</span>
          </h2>
        </div>
        <span
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)"
          }}
        >
          Scroll horizontally →
        </span>
      </header>

      <div
        ref={scrollerRef}
        className="kinetic-works-scroller scrollbar-none"
        style={{
          display: "flex",
          gap: 0,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: 32,
          paddingRight: 32
        }}
      >
        {works.map((work, i) => (
          <article
            key={work.id}
            style={{
              flex: "0 0 min(560px, 80vw)",
              scrollSnapAlign: "start",
              borderRight: "1px solid var(--border-default)",
              padding: "0 32px 0 0",
              marginRight: 32,
              display: "flex",
              flexDirection: "column",
              gap: 24
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-secondary)"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  lineHeight: 1,
                  color: "#FF4D1A",
                  fontStyle: "italic"
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{work.year || "—"} · {work.company || "Personal"}</span>
            </div>

            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                background: "var(--surface-muted)",
                border: "1px solid var(--border-default)",
                overflow: "hidden"
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(1) contrast(1.05)",
                  transition: "filter 600ms cubic-bezier(0.19,1,0.22,1)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0) contrast(1)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1) contrast(1.05)")}
              />
              {!work.active && (
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: "var(--text-primary)",
                    color: "var(--surface-base)",
                    padding: "4px 10px"
                  }}
                >
                  Soon
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 2.6vw, 36px)",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: 0
              }}
            >
              {work.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.55,
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
                margin: 0
              }}
            >
              {work.description}
            </p>

            <div
              style={{
                marginTop: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 16,
                borderTop: "1px solid var(--border-default)",
                fontSize: 13,
                fontFamily: "var(--font-body)"
              }}
            >
              <span style={{ color: "var(--text-secondary)" }}>{work.tags.join(" / ")}</span>
              {work.active && work.href ? (
                <Link
                  href={work.href}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontStyle: "italic",
                    color: "#FF4D1A",
                    textDecoration: "underline",
                    textUnderlineOffset: 4
                  }}
                >
                  Read →
                </Link>
              ) : (
                <span style={{ color: "var(--text-muted)" }}>{work.ctaLabel}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
