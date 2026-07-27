import "server-only";
import { sql } from "./db";

export type VisitorLogInput = {
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
};

export type VisitorLogRow = {
  id: string;
  created_at: string;
  ip: string | null;
  country: string | null;
  region: string | null;
  city: string | null;
  latitude: string | null;
  longitude: string | null;
  device_type: string | null;
  browser_name: string | null;
  browser_version: string | null;
  os_name: string | null;
  os_version: string | null;
  path: string;
  referrer: string | null;
  user_agent: string | null;
};

export async function insertVisitorLog(input: VisitorLogInput) {
  await sql`
    INSERT INTO visitor_logs (
      ip, country, region, city, latitude, longitude,
      device_type, browser_name, browser_version, os_name, os_version,
      path, referrer, user_agent
    ) VALUES (
      ${input.ip}, ${input.country}, ${input.region}, ${input.city}, ${input.latitude}, ${input.longitude},
      ${input.deviceType}, ${input.browserName}, ${input.browserVersion}, ${input.osName}, ${input.osVersion},
      ${input.path}, ${input.referrer}, ${input.userAgent}
    )
  `;
}

const PAGE_SIZE = 50;

export async function getVisitorLogs(page: number): Promise<{ rows: VisitorLogRow[]; totalCount: number }> {
  const offset = Math.max(0, page) * PAGE_SIZE;
  const [rows, countResult] = await Promise.all([
    sql`
      SELECT id, created_at, ip, country, region, city, latitude, longitude,
             device_type, browser_name, browser_version, os_name, os_version,
             path, referrer, user_agent
      FROM visitor_logs
      ORDER BY created_at DESC
      LIMIT ${PAGE_SIZE} OFFSET ${offset}
    `,
    sql`SELECT COUNT(*)::int AS count FROM visitor_logs`
  ]);
  return { rows: rows as VisitorLogRow[], totalCount: (countResult[0] as { count: number }).count };
}

export { PAGE_SIZE };

export type VisitorSummary = {
  totalVisits: number;
  last24h: number;
  topCountries: { country: string; count: number }[];
  deviceBreakdown: { deviceType: string; count: number }[];
};

export async function getVisitorSummary(): Promise<VisitorSummary> {
  const [totals, last24h, topCountries, deviceBreakdown] = await Promise.all([
    sql`SELECT COUNT(*)::int AS count FROM visitor_logs`,
    sql`SELECT COUNT(*)::int AS count FROM visitor_logs WHERE created_at > now() - interval '24 hours'`,
    sql`
      SELECT COALESCE(country, 'Unknown') AS country, COUNT(*)::int AS count
      FROM visitor_logs
      GROUP BY country
      ORDER BY count DESC
      LIMIT 8
    `,
    sql`
      SELECT COALESCE(device_type, 'Unknown') AS device_type, COUNT(*)::int AS count
      FROM visitor_logs
      GROUP BY device_type
      ORDER BY count DESC
    `
  ]);

  return {
    totalVisits: (totals[0] as { count: number }).count,
    last24h: (last24h[0] as { count: number }).count,
    topCountries: (topCountries as { country: string; count: number }[]).map((r) => ({
      country: r.country,
      count: r.count
    })),
    deviceBreakdown: (deviceBreakdown as { device_type: string; count: number }[]).map((r) => ({
      deviceType: r.device_type,
      count: r.count
    }))
  };
}
