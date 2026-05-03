import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, TESTIMONIALS, WORK_PROJECTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "About Flux Media Creations | GoHighLevel WordPress Agency",
  description:
    "Flux Media Creations is a founder-led GoHighLevel WordPress agency for healthcare clinics, home service businesses, and real estate professionals.",
  path: "/about",
  image: "/images/mvmhealth.png",
});

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";

const approachItems = [
  {
    title: "Business outcomes first",
    body: "Before we design anything, we ask what the website needs to accomplish: more booked appointments, more phone inquiries, or more form submissions from the right type of patient or customer. A site that looks beautiful but does not generate leads is not a success.",
  },
  {
    title: "Designed before it is built",
    body: "Every project begins in Figma. You see the complete design of every page before we write a single line of code. That means fewer surprises, clearer approvals, and a cleaner build process.",
  },
  {
    title: "Built fast, delivered properly",
    body: "A WordPress-only project is delivered in 7 to 10 business days. A full WordPress plus GoHighLevel growth system is delivered in 14 to 21 days. We keep these timelines because we take on limited work and do not outsource delivery.",
  },
  {
    title: "Honest about what we do not do",
    body: "We do not do paid advertising management, social media marketing, or e-commerce stores. We build WordPress websites, GoHighLevel systems, and automation workflows for service businesses. That focus is part of why the work is stronger.",
  },
];

const industryBlocks = [
  {
    title: "Healthcare",
    body: "We understand the compliance requirements around patient intake forms, the trust signals that make a patient choose one clinic over another, and the lead-flow challenges healthcare practices face. Pain management, vein treatment, orthopedics, telehealth, and wellness are all categories we have built for.",
    href: "/industries#healthcare",
  },
  {
    title: "Home Services",
    body: "Speed of response is everything in home services. If a homeowner calls three contractors and you are the first to reply, you often win the job. We build sites that generate the call and set up automations that answer even when your team is out on a job.",
    href: "/industries#home-services",
  },
  {
    title: "Real Estate",
    body: "Real estate professionals need websites that capture buyer and seller leads and follow up with them consistently over time. We build IDX-aware WordPress sites and connect them to GoHighLevel follow-up sequences that nurture leads automatically.",
    href: "/industries#real-estate",
  },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: SITE.founderTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}/about`,
    sameAs: [SITE.instagramUrl, SITE.portfolioUrl],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="section pt-32 md:pt-40 max-w-[1320px] mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_460px] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">About</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              We are Flux Media Creations, a WordPress and GoHighLevel agency built for service businesses.
            </h1>
            <p className="text-base md:text-lg text-ink/60 max-w-3xl leading-8 mb-8">
              Most web agencies take on any client, in any industry, using any platform. Flux Media Creations was built around
              a different approach: specialize deeply, deliver fully, and stay involved after launch. We work with healthcare
              clinics, home service companies, and real estate professionals, and we build two things very well: WordPress
              websites that convert and GoHighLevel CRM systems that follow up with every lead automatically.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Focus</p>
                <p className="text-sm text-ink/70 leading-6">WordPress websites, GoHighLevel automation, and lead capture systems for service businesses.</p>
              </div>
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Delivery</p>
                <p className="text-sm text-ink/70 leading-6">Founder-led work from Figma design to WordPress build, CRM setup, and post-launch support.</p>
              </div>
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Outcome</p>
                <p className="text-sm text-ink/70 leading-6">More qualified leads, booked appointments, and closed deals from one connected system.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <Image
              src={ABOUT_IMAGE}
              alt="Developer workspace with laptop, notes, and collaborative planning materials."
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Founder</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
                Meet Gagan Deep, founder and lead developer.
              </h2>
              <div className="space-y-5 text-base leading-8 text-ink/68">
                <p>
                  Flux Media Creations is led by {SITE.founder}, a WordPress developer and automation specialist with over four
                  years of experience building digital systems for service businesses across the United States, Canada, and the
                  United Kingdom.
                </p>
                <p>
                  Gagan has worked as lead developer on websites for pain management clinics in New Jersey, orthopedic
                  practices, vein treatment centers, phone repair businesses in Atlanta, and real estate agents across the US.
                  Every project is handled personally from Figma design through WordPress development to GoHighLevel configuration
                  and post-launch support.
                </p>
                <p>
                  Working directly with a business owner rather than routing your project through an account manager means
                  decisions get made faster, details get handled with more care, and the person who built your site is the same
                  person who answers when something needs attention after launch.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-lg bg-ink p-6 text-cream">
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Direct fit</p>
              <div className="space-y-4 text-sm leading-7 text-cream/75">
                <p>You want direct communication with the person doing the work.</p>
                <p>You need a service business website connected to automation, not a brochure site.</p>
                <p>You value clear explanations, founder-led delivery, and a system that still works after launch.</p>
              </div>
              <Link
                href="/book-a-call"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-flux transition-colors"
              >
                Start with a discovery call
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">What we build and why it works</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
          We solve the website and CRM disconnect that causes most lead leakage.
        </h2>
        <div className="rounded-lg border border-ink/10 bg-white p-6 md:p-8 mb-8">
          <p className="text-sm leading-7 text-ink/68">
            The problem most service businesses have is not that they lack a website. It is that their website is disconnected
            from the rest of their business. A visitor fills out a form and nobody follows up for 24 hours. A patient calls after
            hours and hears a voicemail. A lead comes in from a Facebook ad and gets lost in someone&apos;s inbox. We solve this by
            building the website and the automation system together so every inquiry gets routed, answered, and tracked properly.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {approachItems.map((item) => (
            <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-ink/68">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Portfolio</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
          The businesses we have built for
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WORK_PROJECTS.slice(0, 6).map((project) => (
            <div key={project.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">{project.category}</p>
              <p className="text-sm leading-7 text-ink/65 mb-4">{project.description}</p>
              <Link href="/work" className="text-sm font-medium text-flux hover:underline">
                See project work →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Industries we understand</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
          We work best where trust, speed of response, and clear follow-up matter.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {industryBlocks.map((item) => (
            <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-ink/68 mb-4">{item.body}</p>
              <Link href={item.href} className="text-sm font-medium text-flux hover:underline">
                Explore {item.title.toLowerCase()} work →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <blockquote key={`${item.author}-${item.role}`} className="rounded-lg border border-ink/10 bg-white p-6">
              <p className="text-sm leading-7 text-ink/68 mb-4">&ldquo;{item.quote}&rdquo;</p>
              <p className="text-sm font-medium text-ink">{item.author}</p>
              <p className="text-xs uppercase tracking-widest text-ink/35 mt-2">
                {item.role} · {item.location}
              </p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12">
          <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Work with us</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            If you need a website that generates leads and a CRM that follows up automatically, we should talk.
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl leading-7 mb-8">
            Start with a free 30-minute discovery call. We will learn about your business, your current setup, and where you are
            losing leads right now. Then we will tell you exactly what we would build and how long it would take.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "var(--flux)", color: "white" }}
            >
              Book your discovery call
              <span>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/30 text-cream/90"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
