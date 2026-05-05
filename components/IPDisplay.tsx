"use client";

import { useEffect, useState } from "react";

interface IPData {
  ipv4: string | null;
  ipv6: string | null;
  loading: boolean;
}

export default function IPDisplay() {
  const [ipData, setIpData] = useState<IPData>({
    ipv4: null,
    ipv6: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchIPs() {
      let ipv4: string | null = null;
      let ipv6: string | null = null;

      try {
        // Fetch via ipify which returns the connecting IP (may be v4 or v6)
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        const ip: string = data.ip;

        // Determine if the returned IP is IPv4 or IPv6
        if (ip.includes(":")) {
          ipv6 = ip;
        } else {
          ipv4 = ip;
        }

        // Try to get IPv4 explicitly
        if (!ipv4) {
          try {
            const res4 = await fetch("https://api.ipify.org?format=json");
            const data4 = await res4.json();
            if (data4.ip && !data4.ip.includes(":")) {
              ipv4 = data4.ip;
            }
          } catch {
            // IPv4 not available
          }
        }

        // If we got an IPv4 from the first call, try to get IPv6
        if (!ipv6) {
          try {
            const res6 = await fetch("https://api6.ipify.org?format=json");
            const data6 = await res6.json();
            if (data6.ip && data6.ip.includes(":")) {
              ipv6 = data6.ip;
            }
          } catch {
            // IPv6 not available
          }
        }
      } catch {
        ipv4 = null;
        ipv6 = null;
      }

      setIpData({ ipv4, ipv6, loading: false });
    }

    fetchIPs();
  }, []);

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: "var(--color-charcoal)",
        borderColor: "var(--color-purple)",
      }}
    >
      <h2
        className="text-xl font-semibold mb-6"
        style={{ color: "var(--color-white)" }}
      >
        Your IP Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* IPv4 */}
        <div
          className="rounded-xl p-5 border"
          style={{
            background: "var(--color-black)",
            borderColor: "var(--color-purple)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                background: "var(--color-purple)",
                color: "var(--color-ivory)",
              }}
            >
              IPv4
            </span>
          </div>
          {ipData.loading ? (
            <div
              className="h-8 rounded animate-pulse"
              style={{ background: "var(--color-charcoal)", width: "70%" }}
            />
          ) : (
            <p
              className="text-2xl font-mono font-bold tracking-wide"
              style={{ color: ipData.ipv4 ? "var(--color-ivory)" : "var(--color-stone)" }}
            >
              {ipData.ipv4 ?? "Not Detected"}
            </p>
          )}
        </div>

        {/* IPv6 */}
        <div
          className="rounded-xl p-5 border"
          style={{
            background: "var(--color-black)",
            borderColor: "var(--color-law-purple)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                background: "var(--color-law-purple)",
                color: "var(--color-ivory)",
              }}
            >
              IPv6
            </span>
          </div>
          {ipData.loading ? (
            <div
              className="h-8 rounded animate-pulse"
              style={{ background: "var(--color-charcoal)", width: "70%" }}
            />
          ) : (
            <p
              className="text-xl font-mono font-bold tracking-wide break-all"
              style={{ color: ipData.ipv6 ? "var(--color-ivory)" : "var(--color-stone)" }}
            >
              {ipData.ipv6 ?? "Not Detected"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
