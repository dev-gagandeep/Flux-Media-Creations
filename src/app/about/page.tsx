import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import AuthorityEcosystem from "@/components/brand/AuthorityEcosystem";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "About Flux Media Creations | Operating Intelligence for Service Businesses",
  description:
    "Meet Gagan Deep and learn how Flux evolved from website delivery into connected operating intelligence systems for US service businesses.",
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
    title: "Websites revealed the larger problem",
    body: "Flux began with website design and development. That work made one thing clear: a stronger interface could not fix a disconnected lead journey on its own.",
  },
  {
    label: "02",
    title: "Search and conversion came next",
    body: "Projects expanded into search structure, conversion pathways, analytics, and the questions customers need answered before they contact a service business.",
  },
  {
    label: "03",
    title: "Connected systems became the work",
    body: "CRM, follow-up, booking, automation, integrations, and business data moved into the same scope. Operating Intelligence is the name for that practical evolution—not a claim that Flux started there.",
  },
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
    sameAs: [
      ...SOCIAL_LINKS.map((link) => link.href),
      "https://www.linkedin.com/in/gagan-deep-1609341b7",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }} />

      <section className="bg-blush/45 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-flux">About Flux Media Creations</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl" style={{ letterSpacing: "0" }}>
              Founder-led operating intelligence for service businesses.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink/58 md:text-lg">
              Flux Media Creations connects the systems behind customer acquisition and follow-up: website, search visibility, lead capture, CRM, booking, automation, and business data. The work is led directly by Gagan Deep and shaped around the point where opportunities are being lost.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/business-intelligence-audit"
                className="inline-flex items-center justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,92,53,0.22)]"
              >
                Start your assessment
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink/65 transition-colors hover:border-ink/35 hover:text-ink">
                Explore the systems
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
              <a
                href="https://www.linkedin.com/in/gagan-deep-1609341b7"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink/55 transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
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
              Most service businesses do not lack tools. They lack a reliable connection between the website, search, CRM, calls, forms, booking, follow-up, and the people responsible for the next action. Flux exists to make those pieces work as one system.
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
              Technical capability. Practical business thinking. Clear ownership.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-cream/50 md:text-base">
              Flux stays honest about its scale: founder-led strategy and implementation, specialist platforms where appropriate, and no pretense of being a large consultancy. The advantage is direct accountability from diagnosis through delivery.
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

      <AuthorityEcosystem />

      <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-widest text-flux">Work with us</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "0" }}>
            Start with where customers are being lost—not a predetermined deliverable.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink/55 md:text-base">
            Complete the Business Intelligence Assessment. Flux will review your current setup and recommend the clearest next step across website, search, lead conversion, automation, and measurement.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/business-intelligence-audit"
              className="inline-flex items-center justify-center rounded-full bg-flux px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,92,53,0.22)]"
            >
              Start your assessment
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
