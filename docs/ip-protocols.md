# Understanding IP Protocols

## What is an IP Address?

An **IP (Internet Protocol) address** is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two primary functions: host identification and location addressing.

---

## IPv4

**IPv4** (Internet Protocol version 4) is the fourth version of the Internet Protocol and the first to be widely deployed. It uses a **32-bit address space**, providing approximately **4.3 billion unique addresses**.

### Format

IPv4 addresses are written in **dotted-decimal notation**:

```
203.0.113.42
```

Each group is an **octet** (8 bits), ranging from 0 to 255.

### Address Classes

| Class | Range               | Default Subnet Mask | Usage                  |
|-------|---------------------|---------------------|------------------------|
| A     | 1.0.0.0 – 126.0.0.0 | 255.0.0.0           | Large networks         |
| B     | 128.0.0.0 – 191.255.0.0 | 255.255.0.0     | Medium networks        |
| C     | 192.0.0.0 – 223.255.255.0 | 255.255.255.0 | Small networks         |
| D     | 224.0.0.0 – 239.255.255.255 | N/A           | Multicast              |
| E     | 240.0.0.0 – 255.255.255.255 | N/A           | Experimental / Reserved|

### Private Address Ranges (RFC 1918)

These addresses are **not routable** on the public internet:

- `10.0.0.0/8` — Large private networks
- `172.16.0.0/12` — Medium private networks
- `192.168.0.0/16` — Home and small office networks

### Exhaustion

IPv4 address exhaustion has been a concern since the early 1990s. IANA allocated the last IPv4 address blocks to the five Regional Internet Registries (RIRs) in 2011. NAT (Network Address Translation) has extended the usability of the remaining space.

---

## IPv6

**IPv6** (Internet Protocol version 6) is the most recent version of the Internet Protocol, designed to replace IPv4. It uses a **128-bit address space**, providing approximately **3.4 × 10³⁸ unique addresses** — enough for every atom on Earth to have an address.

### Format

IPv6 addresses are written as **eight groups of four hexadecimal digits**, separated by colons:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

Leading zeros in each group can be omitted:

```
2001:db8:85a3:0:0:8a2e:370:7334
```

Consecutive groups of zeros can be replaced with `::` (only once per address):

```
2001:db8:85a3::8a2e:370:7334
```

### Key Features

- **No NAT required** — Every device can have a globally unique address.
- **Built-in IPsec** — Security features are part of the protocol specification.
- **Stateless Address Autoconfiguration (SLAAC)** — Devices can configure themselves without a DHCP server.
- **Simplified header** — More efficient routing.
- **No broadcast** — Uses multicast and anycast instead.

### Address Types

| Type        | Prefix          | Description                              |
|-------------|-----------------|------------------------------------------|
| Global Unicast | `2000::/3`   | Publicly routable (similar to IPv4 public) |
| Link-Local  | `fe80::/10`     | Only valid on the local network segment  |
| Loopback    | `::1/128`       | Equivalent to 127.0.0.1 in IPv4          |
| Unique Local | `fc00::/7`     | Equivalent to private IPv4 ranges        |
| Multicast   | `ff00::/8`      | Send to multiple destinations            |

---

## Dual-Stack

A **dual-stack** host or network supports both IPv4 and IPv6 simultaneously. This is the recommended transition mechanism defined in **RFC 4213**.

When you visit a website, your operating system queries both A records (IPv4) and AAAA records (IPv6) in DNS. If both are available, it typically prefers IPv6 via the **Happy Eyeballs** algorithm (RFC 6555 / 8305).

---

## IP Geolocation

IP geolocation maps an IP address to an approximate physical location using databases maintained by companies like MaxMind, IP2Location, and ipapi. These databases are built from:

- ISP routing data (BGP announcements)
- User-submitted data
- Wi-Fi positioning
- Registration records from IANA, ARIN, APNIC, etc.

**Accuracy:**
- Country: ~99%
- Region/State: ~80–90%
- City: ~50–75%
- Exact address: Not possible

---

## References

- [RFC 791 – IPv4](https://tools.ietf.org/html/rfc791)
- [RFC 8200 – IPv6](https://tools.ietf.org/html/rfc8200)
- [RFC 4213 – Dual-Stack Transition](https://tools.ietf.org/html/rfc4213)
- [RFC 1918 – Private Address Space](https://tools.ietf.org/html/rfc1918)
- [IANA – Number Resources](https://www.iana.org/numbers)
