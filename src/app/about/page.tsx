import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, WORK_PROJECTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "About Gagan Deep — Founder, Flux Media Creations | WordPress & GHL Specialist",
  description:
    "Flux Media Creations is led by Gagan Deep, a full-stack web developer and automation specialist with 2+ years building WordPress sites and GoHighLevel systems for healthcare and service businesses. Based in India, working globally.",
  path: "/about",
  image: "/images/mvmhealth.png",
});

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";

const DELIVERY_ITEMS = [
  {
    title: "WordPress development",
    body: "Custom builds using Elementor Pro, ACF, and custom PHP where needed. Every site starts in Figma, gets approved before code is written, and is optimized to hit PageSpeed 90+ before launch.",
  },
  {
    title: "GoHighLevel automation",
    body: "Full sub-account setup, pipeline configuration, missed call text-back, appointment booking calendars, A2P 10DLC registration, review requests, and seasonal campaign automation.",
  },
  {
    title: "System integration",
    body: "Make and Zapier workflows connecting Facebook Lead Ads, GoHighLevel, Airtable, Google Calendar, webhooks, and any other tools that need to exchange data.",
  },
  {
    title: "Airtable operations",
    body: "Custom CRM tables, client-facing dashboards, and automated email triggers for businesses that need operational clarity without enterprise software overhead.",
  },
];

const STACK = [
  "WordPress",
  "Elementor Pro",
  "ACF",
  "PHP",
  "HTML/CSS/JavaScript",
  "Figma",
  "GoHighLevel",
  "Airtable",
  "Make",
  "Zapier",
  "Hostinger",
  "GoDaddy",
  "Cloudflare",
  "cPanel",
  "DNS management",
];

const CREDENTIALS = [
  "Bachelor of Computer Applications (BCA)",
  "freeCodeCamp Responsive Web Design coursework",
  "Google Digital Garage certification",
  "Basic React experience used in gagandeep.space",
];

const FIT_NOTES = [
  "You want direct communication with the person doing the work.",
  "You need a service business website connected to automation, not a brochure site.",
  "You value clear explanations in plain language and fast, founder-led delivery.",
  "You work remotely or across time zones and care more about outcomes than agency theater.",
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-32 md:pt-40 max-w-[1320px] mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_460px] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">About</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              A developer who builds systems, not just websites.
            </h1>
            <p className="text-base md:text-lg text-ink/60 max-w-3xl leading-8 mb-8">
              Flux Media Creations is led by {SITE.founder}, a full-stack web developer and automation specialist based in India and working globally.
              The work is focused, hands-on, and built for service businesses that need more than a site that merely looks finished.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Role</p>
                <p className="text-sm text-ink/70 leading-6">Founder of Flux Media Creations and lead web developer at Fast Visibility Tech.</p>
              </div>
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Focus</p>
                <p className="text-sm text-ink/70 leading-6">WordPress, GoHighLevel, Airtable, and the operational layer that keeps leads moving.</p>
              </div>
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">Working style</p>
                <p className="text-sm text-ink/70 leading-6">Direct, remote, asynchronous, and built around plain-language communication.</p>
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
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">The person</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
                Hi, I&apos;m Gagan Deep.
              </h2>
              <div className="space-y-5 text-base leading-8 text-ink/68">
                <p>
                  I&apos;m a full-stack web developer and automation specialist based in India, and the founder of Flux Media Creations.
                  I&apos;ve spent the last two years building WordPress websites and GoHighLevel automation systems as my primary work, every day.
                </p>
                <p>
                  I currently lead web development at Fast Visibility Tech, where I&apos;ve built and shipped over seven client websites across healthcare,
                  real estate, and home services. That work includes everything from Figma design through to DNS configuration, GHL pipeline setup,
                  and A2P SMS registration.
                </p>
                <p>
                  Before that, I worked as a freelance educator teaching web development with the LAMP stack and JavaScript. That background still shapes how I work:
                  I explain technical decisions in plain language clients can actually use to make decisions.
                </p>
                <p>
                  I built Flux Media Creations because I kept seeing the same problem in service businesses. The websites looked reasonable and did nothing.
                  No automation behind the form. No instant follow-up. No system that worked when the owner was away from the desk. A patient calling a pain clinic at 11pm gets silence.
                  An emergency plumbing call on a Sunday goes to voicemail with no callback. Those are real leads and real revenue disappearing because the digital infrastructure was not built to respond.
                </p>
                <p className="font-medium text-ink">That&apos;s what I fix.</p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-lg bg-ink p-6 text-cream">
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Hands-on proof</p>
              <div className="space-y-4 text-sm leading-7 text-cream/75">
                <p>Lead developer at Fast Visibility Tech with hands-on delivery across healthcare, real estate, and home service builds.</p>
                <p>Built portfolio projects from design through DNS, automation setup, and go-live.</p>
                <p>Most clients are in the US. Time zones have never been the bottleneck.</p>
              </div>
              <Link
                href="/work"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-flux transition-colors"
              >
                See delivered work
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
          What I build and how I build it
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {DELIVERY_ITEMS.map((item) => (
            <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-ink/68">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-ink/10 bg-[#F4EEE8] p-6">
          <p className="text-sm leading-7 text-ink/70">
            What I don&apos;t do: I don&apos;t outsource. I don&apos;t subcontract. When you hire Flux Media Creations, you work directly with me from the first call through the post-launch walkthrough.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Proof</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
          Work I&apos;ve delivered
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WORK_PROJECTS.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-lg border border-ink/10 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">{project.category}</p>
                <p className="text-sm leading-7 text-ink/65 mb-4">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-flux hover:underline">
                  Visit site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-ink/60">
          Each project was built hands-on by me during my time at Fast Visibility Tech, covering design, development, automation, DNS, and go-live from start to finish.
        </p>
      </section>

      <section className="section max-w-[1320px] mx-auto">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Expertise</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              The technical side, plainly stated
            </h2>
            <p className="text-sm leading-7 text-ink/68 mb-5">
              My day-to-day stack includes WordPress, Elementor Pro, ACF, PHP for custom functionality, HTML/CSS/JavaScript for anything outside a page builder,
              Figma for every design before code, and GoHighLevel for CRM and automation. On the infrastructure side, I work with Hostinger, GoDaddy, Cloudflare,
              cPanel, and DNS management across major registrars.
            </p>
            <p className="text-sm leading-7 text-ink/68 mb-5">
              I also have working knowledge of Airtable&apos;s API and automation layer, Make scenario building with error handling and multi-branch routing,
              and basic React, which I used to build my personal portfolio at gagandeep.space.
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span key={item} className="rounded-md bg-ink/5 px-3 py-1.5 text-xs text-ink/70">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Background</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              Learning by shipping
            </h2>
            <ul className="space-y-3 text-sm leading-7 text-ink/68 mb-5">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-7 text-ink/68">
              The most important things I know came from shipping real projects, breaking things, and fixing them.
              Courses helped. Real delivery taught the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="rounded-lg bg-ink p-7 text-cream">
            <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Who Flux is for</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
              Flux Media Creations is for service businesses that are tired of paying for websites that sit there generating nothing.
            </h2>
            <div className="space-y-4 text-sm leading-7 text-cream/75">
              <p>
                I&apos;m not the right fit for every project. I&apos;m not a large agency, and I do not offer a multi-layered account team or heavy project ceremony.
                What I do offer is deep, hands-on experience in a specific kind of build: service business websites connected to automation systems.
              </p>
              <p>
                If you want a partner who answers messages directly, explains decisions clearly, and cares whether the site generates leads after launch,
                we are probably a good fit. If you want a very large team, daily standups, and big-agency overhead, there are agencies better suited to that.
              </p>
              <p>I work globally, remotely, and asynchronously. Most of my clients are in the US, and time zones have never been a problem.</p>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-7">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Good fit signals</p>
            <ul className="space-y-3 text-sm leading-7 text-ink/68">
              {FIT_NOTES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1320px] mx-auto">
        <div className="rounded-lg border border-ink/10 bg-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Let&apos;s see if we&apos;re a good fit</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              The first conversation is always free.
            </h2>
            <p className="text-sm md:text-base text-ink/65 leading-7">
              Tell me what you&apos;re trying to build, what you&apos;re currently working with, and what is not working. If I&apos;m the right person for the project,
              I&apos;ll tell you exactly how I&apos;d approach it and what it would cost. If I&apos;m not, I&apos;ll tell you that too.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
              style={{ background: "var(--flux)" }}
            >
              Start a project
              <span>→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-lg border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              See the work
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
