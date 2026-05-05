# Quickstart Guide

Get IP-Insight running locally in under 2 minutes.

---

## 1. Prerequisites

Install [Bun](https://bun.sh) if you haven't already:

```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bash_profile
```

Verify:

```bash
bun --version  # should print 1.0.0 or later
```

---

## 2. Clone & Install

```bash
git clone https://github.com/vuhung16au/find-my-ip.git
cd find-my-ip
bun install
```

---

## 3. Run Locally

```bash
make run
```

Open your browser at **http://localhost:3000**. You should see your public IP address detected in real time.

---

## 4. Build for Production

```bash
make build
```

This runs `bun run build` and generates an optimised `.next/` output.

---

## 5. Deploy to Vercel

```bash
# Install Vercel CLI (once)
bun add -g vercel

# Authenticate (once)
vercel login

# Deploy to production
make vercel
```

Your app will be live at a `*.vercel.app` URL within seconds.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `bun: command not found` | Re-run the Bun install script and reload your shell |
| Port 3000 already in use | Set `PORT=3001 bun dev` to use a different port |
| IPv6 shows "Not Detected" | Normal if your ISP/network doesn't support IPv6 |
| Geo shows "Example Data" | The ipapi.co free tier may be rate-limited; try again shortly |
