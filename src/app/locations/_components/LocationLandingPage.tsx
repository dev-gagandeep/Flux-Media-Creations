import Link from "next/link";
import type { ReactNode } from "react";

export type LocationBlock = {
  title: string;
  body: string;
  bullets?: string[];
};

export type LocationFaq = {
  q: string;
  a: string;
};

export type LocationPageContent = {
  locationName?: string;
  eyebrow: string;
  h1: string;
  heroTitle: string;
  heroBody: string[];
  primaryCta: string;
  secondaryCta: string;
  introTitle: string;
  introBody: string[];
  introBullets?: string[];
  services: LocationBlock[];
  industries: LocationBlock[];
  why: LocationBlock[];
  leadFlowTitle: string;
  leadFlow: string[];
  localSeoTitle: string;
  localSeoBody: string;
  localAreas: string[];
  process: LocationBlock[];
  faqs: LocationFaq[];
  finalTitle: string;
  finalBody: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string;
  internalLinks: Array<{ label: string; href: string }>;
};

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">{children}</p>;
}

function CardGrid({ items }: { items: LocationBlock[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6">
          <h3 className="font-display text-xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
            {item.title}
          </h3>
          <p className="text-sm text-ink/60 leading-7">{item.body}</p>
          {item.bullets && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-ink/60">
                  {bullet}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`section-sm ${dark ? "bg-ink text-cream" : ""}`}>
      <div className="max-w-[1400px] mx-auto">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function LocationLandingPage({ content }: { content: LocationPageContent }) {
  const locationSuffix = content.locationName ? ` in ${content.locationName}` : "";

  return (
    <main>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
              {content.h1}
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              {content.heroTitle}
            </h2>
            {content.heroBody.map((paragraph) => (
              <p key={paragraph} className="text-base md:text-lg text-ink/60 leading-8 max-w-3xl mb-5">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                {content.primaryCta} <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                {content.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/35 mb-5">Connected system</p>
            <div className="space-y-3">
              {["Website", "CRM", "Automation", "SEO structure", "Follow-up"].map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm font-medium text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section eyebrow="Local strategy" title={content.introTitle}>
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div className="space-y-5">
            {content.introBody.map((paragraph) => (
              <p key={paragraph} className="text-lg text-ink/60 leading-8">
                {paragraph}
              </p>
            ))}
          </div>
          {content.introBullets && (
            <div className="grid sm:grid-cols-2 gap-3">
              {content.introBullets.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section eyebrow="Services" title={`Services We Offer${locationSuffix}`}>
        <CardGrid items={content.services} />
      </Section>

      <Section eyebrow="Industries" title={`Industries We Serve${locationSuffix}`}>
        <CardGrid items={content.industries} />
      </Section>

      <Section eyebrow="Why Flux" title={`Why ${content.locationName ?? "Service"} Businesses Work With Flux Media Creations`} dark>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.why.map((item) => (
            <article key={item.title} className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-cream/65 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Lead flow" title={content.leadFlowTitle}>
        <div className="grid md:grid-cols-3 gap-4">
          {content.leadFlow.map((step, index) => (
            <div key={step} className="rounded-3xl border border-ink/10 bg-white p-6">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm text-ink/65 leading-7">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Local SEO" title={content.localSeoTitle}>
        <p className="text-lg text-ink/60 leading-8 max-w-3xl mb-8">{content.localSeoBody}</p>
        <div className="flex flex-wrap gap-2">
          {content.localAreas.map((area) => (
            <span key={area} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/65">
              {area}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title={`How We Work With ${content.locationName ?? ""} Clients`.trim()}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.process.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-ink/10 bg-white p-6">
              <span className="text-xs uppercase tracking-widest text-flux">0{index + 1}</span>
              <h3 className="font-display text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Internal links" title="Explore Related Services">
        <div className="flex flex-wrap gap-3">
          {content.internalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQs" title="FAQs">
        <div className="grid md:grid-cols-2 gap-5">
          {content.faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-ink/10 bg-white p-6">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{faq.q}</summary>
              <p className="mt-4 text-sm text-ink/60 leading-7">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1000px] mx-auto text-center">
          <Eyebrow>Ready to grow?</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
            {content.finalTitle}
          </h2>
          <p className="text-lg text-ink/60 leading-8 max-w-3xl mx-auto mb-8">{content.finalBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
              {content.finalPrimaryCta} <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
              {content.finalSecondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
