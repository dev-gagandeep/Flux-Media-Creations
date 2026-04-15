import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "GoHighLevel Setup & Automation Service for US Businesses",
  description:
    "Expert GoHighLevel CRM setup, pipeline automation, missed call text-back, SMS workflows, and A2P registration for US healthcare clinics and service businesses. Done-for-you GHL configuration.",
  path: "/services/gohighlevel-automation",
});

const heroStats = [
  { number: "5 min", label: "Average lead response time with GHL automation active" },
  { number: "100%", label: "Projects with A2P SMS registration completed" },
  { number: "7 Core", label: "Automation workflows built into every system" },
  { number: "24/7", label: "Your GHL system follows up even when you are closed" },
];

const problems = [
  {
    title: "Missed calls with no follow-up",
    body: "A potential patient or client calls your clinic or business. Nobody answers. They leave no voicemail. You have no idea they called. They find someone else within minutes. With GoHighLevel missed call text-back, the moment a call goes unanswered, an automated SMS fires - keeping that lead in your pipeline.",
  },
  {
    title: "Form submissions sitting in an inbox",
    body: "Someone fills out your contact form at 9pm on a Friday. Your team sees it Monday morning - if they remember to check. By then that person has already booked with a competitor. GoHighLevel connects every form submission to an instant automated follow-up sequence - no human needed.",
  },
  {
    title: "No system for follow-up after the first contact",
    body: "Most businesses make one attempt to reach a lead. If that fails, the lead is gone. A properly configured GoHighLevel CRM follows up via SMS, email, and voicemail drop across 5-7 touchpoints automatically - recovering leads your team would have written off.",
  },
];

const features = [
  {
    title: "GoHighLevel CRM Setup and Pipeline Configuration",
    body: "We set up your GoHighLevel sub-account from scratch (or audit and rebuild your existing one). Custom sales pipeline stages built around your specific sales process - whether that is New Lead -> Contacted -> Appointment Booked -> Showed -> Closed, or a multi-stage nurture sequence specific to your industry. Every contact field, every tag, every pipeline stage is configured before we touch the automations.",
  },
  {
    title: "Missed Call Text-Back Automation",
    body: "The single highest-ROI automation in GoHighLevel. The moment an inbound call goes unanswered, an automated SMS fires to the caller within 30 seconds: \"Hi, we just missed your call - how can we help you?\" Most missed leads respond. Many book. This one workflow alone recovers an average of 20-30 leads per month for active service businesses.",
    bullets: [
      "Trigger: missed inbound call",
      "SMS template written for your business and tone",
      "Response handling - when the lead replies, your team gets notified",
      "Working hours logic - different messages during business hours vs. after hours",
    ],
  },
  {
    title: "Lead Form -> CRM -> Instant SMS Follow-Up",
    body: "Every contact form on your WordPress website (or landing page) connects directly to GoHighLevel. The moment someone submits a form, they receive an instant, personalized SMS - and your team gets a notification with the lead's details. No inbox monitoring required. No leads waiting hours for a response.",
    bullets: [
      "Webhook connection from your website form to GHL",
      "Instant SMS sent to the lead (within 60 seconds of submission)",
      "Internal notification to your team",
      "Lead automatically added to the correct pipeline stage",
    ],
  },
  {
    title: "Appointment Booking and Automated Reminders",
    body: "GoHighLevel's calendar system lets leads book directly from your website, your Google Business Profile, or an SMS link - without calling your office. We configure your booking calendar, set your availability windows, and build an automated reminder sequence: 24 hours before, 2 hours before, and a post-appointment follow-up.",
    bullets: [
      "GHL calendar with your availability and buffer times",
      "Booking confirmation SMS and email",
      "24-hour reminder SMS",
      "2-hour reminder SMS",
      "No-show re-engagement workflow",
      "Post-appointment review request",
    ],
  },
  {
    title: "A2P SMS Registration (10DLC)",
    body: "If you are sending SMS messages to US phone numbers through GoHighLevel, A2P 10DLC registration is legally required. Unregistered SMS campaigns are blocked by carriers and can result in your GHL account being flagged. We handle the complete A2P registration process - brand registration, campaign registration, and carrier approval - so your SMS workflows actually reach your leads.",
    body2: "Most agencies skip this step. We do not. Every GoHighLevel automation system we build is A2P compliant before launch.",
  },
  {
    title: "Review Generation Automation",
    body: "Google reviews are the single most powerful local SEO signal for service businesses. A properly timed review request - sent automatically 24-48 hours after a completed appointment or service - generates 3-5x more reviews than asking manually.",
    bullets: [
      "Trigger: appointment completed or job closed",
      "Delay: 24-48 hours (configurable)",
      "SMS with direct Google review link",
      "Follow-up if no review left after 3 days",
      "Positive review redirect to Google / Negative review redirect to internal feedback form",
    ],
  },
  {
    title: "Lead Nurture Sequences",
    body: "Not every lead books immediately. Some need 5 touchpoints over 2 weeks before they are ready. We build multi-step nurture sequences that keep your business top of mind across SMS, email, and voicemail drop - automatically - until the lead either books or opts out.",
    bullets: [
      "5-7 step nurture sequence (SMS + email)",
      "Delay logic between each touchpoint",
      "Exit conditions - if lead books, they exit the nurture immediately",
      "Re-engagement sequence for cold leads after 30+ days",
    ],
  },
  {
    title: "GoHighLevel + WordPress Integration",
    body: "Every GoHighLevel system we build connects directly to your WordPress website. Contact forms, booking buttons, live chat widgets, and popup forms all feed directly into your GHL pipeline - creating one unified lead management system with no manual data entry.",
  },
];

const industries = [
  {
    title: "GoHighLevel for Healthcare Clinics and Medical Practices",
    body: "Pain management clinics, vein centers, orthopedic practices, telehealth providers, and multi-specialty groups across the US are using GoHighLevel to recover missed patient calls, automate appointment reminders, and generate Google reviews consistently. We have built GHL systems for healthcare clients in New Jersey, New York, and beyond - and we understand HIPAA-safe data handling requirements for patient communication workflows.",
    bullets: [
      "Missed patient call text-back (30-second response)",
      "New patient lead -> instant SMS confirmation",
      "Appointment reminder sequences (24hr + 2hr)",
      "No-show re-engagement SMS",
      "Post-visit review request",
      "Physician referral pipeline tracking",
    ],
  },
  {
    title: "GoHighLevel for Home Service Companies",
    body: "HVAC companies, plumbers, roofers, electricians, and cleaning services operate in high-competition local markets where response speed is everything. A lead that does not hear from you in 5 minutes calls the next number on Google. We configure GoHighLevel to respond to every inquiry instantly - 24 hours a day, 7 days a week - without adding headcount.",
    bullets: [
      "Missed call text-back - every unanswered call",
      "Job estimate request -> instant follow-up",
      "Facebook Lead Ads -> GHL -> SMS within 60 seconds",
      "Job completion -> review request automation",
      "Seasonal re-engagement campaigns for past clients",
      "Emergency service lead routing",
    ],
  },
  {
    title: "GoHighLevel for Real Estate Agents and Brokers",
    body: "Real estate is a response-speed business. The agent who responds first gets the listing or the buyer. We build GoHighLevel systems that follow up with every new buyer and seller lead automatically - keeping them warm across a multi-week nurture sequence until they are ready to move.",
    bullets: [
      "New buyer lead -> instant SMS + email follow-up",
      "Seller inquiry -> automated valuation request sequence",
      "Open house attendee -> post-visit nurture",
      "Long-term buyer nurture (30/60/90 day sequences)",
      "Past client re-engagement for referral generation",
      "Appointment booking with automated reminders",
    ],
  },
];

const processTimeline = [
  {
    title: "Day 1-2: Strategy and workflow mapping",
    body: "We start with a structured intake call - mapping your current lead flow, identifying every point where leads are currently falling through the cracks, and agreeing on which workflows to build first. You receive a written workflow map showing every automation before we build anything.",
  },
  {
    title: "Day 2-5: CRM setup and pipeline configuration",
    body: "GoHighLevel sub-account setup (or audit of existing account). Pipeline stages configured for your sales process. Custom fields, tags, and contact organization built. A2P SMS brand and campaign registration submitted to carriers.",
  },
  {
    title: "Day 5-10: Automation workflow build",
    body: "Every agreed workflow is built: missed call text-back, lead form connection, appointment booking, reminder sequences, review generation, and nurture sequences. All SMS and email templates written for your business tone and industry.",
  },
  {
    title: "Day 10-12: Testing with live contacts",
    body: "Every single workflow is tested using real test contacts - not simulated. We confirm every SMS fires correctly, every email arrives, every form submission routes to the right pipeline stage, and every calendar booking triggers the correct confirmation and reminder sequence.",
  },
  {
    title: "Day 12-14: Handover and team training",
    body: "You receive a full recorded Loom video walkthrough of your GoHighLevel system - every pipeline, every workflow, how to add contacts, how to read your dashboard, and how to make basic changes yourself. 30 days of direct support via WhatsApp included.",
  },
];

const pricing = [
  {
    tier: "Core Automation Setup",
    price: "from $300",
    bestFor: "Businesses that want the essential lead capture and follow-up workflows",
    items: [
      "GoHighLevel sub-account setup",
      "1 sales pipeline configured",
      "Missed call text-back automation",
      "Lead form -> CRM -> instant SMS connection (1 form source)",
      "Appointment booking calendar setup",
      "A2P SMS registration",
      "30 days support",
    ],
  },
  {
    tier: "Full Automation System (Most Popular)",
    price: "from $600",
    bestFor: "Healthcare clinics, home service companies, real estate teams",
    items: [
      "Everything in Core Automation",
      "Up to 3 pipeline stages fully configured",
      "5-step lead nurture sequence (SMS + email)",
      "Appointment reminder sequence (24hr + 2hr + post-visit)",
      "No-show re-engagement workflow",
      "Review generation automation",
      "Up to 3 form/lead source connections",
      "Full SMS and email template copywriting",
      "Recorded handover walkthrough",
      "30 days direct WhatsApp support",
    ],
  },
  {
    tier: "Full Growth System",
    price: "from $1,300",
    bestFor: "Businesses that want their WordPress website and GoHighLevel working as one system",
    items: [
      "Everything in Full Automation System",
      "Custom WordPress website (up to 10 pages)",
      "WordPress forms connected to GHL pipelines",
      "Live chat or popup lead capture connected to GHL",
      "Facebook Lead Ads -> GHL integration (if applicable)",
      "PageSpeed 90+ WordPress site",
      "Full on-page SEO setup",
      "30 days post-launch support",
    ],
  },
];

const faqs = [
  {
    q: "Do I need my own GoHighLevel account?",
    a: "Yes. You purchase and own your GoHighLevel account directly from GoHighLevel (gohighlevel.com). The Starter plan is $97/month. We set up everything inside your account - you are never locked into us to access your own system. We can also point you toward a reseller option that may reduce your monthly cost depending on your usage.",
  },
  {
    q: "What is A2P SMS registration and why do I need it?",
    a: "A2P (Application-to-Person) 10DLC registration is required by US mobile carriers for any business sending automated SMS messages to US phone numbers. Without it, your text messages will be filtered or blocked by carriers - meaning your automation workflows will not reach your leads. The registration process involves registering your brand and your SMS campaign with The Campaign Registry (TCR). We handle this entire process for every GoHighLevel system we build. It typically takes 5-10 business days to receive carrier approval.",
  },
  {
    q: "Can you audit and fix my existing GoHighLevel setup?",
    a: "Yes. If you already have a GoHighLevel account but your automations are not working correctly, your pipelines are messy, or you are not sure if your SMS is actually reaching leads - we offer a GHL audit and rebuild service. Book a discovery call and we will review your current setup.",
  },
  {
    q: "Will this work for my industry?",
    a: "GoHighLevel works for any service business that depends on inbound leads, phone calls, or appointment bookings. We have configured GHL systems for healthcare clinics, HVAC companies, real estate agents, med spas, law firms, and more. If your business needs to capture leads and follow up fast - GHL is the right tool.",
  },
  {
    q: "How long does it take before my automations are live?",
    a: "A Core Automation setup is live in 7-10 business days. A Full Automation System takes 10-14 days. A2P SMS registration runs in parallel - if carrier approval has not come through by launch, your email workflows go live first and SMS activates as soon as A2P is approved (typically within 5-10 business days of submission).",
  },
  {
    q: "Can GoHighLevel replace my current CRM?",
    a: "In most cases, yes. GoHighLevel replaces the need for separate tools like HubSpot (CRM), Calendly (booking), Mailchimp (email), and Twilio (SMS) - combining all of them into one platform. For healthcare clients with EHR/EMR systems, GHL handles the front-end patient communication and lead management while your EHR handles clinical records.",
  },
  {
    q: "What happens after the 30-day support period?",
    a: "You can continue managing your GoHighLevel system yourself - you will have the recorded walkthrough and the knowledge from your handover call. If you want ongoing monitoring, workflow updates, and monthly reporting, our Monthly Maintenance plan ($150/mo) covers GHL monitoring and light workflow adjustments.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee that every automation workflow we build will be correctly configured and thoroughly tested before handover. We cannot guarantee specific lead volumes or revenue outcomes - those depend on your ad spend, lead sources, and offer. What we can guarantee is that when a lead comes in, your GHL system will respond instantly and follow up consistently - which is what the data consistently shows drives conversion rate improvement.",
  },
];

export default function GoHighLevelAutomationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoHighLevel Setup and Automation Service",
    serviceType: "GoHighLevel setup service",
    description:
      "Done-for-you GoHighLevel CRM setup, automation workflows, missed call text-back, A2P registration, and lead follow-up systems for US service businesses.",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
    areaServed: ["US", "CA", "GB"],
    url: `${SITE.url}/services/gohighlevel-automation`,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-40 md:pt-48 pb-16 max-w-[1400px] mx-auto">
        <p className="text-sm text-ink/45 mb-6">
          <Link href="/services" className="hover:text-flux transition-colors">Services</Link>
          <span className="mx-2">→</span>
          <span>GoHighLevel Automation</span>
        </p>
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">GoHighLevel CRM Setup & Automation</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
          GoHighLevel Setup and Automation - Done For You, Built to Stop Lead Leakage
        </h1>
        <p className="text-base md:text-lg text-ink/55 max-w-4xl leading-relaxed mb-10">
          Every missed call, every unanswered form submission, every lead that waited more than 5 minutes for a response - that is revenue walking out the door. We set up and configure your complete GoHighLevel CRM system: pipelines, missed call text-back, appointment booking, SMS follow-up sequences, review automation, and A2P SMS registration. Built for US healthcare clinics, home service businesses, and real estate professionals who cannot afford to lose a single lead.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Get your GHL system built
            <span>→</span>
          </Link>
          <Link href="/process" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-ink/15 hover:border-ink/40 transition-colors">
            See how it works
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-ink/8 bg-white p-5">
              <p className="font-display font-semibold text-2xl md:text-3xl" style={{ color: "var(--flux)", letterSpacing: "-0.03em" }}>
                {item.number}
              </p>
              <p className="text-sm text-ink/55 mt-2 leading-6">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What is costing you right now</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
          Your leads are not disappearing. They are going to whoever responds first.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          Research is clear: 78% of customers buy from the first business that responds to their inquiry. If that is not you, it is your competitor. Here is what is happening in most service businesses right now.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What we build for you</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          Your complete GoHighLevel system - every workflow built, tested, and handed over.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          This is not a GoHighLevel account setup tutorial. We do the work. Every pipeline, every automation workflow, every SMS template, and every integration is built by us - then tested with real contacts before we hand it over.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{feature.title}</h3>
              <p className="text-sm text-ink/60 leading-7 mb-3">{feature.body}</p>
              {feature.body2 && <p className="text-sm text-ink/60 leading-7 mb-3">{feature.body2}</p>}
              {feature.bullets && (
                <ul className="space-y-2 mt-4">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-ink/65 leading-7 flex gap-2">
                      <span style={{ color: "var(--flux)" }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Built for businesses like yours</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          GoHighLevel automation works best for businesses where every lead matters.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>{industry.title}</h3>
              <p className="text-sm text-ink/60 leading-7 mb-4">{industry.body}</p>
              <ul className="space-y-2">
                {industry.bullets.map((item) => (
                  <li key={item} className="text-sm text-ink/65 leading-7 flex gap-2">
                    <span style={{ color: "var(--flux)" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">How your GHL system gets built</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Your GoHighLevel system built, tested, and live - in 7-14 days.
        </h2>
        <div className="space-y-5">
          {processTimeline.map((step, idx) => (
            <div key={step.title} className="rounded-3xl border border-ink/10 bg-white p-7 md:p-8 grid md:grid-cols-[90px_1fr] gap-4">
              <div className="font-display text-2xl" style={{ color: "var(--flux)", letterSpacing: "-0.02em" }}>
                0{idx + 1}
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-7">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Investment</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          GoHighLevel automation pricing - transparent and fixed.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-4">
          You will need a GoHighLevel account to use this service. The Starter plan is $97/month directly from GoHighLevel, and you own it completely. We set everything up - you are never dependent on us to access your own system.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {pricing.map((tier) => (
            <article key={tier.tier} className="rounded-3xl border border-ink/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">{tier.tier}</p>
              <p className="font-display text-4xl font-semibold mb-2" style={{ color: "var(--flux)", letterSpacing: "-0.03em" }}>{tier.price}</p>
              <p className="text-sm text-ink/55 mb-5">Best for: {tier.bestFor}</p>
              <ul className="space-y-2">
                {tier.items.map((item) => (
                  <li key={item} className="text-sm text-ink/60 leading-7 flex gap-2">
                    <span style={{ color: "var(--flux)" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="text-sm text-ink/55 mt-8 leading-7">
          GoHighLevel subscription ($97-$297/month) is purchased directly by you from GoHighLevel. We do not mark this up. All projects are 50% upfront, 50% on completion.
        </p>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">GoHighLevel questions</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Everything you need to know before we set up your GHL system.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-medium mb-2">{item.q}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            Stop losing leads to slow response times. Let us build your GoHighLevel system.
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Book a free 30-minute discovery call. We will map your current lead flow, identify exactly where leads are falling through the cracks, and show you the specific automations that will fix it. Most clients see their first missed call recovered within 24 hours of their system going live.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
              Book your free discovery call
              <span>→</span>
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/35 text-cream/90">
              WhatsApp us now
            </a>
          </div>
          <p className="text-xs text-cream/55 max-w-4xl mx-auto">
            GoHighLevel automation built for US healthcare clinics, home service businesses, and real estate professionals. A2P compliant. Fully tested. Delivered in 7-14 days.
          </p>
        </div>
      </section>
    </>
  );
}
