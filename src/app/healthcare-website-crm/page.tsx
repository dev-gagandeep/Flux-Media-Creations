import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Healthcare Website & CRM Solutions | Launch in 14 Days | Flux Media Creations",
  description:
    "Patient-generating healthcare websites and GoHighLevel CRM systems for clinics. Launch in 14 days with appointment reminders, missed-call recovery, and HIPAA-aware intake flow.",
  alternates: {
    canonical: `${SITE.url}/healthcare-website-crm`,
  },
  openGraph: {
    title: "Healthcare Website & CRM Solutions | Flux Media Creations",
    description:
      "Website, CRM, booking, reminders, and follow-up built together for healthcare clinics that cannot afford slow lead response.",
    url: `${SITE.url}/healthcare-website-crm`,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/work/mvm-health.jpg`,
        width: 1200,
        height: 630,
        alt: "Healthcare website and CRM solution by Flux Media Creations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Website & CRM Solutions | Flux Media Creations",
    description:
      "Launch a patient-generating healthcare website and GoHighLevel CRM in 14 days.",
    images: [`${SITE.url}/images/work/mvm-health.jpg`],
  },
};

const painPoints = [
  {
    title: "Missed calls become lost patients",
    body: "When a front desk misses a call, most patients do not wait around. They search again, call another clinic, and the opportunity disappears before your team sees the voicemail.",
  },
  {
    title: "Scheduling depends on manual chasing",
    body: "If appointment booking relies on back-and-forth phone calls, gaps appear. No-shows increase, reminders get missed, and your team spends valuable time repeating the same follow-up.",
  },
  {
    title: "Patient inquiries live in too many places",
    body: "Website forms, inboxes, spreadsheets, call logs, and sticky notes create messy handoffs. The clinic loses visibility into which inquiries are new, contacted, booked, or forgotten.",
  },
  {
    title: "The website looks fine but does not convert",
    body: "A clinic website needs more than polish. It needs trust, speed, clear service paths, proof, and direct actions that move a visitor toward calling, booking, or submitting an intake form.",
  },
];

const solutionSteps = [
  {
    step: "01",
    title: "Conversion-focused healthcare website",
    body: "We design the site in Figma first, then build a fast WordPress experience with service pages, trust signals, local SEO structure, and clear calls to book or contact the clinic.",
    tags: ["WordPress", "Figma", "SEO", "PageSpeed 90+"],
  },
  {
    step: "02",
    title: "GoHighLevel CRM connected from day one",
    body: "Every form, call source, booking action, and patient inquiry can route into a clean pipeline so your team always knows what happened and what needs attention next.",
    tags: ["GoHighLevel", "Pipeline", "Lead routing"],
  },
  {
    step: "03",
    title: "Instant follow-up and missed-call recovery",
    body: "New inquiries receive fast acknowledgment. Missed calls can trigger a text-back within seconds, helping your clinic keep the conversation alive before the patient books elsewhere.",
    tags: ["SMS automation", "Missed-call text-back", "Speed to lead"],
  },
  {
    step: "04",
    title: "Appointment reminders and review flow",
    body: "We set up confirmation, reminder, no-show recovery, and review request workflows so your front desk spends less time chasing and more time helping patients.",
    tags: ["Reminders", "No-show recovery", "Reviews"],
  },
];

const processSteps = [
  {
    day: "Day 1-2",
    title: "Clinic strategy and lead-flow audit",
    body: "We review your services, current site, inquiry sources, patient journey, and the exact places follow-up is leaking.",
  },
  {
    day: "Day 3-5",
    title: "Full Figma design",
    body: "You review the page structure, messaging, trust sections, and conversion flow before development begins.",
  },
  {
    day: "Day 5-10",
    title: "WordPress build and CRM setup",
    body: "Website development and GoHighLevel configuration run together, so forms, calls, calendars, tags, and pipelines fit the same system.",
  },
  {
    day: "Day 11-12",
    title: "Automation QA",
    body: "We test forms, SMS triggers, notifications, booking reminders, mobile layouts, speed, and browser behavior before launch.",
  },
  {
    day: "Day 13-14",
    title: "Launch and handover",
    body: "We handle launch support, record a walkthrough, and include 30 days of direct post-launch help through WhatsApp and email.",
  },
];

const pricingRows = [
  ["Healthcare website design", "$3,500-$8,000", "Included"],
  ["GoHighLevel CRM setup", "$500-$2,000", "Included"],
  ["Appointment booking integration", "$300-$800", "Included"],
  ["SMS automation and missed-call text-back", "$200-$600", "Included"],
  ["HIPAA-aware intake form structure", "$200-$500", "Included"],
  ["SEO structure and speed optimization", "$400-$1,200", "Included"],
  ["Recorded walkthrough and 30-day support", "$450-$1,000", "Included"],
];

const testimonials = [
  {
    name: "Pain Management Clinic",
    location: "New Jersey",
    quote:
      "The new website made booking clearer, and the automation catches patient inquiries we used to miss. The handover was simple for our team.",
  },
  {
    name: "Specialty Healthcare Practice",
    location: "United States",
    quote:
      "Flux understood that a medical site has to build trust quickly. The pages load fast, the contact flow is easy, and follow-up is no longer manual.",
  },
  {
    name: "Pain and Vein Center",
    location: "New Jersey",
    quote:
      "We had a site that looked acceptable but did not move patients forward. Connecting the website to GoHighLevel changed the way our leads are handled.",
  },
];

const faqs = [
  {
    q: "Is this HIPAA compliant?",
    a: "We build HIPAA-aware intake and follow-up flows with privacy-conscious form structure, access-controlled pipelines, and secure implementation practices. Clinics should still review BAA, storage, and compliance requirements with their legal or compliance advisor.",
  },
  {
    q: "Do we need our own GoHighLevel account?",
    a: "Yes. You own your GoHighLevel account directly. We configure the CRM, workflows, calendars, forms, and handover inside your account.",
  },
  {
    q: "Can you work with our existing clinic website?",
    a: "Yes. We can audit the current site, connect it to GoHighLevel, or rebuild it if the design, speed, SEO, or conversion path is limiting patient inquiries.",
  },
  {
    q: "How fast can this launch?",
    a: "Most healthcare website and CRM bundles can launch in about 14 days when content, branding, access, and approvals are ready on time.",
  },
  {
    q: "What happens after launch?",
    a: "You receive a recorded walkthrough, direct 30-day support, and optional monthly maintenance if you want continued website and CRM help.",
  },
];

export default function HealthcareWebsiteCrmPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Website & CRM Solutions",
    description:
      "Healthcare website design and GoHighLevel CRM setup for clinics, telehealth providers, pain management centers, and specialty practices.",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
    serviceType: "Healthcare Website and CRM Solution",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    offers: {
      "@type": "Offer",
      price: "1300",
      priceCurrency: "USD",
      description: "Healthcare website, GoHighLevel CRM setup, and automation bundle",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Website & CRM Solutions", item: `${SITE.url}/healthcare-website-crm` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <section className="section pt-32 md:pt-40 max-w-[1400px] mx-auto">
          <p className="text-sm text-ink/45 mb-6">
            <Link href="/services" className="hover:text-flux transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <span>Healthcare Website &amp; CRM Solutions</span>
          </p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_500px] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-flux mb-4">Healthcare Website &amp; CRM Solutions</p>
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] mb-6" style={{ letterSpacing: "-0.03em" }}>
                Launch a patient-generating healthcare website and CRM in <span className="text-flux">14 days.</span>
              </h1>
              <p className="text-base md:text-lg text-ink/62 leading-8 max-w-3xl mb-8">
                We build your WordPress website and GoHighLevel CRM together, so every form, call, booking action, reminder, and follow-up works as one connected patient acquisition system.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]" style={{ background: "var(--flux)" }}>
                  Get a free consultation →
                </Link>
                <Link href="/work" className="inline-flex items-center gap-3 rounded-lg border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30">
                  See healthcare work
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["14 days", "Average delivery"],
                  ["90+", "PageSpeed target"],
                  ["4+", "Healthcare builds"],
                  ["30 days", "Support included"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-ink/10 bg-white p-4">
                    <p className="font-display text-2xl font-semibold text-ink mb-1" style={{ letterSpacing: "-0.02em" }}>{value}</p>
                    <p className="text-sm leading-6 text-ink/58">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_24px_80px_rgba(255,90,58,0.10)]">
              <div className="rounded-lg bg-blush p-5">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink/35 mb-1">Patient Flow Preview</p>
                    <h2 className="font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>Visitor to booked appointment</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs text-ink/60">Live system</span>
                </div>
                {["SEO service page answers the search", "Patient calls, books, or submits intake", "GoHighLevel creates the lead instantly", "SMS reminders and follow-up run automatically"].map((item, index) => (
                  <div key={item} className="mb-3 flex items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-4 last:mb-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flux text-xs font-semibold text-white">0{index + 1}</span>
                    <p className="text-sm text-ink/68">{item}</p>
                  </div>
                ))}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Missed call", "Reminder", "Review"].map((item) => (
                    <div key={item} className="rounded-lg bg-white p-3 text-center text-xs text-ink/55">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">The real problem</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Your clinic is not just losing traffic. It is losing follow-up moments.
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="text-sm leading-7 text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">The solution</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
                One system for website, CRM, booking, and follow-up.
              </h2>
              <p className="text-base leading-8 text-ink/62">
                Instead of building a website first and automation later, we design the patient journey and CRM logic together.
              </p>
            </div>
            <div className="space-y-5">
              {solutionSteps.map((item) => (
                <article key={item.step} className="rounded-lg border border-ink/10 bg-white p-6">
                  <p className="text-xs uppercase tracking-widest text-flux mb-4">{item.step}</p>
                  <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p className="text-sm leading-7 text-ink/65 mb-5">{item.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blush px-3 py-1 text-xs text-ink/62 border border-flux/10">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">The 14-day process</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            A clear launch path from first call to working healthcare system.
          </h2>
          <div className="rounded-lg border border-ink/10 bg-white overflow-hidden">
            {processSteps.map((step, index) => (
              <div key={step.title} className={`grid gap-4 p-6 md:grid-cols-[160px_1fr] ${index !== processSteps.length - 1 ? "border-b border-ink/8" : ""}`}>
                <p className="text-xs uppercase tracking-widest text-flux">{step.day}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                  <p className="text-sm leading-7 text-ink/65">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Pricing comparison</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-5" style={{ letterSpacing: "-0.03em" }}>
            What clinics normally pay separately vs. one focused bundle.
          </h2>
          <p className="text-base leading-8 text-ink/62 max-w-4xl mb-8">
            Hiring a designer, developer, CRM consultant, and automation specialist separately gets expensive quickly. Our healthcare bundle starts from <strong>$1,300</strong> and keeps one team responsible for the full system.
          </p>
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <div className="grid grid-cols-[1.2fr_0.9fr_0.8fr] bg-ink text-cream text-xs uppercase tracking-widest">
              <div className="p-4">What you need</div>
              <div className="p-4">Separately</div>
              <div className="p-4">Our bundle</div>
            </div>
            {pricingRows.map(([item, individual, bundled]) => (
              <div key={item} className="grid grid-cols-[1.2fr_0.9fr_0.8fr] border-t border-ink/8 text-sm">
                <div className="p-4 text-ink/72">{item}</div>
                <div className="p-4 text-ink/45">{individual}</div>
                <div className="p-4 font-medium text-flux">{bundled}</div>
              </div>
            ))}
            <div className="grid grid-cols-[1.2fr_0.9fr_0.8fr] border-t border-ink/10 bg-blush text-sm font-medium">
              <div className="p-4">Estimated total</div>
              <div className="p-4">$5,550-$14,100+</div>
              <div className="p-4 text-flux">From $1,300</div>
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Social proof</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Built for clinics that need trust, speed, and cleaner patient follow-up.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="text-sm leading-7 text-ink/68 mb-5">&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-xs text-ink/45 mt-1">{item.location}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 md:p-10 text-cream text-center">
            <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Next step</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              Ready to stop losing patients to slow follow-up?
            </h2>
            <p className="text-sm md:text-base leading-7 text-cream/72 max-w-3xl mx-auto mb-8">
              Book a free strategy call. We will review your current website, patient inquiry flow, and the highest-leverage automation to build first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]" style={{ background: "var(--flux)" }}>
                Book a free strategy call →
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30">
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">FAQs</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Questions clinics usually ask before starting.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-lg border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-medium text-ink">{item.q}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/65">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
