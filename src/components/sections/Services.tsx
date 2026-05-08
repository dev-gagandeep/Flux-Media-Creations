"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const serviceCards = [
  {
    eyebrow: "01",
    title: "AI Automation",
    body: "Integrated GoHighLevel, Make, Zapier, and lead-routing systems that reduce manual follow-up and make every enquiry visible.",
    href: "/services/gohighlevel-automation",
    tags: ["GHL", "SMS", "Pipelines"],
    tone: "light",
  },
  {
    eyebrow: "02",
    title: "High-Performance Branding",
    body: "Visual direction, conversion copy, and WordPress interfaces that feel premium while staying fast, clear, and easy to manage.",
    href: "/services/wordpress-website-build",
    tags: ["WordPress", "SEO", "UX"],
    tone: "dark",
  },
  {
    eyebrow: "03",
    title: "Growth Systems",
    body: "Full website plus CRM architecture, from search-intent landing pages to automated follow-up sequences and reporting visibility.",
    href: "/services/full-growth-system",
    tags: ["Organic SEO", "CRM", "Automation"],
    tone: "wide",
  },
];

export default function Services() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/30 mb-3">Precision services</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
            Tactical solutions for the core problems of digital business.
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-ink/50">
            Each build is designed as infrastructure: search visibility, conversion UX, automation, and reporting working in the same direction.
          </p>
        </div>
        <Link
          href="/services"
          className="self-start md:self-end text-xs uppercase tracking-widest text-flux transition-colors hover:text-flux-dark"
        >
          See more
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {serviceCards.slice(0, 2).map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={service.href}>
              <div
                className={`group min-h-[310px] rounded-xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  service.tone === "dark"
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/8 bg-white text-ink"
                }`}
              >
                <p className={`text-xs uppercase tracking-widest ${service.tone === "dark" ? "text-flux" : "text-flux"}`}>
                  {service.eyebrow}
                </p>
                <h3 className="mt-16 font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                  {service.title}
                </h3>
                <p className={`mt-3 max-w-lg text-sm leading-7 ${service.tone === "dark" ? "text-cream/50" : "text-ink/55"}`}>
                  {service.body}
                </p>
                <div className="mt-14 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-wide ${
                        service.tone === "dark" ? "bg-cream/8 text-cream/50" : "bg-blush text-flux"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5"
      >
        <Link href={serviceCards[2].href}>
          <div className="grid gap-6 rounded-xl border border-ink/8 bg-white p-7 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs uppercase tracking-widest text-flux">{serviceCards[2].eyebrow}</p>
              <h3 className="mt-10 font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                {serviceCards[2].title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/55">{serviceCards[2].body}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-end">
              {["+420% ROI", "2.4x Lead", "93% Up", "Secure"].map((metric) => (
                <div key={metric} className="rounded-lg bg-blush px-4 py-6 text-center text-sm font-semibold text-ink/55">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
