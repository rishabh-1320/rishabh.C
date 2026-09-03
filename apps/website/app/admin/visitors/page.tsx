import type { Metadata } from "next";
import Link from "next/link";
import {
  DISPLAY_TIMEZONE,
  getExclusions,
  getVisitorLogs,
  getVisitorSummary,
  PAGE_SIZE,
  parseFilter,
  type VisitorFilter,
  type VisitorLogRow,
  type VisitorSummary
} from "@/lib/visitor-log";
import { markAsMine, unmark } from "./actions";

export const metadata: Metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const C = {
  bg: "#fbfbfa",
  card: "#ffffff",
  border: "#e6e6e3",
  text: "#1a1a18",
  muted: "#77776f",
  accent: "#2f6f4e",
  warn: "#a8632a"
};

// Rendered during SSR, so without an explicit timeZone this formats in the
// server's zone -- UTC on Vercel -- and every timestamp reads 5h30m early.
function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: DISPLAY_TIMEZONE
  });
}

function timezoneLabel(): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: DISPLAY_TIMEZONE, timeZoneName: "short" }).formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? DISPLAY_TIMEZONE;
}

function locationLabel(row: { city: string | null; region: string | null; country: string | null }): string {
  return [row.city, row.region, row.country].filter(Boolean).join(", ") || "Unknown";
}

function duration(seconds: number | null): string {
  if (!seconds) return "—";
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

const TABS: { key: VisitorFilter; label: string; hint: string }[] = [
  { key: "real", label: "Real", hint: "Strangers only — you, your dev server and known bots removed" },
  { key: "mine", label: "Mine", hint: "Your own devices, networks and localhost" },
  { key: "bots", label: "Bots", hint: "Crawlers, previews and command-line tools" },
  { key: "all", label: "All", hint: "Everything, unfiltered" }
];

export default async function VisitorsPage({
  searchParams
}: {
  searchParams: { page?: string; filter?: string };
}) {
  const page = Math.max(0, parseInt(searchParams.page ?? "0", 10) || 0);
  const filter = parseFilter(searchParams.filter);

  const [{ rows, totalCount }, summary, exclusions] = await Promise.all([
    getVisitorLogs(page, filter),
    getVisitorSummary(filter),
    getExclusions()
  ]);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const activeTab = TABS.find((t) => t.key === filter)!;

  return (
    <main style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 24px 80px", fontFamily: "system-ui, sans-serif", color: C.text, background: C.bg, minHeight: "100vh" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 600, margin: 0 }}>Visitors</h1>
        <p style={{ color: C.muted, margin: "6px 0 0", fontSize: 14 }}>
          {activeTab.hint} · times in {DISPLAY_TIMEZONE.replace("_", " ")} ({timezoneLabel()})
        </p>
      </header>

      <nav style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {TABS.map((tab) => {
          const active = tab.key === filter;
          return (
            <Link
              key={tab.key}
              href={`/admin/visitors?filter=${tab.key}`}
              style={{
                padding: "7px 14px", borderRadius: 999, fontSize: 13, textDecoration: "none",
                border: `1px solid ${active ? C.text : C.border}`,
                background: active ? C.text : C.card,
                color: active ? "#fff" : C.muted, fontWeight: active ? 600 : 400
              }}
            >
              {tab.label}{" "}
              <span style={{ opacity: 0.65 }}>{summary.counts[tab.key].toLocaleString()}</span>
            </Link>
          );
        })}
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 28 }}>
        <Stat label="Unique visitors" value={summary.uniqueVisitors.toLocaleString()} big />
        <Stat label="Sessions" value={summary.sessions.toLocaleString()} />
        <Stat label="Page views" value={summary.pageViews.toLocaleString()} />
        <Stat label="Returning" value={summary.returningVisitors.toLocaleString()} hint="seen on 2+ days" />
        <Stat label="Avg. time on page" value={duration(summary.avgDwellSeconds)} />
        <Stat label="Last 7 days" value={summary.last7d.toLocaleString()} hint={`${summary.last24h} in 24h`} />
      </section>

      <Panel title="Last 30 days">
        <DailyChart daily={summary.daily} />
      </Panel>

      {summary.topSources.length > 0 && (
        <Panel title="Campaign sources" subtitle="From ?src= or ?utm_source= on the link — who you sent it to">
          <BarList items={summary.topSources.map((s) => ({ label: s.source, count: s.views, sub: `${s.visitors} visitor${s.visitors === 1 ? "" : "s"}` }))} />
        </Panel>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 16 }}>
        <Panel title="Pages" flush>
          <BarList items={summary.topPages.map((p) => ({
            label: p.path,
            count: p.views,
            sub: [`${p.visitors} visitors`, p.avgDwell ? duration(p.avgDwell) : null, p.avgScroll ? `${p.avgScroll}% read` : null].filter(Boolean).join(" · ")
          }))} />
        </Panel>
        <Panel title="Cities" flush>
          <BarList items={summary.topCities.map((c) => ({ label: c.city, count: c.count }))} />
        </Panel>
        <Panel title="Countries" flush>
          <BarList items={summary.topCountries.map((c) => ({ label: c.country, count: c.count }))} />
        </Panel>
        <Panel title="Devices" flush>
          <BarList items={summary.deviceBreakdown.map((d) => ({ label: d.deviceType, count: d.count }))} />
        </Panel>
        <Panel title="Referrers" flush>
          <BarList items={summary.topReferrers.map((r) => ({ label: r.referrer.replace(/^https?:\/\//, "").slice(0, 48), count: r.count }))} />
        </Panel>
      </div>

      <Panel title="Owner & bot rules" subtitle="Applied when reading, so tagging is retroactive and undoing it restores the rows">
        {exclusions.length === 0 ? (
          <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>No rules yet.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <tbody>
              {exclusions.map((e) => (
                <tr key={e.id} style={{ borderTop: `1px solid ${C.border}` }}>
                  <td style={{ padding: "8px 10px 8px 0", fontFamily: "ui-monospace, monospace" }}>
                    <span style={{ color: C.muted }}>{e.kind}</span> {e.value}
                    {e.kind === "ip_prefix" && <span style={{ color: C.muted }}>*</span>}
                  </td>
                  <td style={{ padding: "8px 10px", color: C.muted }}>{e.note}</td>
                  <td style={{ padding: "8px 10px", whiteSpace: "nowrap" }}>{e.matched.toLocaleString()} rows</td>
                  <td style={{ padding: "8px 0", textAlign: "right" }}>
                    <form action={unmark}>
                      <input type="hidden" name="id" value={e.id} />
                      <button type="submit" style={linkButton}>Remove</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Panel>

      <Panel title={`Page views (${totalCount.toLocaleString()})`} flush>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: "#f6f6f4", textAlign: "left" }}>
                <Th>Time</Th><Th>Visitor</Th><Th>Location</Th><Th>IP</Th><Th>Device</Th>
                <Th>Path</Th><Th>Read</Th><Th>Source</Th><Th></Th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr><td colSpan={9} style={{ padding: 28, textAlign: "center", color: C.muted }}>No rows for this filter.</td></tr>
              )}
              {rows.map((row) => <Row key={row.id} row={row} />)}
            </tbody>
          </table>
        </div>
      </Panel>

      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginTop: 24, fontSize: 13 }}>
        {page > 0 && <Link href={`/admin/visitors?filter=${filter}&page=${page - 1}`} style={pageLink}>← Newer</Link>}
        <span style={{ color: C.muted }}>Page {page + 1} of {totalPages}</span>
        {page + 1 < totalPages && <Link href={`/admin/visitors?filter=${filter}&page=${page + 1}`} style={pageLink}>Older →</Link>}
      </div>
    </main>
  );
}

function Row({ row }: { row: VisitorLogRow }) {
  const label = [row.browser_name, row.os_name].filter(Boolean).join(" / ") || "Unknown";
  return (
    <tr style={{ borderTop: `1px solid ${C.border}`, background: row.is_owner || row.is_local ? "#fdfaf4" : undefined }}>
      <Td>{formatTimestamp(row.created_at)}</Td>
      <Td mono>
        {row.visitor_id ? row.visitor_id.slice(0, 8) : "—"}
        {row.visit_number > 1 && <span style={{ color: C.accent, marginLeft: 6 }}>×{row.visit_number}</span>}
      </Td>
      <Td>{locationLabel(row)}</Td>
      <Td mono>{row.ip ?? "—"}</Td>
      <Td>
        {label}
        {row.device_type && row.device_type !== "desktop" && <span style={{ color: C.muted }}> ({row.device_type})</span>}
        {row.is_bot && <Badge color={C.warn}>{row.bot_reason}</Badge>}
        {row.is_local && <Badge color={C.muted}>localhost</Badge>}
        {row.is_owner && <Badge color={C.accent}>you</Badge>}
      </Td>
      <Td>{row.path}</Td>
      <Td>
        {row.dwell_ms ? duration(Math.round(row.dwell_ms / 1000)) : "—"}
        {row.max_scroll_pct != null && <span style={{ color: C.muted }}> · {row.max_scroll_pct}%</span>}
      </Td>
      <Td>{row.src ?? row.utm_source ?? "—"}</Td>
      <Td>
        {!row.is_owner && !row.is_local && (
          <form action={markAsMine} style={{ display: "flex", gap: 6 }}>
            <input type="hidden" name="visitorId" value={row.visitor_id ?? ""} />
            <input type="hidden" name="ip" value={row.ip ?? ""} />
            <input type="hidden" name="label" value={label} />
            <button type="submit" name="scope" value="visitor" style={linkButton} title="Exclude just this browser">This is me</button>
            <button type="submit" name="scope" value="network" style={linkButton} title="Exclude this whole network (/16)">+ network</button>
          </form>
        )}
      </Td>
    </tr>
  );
}

function DailyChart({ daily }: { daily: VisitorSummary["daily"] }) {
  const max = Math.max(1, ...daily.map((d) => d.views));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 110 }}>
      {daily.map((d) => (
        <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}
             title={`${d.day} — ${d.views} views, ${d.visitors} visitors`}>
          <div style={{ height: `${(d.views / max) * 100}%`, background: d.views ? C.accent : C.border, borderRadius: 2, minHeight: 2 }} />
        </div>
      ))}
    </div>
  );
}

function BarList({ items }: { items: { label: string; count: number; sub?: string }[] }) {
  const max = Math.max(1, ...items.map((i) => i.count));
  if (items.length === 0) return <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>No data.</p>;
  return (
    <div>
      {items.map((item) => (
        <div key={item.label} style={{ position: "relative", padding: "7px 10px", borderTop: `1px solid ${C.border}` }}>
          <div style={{ position: "absolute", inset: 0, width: `${(item.count / max) * 100}%`, background: "#eef3ef" }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13 }}>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {item.label}
              {item.sub && <span style={{ color: C.muted, fontSize: 11.5 }}> — {item.sub}</span>}
            </span>
            <strong style={{ fontWeight: 600 }}>{item.count.toLocaleString()}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

function Panel({ title, subtitle, children, flush }: { title: string; subtitle?: string; children: React.ReactNode; flush?: boolean }) {
  return (
    <section style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, marginBottom: 16, overflow: "hidden" }}>
      <div style={{ padding: "12px 14px 10px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 600, margin: 0, textTransform: "uppercase", letterSpacing: 0.4, color: C.muted }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 12.5, color: C.muted, margin: "4px 0 0" }}>{subtitle}</p>}
      </div>
      <div style={{ padding: flush ? 0 : "0 14px 14px" }}>{children}</div>
    </section>
  );
}

function Stat({ label, value, hint, big }: { label: string; value: string; hint?: string; big?: boolean }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
      <div style={{ fontSize: 11.5, color: C.muted, textTransform: "uppercase", letterSpacing: 0.4 }}>{label}</div>
      <div style={{ fontSize: big ? 28 : 22, fontWeight: 600, marginTop: 4 }}>{value}</div>
      {hint && <div style={{ fontSize: 11.5, color: C.muted, marginTop: 2 }}>{hint}</div>}
    </div>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return <span style={{ marginLeft: 6, fontSize: 10.5, padding: "1px 6px", borderRadius: 4, border: `1px solid ${color}`, color }}>{children}</span>;
}

const linkButton: React.CSSProperties = {
  background: "none", border: "none", padding: 0, color: C.accent, cursor: "pointer",
  fontSize: 12, textDecoration: "underline", fontFamily: "inherit", whiteSpace: "nowrap"
};

const pageLink: React.CSSProperties = { color: C.accent, textDecoration: "none" };

function Th({ children }: { children?: React.ReactNode }) {
  return <th style={{ padding: "9px 10px", fontWeight: 600, color: C.muted, whiteSpace: "nowrap" }}>{children}</th>;
}

function Td({ children, mono }: { children: React.ReactNode; mono?: boolean }) {
  return <td style={{ padding: "8px 10px", fontFamily: mono ? "ui-monospace, monospace" : "inherit", whiteSpace: "nowrap" }}>{children}</td>;
}
