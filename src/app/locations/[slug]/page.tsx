import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  INDUSTRIES,
  LOCATION_PAGES,
  SERVICES,
  SITE,
  WORK_PROJECTS,
} from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

type LocationPageProps = {
  params: {
    slug: string;
  };
};

type LocationBlueprint = {
  serviceName: string;
  stateOrRegion: string;
  localIntro: string;
  localAreas: string[];
  localPainPoints: string[];
  differentiators: string[];
  localIndustries: string[];
  caseStudy: {
    title: string;
    industry: string;
    problem: string;
    solution: string;
    result: string;
    projectTitle: string;
  };
  testimonials: Array<{ quote: string; name: string; business: string; city: string }>;
  faqs: Array<{ q: string; a: string }>;
  geo: { lat: number; lng: number };
  mapQuery: string;
};

const LOCATION_BLUEPRINTS: Record<string, LocationBlueprint> = {
  us: {
    serviceName: "WordPress Websites and Automation",
    stateOrRegion: "United States",
    localIntro:
      "US buyers compare options quickly and expect immediate trust signals before they contact a business. In many US markets, a website that is even slightly unclear loses enquiries to faster competitors. We build conversion-focused systems for US businesses by combining high-clarity page architecture, strong proof placement, and fast enquiry handling. Our process aligns website UX, CRM routing, and automation so leads move from click to conversation without delay. For service businesses in the United States, this creates better lead quality and more predictable growth from both organic and paid channels.",
    localAreas: ["New York", "New Jersey", "Texas", "California", "Florida"],
    localPainPoints: [
      "High ad spend with low conversion rate",
      "Slow response to web forms and missed calls",
      "Service pages not ranking for local intent",
      "Weak trust positioning in competitive markets",
    ],
    differentiators: [
      "Built for fast US buying cycles",
      "Conversion-first web architecture",
      "CRM + automation integration",
      "Founder-led execution and support",
    ],
    localIndustries: ["Healthcare", "Home services", "Real estate", "Wellness"],
    caseStudy: {
      title: "Healthcare Funnel Conversion Rebuild",
      industry: "Healthcare",
      problem: "Leads were coming in, but response delays reduced booking rates.",
      solution: "Reworked page flow and connected forms to immediate follow-up automations.",
      result: "Higher quality enquiries and faster lead response consistency.",
      projectTitle: "MVM Health",
    },
    testimonials: [
      {
        quote: "The new system helped us respond faster and convert better leads.",
        name: "Jason Miller",
        business: "Healthcare Operations",
        city: "New Jersey, US",
      },
      {
        quote: "Clear structure and practical automation made a visible impact quickly.",
        name: "Ashley Reed",
        business: "Local Service Brand",
        city: "Texas, US",
      },
    ],
    faqs: [
      {
        q: "How much does a WordPress website cost in the US?",
        a: "Pricing depends on scope and integration complexity. We provide clear project ranges after discovery.",
      },
      {
        q: "Do you offer GoHighLevel setup for US businesses?",
        a: "Yes. We build lead routing, reminders, and follow-up systems for US service teams.",
      },
      {
        q: "How long does launch usually take?",
        a: "Timeline depends on scope, but we use a staged process to launch efficiently.",
      },
      {
        q: "Can you support healthcare and home service businesses?",
        a: "Yes. Those are core verticals in our delivery model.",
      },
    ],
    geo: { lat: 37.0902, lng: -95.7129 },
    mapQuery: "United States",
  },
  uk: {
    serviceName: "Web Design and Automation",
    stateOrRegion: "United Kingdom",
    localIntro:
      "UK businesses often compete in dense markets where trust and clarity matter more than visual noise. If pages are unclear or follow-up is slow, leads drop quickly. We help UK service businesses build websites that communicate authority, capture intent, and direct visitors toward clear actions. We then connect forms and enquiry points to practical automation so no lead is left waiting. For businesses in cities like London, Manchester, and Birmingham, this approach improves both conversion quality and operational consistency.",
    localAreas: ["London", "Manchester", "Birmingham", "Leeds"],
    localPainPoints: [
      "Low enquiry rates from existing traffic",
      "No reliable handoff from website to sales",
      "Weak local relevance in service pages",
      "Inconsistent trust cues across the site",
    ],
    differentiators: [
      "Market-fit copy and page hierarchy",
      "Conversion and trust architecture",
      "CRM workflow integration",
      "Clear delivery process",
    ],
    localIndustries: ["Healthcare", "Property services", "Consulting", "Local professional services"],
    caseStudy: {
      title: "Service Site and Follow-Up Alignment",
      industry: "Local Services",
      problem: "Lead capture existed, but follow-up was inconsistent and delayed.",
      solution: "Improved conversion paths and linked forms to automation workflows.",
      result: "More reliable enquiry flow and higher lead quality.",
      projectTitle: "Phone Repair Decatur",
    },
    testimonials: [
      {
        quote: "The website finally reflects our value and converts clearly.",
        name: "Amelia Wright",
        business: "Service Brand",
        city: "London, UK",
      },
      {
        quote: "Faster follow-up immediately improved enquiry handling.",
        name: "Oliver Hughes",
        business: "Clinic Team",
        city: "Manchester, UK",
      },
    ],
    faqs: [
      {
        q: "Do you support UK businesses remotely?",
        a: "Yes. We deliver strategy, build, and support remotely with clear milestones.",
      },
      {
        q: "Can you set up CRM and follow-up automation?",
        a: "Yes. We connect enquiry capture with practical pipeline workflows.",
      },
      {
        q: "How long does a project take in the UK market?",
        a: "Delivery depends on scope, content, and integration requirements.",
      },
      {
        q: "Can you improve local visibility too?",
        a: "Yes. We improve page structure, local intent relevance, and trust signals.",
      },
    ],
    geo: { lat: 55.3781, lng: -3.436 },
    mapQuery: "United Kingdom",
  },
  canada: {
    serviceName: "Websites, Automation, and Visibility",
    stateOrRegion: "Canada",
    localIntro:
      "Canadian service businesses need websites that are both trustworthy and operationally efficient. In markets like Toronto and Vancouver, users expect fast mobile pages, clear service explanations, and instant next steps. We help Canadian businesses convert better by rebuilding page intent flow, strengthening trust blocks, and integrating enquiries with automation. This reduces lead leakage and creates a cleaner process from first click to booked call. If your site currently looks fine but underperforms, we optimize it for conversion behavior, not just aesthetics.",
    localAreas: ["Toronto", "Vancouver", "Calgary", "Ottawa"],
    localPainPoints: [
      "Traffic without consistent enquiries",
      "Manual follow-up causing delays",
      "No local service relevance in page copy",
      "Disconnected web and CRM process",
    ],
    differentiators: [
      "Intent-driven page strategy",
      "Automation-enabled response system",
      "Performance-first implementation",
      "Long-term growth architecture",
    ],
    localIndustries: ["Healthcare", "Home services", "Real estate", "Professional services"],
    caseStudy: {
      title: "Lead Quality Improvement System",
      industry: "Real Estate",
      problem: "Leads were inconsistent and not properly qualified.",
      solution: "Improved message clarity and added immediate follow-up workflows.",
      result: "Better conversion quality and improved enquiry consistency.",
      projectTitle: "Farhan Yousuf — Realtor",
    },
    testimonials: [
      {
        quote: "They simplified our funnel and improved our follow-up flow fast.",
        name: "Noah Tremblay",
        business: "Property Team",
        city: "Toronto, Canada",
      },
      {
        quote: "The website now speaks clearly to the right audience.",
        name: "Maya Chen",
        business: "Clinic Practice",
        city: "Vancouver, Canada",
      },
    ],
    faqs: [
      {
        q: "Can you work with Canadian businesses remotely?",
        a: "Yes. We handle the full process remotely with structured communication.",
      },
      {
        q: "Do you also optimize existing websites?",
        a: "Yes. We can improve conversion and structure without a full rebuild when practical.",
      },
      {
        q: "Do you implement automation too?",
        a: "Yes. We connect forms, lead routing, reminders, and follow-up flows.",
      },
      {
        q: "Can you target city-level visibility in Canada?",
        a: "Yes. We structure pages and internal links for local intent targeting.",
      },
    ],
    geo: { lat: 56.1304, lng: -106.3468 },
    mapQuery: "Canada",
  },
  india: {
    serviceName: "Web Design and Automation",
    stateOrRegion: "India",
    localIntro:
      "Indian businesses are scaling rapidly online, but many still lose leads because websites are unclear and follow-up is manual. We help businesses across India build stronger digital systems by combining conversion-focused websites, practical automation, and better visibility structure. In markets where users compare quickly on mobile, trust and clarity must appear immediately. Our process improves both front-end conversion and back-end lead handling so teams can respond faster, qualify better, and grow with more consistency.",
    localAreas: ["Delhi NCR", "Mumbai", "Bengaluru", "Chandigarh", "Pune"],
    localPainPoints: [
      "Outdated websites with weak CTA flow",
      "Leads from paid channels not handled quickly",
      "No consistent nurture process after first enquiry",
      "Limited local/regional visibility structure",
    ],
    differentiators: [
      "Built for mobile-first Indian audiences",
      "Clear conversion hierarchy",
      "Automation and CRM workflow setup",
      "Practical, founder-led execution",
    ],
    localIndustries: ["Healthcare", "Education", "Real estate", "Service businesses"],
    caseStudy: {
      title: "Integrated Website and Follow-Up Build",
      industry: "Healthcare",
      problem: "Lead quality varied and response flow lacked structure.",
      solution: "Improved page messaging and connected lead actions to automation.",
      result: "More qualified enquiries and cleaner operational handling.",
      projectTitle: "Med Way NJ",
    },
    testimonials: [
      {
        quote: "Our enquiries became more structured and easier to manage.",
        name: "Ritika S",
        business: "Clinic Operations",
        city: "Delhi, India",
      },
      {
        quote: "Execution was clear, fast, and focused on actual outcomes.",
        name: "Aman Verma",
        business: "Service Brand",
        city: "Mumbai, India",
      },
    ],
    faqs: [
      {
        q: "Do you work with Indian businesses of all sizes?",
        a: "Yes. We work with founder-led businesses, clinics, and growth-focused service teams.",
      },
      {
        q: "Can you connect website leads to WhatsApp and CRM workflows?",
        a: "Yes. We set up lead routing and follow-up systems based on your process.",
      },
      {
        q: "How quickly can we start?",
        a: "After discovery and scope alignment, we begin with a clear execution plan.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes. Ongoing support and maintenance options are available.",
      },
    ],
    geo: { lat: 20.5937, lng: 78.9629 },
    mapQuery: "India",
  },
  chandigarh: {
    serviceName: "Websites and Automation",
    stateOrRegion: "Chandigarh",
    localIntro:
      "In Chandigarh, prospects evaluate professionalism quickly. If a website is unclear or slow, confidence drops and enquiries go elsewhere. We help Chandigarh businesses present stronger digital credibility through focused service pages, trust-first content, and cleaner conversion paths. We also connect enquiry points with automation so follow-up is faster and more reliable. From Sector 17 commercial activity to business movement around IT Park and nearby Mohali/Panchkula corridors, our approach is built for practical local growth.",
    localAreas: ["Sector 17", "Sector 34", "IT Park", "Mohali", "Panchkula"],
    localPainPoints: [
      "Local traffic with weak conversion performance",
      "No reliable lead follow-up system",
      "Low trust differentiation against competitors",
      "Website content not aligned to Chandigarh intent",
    ],
    differentiators: [
      "Local positioning for Chandigarh audiences",
      "Trust and conversion focused design",
      "Integrated lead workflow automation",
      "Simple and transparent execution model",
    ],
    localIndustries: ["Clinics", "Consulting", "Home services", "Real estate"],
    caseStudy: {
      title: "Local Conversion and Lead Routing Upgrade",
      industry: "Service Business",
      problem: "Leads were inconsistent and response timing was slow.",
      solution: "Rebuilt CTA flow and connected lead routing to follow-up automation.",
      result: "Faster first response and improved enquiry quality.",
      projectTitle: "Phone Repair Decatur",
    },
    testimonials: [
      {
        quote: "The new website feels premium and performs much better locally.",
        name: "Harpreet Singh",
        business: "Consulting Firm",
        city: "Chandigarh",
      },
      {
        quote: "We stopped losing leads because response now happens quickly.",
        name: "Neha Arora",
        business: "Clinic Team",
        city: "Chandigarh",
      },
    ],
    faqs: [
      {
        q: "How much does a website project in Chandigarh cost?",
        a: "Pricing depends on scope and required integrations. We provide clear ranges and deliverables.",
      },
      {
        q: "Can you set up automation for Chandigarh businesses?",
        a: "Yes. We build practical enquiry and follow-up workflows.",
      },
      {
        q: "How long does delivery take?",
        a: "Timeline depends on project depth, but we run a staged process for faster launch.",
      },
      {
        q: "Do you support Mohali and Panchkula too?",
        a: "Yes. We support businesses across the Chandigarh tri-city region.",
      },
    ],
    geo: { lat: 30.7333, lng: 76.7794 },
    mapQuery: "Chandigarh",
  },
  hoshiarpur: {
    serviceName: "Business Websites and Growth Systems",
    stateOrRegion: "Hoshiarpur, Punjab",
    localIntro:
      "Hoshiarpur businesses are building stronger digital presence, but many websites still fail to convert local visitors into serious enquiries. We help businesses in Hoshiarpur improve online trust and lead flow with clear service messaging, focused page hierarchy, and better conversion paths. We also add practical automation so incoming leads get timely responses instead of being delayed by manual processes. This helps local businesses improve consistency and close more opportunities.",
    localAreas: ["Model Town", "City Center", "Chandigarh Road corridor", "District market areas"],
    localPainPoints: [
      "Low website-to-enquiry conversion",
      "Manual follow-up and delayed response",
      "Weak local trust positioning",
      "No structured growth pages for local terms",
    ],
    differentiators: [
      "Simple conversion-focused implementation",
      "Clear local content structure",
      "Fast lead response setup",
      "Hands-on execution and support",
    ],
    localIndustries: ["Clinics", "Education", "Contractors", "Service businesses"],
    caseStudy: {
      title: "Local Service Conversion Upgrade",
      industry: "Local Services",
      problem: "Traffic existed, but enquiry quality and consistency were weak.",
      solution: "Improved offer clarity, page structure, and conversion prompts.",
      result: "More qualified local enquiries and stronger follow-up consistency.",
      projectTitle: "Farhan Yousuf — Realtor",
    },
    testimonials: [
      {
        quote: "Clear process, practical suggestions, and better enquiry quality.",
        name: "Gurpreet K",
        business: "Local Business Owner",
        city: "Hoshiarpur",
      },
      {
        quote: "Our service pages now explain value clearly and convert better.",
        name: "Simranjit S",
        business: "Healthcare Practice",
        city: "Hoshiarpur",
      },
    ],
    faqs: [
      {
        q: "Do you provide website services in Hoshiarpur?",
        a: "Yes. We support local businesses with websites, conversion optimization, and automation.",
      },
      {
        q: "Can you improve an existing website?",
        a: "Yes. We optimize structure, trust content, and CTA flow where practical.",
      },
      {
        q: "How quickly can a project launch?",
        a: "Timelines vary by scope, but we work in clear staged milestones.",
      },
      {
        q: "Do you support nearby Punjab cities too?",
        a: "Yes. We support broader Punjab and tri-city markets.",
      },
    ],
    geo: { lat: 31.5143, lng: 75.9115 },
    mapQuery: "Hoshiarpur Punjab",
  },
  punjab: {
    serviceName: "Web Design, Automation, and Visibility",
    stateOrRegion: "Punjab",
    localIntro:
      "Punjab markets across Ludhiana, Amritsar, Jalandhar, and Patiala are increasingly digital-first. Businesses that present stronger trust and faster response systems convert better. We help Punjab-focused brands create a connected growth stack: conversion-first websites, automation-led follow-up, and visibility architecture for city and regional intent. This supports better lead quality, reduced drop-off, and more predictable enquiry flow for service-led businesses operating across multiple Punjab locations.",
    localAreas: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali"],
    localPainPoints: [
      "No multi-city page strategy",
      "Weak conversion flow from paid/local traffic",
      "Slow lead qualification process",
      "Limited authority content for regional ranking",
    ],
    differentiators: [
      "Regional location-page architecture",
      "Service + city targeting mesh",
      "Integrated lead routing systems",
      "Execution tuned for long-term growth",
    ],
    localIndustries: ["Healthcare", "Manufacturing services", "Real estate", "Home services"],
    caseStudy: {
      title: "Regional Funnel and Response System",
      industry: "Healthcare and Services",
      problem: "The business needed stronger lead handling across multiple cities.",
      solution: "Built service-focused pages and connected response automation.",
      result: "Better enquiry quality and improved conversion consistency.",
      projectTitle: "MVM Health",
    },
    testimonials: [
      {
        quote: "The new system feels professional and drives better lead conversations.",
        name: "Rajinder Pal",
        business: "Service Brand",
        city: "Ludhiana, Punjab",
      },
      {
        quote: "Follow-up became faster and more reliable across our team.",
        name: "Manpreet Kaur",
        business: "Clinic Team",
        city: "Jalandhar, Punjab",
      },
    ],
    faqs: [
      {
        q: "Do you support businesses across Punjab cities?",
        a: "Yes. We support Punjab-wide businesses with city-aware digital systems.",
      },
      {
        q: "Can one strategy target multiple Punjab locations?",
        a: "Yes. We build regional page structures and internal linking for multi-city intent.",
      },
      {
        q: "Do you also handle CRM and automation?",
        a: "Yes. We connect enquiry capture to practical follow-up workflows.",
      },
      {
        q: "How do we start the process?",
        a: "Start with a quick call or contact request and we will map your key bottlenecks.",
      },
    ],
    geo: { lat: 31.1471, lng: 75.3412 },
    mapQuery: "Punjab India",
  },
};

function getLocation(slug: string) {
  return LOCATION_PAGES.find((item) => item.slug === slug);
}

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function generateStaticParams() {
  return LOCATION_PAGES.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const location = getLocation(params.slug);

  if (!location) {
    return generateMeta({ title: "Locations", path: "/locations" });
  }

  const profile = LOCATION_BLUEPRINTS[location.slug];

  return generateMeta({
    title: `${profile?.serviceName ?? "Web Services"} in ${location.label} | Flux`,
    description: profile?.localIntro ?? location.summary,
    path: `/locations/${location.slug}`,
  });
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  const location = getLocation(params.slug);

  if (!location) {
    notFound();
  }

  const profile = LOCATION_BLUEPRINTS[location.slug];

  if (!profile) {
    notFound();
  }

  const selectedProject =
    WORK_PROJECTS.find((project) => project.title === profile.caseStudy.projectTitle) || WORK_PROJECTS[0];
  const selectedProjectSlug = toSlug(selectedProject.title);

  const serviceSchema = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${location.label}`,
    serviceType: service.title,
    areaServed: location.label,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}${service.href}`,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: profile.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} - ${location.label}`,
    description: profile.localIntro,
    areaServed: location.label,
    telephone: SITE.phone,
    email: SITE.email,
    url: `${SITE.url}/locations/${location.slug}`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/contact`,
      serviceSmsNumber: SITE.phone,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.label,
        item: `${SITE.url}/locations/${location.slug}`,
      },
    ],
  };

  const processSteps = [
    `Discovery call for ${location.label} goals`,
    `Build website and automations for ${location.label} audience intent`,
    "Launch with QA, tracking, and handover",
    `Support and optimize for ${location.label} growth`,
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="section pt-40 md:pt-48 pb-14 max-w-[1100px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">{location.short}</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          {profile.serviceName} in {location.label}, {profile.stateOrRegion}
        </h1>
        <p className="text-base md:text-lg text-ink/55 max-w-3xl leading-relaxed mb-10">
          {location.headline} We build conversion-led digital systems for businesses in {location.label} that need better lead quality and faster follow-up.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4" style={{ background: "var(--flux)", color: "white" }}>
            Get a free quote in {location.label}
            <span>→</span>
          </Link>
          <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-2xl border border-ink/10 bg-white p-5 md:p-6 grid md:grid-cols-4 gap-4 text-sm">
          <div className="text-ink/70">Delivery-focused growth systems</div>
          <div className="text-ink/70">Representative outcomes from similar projects</div>
          <div className="text-ink/70">4+ years serving {profile.stateOrRegion}</div>
          <div className="text-ink/70">Conversion-first implementation model</div>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">City-specific intro</p>
          <p className="text-sm md:text-base text-ink/65 leading-8 mb-5">{profile.localIntro}</p>
          <p className="text-sm md:text-base text-ink/65 leading-8">In {location.label}, we focus on page clarity, trust cues, and workflow speed so visitors can quickly understand value, take action, and receive timely follow-up.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.localAreas.map((area) => (
              <span key={area} className="text-xs px-2.5 py-1 rounded-full bg-ink/5 text-ink/55">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Services offered in {location.label}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-ink/10 bg-white p-6">
              <Link href={service.href} className="font-display text-2xl font-semibold hover:text-flux transition-colors" style={{ letterSpacing: "-0.02em" }}>
                {service.title}
              </Link>
              <p className="text-sm text-ink/60 leading-7 mt-3 mb-3">{service.title} for {location.label} businesses</p>
              <p className="text-sm text-ink/55 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-ink text-cream p-8">
          <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Why choose us in {location.label}</p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-cream/80 leading-7">
            {profile.differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-cream/10 p-5">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Local case study</p>
          <h2 className="font-display text-3xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>{profile.caseStudy.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-ink/45 mb-2">Industry</p>
              <p className="text-sm text-ink/70 mb-4">{profile.caseStudy.industry}</p>
              <p className="text-sm text-ink/45 mb-2">Problem</p>
              <p className="text-sm text-ink/70 mb-4">{profile.caseStudy.problem}</p>
              <p className="text-sm text-ink/45 mb-2">Solution</p>
              <p className="text-sm text-ink/70">{profile.caseStudy.solution}</p>
            </div>
            <div className="rounded-2xl border border-ink/10 p-6" style={{ background: `${selectedProject.accent}10` }}>
              <p className="text-sm font-medium mb-3" style={{ color: selectedProject.accent }}>Result</p>
              <p className="text-sm text-ink/70 leading-7 mb-5">{profile.caseStudy.result}</p>
              <p className="text-sm text-ink/55 leading-7">Featured project: {selectedProject.title}</p>
              <Link href={`/work/${selectedProjectSlug}`} className="inline-flex mt-5 text-sm font-medium hover:text-flux transition-colors" style={{ color: "var(--flux)" }}>
                View full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Representative outcomes</p>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {profile.testimonials.map((review, index) => (
            <article key={`${review.name}-${index}`} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-sm text-ink/70 leading-7 mb-4">"{review.quote}"</p>
              <p className="text-xs text-ink/45 mt-1">Anonymized client outcome · Similar market segment</p>
            </article>
          ))}
        </div>
        <p className="text-xs text-ink/45">Names are intentionally omitted for confidentiality unless public permission is available.</p>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Local FAQ</p>
        <div className="grid md:grid-cols-2 gap-5">
          {profile.faqs.map((item) => (
            <div key={item.q} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="font-medium text-sm mb-2">{item.q}</p>
              <p className="text-sm text-ink/60 leading-7">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Industries served in {location.label}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {INDUSTRIES.map((industry) => (
            <article key={industry.slug} className="rounded-3xl border border-ink/10 bg-white p-6">
              <Link href={`/industries#${industry.slug}`} className="font-medium text-sm hover:text-flux transition-colors">
                {industry.label} in {location.label}
              </Link>
              <p className="text-sm text-ink/60 leading-7 mt-2">{industry.headline}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">How we work with {location.label} clients</p>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-ink/10 p-5 text-sm text-ink/70">
                <p className="text-xs text-ink/40 mb-2">0{index + 1}</p>
                {step}
              </div>
            ))}
          </div>
          <Link href="/process" className="text-sm font-medium hover:text-flux transition-colors" style={{ color: "var(--flux)" }}>
            View full process →
          </Link>
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Related local content</p>
        <div className="grid md:grid-cols-2 gap-5">
          {BLOG_POSTS.slice(0, 2).map((article) => (
            <article key={article.slug} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">{article.category}</p>
              <Link href={`/blog/${article.slug}`} className="font-medium text-sm hover:text-flux transition-colors">
                {article.title}
              </Link>
              <p className="text-sm text-ink/55 leading-7 mt-2">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1100px] mx-auto pt-0">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Ready to grow in {location.label}?</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              Book a free strategy call for your {location.label} business.
            </h2>
            <p className="text-sm md:text-base text-cream/70 leading-7 max-w-xl">
              We will review your current funnel, identify lead leaks, and propose a practical execution plan.
            </p>
            <div className="mt-5 text-sm text-cream/70 space-y-1">
              <p>Phone: {SITE.phone}</p>
              <p>Email: {SITE.email}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4" style={{ background: "var(--flux)", color: "white" }}>
              Request proposal
              <span>→</span>
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/30 text-cream/90">
              WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/30 text-cream/90">
              Press contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
