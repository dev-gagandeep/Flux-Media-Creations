import Link from "next/link";

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

const pricingCards = [
  {
    number: "01",
    title: "Build a website on WordPress",
    href: "/services/wordpress-website-build",
    price: "$500",
    intro:
      "Custom WordPress website design from strategy to launch. We create fast, mobile-first, SEO-ready websites for clinics, local service businesses, real estate professionals, and growing brands who need more qualified leads.",
    includes: [
      "Conversion-focused website design",
      "Mobile-first WordPress development",
      "Page structure for SEO",
      "Clear call to action sections",
      "Landing pages and service pages",
      "Setup focused on speed",
      "Analytics-ready infrastructure",
    ],
    bestFor: "Businesses who need a professional website built to generate leads.",
  },
  {
    number: "02",
    title: "GoHighLevel Setup & Automation",
    href: "/services/gohighlevel-automation",
    price: "$300",
    intro:
      "A full GoHighLevel setup service for businesses who want better lead tracking, faster follow-up, and fewer missed opportunities.",
    includes: [
      "GHL CRM deployment",
      "Lead pipeline work",
      "Missed call reply setup",
      "Email and SMS workflows",
      "Automated appointment scheduling",
      "Reminder sequences",
      "Review request automation",
      "Basic reporting framework",
    ],
    bestFor: "Clinics and small businesses getting leads but losing them because of slow or inconsistent follow-up.",
  },
  {
    number: "03",
    title: "Full Growth System",
    href: "/services/full-growth-system",
    price: "$1,300",
    intro:
      "Your WordPress website and GoHighLevel CRM created and connected by one team. This is the whole system to turn visitors into leads, and leads into booked appointments.",
    includes: [
      "WordPress website build",
      "GoHighLevel CRM automation setup",
      "Lead capture forms",
      "Appointment booking",
      "Missed call recovery",
      "Follow-up sequences",
      "Pipeline tracking",
      "SEO basics",
      "Conversion tracking and analytics",
    ],
    bestFor: "Service businesses that want one connected system for growth, not disconnected tools.",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-flux mb-4">Pricing</p>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
              Clear, open starting points.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/55 md:text-base">
              Choose the build that fits your current stage of development. Start with a better website, add automation, or combine them into one complete lead generation platform.
            </p>
          </div>
          <Link href="/services" className="self-start rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink/65 transition-colors hover:border-ink/35 hover:text-ink md:self-end">
            Compare all services
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`relative rounded-xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                service.featured ? "border-flux/25 bg-ink text-cream" : "border-ink/8 bg-white text-ink"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-flux px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <p className={`text-xs uppercase tracking-widest ${service.featured ? "text-flux" : "text-ink/35"}`}>
                {service.number}
              </p>
              <h3 className="mt-8 font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                {service.title}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${service.featured ? "text-cream/55" : "text-ink/55"}`}>
                {service.intro}
              </p>
              <div className="mt-8">
                <p className={`text-xs uppercase tracking-widest ${service.featured ? "text-cream/35" : "text-ink/30"}`}>Starting from</p>
                <p className="mt-1 font-display text-5xl font-semibold text-flux" style={{ letterSpacing: "0" }}>
                  {service.price}
                </p>
              </div>
              <div className={`mt-7 border-t pt-5 ${service.featured ? "border-cream/10" : "border-ink/8"}`}>
                <p className={`mb-3 text-xs uppercase tracking-widest ${service.featured ? "text-cream/35" : "text-ink/30"}`}>Includes</p>
                <ul className={`space-y-2 text-xs leading-5 ${service.featured ? "text-cream/55" : "text-ink/55"}`}>
                  {service.includes.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-flux">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-5 text-xs leading-6 ${service.featured ? "text-cream/42" : "text-ink/42"}`}>
                  Best for: {service.bestFor}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <div className="overflow-x-auto rounded-xl border border-ink/8 bg-white p-2">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="border-b border-ink/8">
                  <th className="w-1/2 px-4 py-4 text-left text-sm font-medium text-ink/40">Feature</th>
                  <th className="px-4 py-4 text-center text-sm font-medium">Website</th>
                  <th className="px-4 py-4 text-center text-sm font-medium">GHL</th>
                  <th className="rounded-t-xl bg-blush px-4 py-4 text-center text-sm font-medium text-flux">Full System</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-ink/5 last:border-b-0">
                    <td className="px-4 py-3.5 text-sm text-ink/65">{row.feature}</td>
                    <Check enabled={row.s1} />
                    <Check enabled={row.s2} />
                    <Check enabled={row.s3} highlight />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ enabled, highlight = false }: { enabled: boolean; highlight?: boolean }) {
  return (
    <td className={`px-4 py-3.5 text-center text-sm ${highlight ? "bg-blush/45" : ""}`}>
      {enabled ? <span className={highlight ? "font-semibold text-flux" : "text-green-600"}>✓</span> : <span className="text-ink/15">—</span>}
    </td>
  );
}
