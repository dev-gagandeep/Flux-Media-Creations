"use client";

import { safeJsonLd } from "@/lib/json-ld";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";
import { SITE } from "@/lib/constants";
import type { StrategicPageContent } from "@/lib/flux2";

export default function StrategicPage({ content }: { content: StrategicPageContent }) {
  const crumbs = [
    { label: "Home", href: "/" },
    ...(content.parent ? [content.parent] : []),
    { label: content.title, href: content.path },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": content.schemaType ?? "WebPage",
    "@id": `${SITE.url}${content.path}#page`,
    name: content.title,
    description: content.description,
    url: `${SITE.url}${content.path}`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    provider: content.schemaType === "Service" ? { "@id": `${SITE.url}/#organization` } : undefined,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${SITE.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <section className="bg-cream pb-10 pt-28 md:pt-32">
        <div className="flux-shell border-t border-ink/15 pt-5">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-xs text-ink/45">
            {crumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index ? <span aria-hidden="true">/</span> : null}
                {index === crumbs.length - 1 ? <span aria-current="page">{crumb.label}</span> : <Link href={crumb.href} className="hover:text-flux">{crumb.label}</Link>}
              </span>
            ))}
          </nav>
          <div className="grid gap-10 pb-16 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16 lg:pb-24 lg:pt-16">
            <m.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}>
              <p className="flux-kicker mb-7 text-flux">{content.eyebrow}</p>
              <h1 className="max-w-6xl font-display text-display font-medium">{content.title}</h1>
            </m.div>
            <m.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .14, duration: .7, ease: [0.16, 1, 0.3, 1] }} className="border-t border-ink/15 pt-6 lg:self-end">
              <p className="text-lg leading-8 text-ink/65">{content.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/business-intelligence-audit" className="flux-button flux-button-red">Measure your score <ArrowUpRight size={16} /></Link>
                {content.path !== "/operating-intelligence" ? <Link href="/operating-intelligence" className="flux-button flux-button-line">Operating Intelligence</Link> : null}
              </div>
            </m.div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white pb-24 pt-0 md:pb-36">
        <div className="border-y border-ink/15 py-4">
          <div className="marquee-track flex w-max items-center whitespace-nowrap">
            {["Discover demand", "Capture opportunity", "Progress customers", "Understand revenue", "Improve continuously", "Discover demand", "Capture opportunity", "Progress customers", "Understand revenue", "Improve continuously"].map((item, index) => (
              <span key={`${item}-${index}`} className="mx-5 inline-flex items-center gap-10 font-display text-lg font-medium text-ink/55 md:text-2xl">{item}<span className="h-2 w-2 rounded-full bg-flux" /></span>
            ))}
          </div>
        </div>
        <div className="flux-shell pt-10 md:pt-14">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .6 }} className="mb-10 flex items-end justify-between border-t border-ink/15 pt-5"><p className="flux-kicker text-ink/45">System map</p><span className="text-xs text-ink/35">{String(content.cards.length).padStart(2, "0")} connected layers</span></m.div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {content.cards.map((card, index) => {
              const tones = ["bg-pulse-light text-ink", "bg-ink text-white", "bg-flux text-white", "bg-sage text-ink", "bg-cream text-ink"];
              const span = index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5";
              const body = <div className="flex min-h-[340px] flex-col justify-between"><div className="flex items-start justify-between"><span className="text-xs font-bold opacity-50">0{index + 1}</span>{card.href ? <span className="living-arrow"><ArrowUpRight size={22} /></span> : null}</div><div className="transition-transform duration-500 group-hover:-translate-y-2"><h2 className="font-display text-4xl font-medium md:text-5xl">{card.title}</h2><p className="mt-5 max-w-lg text-sm leading-7 opacity-65">{card.body}</p></div></div>;
              return <m.div key={card.title} initial={{ opacity: 0, y: 42, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .18 }} transition={{ delay: index * .08, duration: .65, ease: [0.16, 1, 0.3, 1] }} className={span}>{card.href ? <Link href={card.href} className={`${tones[index % tones.length]} group block rounded-[2rem] p-7 shadow-[0_0_0_rgba(6,7,10,0)] transition-[transform,box-shadow,border-radius] duration-500 hover:-translate-y-2 hover:rounded-[2.5rem] hover:shadow-[0_28px_70px_rgba(6,7,10,.16)] md:p-10`}>{body}</Link> : <article className={`${tones[index % tones.length]} group rounded-[2rem] p-7 transition-[transform,border-radius] duration-500 hover:-translate-y-2 hover:rounded-[2.5rem] md:p-10`}>{body}</article>}</m.div>;
            })}
          </div>
        </div>
      </section>
      <section className="bg-ink py-24 text-white md:py-36">
        <div className="flux-shell">
          <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flux-kicker mb-8 text-white/40">Connected knowledge</m.p>
          <m.h2 initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl font-display text-display font-medium">Continue through the system.</m.h2>
          <div className="mt-16 grid border-t border-white/20 md:grid-cols-2 lg:grid-cols-3">
            {content.related.map((card) => (
              <Link key={card.title} href={card.href ?? "/business-intelligence-audit"} className="group min-h-[260px] border-b border-white/20 p-7 transition-colors duration-500 hover:bg-white hover:text-ink md:border-r md:p-9 md:hover:px-11">
                <div className="flex h-full flex-col justify-between"><span className="living-arrow ml-auto"><ArrowUpRight /></span><div><h3 className="font-display text-3xl font-medium transition-transform duration-500 group-hover:-translate-y-2">{card.title}</h3><p className="mt-4 text-sm leading-7 opacity-55">{card.body}</p></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
