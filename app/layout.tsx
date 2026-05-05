import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IP-Insight | What Is My IP",
  description:
    "Real-time IPv4/IPv6 detection with geographic metadata, ISP info, and an educational FAQ. Built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased" style={{ background: "var(--color-black)", color: "var(--color-ivory)" }}>
        {children}
      </body>
    </html>
  );
}
