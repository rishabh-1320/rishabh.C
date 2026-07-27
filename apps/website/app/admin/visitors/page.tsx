import type { Metadata } from "next";
import Link from "next/link";
import { getVisitorLogs, getVisitorSummary, PAGE_SIZE } from "@/lib/visitor-log";

export const metadata: Metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function locationLabel(row: { city: string | null; region: string | null; country: string | null }): string {
  return [row.city, row.region, row.country].filter(Boolean).join(", ") || "Unknown";
}

export default async function VisitorsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(0, parseInt(searchParams.page ?? "0", 10) || 0);
  const [{ rows, totalCount }, summary] = await Promise.all([getVisitorLogs(page), getVisitorSummary()]);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 4 }}>Visitors</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>{totalCount.toLocaleString()} total page views recorded</p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 40 }}>
        <SummaryCard label="Total visits" value={summary.totalVisits.toLocaleString()} />
        <SummaryCard label="Last 24 hours" value={summary.last24h.toLocaleString()} />
        <ListCard label="Top countries" items={summary.topCountries.map((c) => ({ label: c.country, count: c.count }))} />
        <ListCard label="Devices" items={summary.deviceBreakdown.map((d) => ({ label: d.deviceType, count: d.count }))} />
      </section>

      <div style={{ overflowX: "auto", border: "1px solid #e5e5e5", borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#fafafa", textAlign: "left" }}>
              <Th>Time</Th>
              <Th>IP</Th>
              <Th>Location</Th>
              <Th>Device</Th>
              <Th>Browser</Th>
              <Th>OS</Th>
              <Th>Path</Th>
              <Th>Referrer</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} style={{ borderTop: "1px solid #eee" }}>
                <Td>{formatTimestamp(row.created_at)}</Td>
                <Td mono>{row.ip ?? "—"}</Td>
                <Td>{locationLabel(row)}</Td>
                <Td>{row.device_type ?? "—"}</Td>
                <Td>
                  {row.browser_name ?? "—"}
                  {row.browser_version ? ` ${row.browser_version}` : ""}
                </Td>
                <Td>
                  {row.os_name ?? "—"}
                  {row.os_version ? ` ${row.os_version}` : ""}
                </Td>
                <Td mono>{row.path}</Td>
                <Td>{row.referrer ?? "—"}</Td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <Td colSpan={8}>No visits recorded yet.</Td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, fontSize: 13 }}>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <PageLink page={page - 1} disabled={page <= 0}>
            Previous
          </PageLink>
          <PageLink page={page + 1} disabled={page + 1 >= totalPages}>
            Next
          </PageLink>
        </div>
      </div>
    </main>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 16 }}>
      <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function ListCard({ label, items }: { label: string; items: { label: string; count: number }[] }) {
  return (
    <div style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 16 }}>
      <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>{label}</div>
      {items.length === 0 && <div style={{ fontSize: 13, color: "#999" }}>No data yet</div>}
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "2px 0" }}>
          <span>{item.label}</span>
          <span style={{ color: "#666" }}>{item.count}</span>
        </div>
      ))}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ padding: "10px 12px", fontWeight: 600, whiteSpace: "nowrap" }}>{children}</th>;
}

function Td({ children, mono, colSpan }: { children: React.ReactNode; mono?: boolean; colSpan?: number }) {
  return (
    <td
      colSpan={colSpan}
      style={{ padding: "10px 12px", whiteSpace: "nowrap", fontFamily: mono ? "monospace" : undefined }}
    >
      {children}
    </td>
  );
}

function PageLink({ page, disabled, children }: { page: number; disabled: boolean; children: React.ReactNode }) {
  if (disabled) {
    return <span style={{ padding: "6px 12px", border: "1px solid #eee", borderRadius: 6, color: "#ccc" }}>{children}</span>;
  }
  return (
    <Link
      href={`/admin/visitors?page=${page}`}
      style={{ padding: "6px 12px", border: "1px solid #ddd", borderRadius: 6, color: "#111", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}
