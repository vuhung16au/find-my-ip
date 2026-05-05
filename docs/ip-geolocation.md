# IP Geolocation

## Overview

IP geolocation is the process of mapping an IP address to a geographic location. It is widely used for content localization, fraud detection, security analytics, and network diagnostics.

---

## How It Works

When a device connects to the internet, it is assigned an IP address by its ISP. ISPs register their IP address ranges with Regional Internet Registries (RIRs), providing a foundation for geolocation databases.

### Data Sources

1. **WHOIS / RIR Registration Data** — ISPs register IP ranges with organizations like ARIN (North America), APNIC (Asia-Pacific), RIPE NCC (Europe), LACNIC (Latin America), and AFRINIC (Africa).

2. **BGP Routing Tables** — Border Gateway Protocol announcements reveal which networks own which IP prefixes and roughly where they are interconnected.

3. **Active Probing** — Some providers send latency-measurement probes to triangulate location using round-trip times.

4. **User Opt-In Data** — Crowd-sourced GPS data and Wi-Fi BSSID mapping can improve city-level accuracy.

5. **Commercial Agreements** — Direct data-sharing agreements with ISPs and CDNs.

---

## Accuracy Limitations

| Precision Level | Typical Accuracy |
|-----------------|-----------------|
| Country          | ~99%            |
| Region / State   | ~85–92%         |
| City             | ~50–75%         |
| Postal Code      | ~40–60%         |
| Street Address   | Not Possible    |

### Why Inaccuracies Occur

- **IP allocation ≠ physical location** — A Telstra customer in Perth may be assigned an IP range registered in Sydney where Telstra's NOC is located.
- **VPNs and proxies** — Traffic exits from a different server location.
- **Mobile networks** — Carrier infrastructure is centralized; your IP may appear in a different city.
- **CDN and cloud IPs** — Edge servers show the datacenter's location, not the user's.
- **Dynamic IPs** — ISPs regularly reassign addresses; databases may lag behind.

---

## ISP and ASN Information

### What is an ASN?

An **Autonomous System Number (ASN)** is a globally unique identifier assigned to a network (or group of networks) under a single administrative domain. ASNs are used in BGP routing.

- **Format:** `AS` followed by a number (e.g., `AS1221`)
- **Telstra Corporation (Australia):** AS1221
- **AS lookup:** [bgp.he.net](https://bgp.he.net)

### What is an ISP?

An **Internet Service Provider (ISP)** is a company that provides individuals and organizations access to the internet. ISPs own and manage the infrastructure that connects end-users to the global internet backbone.

---

## Privacy Implications

Your IP address reveals:
- ✅ Approximate city or region
- ✅ Your ISP name
- ✅ Your ASN
- ✅ General timezone
- ❌ Your exact street address
- ❌ Your name or personal identity
- ❌ Precise device location

Only your ISP, acting under a valid legal order, can link an IP address to a specific subscriber account.

---

## Tools and APIs

| Service | Endpoint | Notes |
|---------|----------|-------|
| ipapi.co | `https://ipapi.co/json/` | Free tier: 1,000 req/day |
| ipify | `https://api64.ipify.org?format=json` | IP only, no geo |
| ip-api.com | `http://ip-api.com/json/` | Free, no HTTPS on free tier |
| MaxMind GeoIP2 | Server-side API | Paid, highly accurate |

---

## References

- [IANA – IP Address Services](https://www.iana.org/protocols)
- [APNIC – Asia Pacific Network Information Centre](https://www.apnic.net)
- [BGP.he.net – ASN Lookup](https://bgp.he.net)
- [RFC 7159 – JSON](https://tools.ietf.org/html/rfc7159)
