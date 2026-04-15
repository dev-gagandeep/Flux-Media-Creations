import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_PAGES, SERVICES, SITE } from "@/lib/constants";
import { SERVICE_DETAIL_CONTENT } from "@/lib/service-content";
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
  const detailed = SERVICE_DETAIL_CONTENT[params.slug];

  if (!service) {
    return generateMeta({
      title: "Services",
      path: "/services",
    });
  }

  if (detailed) {
    return generateMeta({
      absoluteTitle: detailed.metaTitle,
      description: detailed.metaDescription,
      path: `/services/${service.slug}`,
      image: detailed.image.src,
    });
  }

  return generateMeta({
    title: service.title,
    description: service.intro,
    path: `/services/${service.slug}`,
  });
}

function FallbackServicePage({ params }: ServicePageProps) {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">{service.category}</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-ink/55 leading-relaxed max-w-3xl mb-8">{service.intro}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {pricing && (
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-ink text-cream">Starting from {pricing.from}</span>
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

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);
  const detail = SERVICE_DETAIL_CONTENT[params.slug];
  const pricing = getPricing(params.slug);

  if (!service) {
    notFound();
  }

  if (!detail) {
    return <FallbackServicePage params={params} />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.serviceType,
    description: detail.metaDescription,
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
    mainEntity: detail.faqSection.items.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-32 md:pt-40 max-w-[1400px] mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_480px] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.breadcrumb.join(" → ")}</p>
            <p className="text-sm uppercase tracking-widest text-flux mb-4">{detail.preHeadline}</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] mb-6" style={{ letterSpacing: "-0.03em" }}>
              {detail.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-ink/62 leading-8 max-w-3xl mb-8">{detail.heroBody}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
                style={{ background: "var(--flux)" }}
              >
                {detail.finalCta.primaryLabel}
              </Link>
              <a href="#process" className="inline-flex items-center gap-3 rounded-lg border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30">
                See how it works
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {detail.heroStats.map((item) => (
                <div key={item.label} className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="font-display text-2xl font-semibold text-ink mb-1" style={{ letterSpacing: "-0.02em" }}>
                    {item.value}
                  </p>
                  <p className="text-sm leading-6 text-ink/58">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <Image
              src={detail.image.src}
              alt={detail.image.alt}
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.problemSection.label}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
          {detail.problemSection.title}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {detail.problemSection.cards.map((card) => (
            <div key={card.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-7 text-ink/65">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.includedSection.label}</p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              {detail.includedSection.title}
            </h2>
            <p className="text-base leading-8 text-ink/62 mb-6">{detail.includedSection.body}</p>
            <div className="rounded-lg bg-ink p-6 text-cream">
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-3">Snapshot</p>
              <p className="text-sm leading-7 text-cream/75 mb-4">{service.cta}</p>
              <div className="space-y-2 text-sm text-cream/70">
                <p><span className="text-cream/40">Category:</span> {service.category}</p>
                <p><span className="text-cream/40">Starting from:</span> {pricing?.from ?? "Custom quote"}</p>
                <p><span className="text-cream/40">Best for:</span> {service.audience}</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {detail.includedSection.groups.map((group) => (
              <section key={group.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="font-display text-2xl font-semibold mb-5" style={{ letterSpacing: "-0.02em" }}>
                  {group.title}
                </h3>
                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.title} className="border-t border-ink/8 pt-5 first:border-t-0 first:pt-0">
                      <h4 className="text-base font-medium text-ink mb-2">{item.title}</h4>
                      <p className="text-sm leading-7 text-ink/65">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.audienceSection.label}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
          {detail.audienceSection.title}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {detail.audienceSection.blocks.map((block) => (
            <div key={block.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {block.title}
              </h3>
              <p className="text-sm leading-7 text-ink/65">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section max-w-[1400px] mx-auto scroll-mt-28">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.processSection.label}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
          {detail.processSection.title}
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {detail.processSection.steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-flux mb-4">0{index + 1}</p>
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-ink/65">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.pricingSection.label}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
          {detail.pricingSection.title}
        </h2>
        <div className={`grid gap-5 ${detail.pricingSection.plans.length > 1 ? "lg:grid-cols-3" : "lg:grid-cols-[minmax(0,0.9fr)]"}`}>
          {detail.pricingSection.plans.map((plan) => (
            <div key={plan.name} className="rounded-lg border border-ink/10 bg-white p-6">
              <div className="mb-5">
                <h3 className="font-display text-2xl font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                  {plan.name}
                </h3>
                <p className="text-2xl font-display font-semibold text-flux" style={{ letterSpacing: "-0.02em" }}>
                  {plan.price}
                </p>
                {plan.timeline ? <p className="text-sm text-ink/50 mt-2">Timeline: {plan.timeline}</p> : null}
                {plan.bestFor ? <p className="text-sm text-ink/60 mt-2">Best for: {plan.bestFor}</p> : null}
                {plan.payment ? <p className="text-sm text-ink/60 mt-2">Payment: {plan.payment}</p> : null}
              </div>
              <ul className="space-y-3 text-sm leading-7 text-ink/68">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-flux mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {plan.note ? <p className="mt-5 text-sm leading-7 text-ink/55">{plan.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{detail.faqSection.label}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
          {detail.faqSection.title}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {detail.faqSection.items.map((item) => (
            <div key={item.q} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-medium text-base mb-3">{item.q}</h3>
              <p className="text-sm leading-7 text-ink/65">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="rounded-lg bg-ink p-8 md:p-10 text-cream">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Next step</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
                {detail.finalCta.title}
              </h2>
              <p className="text-sm md:text-base leading-7 text-cream/72 max-w-3xl mb-4">{detail.finalCta.body}</p>
              <p className="text-sm leading-7 text-cream/55 max-w-3xl">{detail.finalCta.trust}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
                style={{ background: "var(--flux)" }}
              >
                {detail.finalCta.primaryLabel}
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30"
              >
                {detail.finalCta.secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
