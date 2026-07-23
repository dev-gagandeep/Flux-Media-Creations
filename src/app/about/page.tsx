import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, SOCIAL_LINKS, TESTIMONIALS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "About Flux Media Creations | Founder-Led WordPress & GoHighLevel Agency",
  description:
    "Meet Gagan Deep, founder of Flux Media Creations. We build premium WordPress websites, organic SEO foundations, and GoHighLevel automation systems for service businesses.",
  path: "/about",
  image: "/images/gagan-deep.jpg",
});

const principles = [
  {
    title: "Strategy before screens",
    body: "Every build starts with the business problem: where leads come from, where they drop off, and what needs to happen after a visitor takes action.",
  },
  {
    title: "Design with operational purpose",
    body: "A polished interface matters, but every section also needs a job: earn trust, answer a buying question, route a lead, or move a visitor closer to contact.",
  },
  {
    title: "Automation that feels human",
    body: "GoHighLevel workflows are built around real buyer behavior: fast acknowledgment, clear next steps, reminders, recovery paths, and simple team visibility.",
  },
  {
    title: "Founder-led execution",
    body: "You work directly with the person designing, building, and configuring your system. That keeps the details sharp and the communication clear.",
  },
];

const timeline = [
  {
    label: "01",
    title: "From development to systems thinking",
    body: "Flux started with WordPress delivery, but the work quickly moved beyond pages and plugins. The real value came from connecting the website to the lead process behind it.",
  },
  {
    label: "02",
    title: "A focused service-business niche",
    body: "Healthcare clinics, home service companies, and real estate teams all need fast trust and fast follow-up. That pattern shaped the agency's focus.",
  },
  {
    label: "03",
    title: "Website plus automation as one build",
    body: "Today, Flux builds the front-end experience and the GoHighLevel backend together so leads are captured, acknowledged, tracked, and followed up properly.",
  },
];

const proofStats = [
  { value: "4+", label: "Years building WordPress and automation systems" },
  { value: "90+", label: "PageSpeed target for every website build" },
  { value: "14-21", label: "Days for full website plus GHL systems" },
];

const industryBlocks = [
  {
    title: "Healthcare",
    body: "Patient trust, service clarity, compliant intake flow, and fast appointment handling.",
    href: "/industries/healthcare",
  },
  {
    title: "Home Services",
    body: "Mobile-first local pages, urgent call capture, quote flows, and missed-call recovery.",
    href: "/industries/home-services",
  },
  {
    title: "Real Estate",
    body: "Personal-brand credibility, buyer and seller lead capture, nurture flows, and pipeline visibility.",
    href: "/industries#real-estate",
  },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: SITE.founderTitle,
    image: `${SITE.url}/images/gagan-deep.jpg`,
    worksFor: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}/about`,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }} />

      <section className="bg-blush/45 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-flux">About Flux Media Creations</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl" style={{ letterSpacing: "0" }}>
              Founder-led digital systems for service businesses that cannot afford to lose leads.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink/58 md:text-lg">
              Flux Media Creations is a focused WordPress, SEO, and GoHighLevel agency led by Gagan Deep. We build premium websites and automation systems that help service businesses get found, earn trust, capture enquiries, and follow up before leads go cold.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,92,53,0.22)]"
              >
                Start a project
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink/65 transition-colors hover:border-ink/35 hover:text-ink">
                Explore services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="mx-auto aspect-square w-[min(100%,420px)] overflow-hidden rounded-full border-[10px] border-white bg-white shadow-[0_30px_90px_rgba(13,13,13,0.14)]">
              <Image
                src="/images/gagan-deep.jpg"
                alt="Gagan Deep, founder of Flux Media Creations"
                width={1200}
                height={1200}
                priority
                className="h-full w-full object-cover object-[50%_35%]"
                sizes="(max-width: 768px) 90vw, 420px"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[min(92%,360px)] -translate-x-1/2 rounded-2xl border border-ink/8 bg-white px-5 py-4 text-center shadow-[0_20px_60px_rgba(13,13,13,0.12)]">
              <p className="font-display text-2xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                {SITE.founder}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/35">{SITE.founderTitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-3">
          {proofStats.map((item) => (
            <div key={item.label} className="rounded-xl border border-ink/8 bg-blush/35 p-6">
              <p className="font-display text-5xl font-semibold text-flux" style={{ letterSpacing: "0" }}>
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink/55">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">Brand story</p>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
              Built from one simple observation.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/58">
              Most businesses do not lose leads because they lack tools. They lose leads because their website, CRM, forms, calls, reminders, and team handoff are disconnected. Flux exists to make those pieces work as one system.
            </p>
          </div>

          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.title} className="rounded-xl border border-ink/8 bg-blush/35 p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-flux">{item.label}</p>
                <h3 className="mt-8 font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/58">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-cream/30">Operating principles</p>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
              Premium design. Practical systems. Clear ownership.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-cream/50 md:text-base">
              The work is intentionally narrow: WordPress websites, organic SEO foundations, GoHighLevel automation, and the integration layer between them. That focus keeps delivery sharper.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-cream/10 bg-cream/[0.04] p-6">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-cream/50">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs uppercase tracking-widest text-flux">Industries we understand</p>
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
            We work best where trust, speed, and follow-up decide who wins the lead.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {industryBlocks.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-xl border border-ink/8 bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-3xl font-semibold" style={{ letterSpacing: "0" }}>
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/58">{item.body}</p>
                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-flux">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <blockquote key={`${item.author}-${item.role}`} className="rounded-xl border border-ink/8 bg-white p-7">
              <p className="text-4xl font-display font-bold text-flux">&ldquo;</p>
              <p className="mt-2 text-sm leading-7 text-ink/65">{item.quote}</p>
              <div className="mt-6 border-t border-ink/8 pt-5">
                <p className="text-sm font-medium text-ink">{item.author}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ink/35">
                  {item.role} · {item.location}
                </p>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-widest text-flux">Work with us</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "0" }}>
            If you need a website that generates leads and a CRM that follows up automatically, we should talk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/55 md:text-base">
            Send the project details. We will review your current setup, identify the biggest lead leak, and recommend the fastest path to a cleaner growth system.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-flux px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,92,53,0.22)]"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink/65 transition-colors hover:border-ink/35 hover:text-ink"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
