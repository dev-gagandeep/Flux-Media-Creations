import Link from "next/link";
import { SERVICES } from "@/lib/constants";

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

export default function Pricing() {
  const primary = SERVICES.slice(0, 3);
  const secondary = SERVICES.slice(3);

  return (
    <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-flux mb-4">Pricing</p>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
              Simple, transparent starting points.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/55 md:text-base">
              The same pricing signal from the previous live site, now styled to match the new premium homepage direction.
            </p>
          </div>
          <Link href="/services" className="self-start rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink/65 transition-colors hover:border-ink/35 hover:text-ink md:self-end">
            Compare all services
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {primary.map((service) => (
            <Link
              key={service.slug}
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
              <p className={`mt-4 min-h-[6rem] text-sm leading-7 ${service.featured ? "text-cream/55" : "text-ink/55"}`}>
                {service.description}
              </p>
              <div className="mt-8">
                <p className={`text-xs uppercase tracking-widest ${service.featured ? "text-cream/35" : "text-ink/30"}`}>Starting from</p>
                <p className="mt-1 font-display text-5xl font-semibold text-flux" style={{ letterSpacing: "0" }}>
                  {service.from}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-xl border border-ink/8 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-5">Other starting rates</p>
            <div className="divide-y divide-ink/8">
              {secondary.map((service) => (
                <Link key={service.slug} href={service.href} className="flex items-center justify-between gap-4 py-4 text-sm group">
                  <span className="font-medium text-ink/70 group-hover:text-flux">{service.title}</span>
                  <span className="font-display text-lg font-semibold text-flux">{service.from}</span>
                </Link>
              ))}
            </div>
          </div>

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
