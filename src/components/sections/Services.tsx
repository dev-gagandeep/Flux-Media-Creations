"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const serviceCards = [
  {
    eyebrow: "01",
    title: "Patient Revenue System",
    body: "A connected operating layer for patient discovery, inquiry, appointment booking, follow-up, and revenue visibility.",
    href: "/patient-revenue-system",
    fit: "Built for healthcare clinics and appointment-based practices where every patient opportunity matters.",
    tags: ["Healthcare", "Booking", "Revenue"],
    tone: "light",
  },
  {
    eyebrow: "02",
    title: "AI Discovery",
    body: "Entity clarity, answer architecture, technical search foundations, and evidence that help businesses become understandable across search, maps, and AI systems.",
    href: "/ai-discovery",
    fit: "For businesses whose customers increasingly discover and evaluate providers through AI-assisted search.",
    tags: ["Search", "Maps", "AI"],
    tone: "dark",
  },
  {
    eyebrow: "03",
    title: "Revenue Intelligence + Customer Progression",
    body: "Connect source, response, pipeline, booking, and outcome data—then design the workflows that move each customer toward the next useful action.",
    href: "/revenue-intelligence",
    fit: "For service businesses that need one measurable system instead of disconnected lead and automation tools.",
    tags: ["Intelligence", "CRM", "Progression"],
    tone: "wide",
  },
];

export default function Services() {
  return (
    <section className="section max-w-[1500px] mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="flux-kicker text-flux mb-5">Connected solutions</p>
          <h2 className="max-w-5xl font-display text-display font-medium">
            One business. One connected intelligence layer.
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-7 text-ink/50">
            Flux connects how customers discover a business with how opportunities are captured, progressed, measured, and improved.
          </p>
          <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-ink/50">
            Existing website, CRM, SEO, and automation capabilities remain the implementation layer behind each system.
          </p>
        </div>
        <Link
          href="/solutions"
          className="self-start md:self-end text-xs uppercase tracking-widest text-flux transition-colors hover:text-flux-dark"
        >
          View all solutions
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
                className={`group min-h-[520px] rounded-[2rem] border p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${
                  service.tone === "dark"
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/8 bg-white text-ink"
                }`}
              >
                <p className={`text-xs uppercase tracking-widest ${service.tone === "dark" ? "text-flux" : "text-flux"}`}>
                  {service.eyebrow}
                </p>
                <h3 className="mt-24 font-display text-4xl font-medium leading-tight md:text-6xl">
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
          <div className="grid gap-8 rounded-[2rem] bg-pulse-light p-8 transition-transform duration-500 hover:-translate-y-1 md:grid-cols-[1.3fr_0.7fr] md:p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-flux">{serviceCards[2].eyebrow}</p>
              <h3 className="mt-20 font-display text-4xl font-medium leading-tight md:text-6xl">
                {serviceCards[2].title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/55">{serviceCards[2].body}</p>
              <p className="mt-4 max-w-2xl text-xs leading-6 text-ink/42">{serviceCards[2].fit}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-end">
              {["Discover", "Capture", "Progress", "Improve"].map((metric) => (
                <div key={metric} className="rounded-2xl bg-white px-4 py-8 text-center text-sm font-semibold text-ink/55">
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
