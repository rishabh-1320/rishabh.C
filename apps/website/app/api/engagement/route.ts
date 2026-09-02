import { NextResponse, type NextRequest } from "next/server";
import { recordEngagement, VISITOR_COOKIE } from "@/lib/visitor-log";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_DWELL_MS = 30 * 60 * 1000;

/**
 * Receives the sendBeacon payload from EngagementTracker and attaches it to the
 * page view the middleware already wrote. The visitor id is read from the
 * httpOnly cookie server-side rather than sent by the client, so the identifier
 * stays unreadable to page scripts and cannot be forged into someone else's row.
 */
export async function POST(request: NextRequest) {
  try {
    const visitorId = request.cookies.get(VISITOR_COOKIE)?.value;
    if (!visitorId) return NextResponse.json({ ok: false }, { status: 204 });

    const body = (await request.json()) as { path?: unknown; dwellMs?: unknown; maxScrollPct?: unknown };
    const path = typeof body.path === "string" ? body.path.slice(0, 512) : null;
    const dwellMs = Math.min(MAX_DWELL_MS, Math.max(0, Math.round(Number(body.dwellMs) || 0)));
    const maxScrollPct = Math.min(100, Math.max(0, Math.round(Number(body.maxScrollPct) || 0)));
    if (!path || dwellMs < 500) return NextResponse.json({ ok: true });

    await recordEngagement(visitorId, path, dwellMs, maxScrollPct);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[engagement] failed", err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
