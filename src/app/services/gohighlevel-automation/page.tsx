import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "GoHighLevel Automation Service for Lead Follow-Up | Flux Media Creations",
  description:
    "Flux Media Creations builds GoHighLevel automation systems for clinics, home services, real estate, and service businesses. Get CRM setup, pipelines, missed-call text back, booking reminders, review automation, and faster lead follow-up.",
  path: "/services/gohighlevel-automation",
});

const heroTags = [
  "GoHighLevel CRM Setup",
  "Missed call text back",
  "SMS and email workflows",
  "Appointment booking",
  "Pipeline automation",
  "Review requests",
  "Lead recovery",
];

const crackItems = [
  "There is no prompt follow-up on website form submissions.",
  "Missed calls are turning into missed appointments.",
  "Leads are spread across email, phone, chat, spreadsheets, and social DMs.",
  "Reminders, confirmations, and follow-ups are sent manually by your team.",
  "You do not have a clear pipeline showing where each lead is.",
  "Old leads are not being reactivated.",
  "Reviews are requested inconsistently.",
  "You are paying for traffic, but not tracking which leads convert into booked calls.",
];

const buildSections = [
  {
    title: "CRM / Pipeline Set-Up",
    body: "We build a clear sales or appointment pipeline inside GoHighLevel so your team can see every lead, where it came from, what stage it is in, and what needs to happen next.",
    bullets: ["New lead", "Contacted", "Appointment requested", "Booking confirmed", "No answer", "Needs follow-up", "Lost", "Reactivation opportunity"],
  },
  {
    title: "Lead Capture Integrations",
    body: "We integrate website forms, landing pages, booking forms, calls, chat widgets, Elementor forms, and other inquiry sources into GoHighLevel so new leads are collected automatically.",
    bullets: ["WordPress websites", "Landing pages", "Quote request forms", "Contact pages", "Clinic appointment forms", "Local service booking flows"],
  },
  {
    title: "Missed Call Text Back System",
    body: "If a potential customer or patient calls and your team misses it, GoHighLevel can send an automatic SMS response so the lead stays warm instead of going straight to voicemail.",
    bullets: ["SMS copy", "Booking links", "Internal staff alerts", "Pipeline updates", "Natural delay logic", "Duplicate-message prevention", "Follow-up tasks"],
  },
  {
    title: "Follow-Up Workflows With SMS and Email",
    body: "We create follow-up sequences that respond to new leads, remind them to book, confirm appointments, and keep nurturing them if they do not respond immediately.",
    bullets: ["New form request follow-up", "Missed call reply", "Quote request follow-up", "Appointment confirmation", "Appointment reminder", "No-show follow-up", "Post-appointment review request", "Old lead reactivation", "Long-term nurture sequence"],
  },
  {
    title: "Automated Appointment Booking",
    body: "We build calendars, booking links, reminder flows, and appointment status updates that help leads go from interested to scheduled with less manual work.",
    bullets: ["Clinics", "Consultants", "Contractors", "Real estate agents", "Beauty and wellness providers", "Repair businesses"],
  },
  {
    title: "Review Requests and Lead Source Reporting",
    body: "GoHighLevel can send review requests at the right time after an appointment, consultation, service, or job. We also help you understand where leads come from and how they move through your pipeline.",
    bullets: ["Review request automation", "Website source tracking", "Form and call visibility", "Campaign attribution", "Appointment reporting", "Pipeline movement"],
  },
];

const industryCards = [
  {
    title: "GoHighLevel for Healthcare Clinic Solutions",
    href: "/healthcare-website-crm",
    body: "Healthcare clinics require rapid, professional, organized patient follow-up. One patient call, form submission, or after-hours appointment request can turn into a booked visit or a lost opportunity.",
    bullets: ["Pain clinics", "Vein clinics", "Orthopedic clinics", "Chiropractor offices", "Physical therapy clinics", "Health and wellness centers", "Telehealth providers", "Specialty practices"],
  },
  {
    title: "GoHighLevel for Local Service Companies",
    href: "/industries#home-services",
    body: "Home service leads often contact multiple companies at once. Speed determines who wins the job, especially when the request is urgent.",
    bullets: ["Contractors", "Repair businesses", "HVAC companies", "Plumbers", "Roofing contractors", "Cleaning services", "Quote-based businesses"],
  },
  {
    title: "GoHighLevel for Real Estate Agents",
    href: "/industries#real-estate",
    body: "Buyer, seller, investor, IDX, and valuation leads may not convert immediately. Consistent follow-up keeps you top-of-mind.",
    bullets: ["Buyer leads", "Seller leads", "Home valuation forms", "Listing questions", "IDX website leads", "Open-house follow-up", "Long-term nurture"],
  },
  {
    title: "GoHighLevel for Agencies and Consultants",
    href: "/contact",
    body: "Agencies, coaches, and consultants can manage discovery calls, reminders, proposals, pipeline stages, and old-prospect follow-up in one system.",
    bullets: ["Discovery call booking", "Proposal follow-up", "Pipeline tracking", "Reminder sequences", "Old prospect reactivation", "Client onboarding"],
  },
];

const whyFlux = [
  ["Founder execution", "You work directly with someone who understands strategy, websites, automation, and lead generation."],
  ["Built for real business impact", "The aim is not to build complex workflows. The aim is to respond faster, book more appointments, and lose fewer leads."],
  ["Website-to-CRM thinking", "We link the front-end website experience with the back-end follow-up system."],
  ["Well documented", "Your team gets a pragmatic handover so they know how to use the system."],
  ["Built for service businesses", "We focus on clinics, home services, real estate, and local businesses where every lead is a real asset."],
];

const deliverables = [
  "GoHighLevel account and sub-account creation",
  "CRM pipeline hierarchy",
  "Opportunity stages",
  "Website form embeds",
  "Lead source routing",
  "Missed call text back setup",
  "SMS and email workflows",
  "Appointment calendar setup",
  "Automated booking confirmations",
  "Reminder sequences",
  "No-show follow-up",
  "Automated review requests",
  "Old lead reactivation procedure",
  "Internal team alerts",
  "Sales/admin task creation",
  "Tags and segmentation",
  "Basic reporting configuration",
  "Workflow testing",
  "Handoff documentation and training",
];

const processSteps = [
  {
    title: "Lead Flow Review",
    body: "We analyze how leads are generated for your business: website forms, phone calls, booking links, email inboxes, social media, landing pages, ads, or spreadsheets. The goal is to find where leads are stuck, missed, duplicated, or lost.",
  },
  {
    title: "Pipeline Planning and CRM Mapping",
    body: "We map your sales or appointment process into clear pipeline stages in GoHighLevel so your team has visibility into every opportunity.",
  },
  {
    title: "Workflow Development",
    body: "We build your core automations, including SMS, email, calendar, missed-call, review, and reactivation workflows.",
  },
  {
    title: "Website and Form Link",
    body: "We integrate your website forms, landing pages, and booking paths with the CRM so new leads are captured and routed correctly.",
  },
  {
    title: "Test and Tune",
    body: "We test every workflow, form, notification, SMS, email, calendar trigger, and pipeline movement before launch.",
  },
  {
    title: "Documentation and Hand-Off",
    body: "We show your team how the system works, how to manage leads, and how to make basic updates with confidence.",
  },
];

const locations = ["New Jersey", "New York", "Atlanta", "Los Angeles", "Canada", "United States", "United Kingdom", "India", "Remote and multi-location service companies"];

const comparisonRows = [
  ["CRM account setup", "Implement lead follow-up logic"],
  ["Basic pipeline", "Automated stage movement"],
  ["Calendar setup", "Booking reminders and no-show flows"],
  ["Forms added", "Forms routed to the right pipeline"],
  ["Manual SMS and email", "Follow-up workflows"],
  ["Simple contact storage", "Lead nurturing and reactivation"],
  ["Tool installation", "Business process automation"],
];

const pricingCards = [
  {
    title: "Small Setup",
    price: "Starting at $300",
    body: "Perfect for companies that need easy CRM setup, missed-call text back, basic lead capture, and appointment reminders.",
  },
  {
    title: "Growth Configuration",
    price: "Custom quotation",
    body: "Best for businesses with multiple workflows, pipelines, lead sources, calendar automation, review requests, and reactivation campaigns.",
  },
  {
    title: "Full Growth System",
    price: "Starting at $1,300",
    body: "Ideal for businesses that need a WordPress website and GoHighLevel CRM automation built as one lead generation system.",
    href: "/services/full-growth-system",
  },
];

const faqs = [
  {
    q: "What does a GoHighLevel automation agency do?",
    a: "A GoHighLevel automation agency sets up CRM pipelines, workflows, SMS and email follow-up, calendars, missed-call text back, forms, booking reminders, review requests, and reporting so businesses can manage leads more efficiently.",
  },
  {
    q: "Is GoHighLevel good for small businesses?",
    a: "Yes. GoHighLevel is useful for small businesses because it helps teams capture leads, follow up faster, automate reminders, track conversations, manage appointments, and reduce manual admin.",
  },
  {
    q: "Can GoHighLevel send an automatic text after a missed call?",
    a: "Yes. GoHighLevel has missed-call text back functionality that can automatically send a text message when an inbound call is missed. This helps businesses respond quickly even when the team is unavailable.",
  },
  {
    q: "Can you connect GoHighLevel to my WordPress website?",
    a: "Yes. We can connect WordPress forms, landing pages, appointment buttons, chat widgets, and lead capture points to GoHighLevel so inquiries flow into your CRM automatically.",
  },
  {
    q: "Can you set up appointment reminders in GoHighLevel?",
    a: "Yes. We can set up SMS and email reminders before appointments, confirmation messages after booking, no-show follow-up, and post-appointment review requests.",
  },
  {
    q: "Do I need an existing GoHighLevel account?",
    a: "You can already have an account, or we can help you set up the system inside a new GoHighLevel account depending on your current stage.",
  },
  {
    q: "Is GoHighLevel automation only for clinics?",
    a: "No. We work with clinics, home service companies, real estate professionals, consultants, agencies, beauty and wellness businesses, and other service-based businesses.",
  },
  {
    q: "Can GoHighLevel help recover old leads?",
    a: "Yes. We can create reactivation campaigns that follow up with old leads, past inquiries, previous patients, old quote requests, or contacts who never booked.",
  },
  {
    q: "How long does a GoHighLevel setup take?",
    a: "Simple setups can be completed quickly depending on access, content, workflow complexity, and integrations. Larger systems with multiple pipelines, forms, calendars, and sequences require more planning and testing.",
  },
  {
    q: "Can you write the SMS and email messages too?",
    a: "Yes. We can write clear, conversion-focused SMS and email copy for lead acknowledgment, follow-up, reminders, missed calls, review requests, and reactivation campaigns.",
  },
];

const internalLinks = [
  { label: "WordPress Website Build", href: "/services/wordpress-website-build" },
  { label: "Full Growth System", href: "/services/full-growth-system" },
  { label: "Make & Zapier Automation", href: "/services/make-zapier-automation" },
  { label: "Search Visibility Engine", href: "/services/search-visibility-engine" },
  { label: "Healthcare Website & CRM Solutions", href: "/healthcare-website-crm" },
  { label: "Industries we serve", href: "/industries" },
  { label: "Contact Flux", href: "/contact" },
];

const caseStudyLinks = [
  { label: "MVM Health", href: "/work/mvm-health" },
  { label: "Vascura Pain & Vein", href: "/work/vascura-pain-vein" },
  { label: "Med Way NJ", href: "/work/med-way-nj" },
  { label: "Phone Repair Decatur", href: "/work/phone-repair-decatur" },
];

export default function GoHighLevelAutomationPage() {
  const pageUrl = `${SITE.url}/services/gohighlevel-automation`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoHighLevel Automation Service",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
    },
    areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
    serviceType: "GoHighLevel CRM Automation",
    description:
      "GoHighLevel automation setup for service businesses, including CRM pipelines, missed-call text back, SMS and email workflows, appointment reminders, review requests, and website integration.",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: "300",
      priceCurrency: "USD",
      url: pageUrl,
    },
  };

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: "GoHighLevel Automation", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <section className="section pt-32 md:pt-40 max-w-[1400px] mx-auto">
          <p className="mb-6 text-sm text-ink/45">
            <Link href="/services" className="hover:text-flux transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <span>GoHighLevel Automation</span>
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">GoHighLevel Automation Service</p>
              <h1 className="mb-6 max-w-5xl font-display text-4xl font-semibold leading-[1.02] md:text-6xl" style={{ letterSpacing: "-0.03em" }}>
                GoHighLevel Automation Service for Faster Lead Follow-Up
              </h1>
              <p className="mb-5 max-w-4xl text-lg leading-8 text-ink/62">
                Your leads should never sit in an inbox, voicemail, spreadsheet, or disconnected form notification. Flux Media Creations builds GoHighLevel automation systems that capture inquiries, organize your pipeline, trigger fast follow-up, and help turn more website visitors, callers, and form submissions into booked appointments.
              </p>
              <p className="mb-5 max-w-4xl text-base leading-8 text-ink/58">
                We create hands-on GoHighLevel CRM workflows for service-based businesses such as healthcare clinics, home service companies, real estate professionals, local service brands, agencies, consultants, and appointment-based teams.
              </p>
              <p className="mb-8 max-w-4xl text-base leading-8 text-ink/58">
                We build the backend system that keeps each opportunity moving, from missed call text backs to appointment reminders, sales pipeline setup, and lead nurturing.
              </p>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[0_12px_35px_rgba(13,13,13,0.04)]">From $300 and up</span>
                {heroTags.slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full border border-flux/10 bg-blush px-4 py-2 text-xs text-ink/65">{item}</span>
                ))}
              </div>
              <Link href="/contact" className="inline-flex rounded-full bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                Begin Setting-Up Your GoHighLevel Automation →
              </Link>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_30px_90px_rgba(255,92,53,0.10)]">
              <div className="rounded-lg bg-blush p-5">
                <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Lead follow-up system</p>
                {heroTags.map((item, index) => (
                  <div key={item} className="mb-3 flex items-center gap-3 rounded-lg border border-ink/8 bg-white p-4 last:mb-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flux text-xs font-semibold text-white">0{index + 1}</span>
                    <span className="text-sm font-medium text-ink/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">Designed for speed</p>
              <h2 className="mb-5 font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
                Designed for service businesses where speed counts.
              </h2>
              <p className="text-sm leading-7 text-ink/62">
                The vast majority of businesses do not lose leads due to lack of interest. They lose leads because response times are slow, follow-up is inconsistent, or the CRM is not connected to the website.
              </p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <div className="space-y-4 text-sm leading-7 text-ink/62">
                <p>A patient might call after hours. A homeowner may ask for a quote from three companies at once. A buyer or seller lead fills out a form and expects a quick reply. If your business does not respond quickly, another provider will step in.</p>
                <p>GoHighLevel links your lead sources, pipeline, calendar, SMS, email, forms, and reminders into one automated system. HighLevel documentation highlights missed-call text back as a feature that automatically sends a text message when an inbound call is missed, helping businesses quickly acknowledge callers and continue the conversation.</p>
                <p className="font-medium text-ink">Flux Media Creations builds this around your actual sales process, not generic templates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Problem</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Are your leads falling through the cracks?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {crackItems.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-white p-5">
                <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blush text-flux">•</span>
                <p className="text-sm leading-7 text-ink/64">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-ink/62">
            A website can generate interest. What happens next depends on your CRM. Our GoHighLevel automation service bridges the two so every inquiry has a clear path from first contact to booked appointment.
          </p>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">What we make</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Full GoHighLevel setup and automation.
          </h2>
          <p className="mb-10 max-w-4xl text-base leading-8 text-ink/62">
            Flux Media Creations builds GoHighLevel systems that help your business respond faster, stay organized, and follow up consistently.
          </p>
          <div className="grid gap-5 lg:grid-cols-2">
            {buildSections.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-flux/10 bg-blush px-3 py-1 text-xs text-ink/62">{bullet}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Industry applications</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GoHighLevel automation by industry.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {industryCards.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{item.body}</p>
                <div className="mb-5 grid gap-2 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-md bg-cream px-3 py-2 text-xs text-ink/62">{bullet}</span>
                  ))}
                </div>
                <Link href={item.href} className="text-sm font-semibold text-flux hover:underline">
                  See related page →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 text-cream md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-cream/45">Why select Flux Media Creations</p>
            <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              A GoHighLevel automation partner that understands websites, SEO, and conversion.
            </h2>
            <p className="mb-8 max-w-4xl text-sm leading-7 text-cream/68">
              Many GHL setups are backend focused only. Flux Media Creations examines the entire lead journey: search visibility, landing page setup, site speed, service page text, calls to action, forms, tracking, user experience, and CRM follow-up.
            </p>
            <div className="grid gap-4 md:grid-cols-5">
              {whyFlux.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
                  <p className="text-xs leading-6 text-cream/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Deliverables</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            What does our GoHighLevel automation service include?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink/65">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Process</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Our GoHighLevel automation workflow.
          </h2>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-6 md:grid-cols-[64px_1fr]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">{index + 1}</span>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                  <p className="text-sm leading-7 text-ink/62">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg border border-flux/15 bg-blush p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">AEO answer block</p>
            <h2 className="mb-5 font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              What is GoHighLevel automation?
            </h2>
            <p className="max-w-5xl text-base leading-8 text-ink/65">
              GoHighLevel automation is the process of using GoHighLevel to automatically capture leads, send SMS and email follow-ups, manage sales pipelines, schedule appointments, send reminders, recover missed calls, request reviews, and organize customer communication in one CRM. It helps service businesses reduce manual admin and increase response speed after someone fills out a form, calls the business, requests an appointment, or interacts with a campaign.
            </p>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Service areas</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Providing services to businesses in the U.S., Canada, UK, India, and worldwide.
          </h2>
          <p className="mb-6 max-w-4xl text-base leading-8 text-ink/62">
            Local clinic, home service company, real estate professional, or growing service brand, we can set up a GoHighLevel automation system that fits your lead flow.
          </p>
          <div className="flex flex-wrap gap-2">
            {locations.map((item) => (
              <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/62">{item}</span>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Comparison</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GoHighLevel setup vs GoHighLevel automation.
          </h2>
          <p className="mb-8 max-w-4xl text-base leading-8 text-ink/62">
            A basic GoHighLevel setup gives you the account structure, CRM, and tools. GoHighLevel automation goes further by linking actions so your system responds when leads call, fill out forms, book appointments, miss appointments, request quotes, or stop replying.
          </p>
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <div className="grid grid-cols-2 border-b border-ink/10 bg-blush/60">
              <div className="p-4 text-sm font-semibold text-ink">Basic GHL Setup</div>
              <div className="p-4 text-sm font-semibold text-ink">GHL Automation System</div>
            </div>
            {comparisonRows.map(([basic, system]) => (
              <div key={basic} className="grid grid-cols-2 border-b border-ink/8 last:border-b-0">
                <div className="p-4 text-sm text-ink/62">{basic}</div>
                <div className="p-4 text-sm text-ink/72">{system}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-ink/62">
            Flux Media Creations is not about just installing software. It is about building a working system.
          </p>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg border border-ink/10 bg-white p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">Conversion system</p>
            <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Your website captures the lead. GoHighLevel keeps it for you.
            </h2>
            <p className="mb-6 max-w-5xl text-base leading-8 text-ink/62">
              A good website can attract people and convert them into customers. But once someone completes a form, calls your number, or requests an appointment, the follow-up system is as important as the website itself.
            </p>
            <p className="mb-6 max-w-5xl text-base leading-8 text-ink/62">
              That is why Flux Media Creations combines <Link href="/services/wordpress-website-build" className="text-flux hover:underline">WordPress websites</Link>, <Link href="/services/search-visibility-engine" className="text-flux hover:underline">SEO structure</Link>, conversion-focused design, and GoHighLevel CRM automation.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {["Search brings the visitor", "Website copy builds trust", "Forms and phone calls create inquiries", "GoHighLevel captures the lead", "Automation responds fast", "Your team closes the deal"].map((item) => (
                <div key={item} className="rounded-lg bg-cream px-4 py-3 text-sm text-ink/65">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Pricing</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GoHighLevel automation cost.
          </h2>
          <p className="mb-8 max-w-4xl text-base leading-8 text-ink/62">
            Our GoHighLevel automation setup begins at $300. Pricing is based on number of workflows, pipeline complexity, integrations, calendars, forms, SMS/email sequences, reporting needs, and whether we are connecting the system to an existing website or building a full WordPress + GoHighLevel growth system.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {pricingCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-flux">Best for {card.title}</p>
                <h3 className="mb-2 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{card.price}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{card.body}</p>
                {card.href ? (
                  <Link href={card.href} className="text-sm font-semibold text-flux hover:underline">Explore this package →</Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Internal links and proof</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <h2 className="mb-5 font-display text-3xl font-semibold" style={{ letterSpacing: "-0.03em" }}>Related services.</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {internalLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-md bg-cream px-4 py-3 text-sm text-ink/65 transition-colors hover:text-flux">
                    {item.label} →
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <h2 className="mb-5 font-display text-3xl font-semibold" style={{ letterSpacing: "-0.03em" }}>Relevant work.</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {caseStudyLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-md bg-cream px-4 py-3 text-sm text-ink/65 transition-colors hover:text-flux">
                    {item.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">FAQs</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GoHighLevel automation FAQs.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{item.q}</h3>
                <p className="text-sm leading-7 text-ink/62">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 text-center text-cream md:p-12">
            <h2 className="mx-auto mb-4 max-w-4xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Ready to build a GoHighLevel automation system that follows up faster?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-cream/68 md:text-base">
              If your business is getting leads but losing them because of slow replies, missed calls, manual follow-up, or disconnected tools, GoHighLevel automation can help. Flux Media Creations can set up your CRM, workflows, pipeline, calendars, missed-call text back, reminders, review requests, and website integrations so your business responds faster and stays organized.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                Start Your GoHighLevel Setup →
              </Link>
              <Link href="/contact" className="inline-flex justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10">
                Ask for a Free Lead Flow Review
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
