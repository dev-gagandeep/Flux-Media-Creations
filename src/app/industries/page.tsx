import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, SECONDARY_INDUSTRIES, SITE } from "@/lib/constants";
import { INDUSTRY_DETAILS } from "@/lib/industry-content";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Industries We Serve — Healthcare, Home Services, Real Estate & More | Flux Media Creations",
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
    "@type": "ProfessionalService",
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

const ACCENTS = ["#FF5C35", "#2563EB", "#16A34A", "#9333EA"];

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industryPageSchema) }} />

      <section className="section pt-32 md:pt-40 max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Home → Industries</p>
        <p className="text-sm uppercase tracking-widest text-flux mb-4">Industries We Serve</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          We Don&apos;t Build Generic Websites. We Build for Your Industry Because Every One Is Different.
        </h1>
        <p className="text-base md:text-lg text-ink/62 max-w-4xl leading-8">
          A pain management clinic, a roofing company, and a real estate agent all need websites and automation systems,
          but they need completely different things. Different compliance requirements. Different customer journeys. Different lead sources.
          Different follow-up logic. At Flux Media Creations, we build WordPress websites and GoHighLevel systems around how each industry actually wins trust and converts demand.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          {INDUSTRIES.map((industry) => (
            <a
              key={industry.slug}
              href={`#${industry.slug}`}
              className="rounded-lg border border-ink/12 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              {industry.label}
            </a>
          ))}
        </div>
      </section>

      {INDUSTRY_DETAILS.map((industry, index) => (
        <section key={industry.slug} id={industry.slug} className="section max-w-[1320px] mx-auto border-t border-ink/8 scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: ACCENTS[index] }}>
                {industry.preHeadline}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
                {industry.label}
              </h2>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-ink" style={{ letterSpacing: "-0.02em" }}>
                {industry.sectionTitle}
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors"
                style={{ background: ACCENTS[index] }}
              >
                {industry.ctaLabel}
              </Link>
            </div>

            <div className="space-y-8">
              <div className="space-y-5 text-base leading-8 text-ink/68">
                {industry.body.map((paragraph, paragraphIndex) => (
                  <p key={`${industry.slug}-body-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">What We Build for {industry.label}</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {industry.whatWeBuild.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-ink/68">
                      <span className="text-flux mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {industry.specialties?.length ? (
                <div className="rounded-lg border border-ink/10 bg-white p-6">
                  <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Specialties We&apos;ve Worked With</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.specialties.map((item) => (
                      <span key={item} className="rounded-md bg-ink/5 px-3 py-1.5 text-xs text-ink/65">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {industry.caseStudies?.length ? (
                <div className="rounded-lg border border-ink/10 bg-white p-6">
                  <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Case Studies</p>
                  <div className="space-y-3">
                    {industry.caseStudies.map((study) => (
                      <Link key={study.href} href={study.href} className="block text-sm leading-7 text-ink/70 transition-colors hover:text-flux">
                        {study.title} — {study.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="section max-w-[1320px] mx-auto border-t border-ink/8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {SECONDARY_INDUSTRIES.map((industry) => (
            <article key={industry.slug} className="rounded-lg border border-ink/10 bg-white p-5">
              <h3 className="font-display text-xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
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

        <div className="rounded-lg bg-ink p-8 md:p-10 text-cream">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4" style={{ letterSpacing: "-0.03em" }}>
            Don&apos;t see your industry listed?
          </h2>
          <p className="text-sm md:text-base text-cream/72 leading-7 max-w-3xl mb-6">
            We&apos;ve also built websites and automation systems for law firms, financial advisors, fitness studios, ecommerce brands, and SaaS companies.
            If your business captures leads, books appointments, or manages client relationships, there is a good chance we can build a better system for it.
            Contact us and tell us what you do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
            style={{ background: "var(--flux)" }}
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
