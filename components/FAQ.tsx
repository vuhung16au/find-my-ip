"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I find my device's IP address?",
    answer:
      "Your public IP address is assigned by your Internet Service Provider (ISP) and is visible to every website you visit. You can see it instantly at the top of this page. To find your local (private) IP on Windows, open Command Prompt and run `ipconfig`. On macOS or Linux, open Terminal and run `ifconfig` or `ip addr`. Your local IP typically starts with 192.168.x.x or 10.x.x.x.",
  },
  {
    question: "Why is the location shown different from my actual location?",
    answer:
      "IP geolocation databases map IP address ranges to approximate geographic locations, but they are not always precise. The location shown reflects where your ISP's infrastructure is registered, which may be in a city or region different from where you physically are. VPNs, proxies, and mobile networks can also show a different location entirely.",
  },
  {
    question: "Why do I see both IPv4 and IPv6?",
    answer:
      "The internet is in a long transition from IPv4 (32-bit, ~4.3 billion addresses, e.g. 203.0.113.1) to IPv6 (128-bit, virtually unlimited addresses, e.g. 2001:db8::1). Many modern ISPs and networks support both simultaneously — a setup called dual-stack. If your network doesn't support IPv6, that field will show 'Not Detected', which is normal.",
  },
  {
    question: "Can someone find my exact home address using my IP address?",
    answer:
      "No. While your IP address reveals approximate geographic information (city-level or even just country-level), it does not expose your exact street address or personal identity. Only your ISP, with a legal warrant, can link an IP address to a specific customer account. Public IP geolocation tools provide city-level estimates at best.",
  },
  {
    question: "Why does my IP address change?",
    answer:
      "Most home internet connections use a 'dynamic' IP address, which your ISP can reassign periodically — for example, when your router restarts or after a lease period expires. Businesses and some home users can pay for a 'static' IP that never changes. Mobile devices change their public IP frequently as they switch between cell towers and Wi-Fi networks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

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
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border overflow-hidden"
            style={{
              borderColor:
                openIndex === index
                  ? "var(--color-law-purple)"
                  : "var(--color-charcoal)",
              background: "var(--color-black)",
            }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left transition-colors"
              style={{
                color: openIndex === index ? "var(--color-ivory)" : "var(--color-stone)",
              }}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-sm pr-4">{faq.question}</span>
              <span
                className="flex-shrink-0 text-xl font-light transition-transform"
                style={{
                  transform: openIndex === index ? "rotate(45deg)" : "none",
                  color: openIndex === index
                    ? "var(--color-red)"
                    : "var(--color-stone)",
                }}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div
                className="px-5 pb-5 text-sm leading-relaxed"
                style={{ color: "var(--color-ivory)" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
