CREATE TABLE IF NOT EXISTS visitor_logs (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  latitude TEXT,
  longitude TEXT,
  device_type TEXT,
  browser_name TEXT,
  browser_version TEXT,
  os_name TEXT,
  os_version TEXT,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS visitor_logs_created_at_idx ON visitor_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS visitor_logs_country_idx ON visitor_logs (country);
CREATE INDEX IF NOT EXISTS visitor_logs_device_type_idx ON visitor_logs (device_type);
