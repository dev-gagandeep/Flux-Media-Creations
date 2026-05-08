import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import HealthcareFaq from "./HealthcareFaq";

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

const whyFlux = [
  {
    title: "Healthcare-focused workflows",
    body: "We build around real clinic behavior: patient inquiries, appointment requests, missed calls, intake handoffs, reminders, and review requests.",
  },
  {
    title: "Fast launch process",
    body: "Your website and CRM are planned together, designed quickly, built in parallel, and tested before launch so the system does not drift for months.",
  },
  {
    title: "CRM + website under one system",
    body: "One team owns the WordPress site, GoHighLevel setup, forms, tracking, and follow-up workflows. No vendor gap between design and automation.",
  },
  {
    title: "Direct communication",
    body: "You work directly with the person building the system, which keeps decisions faster and handoff cleaner.",
  },
  {
    title: "Conversion-first design",
    body: "Every page is structured to answer patient questions, create trust, and move visitors toward booking, calling, or submitting an inquiry.",
  },
  {
    title: "Long-term support",
    body: "Every build includes a recorded walkthrough and 30 days of direct support, with optional maintenance for ongoing website and CRM improvements.",
  },
];

const healthcareIndustries = [
  {
    title: "Pain Management Clinics",
    body: "Service pages, insurance-aware inquiry flows, booking CTAs, and automated follow-up for new patient requests.",
  },
  {
    title: "Orthopedic Clinics",
    body: "Procedure pages, provider trust sections, appointment routing, and local search structure for high-intent patients.",
  },
  {
    title: "Physiotherapy Clinics",
    body: "Mobile-first pages, treatment education, recurring appointment reminders, and review request workflows.",
  },
  {
    title: "Med Spas",
    body: "Offer-led landing pages, consultation booking, missed-call recovery, nurture workflows, and promotional follow-up.",
  },
  {
    title: "Wellness Clinics",
    body: "Service education, trust-building content, inquiry forms, calendar booking, and CRM pipelines for new leads.",
  },
  {
    title: "Chiropractic Clinics",
    body: "Local SEO pages, patient FAQs, lead capture forms, reminder sequences, and automated review requests.",
  },
  {
    title: "Vein Clinics",
    body: "Condition-specific pages, before-care inquiry flow, appointment automation, and patient follow-up sequences.",
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
    metric: "37%",
    metricLabel: "estimated reduction in missed-call loss within 45 days",
    name: "Pain Management Clinic",
    location: "New Jersey",
    quote:
      "The new website made booking clearer, and the automation catches patient inquiries we used to miss. The handover was simple for our team.",
  },
  {
    metric: "2.1x",
    metricLabel: "increase in online appointment request visibility",
    name: "Specialty Healthcare Practice",
    location: "United States",
    quote:
      "Flux understood that a medical site has to build trust quickly. The pages load fast, the contact flow is easy, and follow-up is no longer manual.",
  },
  {
    metric: "24/7",
    metricLabel: "instant SMS response coverage for new inquiries",
    name: "Pain and Vein Center",
    location: "New Jersey",
    quote:
      "We had a site that looked acceptable but did not move patients forward. Connecting the website to GoHighLevel changed the way our leads are handled.",
  },
];

const faqs = [
  {
    q: "Do Healthcare Clinics Need HIPAA-Compliant Forms?",
    a: "Yes. If your healthcare clinic collects sensitive patient information through website forms, HIPAA-compliant forms are highly recommended. Standard contact forms may not securely protect patient data, which can create compliance risks. A properly configured healthcare website should use secure form handling, encrypted data transmission, protected storage systems, and restricted access controls to help safeguard patient information. At Flux Media Creations, we help healthcare practices implement secure lead capture systems and compliant workflows designed for modern patient communication.",
  },
  {
    q: "Can GoHighLevel Work for Medical Practices?",
    a: "Yes. GoHighLevel can work extremely well for medical practices when configured correctly. Healthcare clinics can use it for appointment reminders, missed-call text back, patient follow-up automation, lead tracking, review requests, pipeline management, and internal communication workflows. For clinics looking to improve response times and patient engagement, GoHighLevel helps centralize operations into one easy-to-manage platform.",
  },
  {
    q: "Do we need our own GoHighLevel account?",
    a: "Yes. You own your GoHighLevel account directly. We configure the CRM, workflows, calendars, forms, and handover inside your account.",
  },
  {
    q: "How Long Does a Healthcare Website Take to Build?",
    a: "Most healthcare websites can be designed, developed, and launched within 14-21 days depending on the project scope, number of pages, integrations, and content readiness. Custom medical websites with CRM automation, booking systems, SEO optimization, and advanced workflows may require additional setup time. Our process focuses on launching healthcare websites quickly without sacrificing performance, mobile responsiveness, or patient experience.",
  },
  {
    q: "Do You Integrate Appointment Booking Systems?",
    a: "Yes. We integrate healthcare websites with appointment booking systems, scheduling tools, calendar platforms, and CRM workflows. Patients can easily request appointments online while clinics automatically receive notifications, follow-up reminders, and lead tracking inside the CRM. This helps reduce missed appointments and improves patient communication efficiency.",
  },
  {
    q: "Can You Redesign an Existing Clinic Website?",
    a: "Absolutely. Many clinics already have outdated websites that load slowly, generate few patient inquiries, or lack automation systems. We redesign existing healthcare websites with modern layouts, faster performance, mobile optimization, improved SEO structure, and integrated CRM workflows. Our goal is to transform older clinic websites into patient-generating systems built for long-term growth.",
  },
  {
    q: "Is this HIPAA compliant?",
    a: "We build HIPAA-aware intake and follow-up flows with privacy-conscious form structure, access-controlled pipelines, and secure implementation practices. Clinics should still review BAA, storage, and compliance requirements with their legal or compliance advisor.",
  },
  {
    q: "What happens after launch?",
    a: "You receive a recorded walkthrough, direct 30-day support, and optional monthly maintenance if you want continued website and CRM help.",
  },
  {
    q: "How Much Does a Healthcare Website Cost?",
    a: "The cost of a healthcare website depends on your clinic's needs, including the number of pages, appointment booking features, CRM integrations, automation workflows, SEO setup, and custom functionality. Smaller clinics usually need simpler systems, while larger healthcare practices may require advanced patient workflows and multi-location support. Modern healthcare websites are built not just for design, but for patient generation, communication, and long-term growth.",
  },
  {
    q: "What Is the Best CRM for Healthcare Clinics?",
    a: "The best CRM for a healthcare clinic depends on how your practice manages appointments, patient communication, follow-ups, and lead tracking. Many clinics use CRM systems to automate appointment reminders, missed-call text back, patient follow-ups, review requests, and internal workflows from one centralized dashboard. A properly configured CRM can help clinics save time while improving patient response rates.",
  },
  {
    q: "Why Is a Healthcare Website Important?",
    a: "A healthcare website helps clinics build trust, improve online visibility, attract new patients, and simplify communication. Today's patients search online before choosing a healthcare provider, so having a professional website with appointment booking, mobile optimization, and clear information is essential. A modern medical website also helps clinics compete more effectively in local Google search results.",
  },
  {
    q: "How Can Healthcare Clinics Get More Patients Online?",
    a: "Healthcare clinics can attract more patients online through local SEO, Google Business Profile optimization, fast-loading websites, patient reviews, appointment automation, and conversion-focused website design. Consistent follow-up systems and strong patient communication workflows also help convert more inquiries into booked appointments.",
  },
  {
    q: "What Features Should a Healthcare Website Have?",
    a: "A modern healthcare website should include mobile responsiveness, online appointment booking, fast loading speed, patient inquiry forms, SEO optimization, secure communication systems, trust-building content, reviews, service pages, and CRM integration for automated patient follow-up. These features help clinics improve both user experience and patient conversion rates.",
  },
  {
    q: "How Long Does It Take to Build a Healthcare Website?",
    a: "Most healthcare websites can be completed within 2-4 weeks depending on the complexity of the project, CRM integrations, automation setup, content preparation, and revision requirements. Clinics needing advanced workflows or custom functionality may require additional development time.",
  },
  {
    q: "Can Healthcare Clinics Use Automation?",
    a: "Yes. Healthcare clinics can automate appointment reminders, missed-call text back, patient follow-ups, review requests, intake workflows, and internal notifications. Automation helps reduce manual work while improving communication efficiency and patient response times.",
  },
  {
    q: "What Is Local SEO for Healthcare Clinics?",
    a: "Local SEO helps healthcare clinics appear in Google Maps and local search results when patients search for nearby healthcare services. Local SEO strategies include optimizing Google Business Profiles, location pages, keywords, reviews, local citations, and technical SEO improvements to increase local visibility.",
  },
  {
    q: "Why Is Mobile Optimization Important for Medical Websites?",
    a: "Most patients search for healthcare providers on mobile devices. Mobile optimization improves user experience, appointment booking rates, website speed, and Google rankings while making healthcare websites easier to navigate across all screen sizes.",
  },
  {
    q: "What Is a Patient-Generating Website?",
    a: "A patient-generating website is designed to attract, convert, and follow up with potential patients automatically. These websites combine SEO, appointment booking systems, CRM workflows, lead capture forms, automation, and conversion-focused design to help clinics consistently generate patient inquiries online.",
  },
  {
    q: "Can a Website Help Reduce Missed Appointments?",
    a: "Yes. Healthcare websites integrated with CRM automation systems can automatically send appointment reminders, SMS confirmations, follow-up messages, and notifications. These automated workflows help clinics reduce no-shows and improve patient attendance rates.",
  },
  {
    q: "Do Small Clinics Need SEO?",
    a: "Yes. SEO helps small clinics compete with larger healthcare providers by improving visibility in local Google searches. A properly optimized healthcare website can increase patient inquiries, improve map rankings, and help clinics attract nearby patients searching for healthcare services online.",
  },
  {
    q: "How Do Healthcare Clinics Rank Higher on Google?",
    a: "Healthcare clinics improve Google rankings by optimizing website speed, publishing high-quality content, improving local SEO, targeting healthcare-related keywords, collecting patient reviews, building internal links, and regularly updating service pages and blog content. Consistency and topical authority play a major role in long-term SEO growth.",
  },
  {
    q: "What Is Healthcare Website SEO?",
    a: "Healthcare website SEO is the process of optimizing medical websites to improve visibility in Google and other search engines. This includes keyword targeting, technical SEO, content optimization, internal linking, schema markup, local SEO, and improving overall patient experience on the website.",
  },
  {
    q: "What Makes a Good Medical Website Design?",
    a: "A good medical website design combines trust, fast loading speed, mobile responsiveness, patient-focused messaging, appointment booking systems, SEO optimization, and clear communication. The best healthcare websites help patients quickly find information and easily take action.",
  },
  {
    q: "Can Healthcare Websites Automatically Generate Leads?",
    a: "Yes. Healthcare websites integrated with CRM and automation systems can automatically capture leads, trigger follow-up workflows, send SMS responses, schedule appointments, and nurture patient inquiries without requiring constant manual staff involvement.",
  },
];

export default function HealthcareWebsiteCrmPage() {
  const pageUrl = `${SITE.url}/healthcare-website-crm`;
  const organizationId = `${SITE.url}/#organization`;
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/og-image.svg`,
    description:
      "Flux Media Creations builds conversion-focused WordPress websites, GoHighLevel CRM systems, automation workflows, and SEO foundations for healthcare clinics and service businesses.",
    email: SITE.email,
    telephone: SITE.phone,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: SITE.founderTitle,
      url: `${SITE.url}/about`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
    sameAs: [SITE.instagramUrl, SITE.portfolioUrl],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: "Healthcare Website & CRM Solutions",
    description:
      "Healthcare website design and GoHighLevel CRM setup for clinics, telehealth providers, pain management centers, and specialty practices.",
    provider: {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
    url: pageUrl,
    serviceType: "Healthcare Website and CRM Solution",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    offers: {
      "@type": "Offer",
      url: pageUrl,
      price: "1300",
      priceCurrency: "USD",
      description: "Healthcare website, GoHighLevel CRM setup, and automation bundle",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": faqId,
    url: pageUrl,
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
    "@id": breadcrumbId,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: "Healthcare Website & CRM Solutions", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
                We build your{" "}
                <Link href="/services/wordpress-website-build" className="text-flux hover:underline">
                  WordPress development
                </Link>{" "}
                and{" "}
                <Link href="/services/gohighlevel-automation" className="text-flux hover:underline">
                  healthcare CRM
                </Link>{" "}
                together, so every form, call, booking action, reminder, and follow-up works as one connected patient acquisition system.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]" style={{ background: "var(--flux)" }}>
                  Get My Free Clinic Growth Review →
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
                Instead of building a website first and automation later, we design the patient journey,{" "}
                <Link href="/services/gohighlevel-automation" className="text-flux hover:underline">
                  GoHighLevel automation
                </Link>
                , and CRM logic together.
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
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Why Flux</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-5" style={{ letterSpacing: "-0.03em" }}>
            Why clinics choose Flux.
          </h2>
          <p className="text-base leading-8 text-ink/62 max-w-4xl mb-8">
            Clinics do not need a pretty website sitting apart from operations. They need{" "}
            <Link href="/services/full-growth-system" className="text-flux hover:underline">
              one growth system
            </Link>{" "}
            that explains services clearly, captures patient intent, and follows up without waiting for manual staff action.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyFlux.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="text-sm leading-7 text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Industry specialization</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-5" style={{ letterSpacing: "-0.03em" }}>
            Healthcare industries we work with.
          </h2>
          <p className="text-base leading-8 text-ink/62 max-w-4xl mb-8">
            Each clinic type has different patient questions, trust barriers, and conversion paths. We pair{" "}
            <Link href="/services/search-visibility-engine" className="text-flux hover:underline">
              local SEO
            </Link>{" "}
            with conversion-focused pages and CRM workflows so each service line has a clearer path to appointment.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {healthcareIndustries.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-blush/50 p-6">
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="text-sm leading-7 text-ink/65">{item.body}</p>
              </article>
            ))}
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
            Hiring a designer, developer, CRM consultant, and automation specialist separately gets expensive quickly. Our healthcare bundle starts from <strong>$1,300</strong> and keeps one team responsible for the full system, from{" "}
            <Link href="/services/wordpress-website-build" className="text-flux hover:underline">
              WordPress development
            </Link>{" "}
            to CRM follow-up.
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
                <div className="mb-5 rounded-lg bg-blush p-4">
                  <p className="font-display text-4xl font-semibold text-flux" style={{ letterSpacing: "-0.03em" }}>{item.metric}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink/45">{item.metricLabel}</p>
                </div>
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
              Get a healthcare website audit and clinic growth review. We will look at your current website, patient inquiry flow, appointment path, and the highest-leverage automation to build first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]" style={{ background: "var(--flux)" }}>
                Get a Healthcare Website Audit →
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30">
                See How Your Clinic Can Automate Follow-Up
              </a>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">FAQs</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-5xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Questions clinics usually ask before starting.
          </h2>
          <HealthcareFaq items={faqs} />
        </section>
      </main>
    </>
  );
}
