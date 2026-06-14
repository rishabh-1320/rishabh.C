"use client";

import { useEffect, useRef } from "react";
import type { IdeologyPrinciple } from "@/lib/types";

const ACCENTS = ["#5EEAD4", "#A78BFA", "#FFD580", "#BBF451"];

export function SpatialIdeology({
  heading,
  principles
}: {
  heading: string;
  principles: IdeologyPrinciple[];
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 56 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18 * dpr,
      vy: (Math.random() - 0.5) * 0.18 * dpr,
      r: (Math.random() * 1.4 + 0.6) * dpr,
      color: ACCENTS[Math.floor(Math.random() * ACCENTS.length)]
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        grad.addColorStop(0, `${p.color}cc`);
        grad.addColorStop(1, `${p.color}00`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="ideology"
      style={{
        position: "relative",
        background: "var(--surface-base)",
        padding: "140px 24px",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <header style={{ marginBottom: 72, maxWidth: 820 }}>
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
            §02 · Operating principles
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
            {heading}.{" "}
            <span style={{ color: "var(--text-muted)" }}>
              Four rules. The rest is craft.
            </span>
          </h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18
          }}
        >
          {principles.map((p, i) => (
            <article
              key={p.id}
              style={{
                position: "relative",
                padding: "28px 26px 32px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-default)",
                background:
                  "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                overflow: "hidden"
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -40,
                  left: -40,
                  width: 160,
                  height: 160,
                  background: `radial-gradient(circle, ${ACCENTS[i]}30, transparent 70%)`,
                  filter: "blur(20px)",
                  pointerEvents: "none"
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: ACCENTS[i],
                    textTransform: "uppercase"
                  }}
                >
                  {p.id}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: ACCENTS[i],
                    boxShadow: `0 0 14px ${ACCENTS[i]}`
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: 12,
                  color: "var(--text-primary)"
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--text-secondary)",
                  margin: 0
                }}
              >
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
