"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function KineticChrome() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getUTCHours() + 5;
      const minutes = now.getUTCMinutes() + 30;
      const h = (hours + Math.floor(minutes / 60)) % 24;
      const m = minutes % 60;
      setTime(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")} IST`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

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
        padding: "20px 32px",
        background: "transparent",
        color: "var(--text-primary)",
        mixBlendMode: "difference"
      }}
    >
      <Link
        href="/styles"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          letterSpacing: "-0.02em",
          color: "#F4F1EA"
        }}
      >
        Rishabh<span style={{ color: "#FF4D1A" }}>.</span>
      </Link>
      <nav style={{ display: "flex", gap: 28, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F4F1EA" }}>
        <a href="#works">Works</a>
        <a href="#ideology">Ideology</a>
        <a href="#about">About</a>
        <span style={{ opacity: 0.6 }}>{time || "—"}</span>
      </nav>
    </header>
  );
}
