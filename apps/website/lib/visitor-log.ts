import "server-only";
import { sql } from "./db";

export const VISITOR_EXCLUDE_COOKIE = "vt_exclude";
export const VISITOR_COOKIE = "vt_vid";
export const SESSION_COOKIE = "vt_sid";
export const VISITOR_TTL_SECONDS = 60 * 60 * 24 * 730; // 2 years
export const SESSION_TTL_SECONDS = 60 * 30; // 30 minutes
export const PAGE_SIZE = 50;

/**
 * Timezone the dashboard reports in. created_at is a TIMESTAMPTZ and is stored
 * correctly in UTC, but both ends of the read path used to default to whatever
 * zone they happened to run in: toLocaleString() rendered in the server's zone
 * (UTC on Vercel) and `created_at::date` bucketed on the database session zone
 * (GMT). A visit at 9:48pm IST therefore displayed as 4:18pm, and any visit
 * before 5:30am IST was counted on the previous day's bar in the chart.
 * Pinning one zone for every read fixes both, and pinning it explicitly means
 * the numbers do not shift if Vercel or Neon ever changes region.
 */
export const DISPLAY_TIMEZONE = process.env.ANALYTICS_TIMEZONE || "Asia/Kolkata";

/**
 * Owner classification happens here, at read time, rather than at insert time.
 * A cookie-based opt-out could only ever cover one browser on one device on one
 * origin, which is why the previous attempt kept missing traffic: three devices
 * times two browsers times two domains was eight separate cookie jars, each one
 * lost on a cookie clear or an incognito window. Matching against a rules table
 * instead means tagging a device once cleans up every row it ever wrote, an
 * ip_prefix rule survives the daily IP rotation on a home ISP, and getting a
 * rule wrong is undone by deleting one row.
 */
const OWNER_PREDICATE = `EXISTS (
  SELECT 1 FROM visitor_exclusions e
  WHERE (e.kind = 'visitor_id' AND v.visitor_id IS NOT NULL AND e.value = v.visitor_id)
     OR (e.kind = 'ip' AND e.value = v.ip)
     OR (e.kind = 'ip_prefix' AND v.ip LIKE e.value || '%')
)`;

export type VisitorFilter = "real" | "mine" | "bots" | "all";

export function parseFilter(value: string | undefined): VisitorFilter {
  return value === "mine" || value === "bots" || value === "all" ? value : "real";
}

function whereFor(filter: VisitorFilter): string {
  switch (filter) {
    case "mine":
      return `(v.is_local OR ${OWNER_PREDICATE})`;
    case "bots":
      return `v.is_bot AND NOT v.is_local`;
    case "all":
      return `true`;
    default:
      return `NOT v.is_local AND NOT v.is_bot AND NOT ${OWNER_PREDICATE}`;
  }
}

export type VisitorLogInput = {
  visitorId: string;
  sessionId: string;
  ip: string | null;
  country: string | null;
  region: string | null;
  city: string | null;
  latitude: string | null;
  longitude: string | null;
  deviceType: string | null;
  browserName: string | null;
  browserVersion: string | null;
  osName: string | null;
  osVersion: string | null;
  path: string;
  referrer: string | null;
  userAgent: string | null;
  host: string | null;
  src: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  isLocal: boolean;
  isBot: boolean;
  botReason: string | null;
};

export type VisitorLogRow = {
  id: string;
  created_at: string;
  visitor_id: string | null;
  session_id: string | null;
  ip: string | null;
  country: string | null;
  region: string | null;
  city: string | null;
  device_type: string | null;
  browser_name: string | null;
  browser_version: string | null;
  os_name: string | null;
  os_version: string | null;
  path: string;
  referrer: string | null;
  user_agent: string | null;
  host: string | null;
  src: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  dwell_ms: number | null;
  max_scroll_pct: number | null;
  is_local: boolean;
  is_bot: boolean;
  bot_reason: string | null;
  is_owner: boolean;
  visit_number: number;
};

export async function insertVisitorLog(input: VisitorLogInput) {
  await sql`
    INSERT INTO visitor_logs (
      visitor_id, session_id, ip, country, region, city, latitude, longitude,
      device_type, browser_name, browser_version, os_name, os_version,
      path, referrer, user_agent, host, src, utm_source, utm_medium, utm_campaign,
      is_local, is_bot, bot_reason
    ) VALUES (
      ${input.visitorId}, ${input.sessionId}, ${input.ip}, ${input.country}, ${input.region}, ${input.city},
      ${input.latitude}, ${input.longitude},
      ${input.deviceType}, ${input.browserName}, ${input.browserVersion}, ${input.osName}, ${input.osVersion},
      ${input.path}, ${input.referrer}, ${input.userAgent}, ${input.host}, ${input.src},
      ${input.utmSource}, ${input.utmMedium}, ${input.utmCampaign},
      ${input.isLocal}, ${input.isBot}, ${input.botReason}
    )
  `;
}

/** Attaches dwell time / scroll depth to the most recent matching page view. */
export async function recordEngagement(visitorId: string, path: string, dwellMs: number, maxScrollPct: number) {
  await sql`
    UPDATE visitor_logs SET
      dwell_ms = GREATEST(COALESCE(dwell_ms, 0), ${dwellMs}),
      max_scroll_pct = GREATEST(COALESCE(max_scroll_pct, 0), ${maxScrollPct})
    WHERE id = (
      SELECT id FROM visitor_logs
      WHERE visitor_id = ${visitorId} AND path = ${path} AND created_at > now() - interval '6 hours'
      ORDER BY created_at DESC LIMIT 1
    )
  `;
}

export async function getVisitorLogs(page: number, filter: VisitorFilter): Promise<{ rows: VisitorLogRow[]; totalCount: number }> {
  const offset = Math.max(0, page) * PAGE_SIZE;
  const where = whereFor(filter);

  const [rows, countResult] = await Promise.all([
    sql.query(
      `SELECT v.id, v.created_at, v.visitor_id, v.session_id, v.ip, v.country, v.region, v.city,
              v.device_type, v.browser_name, v.browser_version, v.os_name, v.os_version,
              v.path, v.referrer, v.user_agent, v.host, v.src, v.utm_source, v.utm_medium, v.utm_campaign,
              v.dwell_ms, v.max_scroll_pct, v.is_local, v.is_bot, v.bot_reason,
              ${OWNER_PREDICATE} AS is_owner,
              COUNT(*) OVER (PARTITION BY COALESCE(v.visitor_id, v.ip)) AS visit_number
       FROM visitor_logs v
       WHERE ${where}
       ORDER BY v.created_at DESC
       LIMIT $1 OFFSET $2`,
      [PAGE_SIZE, offset]
    ),
    sql.query(`SELECT COUNT(*)::int AS count FROM visitor_logs v WHERE ${where}`, [])
  ]);

  return { rows: rows as VisitorLogRow[], totalCount: (countResult[0] as { count: number }).count };
}

export type VisitorSummary = {
  pageViews: number;
  uniqueVisitors: number;
  sessions: number;
  last24h: number;
  last7d: number;
  returningVisitors: number;
  avgDwellSeconds: number | null;
  counts: { real: number; mine: number; bots: number; all: number };
  daily: { day: string; views: number; visitors: number }[];
  topPages: { path: string; views: number; visitors: number; avgDwell: number | null; avgScroll: number | null }[];
  topCountries: { country: string; count: number }[];
  topCities: { city: string; count: number }[];
  deviceBreakdown: { deviceType: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  topSources: { source: string; views: number; visitors: number }[];
};

export async function getVisitorSummary(filter: VisitorFilter): Promise<VisitorSummary> {
  const where = whereFor(filter);
  // Only the two day-bucketing queries take a bound parameter; Postgres
  // rejects a bind that supplies more parameters than the statement uses.
  const q = (text: string, params: unknown[] = []) => sql.query(text, params);
  const tzParam = [DISPLAY_TIMEZONE];

  const [totals, counts, daily, topPages, topCountries, topCities, devices, referrers, sources] = await Promise.all([
    q(`SELECT COUNT(*)::int AS page_views,
              COUNT(DISTINCT COALESCE(v.visitor_id, v.ip))::int AS unique_visitors,
              COUNT(DISTINCT v.session_id)::int AS sessions,
              COUNT(*) FILTER (WHERE v.created_at > now() - interval '24 hours')::int AS last_24h,
              COUNT(*) FILTER (WHERE v.created_at > now() - interval '7 days')::int AS last_7d,
              ROUND(AVG(v.dwell_ms) / 1000.0)::int AS avg_dwell_seconds
       FROM visitor_logs v WHERE ${where}`),

    // Tab counts, so the dashboard can show how much is being hidden.
    q(`SELECT
         COUNT(*) FILTER (WHERE NOT v.is_local AND NOT v.is_bot AND NOT ${OWNER_PREDICATE})::int AS real,
         COUNT(*) FILTER (WHERE v.is_local OR ${OWNER_PREDICATE})::int AS mine,
         COUNT(*) FILTER (WHERE v.is_bot AND NOT v.is_local)::int AS bots,
         COUNT(*)::int AS all
       FROM visitor_logs v`),

    q(`SELECT to_char(d.day, 'YYYY-MM-DD') AS day,
              COALESCE(x.views, 0)::int AS views,
              COALESCE(x.visitors, 0)::int AS visitors
       FROM generate_series(
              (now() AT TIME ZONE $1::text)::date - 29,
              (now() AT TIME ZONE $1::text)::date,
              interval '1 day'
            ) AS d(day)
       LEFT JOIN (
         SELECT (v.created_at AT TIME ZONE $1::text)::date AS day, COUNT(*) AS views,
                COUNT(DISTINCT COALESCE(v.visitor_id, v.ip)) AS visitors
         FROM visitor_logs v WHERE ${where} GROUP BY 1
       ) x ON x.day = d.day::date
       ORDER BY d.day`, tzParam),

    q(`SELECT v.path, COUNT(*)::int AS views,
              COUNT(DISTINCT COALESCE(v.visitor_id, v.ip))::int AS visitors,
              ROUND(AVG(v.dwell_ms) / 1000.0)::int AS "avgDwell",
              ROUND(AVG(v.max_scroll_pct))::int AS "avgScroll"
       FROM visitor_logs v WHERE ${where} GROUP BY v.path ORDER BY views DESC LIMIT 12`),

    q(`SELECT COALESCE(v.country, 'Unknown') AS country, COUNT(*)::int AS count
       FROM visitor_logs v WHERE ${where} GROUP BY 1 ORDER BY count DESC LIMIT 8`),

    q(`SELECT COALESCE(v.city, 'Unknown') || CASE WHEN v.country IS NULL THEN '' ELSE ', ' || v.country END AS city,
              COUNT(*)::int AS count
       FROM visitor_logs v WHERE ${where} GROUP BY 1 ORDER BY count DESC LIMIT 8`),

    q(`SELECT COALESCE(v.device_type, 'Unknown') AS "deviceType", COUNT(*)::int AS count
       FROM visitor_logs v WHERE ${where} GROUP BY 1 ORDER BY count DESC`),

    q(`SELECT COALESCE(v.referrer, '(direct)') AS referrer, COUNT(*)::int AS count
       FROM visitor_logs v WHERE ${where} GROUP BY 1 ORDER BY count DESC LIMIT 8`),

    q(`SELECT COALESCE(v.src, v.utm_source) AS source, COUNT(*)::int AS views,
              COUNT(DISTINCT COALESCE(v.visitor_id, v.ip))::int AS visitors
       FROM visitor_logs v WHERE ${where} AND COALESCE(v.src, v.utm_source) IS NOT NULL
       GROUP BY 1 ORDER BY views DESC LIMIT 10`)
  ]);

  // A returning visitor is one seen on more than one calendar day — the signal
  // that actually matters when a recruiter comes back to re-read a case study.
  const returning = await q(
    `SELECT COUNT(*)::int AS count FROM (
       SELECT COALESCE(v.visitor_id, v.ip) AS who
       FROM visitor_logs v WHERE ${where}
       GROUP BY 1 HAVING COUNT(DISTINCT (v.created_at AT TIME ZONE $1::text)::date) > 1
     ) t`,
    tzParam
  );

  const t = totals[0] as Record<string, number | null>;
  return {
    pageViews: (t.page_views as number) ?? 0,
    uniqueVisitors: (t.unique_visitors as number) ?? 0,
    sessions: (t.sessions as number) ?? 0,
    last24h: (t.last_24h as number) ?? 0,
    last7d: (t.last_7d as number) ?? 0,
    avgDwellSeconds: t.avg_dwell_seconds as number | null,
    returningVisitors: (returning[0] as { count: number }).count,
    counts: counts[0] as VisitorSummary["counts"],
    daily: daily as VisitorSummary["daily"],
    topPages: topPages as VisitorSummary["topPages"],
    topCountries: topCountries as VisitorSummary["topCountries"],
    topCities: topCities as VisitorSummary["topCities"],
    deviceBreakdown: devices as VisitorSummary["deviceBreakdown"],
    topReferrers: referrers as VisitorSummary["topReferrers"],
    topSources: sources as VisitorSummary["topSources"]
  };
}

export type ExclusionRow = { id: string; created_at: string; kind: string; value: string; note: string | null; matched: number };

export async function getExclusions(): Promise<ExclusionRow[]> {
  const rows = await sql`
    SELECT e.id, e.created_at, e.kind, e.value, e.note,
           (SELECT COUNT(*)::int FROM visitor_logs v WHERE
              (e.kind = 'visitor_id' AND v.visitor_id = e.value)
              OR (e.kind = 'ip' AND v.ip = e.value)
              OR (e.kind = 'ip_prefix' AND v.ip LIKE e.value || '%')) AS matched
    FROM visitor_exclusions e ORDER BY e.created_at DESC
  `;
  return rows as ExclusionRow[];
}

export async function addExclusion(kind: string, value: string, note: string | null) {
  if (!["visitor_id", "ip", "ip_prefix"].includes(kind) || !value) return;
  await sql`
    INSERT INTO visitor_exclusions (kind, value, note) VALUES (${kind}, ${value}, ${note})
    ON CONFLICT ON CONSTRAINT visitor_exclusions_kind_value_key DO NOTHING
  `;
}

export async function removeExclusion(id: string) {
  await sql`DELETE FROM visitor_exclusions WHERE id = ${id}`;
}

/* ---------------------------------------------------------------------------
 * Grouped view
 *
 * The flat log repeats the same device on every line, which makes it hard to
 * see that eighteen "different" Chandigarh addresses are one laptop on a
 * rotating home connection. Grouping folds each device into a single row.
 *
 * The key is a device fingerprint -- network prefix plus browser, OS and device
 * type -- rather than the visitor cookie. The cookie identifies a browser more
 * precisely, but it is exactly the wrong key here: it did not exist for older
 * rows, and a crawler that arrives without a cookie jar gets a brand new id on
 * every request, so cookie-keyed groups shatter into one-row fragments. The
 * fingerprint is stable across both, and it is what collapses the rotating-IP
 * case: the address changes daily, the first two octets and the user agent
 * do not. Each group reports how many distinct cookie identities are inside it,
 * so an over-merge is visible rather than hidden.
 * ------------------------------------------------------------------------- */

const NETWORK_EXPR = `CASE
  WHEN v.ip IS NULL THEN 'unknown'
  WHEN v.ip LIKE '%:%' THEN v.ip
  ELSE split_part(v.ip, '.', 1) || '.' || split_part(v.ip, '.', 2) || '.*'
END`;

const GROUP_KEY_EXPR = `${NETWORK_EXPR} || ' | ' || COALESCE(v.browser_name, '?') || '/' ||
  COALESCE(v.os_name, '?') || ' | ' || COALESCE(v.device_type, '?')`;

export type VisitorGroup = {
  group_key: string;
  network: string;
  place: string | null;
  browser: string | null;
  os: string | null;
  device_type: string | null;
  views: number;
  sessions: number;
  ip_count: number;
  visitor_count: number;
  path_count: number;
  days_active: number;
  first_seen: string;
  last_seen: string;
  total_dwell_ms: number | null;
  sources: string | null;
  is_owner: boolean;
  is_bot: boolean;
  is_local: boolean;
  bot_reason: string | null;
  sample_ip: string | null;
  sample_visitor_id: string | null;
  children: VisitorLogRow[];
};

export async function getVisitorGroups(
  page: number,
  filter: VisitorFilter
): Promise<{ groups: VisitorGroup[]; totalGroups: number }> {
  const where = whereFor(filter);
  const limit = 25;
  const offset = Math.max(0, page) * limit;

  const base = `SELECT v.*, ${OWNER_PREDICATE} AS is_owner, ${GROUP_KEY_EXPR} AS gk, ${NETWORK_EXPR} AS network
                FROM visitor_logs v WHERE ${where}`;

  const [groups, totals] = await Promise.all([
    sql.query(
      `WITH base AS (${base})
       SELECT gk AS group_key,
              mode() WITHIN GROUP (ORDER BY network) AS network,
              mode() WITHIN GROUP (ORDER BY COALESCE(city, country)) AS place,
              mode() WITHIN GROUP (ORDER BY browser_name) AS browser,
              mode() WITHIN GROUP (ORDER BY os_name) AS os,
              mode() WITHIN GROUP (ORDER BY device_type) AS device_type,
              COUNT(*)::int AS views,
              COUNT(DISTINCT session_id)::int AS sessions,
              COUNT(DISTINCT ip)::int AS ip_count,
              COUNT(DISTINCT visitor_id)::int AS visitor_count,
              COUNT(DISTINCT path)::int AS path_count,
              COUNT(DISTINCT (created_at AT TIME ZONE $1::text)::date)::int AS days_active,
              MIN(created_at) AS first_seen,
              MAX(created_at) AS last_seen,
              NULLIF(SUM(COALESCE(dwell_ms, 0)), 0)::int AS total_dwell_ms,
              string_agg(DISTINCT COALESCE(src, utm_source), ', ') AS sources,
              bool_or(is_owner) AS is_owner,
              bool_or(is_bot) AS is_bot,
              bool_or(is_local) AS is_local,
              mode() WITHIN GROUP (ORDER BY bot_reason) AS bot_reason,
              mode() WITHIN GROUP (ORDER BY ip) AS sample_ip,
              mode() WITHIN GROUP (ORDER BY visitor_id) AS sample_visitor_id
       FROM base
       GROUP BY gk
       ORDER BY MAX(created_at) DESC
       LIMIT $2 OFFSET $3`,
      [DISPLAY_TIMEZONE, limit, offset]
    ),
    sql.query(`WITH base AS (${base}) SELECT COUNT(DISTINCT gk)::int AS count FROM base`, [])
  ]);

  const rows = groups as Omit<VisitorGroup, "children">[];
  const keys = rows.map((g) => g.group_key);

  // One query for every child row on this page rather than one per group.
  const children = keys.length
    ? ((await sql.query(
        `SELECT * FROM (
           SELECT b.*, ROW_NUMBER() OVER (PARTITION BY b.gk ORDER BY b.created_at DESC) AS rn
           FROM (${base}) b
         ) t
         WHERE t.gk = ANY($1::text[]) AND t.rn <= 60
         ORDER BY t.created_at DESC`,
        [keys]
      )) as (VisitorLogRow & { gk: string })[])
    : [];

  const byKey = new Map<string, VisitorLogRow[]>();
  for (const child of children) {
    const list = byKey.get(child.gk) ?? [];
    list.push(child);
    byKey.set(child.gk, list);
  }

  return {
    groups: rows.map((g) => ({ ...g, children: byKey.get(g.group_key) ?? [] })),
    totalGroups: (totals[0] as { count: number }).count
  };
}
