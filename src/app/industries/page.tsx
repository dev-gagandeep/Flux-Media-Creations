import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, SECONDARY_INDUSTRIES, SITE } from "@/lib/constants";
import { INDUSTRY_DETAILS } from "@/lib/industry-content";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Industries We Serve | Operating Intelligence by Flux",
  description:
    "WordPress web design and GoHighLevel automation for healthcare, home services, real estate, and wellness brands across the US, UK, and Canada.",
  path: "/industries",
});

const industryPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Industries We Serve | Flux Media Creations",
  description:
    "WordPress web design and GoHighLevel automation for healthcare clinics, home service businesses, real estate professionals, and beauty and wellness brands.",
  url: `${SITE.url}/industries`,
  provider: {
    "@type": "Organization",
    name: "Flux Media Creations",
    url: SITE.url,
    founder: {
      "@type": "Person",
      name: "Gagan Deep",
    },
    areaServed: ["US", "GB", "CA"],
    serviceType: "WordPress Web Design and GoHighLevel Automation",
  },
};

const ACCENTS = ["#CF3723", "#31356D", "#5F7657", "#687DAE"];
const STRATEGIC_INDUSTRY_ROUTES: Record<string, string> = {
  healthcare: "/industries/healthcare",
  "home-services": "/industries/home-services",
  "beauty-wellness": "/industries/wellness",
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(industryPageSchema) }} />

      <section className="bg-blush/45 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-flux">Industries we serve</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl" style={{ letterSpacing: "0" }}>
              We do not build generic websites for specific businesses.
            </h1>
            <p className="mt-7 max-w-4xl text-base leading-8 text-ink/62 md:text-lg">
              A pain management clinic, a roofing company, and a real estate agent all need websites and automation systems, but they need completely different journeys, trust signals, lead sources, and follow-up logic.
            </p>
          </div>

          <div className="rounded-xl border border-ink/8 bg-white p-6 shadow-[0_24px_70px_rgba(13,13,13,0.08)]">
            <p className="mb-5 text-xs uppercase tracking-widest text-ink/35">Jump to industry</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.slug}
                  href={STRATEGIC_INDUSTRY_ROUTES[industry.slug] ?? `#${industry.slug}`}
                  className="rounded-xl border border-ink/8 bg-blush/35 px-4 py-3 text-sm font-medium text-ink/68 transition-colors hover:border-flux/30 hover:text-flux"
                >
                  {industry.label}
                </Link>
              ))}
              <Link href="/industries/legal" className="rounded-xl border border-ink/8 bg-blush/35 px-4 py-3 text-sm font-medium text-ink/68 transition-colors hover:border-flux/30 hover:text-flux">Legal Services</Link>
            </div>
          </div>
        </div>
      </section>

      {INDUSTRY_DETAILS.map((industry, index) => (
        <section key={industry.slug} id={industry.slug} className={`${index % 2 === 0 ? "bg-white" : "bg-blush/45"} scroll-mt-28 px-6 py-24 md:px-10 md:py-32`}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: ACCENTS[index] }}>
                  {industry.preHeadline}
                </p>
                <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
                  {industry.label}
                </h2>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight md:text-4xl" style={{ letterSpacing: "0" }}>
                  {industry.sectionTitle}
                </h3>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-white transition-colors"
                  style={{ background: ACCENTS[index] }}
                >
                  {industry.ctaLabel}
                </Link>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-xl border border-ink/8 bg-white p-7 md:p-8">
                <p className="mb-5 text-xs uppercase tracking-widest text-ink/35">Market context</p>
                <div className="space-y-5 text-base leading-8 text-ink/68">
                {industry.body.map((paragraph, paragraphIndex) => (
                  <p key={`${industry.slug}-body-${paragraphIndex}`}>{paragraph}</p>
                ))}
                </div>
              </div>

              <div className="space-y-5">
              <div className="rounded-xl border border-ink/8 bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-5">What we build for {industry.label}</p>
                <ul className="grid gap-3">
                  {industry.whatWeBuild.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-ink/68">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.65rem] text-white" style={{ background: ACCENTS[index] }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {industry.specialties?.length ? (
                <div className="rounded-xl border border-ink/8 bg-white p-6">
                  <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Specialties we&apos;ve worked with</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.specialties.map((item) => (
                      <span key={item} className="rounded-full bg-blush px-3 py-1.5 text-xs text-ink/65">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-widest text-flux">More verticals</p>
          <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
            Other service businesses we can support.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {SECONDARY_INDUSTRIES.map((industry) => (
            <article key={industry.slug} className="rounded-xl border border-ink/8 bg-blush/35 p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "0" }}>
                {industry.label}
              </h3>
              <p className="text-sm leading-7 text-ink/65 mb-4">{industry.summary}</p>
              <div className="flex flex-wrap gap-2">
                {industry.what.map((item) => (
                  <span key={item} className="rounded-md bg-ink/5 px-2.5 py-1 text-xs text-ink/60">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-xl bg-ink p-8 md:p-10 text-cream">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4" style={{ letterSpacing: "0" }}>
            Don&apos;t see your industry listed?
          </h2>
          <p className="text-sm md:text-base text-cream/72 leading-7 max-w-3xl mb-6">
            We&apos;ve also built websites and automation systems for law firms, financial advisors, fitness studios, ecommerce brands, and SaaS companies.
            If your business captures leads, books appointments, or manages client relationships, there is a good chance we can build a better system for it.
            Contact us and tell us what you do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
            style={{ background: "var(--flux)" }}
          >
            Start a conversation →
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
