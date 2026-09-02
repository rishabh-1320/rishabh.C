-- Phase 1-3 analytics rebuild.
--
-- Three ideas drive this migration:
--   1. Rows are never deleted, only classified. is_local/is_bot are written at
--      insert time, while "is this the owner" is decided at READ time against
--      visitor_exclusions, so tagging a device retroactively cleans history and
--      untagging it puts the rows straight back.
--   2. visitor_id/session_id give the table an identity it never had, so we can
--      count people and sessions instead of raw page views.
--   3. src/utm columns turn the log into an attribution tool -- which company
--      opened the portfolio link you sent them.

ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS visitor_id TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS session_id TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS is_local BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS is_bot BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS bot_reason TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS host TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS src TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS utm_source TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS utm_medium TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS utm_campaign TEXT;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS dwell_ms INTEGER;
ALTER TABLE visitor_logs ADD COLUMN IF NOT EXISTS max_scroll_pct SMALLINT;

-- Owner/bot rules, applied at read time so every classification is reversible
-- and retroactive. kind is one of: visitor_id, ip, ip_prefix.
CREATE TABLE IF NOT EXISTS visitor_exclusions (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  kind TEXT NOT NULL,
  value TEXT NOT NULL,
  note TEXT,
  CONSTRAINT visitor_exclusions_kind_value_key UNIQUE (kind, value)
);

CREATE INDEX IF NOT EXISTS visitor_logs_visitor_id_idx ON visitor_logs (visitor_id);
CREATE INDEX IF NOT EXISTS visitor_logs_session_id_idx ON visitor_logs (session_id);
CREATE INDEX IF NOT EXISTS visitor_logs_path_idx ON visitor_logs (path);
CREATE INDEX IF NOT EXISTS visitor_logs_ip_idx ON visitor_logs (ip);
CREATE INDEX IF NOT EXISTS visitor_logs_src_idx ON visitor_logs (src);
CREATE INDEX IF NOT EXISTS visitor_logs_clean_idx ON visitor_logs (created_at DESC) WHERE is_local = false AND is_bot = false;

-- Backfill: 509 of the 671 existing rows are the local dev server writing to
-- production, identifiable by the loopback address.
UPDATE visitor_logs SET is_local = true WHERE ip IN ('::1', '127.0.0.1', 'localhost');

-- Backfill: user-agent bots and command-line tools already in the table.
UPDATE visitor_logs SET is_bot = true, bot_reason = 'user-agent'
WHERE is_bot = false AND (
  user_agent IS NULL
  OR user_agent ILIKE '%bot%' OR user_agent ILIKE '%crawl%' OR user_agent ILIKE '%spider%'
  OR user_agent ILIKE '%headless%' OR user_agent ILIKE '%curl/%' OR user_agent ILIKE '%wget%'
  OR user_agent ILIKE '%undici%' OR user_agent ILIKE '%python-requests%' OR user_agent ILIKE '%axios%'
  OR user_agent ILIKE '%go-http%' OR user_agent ILIKE '%okhttp%' OR user_agent ILIKE '%scrapy%'
  OR user_agent ILIKE '%lighthouse%' OR user_agent ILIKE '%pagespeed%'
  OR user_agent = 'Mozilla/5.0 (compatible)'
);

-- Backfill: datacenter/VPN sources verified by hand against the existing rows.
-- 5.183.89.35 requested five distinct pages inside one second, 13.222.28.197 is
-- AWS us-east-1, and the rest are M247/Datacamp and US hosting ranges. Vercel
-- also failed to resolve a city for most of them, which is itself a tell.
UPDATE visitor_logs SET is_bot = true, bot_reason = 'datacenter'
WHERE is_bot = false AND ip IN ('5.183.89.35', '13.222.28.197', '146.70.199.147', '138.199.60.24', '23.27.145.68', '108.174.8.21', '108.174.8.25', '108.174.8.27', '103.24.232.15', '103.24.233.14');

-- Backfill: non-page routes that were never real page views.
UPDATE visitor_logs SET is_bot = true, bot_reason = 'asset-route'
WHERE is_bot = false AND (path LIKE '/opengraph-image%' OR path LIKE '/icon%' OR path LIKE '/apple-icon%' OR path LIKE '/twitter-image%');

-- Seed the owner rules from the evidence in the table. 223.178.0.0/16 is one
-- ISP block in Chandigarh: 18 rotating addresses, every one of them Chrome on
-- Windows, 111 hits across five weeks. The two Ahmedabad addresses carried the
-- curl calls and an Android/Mac pair. All three are reversible from the
-- dashboard if any turns out to be someone else.
INSERT INTO visitor_exclusions (kind, value, note) VALUES
  ('ip_prefix', '223.178.', 'Home ISP block, Chandigarh - rotates daily'),
  ('ip', '103.112.218.170', 'Ahmedabad - seeded from historical data, remove if not yours'),
  ('ip', '106.202.119.148', 'Ahmedabad - seeded from historical data, remove if not yours')
ON CONFLICT ON CONSTRAINT visitor_exclusions_kind_value_key DO NOTHING;
