import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { CORE_SYSTEMS } from "@/lib/offers";
import TextReveal from "@/components/ui/TextReveal";
import PlatformEcosystem from "@/components/brand/PlatformEcosystem";

export const metadata: Metadata = generateMeta({
  title: "Growth Systems for Service Businesses",
  description: "Connect your website, search visibility, CRM, follow-up, automation, and reporting through five practical growth systems built around your business.",
  path: "/services",
});

const principles = [
  "Start with the customer journey and the point where opportunities are being lost.",
  "Use the systems and platforms that fit the requirement—not a predetermined software stack.",
  "Connect implementation to clear ownership, useful measurement, and a maintainable handoff.",
];

const faq = [
  ["Do I need all five systems?", "No. The assessment identifies the highest-impact gap first. A project may focus on one system or connect several when the customer journey requires it."],
  ["Why is pricing scoped?", "The work depends on page count, current platforms, data quality, workflow complexity, integrations, markets, and the amount of strategy or migration required. Flux defines the scope and commercial terms before implementation begins."],
  ["Can Flux work with our current website or CRM?", "Yes. The goal is connection, not replacing working tools unnecessarily. Flux can improve or integrate an existing stack when that is the clearest path."],
  ["Is healthcare the only industry you serve?", "No. Healthcare is a strong specialization, while the systems also apply to home services, legal and professional services, wellness, and other appointment-driven US service businesses."],
  ["Do you guarantee SEO rankings or revenue results?", "No. Flux improves the systems, structure, visibility, and follow-up that support better outcomes, but search positions and commercial results depend on factors no provider can responsibly guarantee."],
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero relative isolate overflow-hidden border-b border-ink/10 bg-pulse-light px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
        <div className="services-orb services-orb-one" aria-hidden="true" />
        <div className="services-orb services-orb-two" aria-hidden="true" />
        <div className="services-hero-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1400px] border-t border-ink/15 pt-5">
          <p className="flux-kicker text-flux">Five connected growth systems</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <TextReveal text="Build the missing connection—not another isolated tool." className="max-w-4xl font-display text-[clamp(3.25rem,6vw,6rem)] font-semibold leading-[.94] tracking-[-.06em]" as="h1" />
            <div className="border-t border-ink/15 pt-6">
              <p className="text-lg leading-8 text-ink/65">Flux organizes website, search, lead conversion, automation, and measurement into five understandable systems. Each engagement is scoped around the parts your business actually needs.</p>
              <Link href="/business-intelligence-audit" className="flux-button flux-button-red mt-8">Start your assessment <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-cream">
        <div className="mx-auto max-w-[1400px] space-y-4">
          {CORE_SYSTEMS.map((system) => (
            <article id={system.title.toLowerCase().replaceAll(" ", "-")} key={system.title} className={`${system.tone} grid gap-10 rounded-[2rem] p-8 md:p-10 lg:grid-cols-[.18fr_.52fr_.3fr] lg:items-start`}>
              <span className="text-xs font-bold opacity-50">{system.number}</span>
              <div>
                <h2 className="font-display text-3xl font-medium tracking-[-.04em] md:text-5xl">{system.title}</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 opacity-70">{system.description}</p>
              </div>
              <div className="border-t border-current/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-[.14em] opacity-50">Engagement</p>
                <p className="mt-3 text-sm leading-7 opacity-75">{system.scope}</p>
                <Link href={system.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Explore system <ArrowUpRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PlatformEcosystem variant="web" />

      <section className="section-sm bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.4fr_.6fr]">
          <div><p className="flux-kicker text-flux">How Flux scopes the work</p><h2 className="mt-7 font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Business outcomes before technologies.</h2></div>
          <div className="grid gap-4">{principles.map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-ink/10 p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white"><Check size={16} /></span><p className="text-base leading-8 text-ink/65">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="section-sm bg-ink text-white">
        <div className="mx-auto max-w-[1200px]">
          <p className="flux-kicker text-flux">Frequently asked questions</p>
          <div className="mt-8 divide-y divide-white/15 border-y border-white/15">{faq.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium md:text-2xl">{question}<span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-transform group-open:rotate-45">+</span></summary><p className="max-w-4xl pt-5 text-base leading-8 text-white/60">{answer}</p></details>)}</div>
          <div className="mt-12 rounded-[2rem] bg-flux p-8 md:p-12"><p className="flux-kicker text-white/60">Business Intelligence Assessment</p><div className="mt-7 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="max-w-4xl font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Find the highest-impact gap before deciding what to build.</h2><Link href="/business-intelligence-audit" className="flux-button bg-white text-ink">Start your assessment <ArrowUpRight size={16} /></Link></div></div>
        </div>
      </section>
    </main>
  );
}
