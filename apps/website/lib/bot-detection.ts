/**
 * Write-time bot classification. Deliberately conservative: everything here is
 * a deterministic signal from the request itself, because a false positive
 * silently deletes a real visitor from the numbers. Behavioural detection
 * (request bursts, datacenter ranges) needs data this function does not have,
 * so it stays a read-time concern in the dashboard.
 */

const BOT_UA = /bot|crawl|spider|slurp|headless|phantom|puppeteer|playwright|curl\/|wget|python-requests|axios|undici|go-http|okhttp|java\/|libwww|scrapy|lighthouse|pagespeed|gtmetrix|semrush|ahrefs|mj12|dotbot|petalbot|yandex|baidu|sogou|applebot|duckduck|archive\.org|ia_archiver|facebookexternalhit|whatsapp|telegram|discord|slack|preview|monitor|uptime|scanner|probe/i;

/** Next.js file-convention routes that are images, not pages anyone "visits". */
const ASSET_ROUTES = /^\/(opengraph-image|twitter-image|icon|apple-icon|manifest|favicon)/;

export type BotVerdict = { isBot: boolean; reason: string | null };

export function classifyBot(userAgent: string | null, acceptLanguage: string | null, path: string): BotVerdict {
  if (ASSET_ROUTES.test(path)) return { isBot: true, reason: "asset-route" };

  // No UA at all is never a browser.
  if (!userAgent || userAgent.trim().length < 12) return { isBot: true, reason: "user-agent" };

  if (BOT_UA.test(userAgent)) return { isBot: true, reason: "user-agent" };

  // Every real browser sends Accept-Language on a document request. Scripted
  // clients that bother to spoof a Chrome UA almost never bother with this one,
  // which makes it the highest-yield signal we get for free.
  if (!acceptLanguage) return { isBot: true, reason: "no-accept-language" };

  return { isBot: false, reason: null };
}

export function isAssetRoute(path: string): boolean {
  return ASSET_ROUTES.test(path);
}
