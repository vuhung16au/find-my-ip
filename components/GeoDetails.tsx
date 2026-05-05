"use client";

import { useEffect, useState } from "react";

interface GeoData {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  postal: string;
  timezone: string;
  org: string;
  asn: string;
  loading: boolean;
  error: boolean;
}

const defaultGeo: GeoData = {
  ip: "",
  city: "Sydney",
  region: "New South Wales",
  country_name: "Australia",
  postal: "2000",
  timezone: "Australia/Sydney",
  org: "Telstra Limited",
  asn: "AS1221",
  loading: true,
  error: false,
};

function formatTimezone(tz: string): string {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-AU", {
      timeZone: tz,
      timeZoneName: "short",
    });
    const parts = formatter.formatToParts(now);
    const tzName = parts.find((p) => p.type === "timeZoneName")?.value ?? tz;
    return tzName;
  } catch {
    return tz;
  }
}

interface MetaRowProps {
  label: string;
  value: string;
}

function MetaRow({ label, value }: MetaRowProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-b-0" style={{ borderColor: "var(--color-charcoal)" }}>
      <span className="text-sm font-medium" style={{ color: "var(--color-stone)" }}>
        {label}
      </span>
      <span className="text-sm font-semibold text-right" style={{ color: "var(--color-ivory)" }}>
        {value}
      </span>
    </div>
  );
}

export default function GeoDetails() {
  const [geo, setGeo] = useState<GeoData>(defaultGeo);

  useEffect(() => {
    async function fetchGeo() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Failed to fetch geo data");
        const data = await res.json();
        setGeo({
          ip: data.ip ?? "",
          city: data.city ?? defaultGeo.city,
          region: data.region ?? defaultGeo.region,
          country_name: data.country_name ?? defaultGeo.country_name,
          postal: data.postal ?? defaultGeo.postal,
          timezone: data.timezone ?? defaultGeo.timezone,
          org: data.org ?? defaultGeo.org,
          asn: data.asn ?? defaultGeo.asn,
          loading: false,
          error: false,
        });
      } catch {
        // Show fallback/example data on error
        setGeo({ ...defaultGeo, loading: false, error: true });
      }
    }

    fetchGeo();
  }, []);

  const tzDisplay = geo.loading ? "..." : formatTimezone(geo.timezone);

  // Extract ISP from org field (format is usually "AS1221 Telstra Limited")
  const isp = geo.org.replace(/^AS\d+\s*/, "");
  const asn = geo.org.match(/^(AS\d+)/)?.[1] ?? geo.asn;

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: "var(--color-charcoal)",
        borderColor: "var(--color-purple)",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-semibold"
          style={{ color: "var(--color-white)" }}
        >
          Network Identity
        </h2>
        {geo.error && (
          <span
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "var(--color-law-purple)",
              color: "var(--color-ivory)",
            }}
          >
            Example Data
          </span>
        )}
      </div>

      {geo.loading ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded animate-pulse"
              style={{ background: "var(--color-black)", width: i % 2 === 0 ? "60%" : "80%" }}
            />
          ))}
        </div>
      ) : (
        <div>
          <MetaRow label="City" value={geo.city} />
          <MetaRow label="State / Region" value={geo.region} />
          <MetaRow label="Country" value={geo.country_name} />
          <MetaRow label="Postal Code" value={geo.postal} />
          <MetaRow label="Time Zone" value={tzDisplay} />
          <MetaRow label="ISP" value={isp || geo.org} />
          <MetaRow label="ASN" value={asn} />
        </div>
      )}
    </div>
  );
}
