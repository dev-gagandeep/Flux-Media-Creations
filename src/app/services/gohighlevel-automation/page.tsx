import type { Metadata } from "next";
import Link from "next/link";
import { SITE, TESTIMONIALS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "GoHighLevel Setup & Automation Service",
  description:
    "Expert GoHighLevel setup and automation service for pipelines, lead follow-up, booking systems, and A2P-compliant SMS. Starting from $300.",
  path: "/services/gohighlevel-automation",
});

const summaryCards = [
  { label: "Starting from", value: "$300" },
  { label: "Typical turnaround", value: "5-10 business days" },
  { label: "Best fit", value: "Service businesses, agencies, consultants" },
  { label: "Delivery model", value: "US clients, worldwide service" },
];

const trustNotes = [
  "Founder-led setup and handoff",
  "A2P-aware SMS workflow setup",
  "Workflow QA before launch",
  "Documentation and recorded walkthrough included",
  "Built around your real lead flow, not a generic snapshot",
];

const includedItems = [
  "CRM pipeline setup with opportunity stages mapped to your sales process",
  "Missed-call text-back and instant lead acknowledgment workflows",
  "Appointment booking, reminders, and no-show recovery sequences",
  "Lead nurture email and SMS sequences with exit logic",
  "Review request and reputation management automation",
  "Reactivation campaigns for cold or dormant leads",
  "A2P 10DLC guidance and setup support for US business texting",
  "Basic reporting visibility for pipeline movement and lead status",
  "Written workflow documentation and recorded walkthrough",
  "Handoff training so your team can run the system confidently",
];

const audienceItems = [
  {
    title: "Local service businesses",
    body: "Ideal for clinics, med spas, home service companies, law firms, and real estate teams losing leads because response time is slow or inconsistent.",
  },
  {
    title: "Agencies setting up GoHighLevel for clients",
    body: "Useful when you need a clean build, documented automation, white-label friendly structure, and a system your team can support after handoff.",
  },
  {
    title: "Coaches and consultants",
    body: "Strong fit if you need booking automation, lead nurture, and a cleaner client acquisition path without learning the full platform yourself.",
  },
  {
    title: "Businesses migrating from another CRM",
    body: "Works well for teams moving from HubSpot, ActiveCampaign, Salesforce, or fragmented tools that currently create response delays and handoff problems.",
  },
  {
    title: "Agencies exploring SaaS mode",
    body: "Good fit for teams that want sub-account structure, clearer onboarding, and a more productized GoHighLevel offer under their own brand.",
  },
];

const processSteps = [
  {
    title: "Step 1 — Discovery and lead-flow audit",
    body: "We map how leads arrive today, what happens after a form fill or call, where drop-off occurs, and which workflows need to go live first. We do not build until the logic is clear.",
  },
  {
    title: "Step 2 — Pipeline and workflow build",
    body: "We configure pipelines, write automation logic, connect forms and calendars, and build the messaging sequences needed for lead acknowledgment, reminders, nurture, and recovery.",
  },
  {
    title: "Step 3 — QA, documentation, and handoff",
    body: "We test edge cases, verify delivery paths, document the system, and record a walkthrough so your team can operate it without being dependent on us for every small change.",
  },
];

const industryRows = [
  {
    title: "Real estate agencies and teams",
    useCase: "Lead routing, pipeline stages, buyer and seller follow-up, appointment booking",
  },
  {
    title: "Medical spas and clinics",
    useCase: "Missed-call text-back, booking reminders, review requests, intake follow-up",
  },
  {
    title: "Home services",
    useCase: "Speed-to-lead workflows, estimate follow-up, job completion review requests",
  },
  {
    title: "Marketing agencies",
    useCase: "Client sub-account setup, reusable process structure, white-label CRM delivery",
  },
  {
    title: "Coaches and consultants",
    useCase: "Discovery call booking, nurture sequences, offer follow-up automation",
  },
  {
    title: "Law firms",
    useCase: "Lead capture, intake automation, consultation scheduling, follow-up discipline",
  },
  {
    title: "Gyms and fitness studios",
    useCase: "Trial signup automation, attendance follow-up, membership reactivation",
  },
  {
    title: "SaaS and service brands",
    useCase: "Trial nurture, post-demo follow-up, reactivation workflows, pipeline visibility",
  },
];

const proofCards = [
  {
    title: "Healthcare systems with real lead-routing depth",
    body: "Projects like MVM Health, Vascura Pain & Vein, and Med Way NJ show the kind of booking, follow-up, and CRM-connected delivery we build for healthcare teams.",
    href: "/work",
    label: "View healthcare work",
  },
  {
    title: "Real estate and local service follow-up flows",
    body: "We have also built lead-capture and follow-up systems for real estate and local service businesses where response speed directly affects revenue.",
    href: "/work/farhan-yousuf-realtor",
    label: "See real estate example",
  },
  {
    title: "Website and CRM systems built together",
    body: "If you need the front end and automation layer built as one connected system, our Full Growth System combines WordPress and GoHighLevel in a single delivery path.",
    href: "/services/full-growth-system",
    label: "Explore Full Growth System",
  },
];

const comparisonRows = [
  {
    flux: "Founder-led build so you work directly with the builder and strategist",
    other: "Often sold by one person and built by someone else later",
  },
  {
    flux: "Lead-flow audit before any workflow is built",
    other: "Generic snapshot or rushed setup without business-specific logic",
  },
  {
    flux: "Documentation and recorded walkthrough included",
    other: "Little to no handoff material, creating long-term dependency",
  },
  {
    flux: "Website, CRM, and automation thinking connected from the start",
    other: "GoHighLevel built in isolation without front-end conversion context",
  },
  {
    flux: "Clear starting price and scoped build path",
    other: "Vague pricing, scope drift, and unclear post-launch responsibility",
  },
];

const pricingNotes = [
  "Foundational builds start from $300 and usually cover pipeline setup, missed-call text-back, and lead acknowledgment.",
  "Larger builds that include nurture sequences, SaaS mode configuration, funnel logic, or multi-source lead routing are scoped per project.",
  "You keep your own GoHighLevel subscription and account ownership. We do not mark up your software subscription.",
];

const faqs = [
  {
    q: "What is a GoHighLevel setup service?",
    a: "A GoHighLevel setup service is a done-for-you implementation where an expert builds your CRM pipelines, lead automation workflows, booking sequences, and communication logic inside GoHighLevel so the system is ready to use quickly.",
  },
  {
    q: "How much does GoHighLevel setup cost?",
    a: "GoHighLevel setup can start around $300 for a foundational build and rise into the low thousands for larger systems with multi-channel automation, SaaS mode, funnel work, and advanced sub-account structure. Our service starts from $300 with transparent scoping.",
  },
  {
    q: "Do I need my own GoHighLevel account?",
    a: "Yes. We build inside your GoHighLevel account so you keep full ownership. If you have not chosen a plan yet, we can guide you toward the right one based on your business and workflow needs.",
  },
  {
    q: "How long does GoHighLevel setup take?",
    a: "A standard GoHighLevel automation build usually takes 5 to 10 business days from discovery to handoff. More complex builds with migrations, multiple funnels, or SaaS mode take longer.",
  },
  {
    q: "What is missed-call text-back in GoHighLevel?",
    a: "Missed-call text-back is an automation that sends an SMS within seconds after an inbound call goes unanswered, helping keep the conversation alive before the lead moves to a competitor.",
  },
  {
    q: "Will GoHighLevel work with my existing website?",
    a: "Yes. We can connect GoHighLevel forms, booking calendars, and follow-up systems to your existing WordPress, Webflow, Squarespace, or custom website so you do not need a full rebuild just to add automation.",
  },
  {
    q: "What is GoHighLevel SaaS mode and do you set it up?",
    a: "GoHighLevel SaaS mode lets agencies resell the platform under their own brand with pricing tiers and sub-account creation. Yes, we can scope and set up SaaS-mode builds for agencies that want to productize their offer.",
  },
  {
    q: "What is A2P 10DLC and why does it matter?",
    a: "A2P 10DLC is the US carrier registration framework required for most business texting through software platforms. Without it, GoHighLevel SMS messages may be filtered or blocked. We account for this in US-focused builds.",
  },
  {
    q: "Can you migrate our existing CRM data into GoHighLevel?",
    a: "Yes. We can help map and migrate contact data from other systems, clean field structure, and make sure your new GoHighLevel setup starts organized instead of carrying old CRM clutter forward.",
  },
  {
    q: "Is GoHighLevel good for small businesses?",
    a: "Yes, especially for service businesses that need faster lead response, cleaner follow-up, booking automation, and fewer disconnected tools. The ROI usually comes from better speed to lead and more consistent nurture rather than from the software alone.",
  },
];

const internalLinks = [
  { label: "See our full growth system", href: "/services/full-growth-system" },
  { label: "Make and Zapier automation services", href: "/services/make-zapier-automation" },
  { label: "Monthly maintenance plans", href: "/services/monthly-maintenance" },
  { label: "Our work and case studies", href: "/work" },
  { label: "New York client page", href: "/web-development-ai-automation-new-york" },
  { label: "New Jersey client page", href: "/web-development-automation-new-jersey" },
];

const editorialRoadmap = [
  "How to Set Up GoHighLevel for a Service Business: Step-by-Step Guide",
  "GoHighLevel vs HubSpot: Which CRM Is Right for Your Agency?",
  "What Is A2P 10DLC and Why Your GoHighLevel SMS Is Getting Blocked",
  "How Much Does GoHighLevel Setup Cost? Honest Price Breakdown",
  "GoHighLevel for Real Estate Agents: The Complete Automation Setup",
  "GoHighLevel SaaS Mode Explained: How Agencies Resell GHL Under Their Brand",
];

export default function GoHighLevelAutomationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoHighLevel Setup & Automation Service",
    description:
      "Done-for-you GoHighLevel CRM setup, pipeline configuration, and automation builds for service businesses, agencies, and consultants.",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      sameAs: [SITE.instagramUrl],
    },
    serviceType: "GoHighLevel Automation",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "300",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    url: `${SITE.url}/services/gohighlevel-automation`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-40 md:pt-48 pb-16 max-w-[1400px] mx-auto">
        <p className="text-sm text-ink/45 mb-6">
          <Link href="/services" className="hover:text-flux transition-colors">
            Services
          </Link>
          <span className="mx-2">→</span>
          <span>GoHighLevel Setup &amp; Automation</span>
        </p>
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">GoHighLevel CRM Setup</p>
        <h1
          className="font-display font-semibold text-4xl md:text-6xl max-w-5xl leading-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          GoHighLevel Setup &amp; Automation Service
        </h1>
        <p className="text-base md:text-lg text-ink/55 max-w-4xl leading-relaxed mb-6">
          We build GoHighLevel systems that capture every lead, follow up instantly, and book appointments on autopilot
          so you stop losing revenue between the form submission, the missed call, and the first reply.
        </p>
        <p className="text-sm text-ink/45 mb-10">
          Starting from $300 · Done-for-you delivery · US clients, worldwide service
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
            style={{ background: "var(--flux)", color: "white" }}
          >
            Start your build
            <span>→</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-ink/15 hover:border-ink/40 transition-colors"
          >
            See our work
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((item) => (
            <div key={item.label} className="rounded-2xl border border-ink/8 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">{item.label}</p>
              <p className="font-display font-semibold text-xl leading-snug" style={{ color: "var(--flux)", letterSpacing: "-0.02em" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {trustNotes.map((item) => (
            <span key={item} className="rounded-full bg-blush px-4 py-2 text-xs text-ink/70 border border-flux/10">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto pt-0 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What is GoHighLevel?</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-5" style={{ letterSpacing: "-0.03em" }}>
            An all-in-one CRM and marketing automation platform built for lead follow-up, booking, and pipeline management.
          </h2>
          <p className="text-sm text-ink/60 leading-7 mb-4">
            GoHighLevel, also called GHL or HighLevel, combines CRM automation, email, SMS, booking calendars, funnel tools,
            reputation management, and sales pipeline management into one platform. For service businesses and agencies, it
            replaces the messy stack of disconnected tools that often creates response delays and missed opportunities.
          </p>
          <p className="text-sm text-ink/60 leading-7">
            The platform is powerful, but correct setup matters. A broken workflow, unclear pipeline, weak lead nurture
            sequence, or missing A2P registration can quietly cost you leads. Our role is to set it up around your real
            business process so the system works from day one.
          </p>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What we do</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-5" style={{ letterSpacing: "-0.03em" }}>
            Done-for-you GoHighLevel setup mapped to how your leads actually move.
          </h2>
          <p className="text-sm text-ink/60 leading-7 mb-4">
            We handle the technical build: pipeline setup, workflow automation, lead follow-up automation, appointment booking,
            review requests, reactivation campaigns, and the operational logic needed to keep your CRM useful instead of
            overwhelming.
          </p>
          <p className="text-sm text-ink/60 leading-7">
            This is not a generic onboarding template. We build around where leads come from, how fast your team needs to
            respond, which channels you use, and what has to happen for the lead to become a booked call, consult, or sale.
          </p>
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What&apos;s included</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          The deliverables that make a GoHighLevel setup service useful in the real world.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          Specificity matters here. The more clearly a service page explains the build, the easier it is for search engines,
          AI answer engines, and buyers to understand what is actually included.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {includedItems.map((item) => (
            <div key={item} className="rounded-3xl border border-ink/10 bg-white p-6 flex gap-3">
              <span className="text-lg" style={{ color: "var(--flux)" }}>
                •
              </span>
              <p className="text-sm text-ink/65 leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Who this is for</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Built for teams that need speed to lead, cleaner automation, and a CRM that does not fall apart after setup.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceItems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>
                {item.title}
              </h3>
              <p className="text-sm text-ink/60 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-ink/60 mt-8 leading-7">
          If your lead follow-up takes more than a few minutes, or your team still depends on inbox checking and manual reminders,
          there is usually a workflow gap worth fixing first.
        </p>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">How it works</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Our GoHighLevel setup process is structured so nothing important gets guessed.
        </h2>
        <div className="space-y-5">
          {processSteps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-ink/10 bg-white p-7 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em", color: "var(--flux)" }}>
                {step.title}
              </h3>
              <p className="text-sm text-ink/60 leading-7">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Industries and locations</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          We build GoHighLevel systems for service businesses that depend on faster follow-up and cleaner pipeline visibility.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-8">
          We work with clients across the United States, Canada, and internationally, with especially relevant experience for
          New York, New Jersey, California, Texas, and Florida-oriented service businesses that need remote delivery without
          timezone friction.
        </p>
        <div className="rounded-3xl border border-ink/10 bg-white overflow-hidden">
          {industryRows.map((row, index) => (
            <div
              key={row.title}
              className={`grid md:grid-cols-[0.9fr_1.1fr] gap-4 p-6 ${index !== industryRows.length - 1 ? "border-b border-ink/8" : ""}`}
            >
              <h3 className="font-medium text-ink">{row.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{row.useCase}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Results and proof</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          The goal is not more software. The goal is faster response, cleaner follow-up, and fewer lost leads.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          We do not promise fixed revenue numbers because every business and traffic source is different. What we do build are
          systems that consistently reduce response delays, improve booking follow-through, and make pipeline movement more visible.
        </p>
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {proofCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>
                {card.title}
              </h3>
              <p className="text-sm text-ink/60 leading-7 mb-5">{card.body}</p>
              <Link href={card.href} className="text-sm font-medium hover:opacity-80" style={{ color: "var(--flux)" }}>
                {card.label} →
              </Link>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote key={`${item.author}-${item.role}`} className="rounded-3xl border border-ink/10 bg-white p-7">
              <p className="text-sm text-ink/65 leading-7 mb-4">&ldquo;{item.quote}&rdquo;</p>
              <p className="text-sm font-medium">{item.author}</p>
              <p className="text-xs text-ink/45 mt-1">
                {item.role} · {item.location}
              </p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Why Flux</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Why businesses choose Flux over a generic freelancer or snapshot-first agency.
        </h2>
        <div className="rounded-3xl border border-ink/10 bg-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 border-b border-ink/8">
            <div className="p-6 bg-blush/70">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">With Flux Media Creations</p>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">With a generic alternative</p>
            </div>
          </div>
          {comparisonRows.map((row, index) => (
            <div key={row.flux} className={`grid md:grid-cols-2 gap-0 ${index !== comparisonRows.length - 1 ? "border-b border-ink/8" : ""}`}>
              <div className="p-6 bg-blush/40 text-sm text-ink/70 leading-7">{row.flux}</div>
              <div className="p-6 text-sm text-ink/60 leading-7">{row.other}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Pricing</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          Clear pricing signals for buyers comparing GoHighLevel setup options.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-8">
          We keep pricing transparent because commercial-intent visitors usually want a range before they reach out. Foundational
          GoHighLevel setup starts from $300, and more advanced builds scale with scope.
        </p>
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <ul className="space-y-4">
            {pricingNotes.map((item) => (
              <li key={item} className="text-sm text-ink/65 leading-7 flex gap-3">
                <span style={{ color: "var(--flux)" }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Frequently asked questions</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Direct answers for search, AI engines, and buyers comparing GoHighLevel experts.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-medium mb-3">{item.q}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Internal links</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-5" style={{ letterSpacing: "-0.03em" }}>
              Related services and proof paths that strengthen this page.
            </h2>
            <div className="space-y-3">
              {internalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-ink/65 hover:text-flux transition-colors">
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Editorial roadmap</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-5" style={{ letterSpacing: "-0.03em" }}>
              Recommended future pages to build topical authority around GoHighLevel.
            </h2>
            <ul className="space-y-3">
              {editorialRoadmap.map((item) => (
                <li key={item} className="text-sm text-ink/60 leading-7 flex gap-3">
                  <span style={{ color: "var(--flux)" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            Ready to build your GoHighLevel automation system?
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Tell us about your current setup, the tools you use, and the outcome you want. We will scope it clearly, explain the
            right first build, and get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "var(--flux)", color: "white" }}
            >
              Start the conversation
              <span>→</span>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/35 text-cream/90"
            >
              WhatsApp us now
            </a>
          </div>
          <p className="text-xs text-cream/55 max-w-4xl mx-auto">
            No vague retainers. No outsourced build chain. Just a clean GoHighLevel system that is mapped, tested, and handed over properly.
          </p>
        </div>
      </section>
    </>
  );
}
