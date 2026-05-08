"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const serviceCards = [
  {
    eyebrow: "01",
    title: "AI Automation",
    body: "GoHighLevel, Make, Zapier, and CRM workflows that reduce manual chasing and ensure every enquiry is seen. From form submissions to missed call text back setup, we build automation to help your team respond faster without adding more admin work.",
    href: "/services/gohighlevel-automation",
    fit: "Ideal for clinics, agencies, home service teams, and small businesses that need reliable follow-up after each inquiry.",
    tags: ["GHL CRM", "Pipelines", "SMS Automation"],
    tone: "light",
  },
  {
    eyebrow: "02",
    title: "Branding for High Performance",
    body: "High quality WordPress website design with powerful messaging, fast pages, mobile-first layouts, and strong calls to action. We build pages that look sharp, load quickly, and lead visitors to book, call, or inquire.",
    href: "/services/wordpress-website-build",
    fit: "Best for businesses needing stronger trust, clearer positioning, and a website that converts, not just looks good.",
    tags: ["WordPress", "SEO", "UX"],
    tone: "dark",
  },
  {
    eyebrow: "03",
    title: "The Growth System",
    body: "A complete website and CRM engine built in one. Your WordPress website captures demand while GoHighLevel manages routing, follow-up, reminders, pipeline tracking, and reporting.",
    href: "/services/full-growth-system",
    fit: "Ideal for service businesses that want one connected system for traffic, leads, follow-up, and booked appointments.",
    tags: ["Web", "CRM", "Automations"],
    tone: "wide",
  },
];

export default function Services() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/30 mb-3">Services / Tactical solutions</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
            Tactical solutions to the fundamental problems of digital business.
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-7 text-ink/50">
            Your website is more than a brochure online. It needs to explain your offer clearly, build trust quickly, capture leads cleanly, and trigger follow-up before prospects go to a competitor.
          </p>
          <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-ink/50">
            We build every system around search visibility, conversion-focused website design, CRM automation, and measurable follow-up.
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
                <p className={`mt-4 max-w-lg text-xs leading-6 ${service.tone === "dark" ? "text-cream/42" : "text-ink/42"}`}>
                  {service.fit}
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
              <p className="mt-4 max-w-2xl text-xs leading-6 text-ink/42">{serviceCards[2].fit}</p>
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
