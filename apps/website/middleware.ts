import { NextResponse, userAgent, type NextFetchEvent, type NextRequest } from "next/server";
import { insertVisitorLog } from "@/lib/visitor-log";

function decodeHeader(value: string | null): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

async function logVisit(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const ua = userAgent(request);

    await insertVisitorLog({
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
      path: request.nextUrl.pathname,
      referrer: request.headers.get("referer"),
      userAgent: ua.ua ?? null
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

  if (!isPrefetch(request)) {
    event.waitUntil(logVisit(request));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match everything except: Next internals, API routes, and any path
     * with a file extension (covers every static asset under /public —
     * logos, ai-tool icons, case-study images, fonts, etc. — not just the
     * few we happen to know about by name). Those aren't real page views
     * and would just be noise.
     */
    "/((?!_next/static|_next/image|api/|.*\\..*).*)"
  ]
};
