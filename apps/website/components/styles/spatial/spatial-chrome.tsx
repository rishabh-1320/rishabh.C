"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SpatialChrome() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const utcHours = d.getUTCHours();
      const utcMinutes = d.getUTCMinutes();
      const istMinutes = utcMinutes + 30;
      const istHours = (utcHours + 5 + Math.floor(istMinutes / 60)) % 24;
      const m = istMinutes % 60;
      setTime(`${String(istHours).padStart(2, "0")}:${String(m).padStart(2, "0")} IST`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 24px",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          borderBottom: "1px solid var(--border-subtle)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#5EEAD4",
              boxShadow: "0 0 12px #5EEAD4"
            }}
          />
          <span style={{ color: "var(--text-secondary)" }}>Currently designing →</span>
          <span style={{ color: "var(--text-primary)" }}>Omny · Signal · Cricmac</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <span>BLR · {time || "—"}</span>
          <span style={{ color: "var(--text-primary)" }}>Open to work</span>
        </div>
      </div>

      <header
        style={{
          position: "fixed",
          top: 42,
          left: 0,
          right: 0,
          zIndex: 55,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          background: "transparent"
        }}
      >
        <Link
          href="/styles"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "var(--text-primary)",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.06em"
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 18,
              height: 18,
              borderRadius: 6,
              background:
                "conic-gradient(from 220deg, #5EEAD4, #A78BFA, #FFD580, #5EEAD4)",
              boxShadow: "0 0 16px rgba(94,234,212,0.55)"
            }}
          />
          rishabh
        </Link>
        <nav style={{ display: "flex", gap: 22, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
          <a href="#works" style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ color: "var(--brand-blue)" }}>·</span> works
          </a>
          <a href="#ideology" style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ color: "var(--brand-warm)" }}>·</span> ideology
          </a>
          <a href="#about" style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ color: "#FFD580" }}>·</span> about
          </a>
        </nav>
      </header>
    </>
  );
}
