import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";
import CTA from "@/components/sections/CTA";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  title: "Services",
  description:
    "WordPress website development, GoHighLevel CRM automation, Airtable systems, discovery visibility, and Make/Zapier integrations for healthcare and home service businesses in the US.",
  path: "/services",
});

const SERVICE_ICONS: Record<string, string> = {
  "01": "⬡",
  "02": "◈",
  "03": "❋",
  "04": "▦",
  "05": "⟳",
  "06": "◎",
  "07": "✳",
};

const COMPARISON = [
  { feature: "Custom WordPress design", s1: true, s2: false, s3: true },
  { feature: "Elementor Pro build", s1: true, s2: false, s3: true },
  { feature: "GHL pipeline setup", s1: false, s2: true, s3: true },
  { feature: "Missed call text-back", s1: false, s2: true, s3: true },
  { feature: "Appointment booking", s1: false, s2: true, s3: true },
  { feature: "A2P SMS registration", s1: false, s2: true, s3: true },
  { feature: "Review automation", s1: false, s2: true, s3: true },
  { feature: "PageSpeed 90+", s1: true, s2: false, s3: true },
  { feature: "SEO optimization", s1: true, s2: false, s3: true },
  { feature: "30-day support", s1: true, s2: true, s3: true },
];

const FAQ = [
  {
    q: "How long does a project take?",
    a: "A WordPress-only site takes 7–10 days. A full Website + GHL system takes 14–21 days. We set clear milestones at the start of every project.",
  },
  {
    q: "Do I need to buy my own GHL subscription?",
    a: "For the GHL Automation service, you'll need a GoHighLevel account ($97/month). We set everything up for you and handle A2P SMS registration. We can also recommend reseller options.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Yes. While we specialize in US healthcare and home service businesses, we work with clients globally. All communication is in English via email, WhatsApp, or video call.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your domain access, brand assets (logo if you have one), existing content or a brief about your services, and access to any platforms you're already using.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically work with 50% upfront and 50% on delivery for project work. For maintenance retainers, payment is monthly.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. We audit your current site, identify what's holding it back, and rebuild it properly. We can migrate all existing content.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Services</p>
        <TextReveal
          text="Everything your business needs — one team, fully delivered."
          className="font-display font-semibold text-4xl md:text-6xl max-w-3xl mb-6"
          as="h1"
        />
        <p className="text-base text-ink/50 max-w-xl leading-relaxed">
          We don't hand things off or outsource. Every site we build, every automation we set up, and every visibility system we shape — it's done by us, start to finish.
        </p>
      </section>

      {/* Service cards */}
      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              id={service.slug}
              className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-flux/30 bg-blush"
                  : "border-ink/8 bg-white hover:border-ink/20"
              }`}
            >
              {service.featured && (
                <span
                  className="absolute -top-3 left-6 text-xs px-3 py-1 rounded-full text-white font-medium"
                  style={{ background: "var(--flux)" }}
                >
                  Most popular
                </span>
              )}
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{SERVICE_ICONS[service.number]}</span>
                <span className="font-display text-xs text-ink/20">{service.number}</span>
              </div>
              <h2
                className="font-display font-semibold text-xl mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                {service.title}
              </h2>
              <p className="text-sm text-ink/55 leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-ink/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-ink/30">from</p>
                  <p className="font-display font-semibold text-xl" style={{ letterSpacing: "-0.02em" }}>
                    {service.from}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:gap-3"
                  style={
                    service.featured
                      ? { background: "var(--flux)", color: "white" }
                      : { background: "var(--ink)", color: "var(--cream)" }
                  }
                >
                  View service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Compare packages</p>
        <h2
          className="font-display font-semibold text-3xl md:text-4xl mb-10"
          style={{ letterSpacing: "-0.03em" }}
        >
          What's included in each service
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-ink/8">
                <th className="text-left py-4 pr-6 text-sm font-medium text-ink/40 w-1/2">Feature</th>
                <th className="text-center py-4 px-4 text-sm font-medium">Website Only</th>
                <th className="text-center py-4 px-4 text-sm font-medium">GHL Only</th>
                <th
                  className="text-center py-4 px-4 text-sm font-medium rounded-t-xl"
                  style={{ background: "var(--blush)", color: "var(--flux)" }}
                >
                  Full System ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i} className="border-b border-ink/5 hover:bg-ink/2 transition-colors">
                  <td className="py-3.5 pr-6 text-sm text-ink/65">{row.feature}</td>
                  <td className="text-center py-3.5 px-4 text-sm">
                    {row.s1 ? <span style={{ color: "#16A34A" }}>✓</span> : <span className="text-ink/15">—</span>}
                  </td>
                  <td className="text-center py-3.5 px-4 text-sm">
                    {row.s2 ? <span style={{ color: "#16A34A" }}>✓</span> : <span className="text-ink/15">—</span>}
                  </td>
                  <td
                    className="text-center py-3.5 px-4 text-sm"
                    style={{ background: i === COMPARISON.length - 1 ? "" : "rgba(255,92,53,0.03)" }}
                  >
                    {row.s3 ? <span style={{ color: "var(--flux)", fontWeight: 600 }}>✓</span> : <span className="text-ink/15">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Questions</p>
        <h2
          className="font-display font-semibold text-3xl md:text-4xl mb-10"
          style={{ letterSpacing: "-0.03em" }}
        >
          Frequently asked
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {FAQ.map((item, i) => (
            <div key={i} className="border-t border-ink/10 pt-6">
              <h3 className="font-medium text-base mb-3">{item.q}</h3>
              <p className="text-sm text-ink/55 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
