import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceBlock = {
  title: string;
  body: string;
  bullets?: string[];
};

export type ServiceTable = {
  headings: string[];
  rows: string[][];
};

type ServiceLandingPageProps = {
  eyebrow: string;
  h1: string;
  heroTitle: string;
  heroBody: string[];
  primaryCta: string;
  secondaryCta: string;
  trustItems: string[];
  introTitle: string;
  introBody: string[];
  problemTitle: string;
  problemIntro?: string;
  problems: string[];
  problemOutro?: string;
  solutionTitle: string;
  solutionBody: string[];
  solutionItems?: string[];
  buildTitle: string;
  buildItems: ServiceBlock[];
  audienceTitle: string;
  audienceItems: ServiceBlock[];
  tableTitle?: string;
  tableIntro?: string;
  table?: ServiceTable;
  extraSections?: ServiceBlock[];
  processTitle: string;
  processItems: ServiceBlock[];
  pricingTitle: string;
  pricingIntro: string;
  pricingItems: ServiceBlock[];
  whyTitle: string;
  whyBody: string[];
  whyItems: string[];
  directTitle: string;
  directBody: string;
  faqTitle: string;
  faqs: ServiceFaq[];
  finalTitle: string;
  finalBody: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string;
  internalLinks: Array<{ label: string; href: string }>;
};

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">{children}</p>;
}

function Section({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`section-sm ${dark ? "bg-ink text-cream" : ""}`}>
      <div className="max-w-[1400px] mx-auto">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item}
          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
            dark ? "border-cream/10 bg-cream/5 text-cream/75" : "border-ink/10 bg-white text-ink/70"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function CardGrid({ items }: { items: ServiceBlock[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6">
          <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
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
        </div>
      ))}
    </div>
  );
}

export default function ServiceLandingPage({
  eyebrow,
  h1,
  heroTitle,
  heroBody,
  primaryCta,
  secondaryCta,
  trustItems,
  introTitle,
  introBody,
  problemTitle,
  problemIntro,
  problems,
  problemOutro,
  solutionTitle,
  solutionBody,
  solutionItems,
  buildTitle,
  buildItems,
  audienceTitle,
  audienceItems,
  tableTitle,
  tableIntro,
  table,
  extraSections = [],
  processTitle,
  processItems,
  pricingTitle,
  pricingIntro,
  pricingItems,
  whyTitle,
  whyBody,
  whyItems,
  directTitle,
  directBody,
  faqTitle,
  faqs,
  finalTitle,
  finalBody,
  finalPrimaryCta,
  finalSecondaryCta,
  internalLinks,
}: ServiceLandingPageProps) {
  return (
    <main>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
              {h1}
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              {heroTitle}
            </h2>
            {heroBody.map((paragraph) => (
              <p key={paragraph} className="text-base md:text-lg text-ink/60 leading-8 max-w-3xl mb-5">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                {primaryCta} <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                {secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/35 mb-5">What is included</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {trustItems.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm font-medium text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section eyebrow="Overview" title={introTitle}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <p className="text-lg text-ink/60 leading-8">{introBody[0]}</p>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 space-y-5">
            {introBody.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-ink/65 leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Problem" title={problemTitle}>
        {problemIntro && <p className="text-lg text-ink/60 leading-8 max-w-3xl mb-8">{problemIntro}</p>}
        <BulletList items={problems} />
        {problemOutro && <p className="mt-8 max-w-3xl text-ink/60 leading-8">{problemOutro}</p>}
      </Section>

      <Section eyebrow="Solution" title={solutionTitle} dark>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-5">
            {solutionBody.map((paragraph) => (
              <p key={paragraph} className="text-cream/65 leading-8">
                {paragraph}
              </p>
            ))}
          </div>
          {solutionItems && <BulletList items={solutionItems} dark />}
        </div>
      </Section>

      <Section eyebrow="What we build" title={buildTitle}>
        <CardGrid items={buildItems} />
      </Section>

      <Section eyebrow="Who it is for" title={audienceTitle}>
        <CardGrid items={audienceItems} />
      </Section>

      {table && tableTitle && (
        <Section eyebrow="Comparison" title={tableTitle}>
          {tableIntro && <p className="text-lg text-ink/60 leading-8 max-w-3xl mb-8">{tableIntro}</p>}
          <div className="overflow-x-auto rounded-3xl border border-ink/10 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-ink text-cream">
                <tr>
                  {table.headings.map((heading) => (
                    <th key={heading} className="px-5 py-4 font-semibold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.join("-")} className="border-t border-ink/10">
                    {row.map((cell) => (
                      <td key={cell} className="px-5 py-4 text-ink/65">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {extraSections.map((section) => (
        <Section key={section.title} eyebrow="More capability" title={section.title}>
          <p className="text-lg text-ink/60 leading-8 max-w-3xl mb-8">{section.body}</p>
          {section.bullets && <BulletList items={section.bullets} />}
        </Section>
      ))}

      <Section eyebrow="Process" title={processTitle}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processItems.map((item, index) => (
            <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing" title={pricingTitle}>
        <p className="max-w-3xl text-ink/60 leading-8 mb-8">{pricingIntro}</p>
        <CardGrid items={pricingItems} />
      </Section>

      <Section eyebrow="Why Flux" title={whyTitle}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-5">
            {whyBody.map((paragraph) => (
              <p key={paragraph} className="text-lg text-ink/60 leading-8">
                {paragraph}
              </p>
            ))}
          </div>
          <BulletList items={whyItems} />
        </div>
      </Section>

      <Section eyebrow="Direct answer" title={directTitle}>
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-lg text-ink/65 leading-8">{directBody}</p>
        </div>
      </Section>

      <Section eyebrow="Internal links" title="Explore Related Services">
        <div className="flex flex-wrap gap-3">
          {internalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQs" title={faqTitle}>
        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-ink/10 bg-white p-6">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{faq.q}</summary>
              <p className="mt-4 text-sm text-ink/60 leading-7">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1000px] mx-auto text-center">
          <Eyebrow>Ready to start?</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
            {finalTitle}
          </h2>
          <p className="text-lg text-ink/60 leading-8 max-w-3xl mx-auto mb-8">{finalBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
              {finalPrimaryCta} <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
              {finalSecondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
