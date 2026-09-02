import { NextResponse, userAgent, type NextFetchEvent, type NextRequest } from "next/server";
import { classifyBot } from "@/lib/bot-detection";
import {
  insertVisitorLog,
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  VISITOR_COOKIE,
  VISITOR_EXCLUDE_COOKIE,
  VISITOR_TTL_SECONDS
} from "@/lib/visitor-log";

/**
 * Visitor logging only runs on the real production deployment. Previously the
 * dev server shared apps/website/.env.local -- and therefore the production
 * DATABASE_URL -- so every `pnpm dev` page load inserted a row. That accounted
 * for 509 of the first 671 rows and, because the x-vercel-ip-* headers do not
 * exist on localhost, for every null country in the table. Set
 * VISITOR_LOG_LOCAL=1 to opt a local session back in when testing this code.
 */
const LOGGING_ENABLED = process.env.VERCEL_ENV === "production" || process.env.VISITOR_LOG_LOCAL === "1";

function decodeHeader(value: string | null): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function firstParam(request: NextRequest, ...names: string[]): string | null {
  for (const name of names) {
    const value = request.nextUrl.searchParams.get(name);
    if (value) return value.slice(0, 120);
  }
  return null;
}

async function logVisit(request: NextRequest, visitorId: string, sessionId: string) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || null;
    const ua = userAgent(request);
    const path = request.nextUrl.pathname;
    const bot = classifyBot(ua.ua ?? null, request.headers.get("accept-language"), path);

    await insertVisitorLog({
      visitorId,
      sessionId,
      ip,
      country: decodeHeader(request.headers.get("x-vercel-ip-country")),
      region: decodeHeader(request.headers.get("x-vercel-ip-country-region")),
      city: decodeHeader(request.headers.get("x-vercel-ip-city")),
      latitude: request.headers.get("x-vercel-ip-latitude"),
      longitude: request.headers.get("x-vercel-ip-longitude"),
      deviceType: ua.device.type ?? "desktop",
      browserName: ua.browser.name ?? null,
      browserVersion: ua.browser.version ?? null,
      osName: ua.os.name ?? null,
      osVersion: ua.os.version ?? null,
      path,
      referrer: request.headers.get("referer"),
      userAgent: ua.ua ?? null,
      host: request.headers.get("host"),
      // ?src=acme-corp on a link sent with a job application is what turns this
      // table from page-view trivia into "which company opened my portfolio".
      src: firstParam(request, "src", "ref"),
      utmSource: firstParam(request, "utm_source"),
      utmMedium: firstParam(request, "utm_medium"),
      utmCampaign: firstParam(request, "utm_campaign"),
      isLocal: !process.env.VERCEL_ENV,
      isBot: bot.isBot,
      botReason: bot.reason
    });
  } catch (err) {
    // Visitor logging must never break a real page load — swallow and move on.
    console.error("[visitor-log] failed to record visit", err);
  }
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="admin"' }
  });
}

function isAdminAuthorized(request: NextRequest): boolean {
  const user = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASSWORD;
  if (!user || !password) return false;

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  const decoded = atob(header.slice(6));
  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return false;

  const providedUser = decoded.slice(0, separatorIndex);
  const providedPassword = decoded.slice(separatorIndex + 1);
  return providedUser === user && providedPassword === password;
}

function isPrefetch(request: NextRequest): boolean {
  // Next.js <Link> automatically prefetches pages in viewport — those hit
  // this same middleware but aren't a visitor actually viewing the page.
  return request.headers.get("next-router-prefetch") === "1" || request.headers.get("purpose") === "prefetch";
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return isAdminAuthorized(request) ? NextResponse.next() : unauthorized();
  }

  const response = NextResponse.next();

  const isExcluded = request.cookies.get(VISITOR_EXCLUDE_COOKIE)?.value === "1";
  if (!LOGGING_ENABLED || isPrefetch(request) || isExcluded) return response;

  // Identity cookies are only written when absent. Re-stamping them on every
  // request would attach Set-Cookie to every HTML response and cost us CDN
  // caching; the trade-off is that a session is a fixed 30-minute window from
  // first request rather than 30 minutes of inactivity.
  const existingVisitor = request.cookies.get(VISITOR_COOKIE)?.value;
  const existingSession = request.cookies.get(SESSION_COOKIE)?.value;
  const visitorId = existingVisitor || crypto.randomUUID();
  const sessionId = existingSession || crypto.randomUUID();

  const cookieOptions = {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const
  };
  if (!existingVisitor) response.cookies.set(VISITOR_COOKIE, visitorId, { ...cookieOptions, maxAge: VISITOR_TTL_SECONDS });
  if (!existingSession) response.cookies.set(SESSION_COOKIE, sessionId, { ...cookieOptions, maxAge: SESSION_TTL_SECONDS });

  event.waitUntil(logVisit(request, visitorId, sessionId));
  return response;
}

export const config = {
  matcher: [
    /*
     * Match everything except: Next internals, API routes, and any path
     * with a file extension (covers every static asset under /public —
     * logos, ai-tool icons, case-study images, fonts, etc. — not just the
     * few we happen to know about by name). Those aren't real page views
     * and would just be noise. Extensionless image routes generated by
     * Next's file conventions (/opengraph-image and friends) slip through
     * this and are caught by classifyBot instead.
     */
    "/((?!_next/static|_next/image|api/|.*\\..*).*)"
  ]
};
