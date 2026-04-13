import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_PAGES, SERVICES, SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

function getService(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}

function getPricing(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return generateMeta({
      title: "Services",
      path: "/services",
    });
  }

  return generateMeta({
    title: service.title,
    description: service.intro,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);
  const pricing = getPricing(params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.serviceType,
    description: service.outcome,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
    areaServed: "US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">{service.category}</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-ink/55 leading-relaxed max-w-3xl mb-8">
              {service.intro}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {pricing && (
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-ink text-cream">
                  Starting from {pricing.from}
                </span>
              )}
              {service.credibility.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full text-sm font-medium bg-ink/5 text-ink/70">
                  {item}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-ink/10 bg-white p-7">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">What this solves</p>
                <p className="text-ink/70 leading-7">{service.outcome}</p>
                <div className="mt-6 h-px bg-ink/10" />
                <p className="mt-6 text-sm text-ink/45 leading-7">{service.audience}</p>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-blush p-7">
                <p className="text-xs uppercase tracking-widest text-flux mb-4">Why Flux</p>
                <ul className="space-y-3 text-sm text-ink/70 leading-7">
                  <li>Founder-led execution from strategy through handoff.</li>
                  <li>Built around search visibility, speed, and conversions.</li>
                  <li>Clear communication and practical documentation.</li>
                  <li>Focus on business outcomes instead of decorative design.</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-ink/10 bg-ink text-cream p-8">
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-3">Service snapshot</p>
              <h2 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.03em" }}>
                {service.title}
              </h2>
              <p className="text-sm text-cream/70 leading-7 mb-6">{service.cta}</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-cream/35 text-xs uppercase tracking-widest mb-1">Category</p>
                  <p>{service.category}</p>
                </div>
                <div>
                  <p className="text-cream/35 text-xs uppercase tracking-widest mb-1">Best for</p>
                  <p>{service.audience}</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4"
                style={{ background: "var(--flux)", color: "white" }}
              >
                Start the conversation
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">What’s included</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              A standardized delivery process
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-ink/70 leading-7">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">How it works</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              Clear steps, no confusion
            </h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 font-display text-sm text-ink/40">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-base mb-1">{step.title}</h3>
                    <p className="text-sm text-ink/60 leading-7">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10" style={{ letterSpacing: "-0.03em" }}>
          Common questions before we start
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.faq.map((item) => (
            <div key={item.q} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-medium text-base mb-3">{item.q}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Next step</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              Ready to build {service.title.toLowerCase()} for your business?
            </h2>
            <p className="text-sm md:text-base text-cream/70 leading-7 max-w-xl">
              Tell us what you need, what tools you already use, and what outcome matters most. We’ll keep the process focused and practical.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4"
            style={{ background: "var(--flux)", color: "white" }}
          >
            Start a project
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
