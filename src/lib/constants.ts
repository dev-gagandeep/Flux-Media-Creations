export const SITE = {
  name: "Flux Media Creations",
  tagline: "Websites & Automation That Work While You Sleep",
  description:
    "We build high-converting WordPress websites and GoHighLevel automation systems for healthcare clinics and home service businesses across the US. From design to deployment — fully connected.",
  url: "https://fluxmediacreations.com",
  email: "fluxmediacreations@gmail.com",
  phone: "+91 6284957892",
  whatsapp: "916284957892",
  location: "India — Serving US clients remotely",
  founder: "Gagan Deep",
  founderTitle: "Founder & Lead Developer",
  portfolioUrl: "https://gagandeep.space",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  cover: string;
  content: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wordpress-ghl-growth-system-us-businesses",
    title: "WordPress + GoHighLevel Growth System for US Businesses: The Practical 2026 Playbook",
    excerpt:
      "A full-stack guide to building a conversion-focused WordPress website and GoHighLevel follow-up engine that turns more traffic into booked calls and qualified customers.",
    date: "2026-04-13",
    readTime: "18 min read",
    category: "Growth Systems",
    author: "Gagan Deep",
    cover: "/images/work/mvm-health.jpg",
    content: [
      "Most businesses do not have a traffic problem. They have a response-time problem, a message-clarity problem, and a follow-up consistency problem.",
      "You can spend money on ads, SEO, referrals, and social content, but if your website does not direct users toward one clean next step and your CRM does not respond instantly, that demand leaks out of the system.",
      "This guide explains how to build one connected growth engine with WordPress on the front end and GoHighLevel on the backend. It is the same structure we use for service brands that need predictable lead flow and reliable conversion operations.",
      "If you are starting from scratch, read in order. If you already have a website but weak follow-up, jump to the automation chapters and then come back to conversion architecture.",
      "You can also open these internal pages while reading for context: [Services], [Work], [Industries], [Process], and [Contact].",
      "Part 1: Strategy before design. Every high-converting build begins with clear targeting. One audience, one primary offer, one primary CTA. Your website should not feel like a menu of unrelated ideas.",
      "When visitors land on your homepage, they should answer three questions in under ten seconds: What do you do, who is it for, and what should I do next.",
      "If any of these are unclear, the page may still look premium, but conversion will stay unstable. Design cannot fix positioning confusion.",
      "Part 2: Homepage structure that sells. Keep the navigation simple. Use clear labels for services, proof, process, and contact. Add a primary action in the first viewport and repeat it across the page.",
      "The hero section should contain a direct value statement, a short support line, and one action path. Avoid vague slogans unless they are paired with a precise sub-headline.",
      "A stat bar under the fold builds fast trust when done correctly. Use proof-oriented metrics only: years building systems, delivery consistency, platform outcomes, or response standards.",
      "Part 3: Service page architecture. Each service page should follow the same decision pattern: problem, what is delivered, how delivery works, expected outcomes, and common objections.",
      "Do not hide core details. Buyers are not only comparing price. They are comparing certainty. The more clearly they understand scope and process, the lower your sales friction.",
      "Every service page should include one direct CTA and one softer CTA. For example: Book a call or send requirements. This captures both high-intent and lower-intent leads.",
      "Part 4: Trust stack. Most websites add testimonials at the end. Strong websites distribute proof through the entire page.",
      "Use micro-proof near claims: short client outcomes, implementation snapshots, platform badges, and specific project context. This keeps credibility tied to the promise being made.",
      "If you have case studies, convert them into scannable cards with business type, stack used, and measurable impact. You can showcase them in [Work] and link from related service pages.",
      "Part 5: Form design and lead capture. Your form should ask for only what is needed to start qualification. Name, business, contact, service interest, and one goal field are enough for most projects.",
      "Long forms reduce completion rate unless your offer has strong demand and trust. Keep first-step friction low, then qualify deeper during follow-up.",
      "A common mistake is using forms that disappear into inboxes. The visitor submits, but nothing happens quickly. This is where GoHighLevel closes the gap.",
      "Part 6: Instant follow-up with GoHighLevel. Build an immediate acknowledgment flow that triggers within seconds after submission.",
      "The first message should confirm receipt, set expectations, and offer one next step. Keep tone human and concise. Avoid over-automated language.",
      "Then route the lead by service type. Website leads, automation leads, and support leads should not enter the same generic sequence.",
      "Add appointment confirmation, reminder, and no-show recovery paths. Most teams lose more deals in scheduling chaos than in top-of-funnel demand.",
      "Part 7: Missed-call recovery. If your team receives inbound calls, missed-call text-back is one of the highest ROI automations you can deploy.",
      "When a call is not answered, trigger an SMS within 20 to 40 seconds with a direct booking option. This recovers opportunities that would otherwise move to competitors.",
      "Keep compliance in mind for SMS policies and sender setup. Build clean opt-in language on forms and ensure message frequency is clear.",
      "Part 8: Pipeline visibility. Automation is not only about sending messages. It is about making pipeline movement visible.",
      "Define stages that match your real sales process: new lead, contacted, qualified, proposal, closed won, closed lost. Avoid vanity stages no one uses.",
      "Assign clear ownership. Every stage should have one responsible role and one target action. This prevents pipeline stagnation.",
      "Part 9: Content and SEO alignment. Search traffic converts best when page intent and query intent match.",
      "Build landing pages around service + audience combinations, not broad generic topics. For example, website systems for clinics, CRM automations for local services, or integrated website + GHL stacks.",
      "Strengthen internal linking. Link service pages to case studies, process pages, and conversion-focused blog content. Good internal architecture improves crawl clarity and user flow.",
      "Part 10: GEO and AI visibility. Traditional SEO still matters, but answer completeness and structure now influence AI-driven discovery too.",
      "Use clear section headings, direct answers, schema markup, and credibility signals across core pages. If your page is easier to parse, it is easier to surface.",
      "This is why we treat schema as a baseline layer, not an optional add-on. Homepage, service pages, location pages, and article pages should each carry useful structured data.",
      "Part 11: Conversion math that actually matters. You do not need dozens of dashboards. Start with four numbers: lead response time, booked call rate, show-up rate, and close rate.",
      "If response time improves but booked calls do not, your message may be weak. If booked calls rise but show-up drops, reminders or confirmation copy needs work.",
      "System improvement is easier when each step has one owner and one metric.",
      "Part 12: Common implementation mistakes. Mistake one is over-designing before messaging is clear. Mistake two is adding too many CTAs with no priority. Mistake three is building automations no one on the team can maintain.",
      "Mistake four is launching without end-to-end testing. Submit the form, receive messages, book the appointment, move the stage, and verify notifications. Test every path before going live.",
      "Mistake five is ignoring mobile behavior. Most first touches are mobile. If pages load slowly or forms are painful, conversion drops immediately.",
      "Part 13: 30-day rollout plan. Week 1: positioning, page architecture, and offer clarity. Week 2: homepage + service page build and proof stack integration.",
      "Week 3: CRM pipeline, core automations, reminders, and recovery sequences. Week 4: QA, analytics, schema validation, and sales team handoff.",
      "This pace keeps momentum high and avoids endless revisions that never reach launch quality.",
      "Part 14: What to do next. If your current website generates traffic but weak conversions, start by fixing message clarity and CTA flow.",
      "If your team is losing leads after form fills or missed calls, prioritize GoHighLevel response systems immediately.",
      "If both layers are weak, implement one connected build so your website and automation stack work as a single revenue system.",
      "For implementation support, review [Services], explore project outcomes in [Work], and send your current setup through [Contact]. We can map the exact bottlenecks and suggest the highest-leverage first build.",
    ],
    faq: [
      {
        question: "What is marketing automation in simple terms?",
        answer:
          "It is a connected set of systems that captures leads, replies fast, sends follow-up messages, and helps your team move prospects toward a booked call or sale without manual chasing every time.",
      },
      {
        question: "How does automation help small businesses?",
        answer:
          "It reduces response delays, keeps follow-up consistent, improves booking rates, and gives business owners clearer visibility into where leads are getting stuck.",
      },
      {
        question: "Is GoHighLevel suitable for all businesses?",
        answer:
          "It works especially well for service businesses, clinics, agencies, and local brands that depend on lead capture, appointment booking, and repeat follow-up. The exact setup still needs to match the business model.",
      },
      {
        question: "Do I need an expert to set it up?",
        answer:
          "Not always, but expert setup usually saves time and avoids broken workflows, weak messaging, and tracking gaps. The more tools and handoffs involved, the more valuable good implementation becomes.",
      },
      {
        question: "What should I automate first?",
        answer:
          "Start with the places where revenue leaks most often: form responses, missed-call text back, appointment reminders, and pipeline stage movement after a lead comes in.",
      },
    ],
  },
];

export const SERVICES = [
  {
    number: "01",
    slug: "wordpress-website-build",
    title: "WordPress Website Build",
    description:
      "Custom WordPress website design built from Figma to go-live. Mobile-first, SEO-optimized, and consistently hitting PageSpeed 90+ scores. Designed for healthcare clinics, home service businesses, and real estate professionals who need a site that actually converts visitors into leads.",
    tags: ["WordPress", "Elementor", "Figma", "SEO"],
    from: "$500",
    href: "/services/wordpress-website-build",
  },
  {
    number: "02",
    slug: "gohighlevel-automation",
    title: "GoHighLevel Setup & Automation",
    description:
      "Full GoHighLevel CRM setup for your business: lead pipelines, missed call text-back, appointment booking, SMS reminders, review generation, and A2P SMS registration. Stop losing leads to slow response times.",
    tags: ["GoHighLevel", "SMS Automation", "CRM", "A2P"],
    from: "$300",
    href: "/services/gohighlevel-automation",
  },
  {
    number: "03",
    slug: "full-growth-system",
    title: "Full Growth System",
    description:
      "Your WordPress website and GoHighLevel CRM fully connected and working together. Every form submission triggers an instant automated follow-up. One agency, one point of contact, everything built and delivered in 14–21 days.",
    tags: ["Website", "GHL", "Automation", "Integrated"],
    from: "$800",
    href: "/services/full-growth-system",
    featured: true,
  },
  {
    number: "04",
    slug: "airtable-business-hub",
    title: "Airtable CRM & Business Hub",
    description:
      "Custom Airtable CRM, project tracker, and client portal built around how your business actually works. Automated email triggers, visual dashboards, and reporting — without the complexity of enterprise software.",
    tags: ["Airtable", "CRM", "Automation", "Dashboards"],
    from: "$200",
    href: "/services/airtable-business-hub",
  },
  {
    number: "05",
    slug: "make-zapier-automation",
    title: "Make & Zapier Automation",
    description:
      "Connect your tools and eliminate manual data entry. Facebook Lead Ads → GoHighLevel → Airtable → Calendar. We build multi-platform lead routing and automation workflows that save your team hours every week.",
    tags: ["Make", "Zapier", "Webhooks", "Integrations"],
    from: "$150",
    href: "/services/make-zapier-automation",
  },
  {
    number: "06",
    slug: "monthly-maintenance",
    title: "WordPress & GHL Monthly Maintenance",
    description:
      "WordPress core updates, security scans, daily backups, GoHighLevel workflow monitoring, speed optimization, and content updates. Direct access to us — not a support ticket queue.",
    tags: ["Support", "Maintenance", "Security", "GHL"],
    from: "$150/mo",
    href: "/services/monthly-maintenance",
  },
  {
    number: "07",
    slug: "search-visibility-engine",
    title: "Search Visibility Engine",
    description:
      "A complete discovery system built for search engines, Google Maps, and AI-driven results. We help the right businesses find you faster — across Google, ChatGPT, Perplexity, and local map searches.",
    tags: ["Discovery", "Maps", "AI Search", "Visibility"],
    from: "$400",
    href: "/services/search-visibility-engine",
  },
];

export const SERVICE_PAGES = [
  {
    slug: "wordpress-website-build",
    title: "WordPress Website Build",
    category: "Website Development",
    audience: "Clinics, local service businesses, and founders who need a site that looks credible and converts.",
    intro:
      "We design and build custom WordPress sites that feel premium, load quickly, and guide visitors toward a clear next step. Every page is structured for trust, mobile usability, and search visibility.",
    outcome:
      "A polished, conversion-focused website that supports your brand, explains your services clearly, and turns traffic into qualified inquiries.",
    credibility: ["Founder-led delivery", "Mobile-first UX", "SEO-aware structure", "Analytics-ready launch"],
    deliverables: [
      "Discovery call and content mapping",
      "Information architecture and conversion wireframe",
      "Custom visual design in a premium brand direction",
      "WordPress build with responsive layouts",
      "Core SEO setup, metadata, and indexability checks",
      "Form testing, analytics, and launch handoff",
    ],
    process: [
      {
        title: "Strategy and scope",
        description:
          "We define goals, target users, page structure, and the conversion actions the site needs to drive.",
      },
      {
        title: "Design and approval",
        description:
          "We present a clean visual direction before build so the final site stays aligned with the brand from the start.",
      },
      {
        title: "Build and launch",
        description:
          "We implement the site, optimize the technical details, test across devices, and support the launch process.",
      },
    ],
    faq: [
      {
        q: "How long does a WordPress build take?",
        a: "Most website-only projects take about 7-10 days once content is ready and the scope is approved.",
      },
      {
        q: "Do you handle SEO basics?",
        a: "Yes. Every build includes clean heading structure, metadata, performance-conscious layout choices, and launch checks.",
      },
      {
        q: "Can you rebuild an existing site?",
        a: "Yes. We can improve an existing website, migrate the content, and keep the parts that still work while fixing the weak spots.",
      },
    ],
    cta: "Get a website that feels credible from the first click.",
    serviceType: "WordPress Website Development",
  },
  {
    slug: "gohighlevel-automation",
    title: "GoHighLevel Automation",
    category: "CRM and Automation",
    audience: "Businesses that want instant lead follow-up, better booking rates, and fewer missed opportunities.",
    intro:
      "We build GoHighLevel systems that respond quickly, nurture leads consistently, and reduce manual admin. The goal is simple: every lead gets a fast, relevant follow-up.",
    outcome:
      "A working CRM system that captures leads, routes them correctly, sends reminders, and keeps your pipeline moving.",
    credibility: ["Fast-response workflows", "A2P-aware setup", "Sales pipeline clarity", "Lead recovery built in"],
    deliverables: [
      "Pipeline and opportunity stage setup",
      "Missed-call text-back and instant lead acknowledgment",
      "Appointment booking, reminder, and no-show sequences",
      "Review request and reactivation automations",
      "Basic reporting and workflow documentation",
      "Handoff training so your team can use it confidently",
    ],
    process: [
      {
        title: "Audit the lead flow",
        description:
          "We map how leads arrive today and where they are getting lost so the automation solves real bottlenecks.",
      },
      {
        title: "Build the workflows",
        description:
          "We create the core automations, test edge cases, and verify the messaging is clear and timely.",
      },
      {
        title: "Refine and document",
        description:
          "We finalize the system, document it, and make sure your team knows how to operate it.",
      },
    ],
    faq: [
      {
        q: "Do I need an existing GoHighLevel account?",
        a: "Yes. We can work inside your account or help you set one up, depending on your current setup.",
      },
      {
        q: "Can you set up missed-call text back?",
        a: "Yes. That is one of the most important automations for service businesses and clinics, and we include it when needed.",
      },
      {
        q: "Will this work with my existing website?",
        a: "In most cases, yes. We can connect forms, booking flows, and tracking to your existing site.",
      },
    ],
    cta: "Stop losing leads between the form and the follow-up.",
    serviceType: "GoHighLevel Automation Setup",
  },
  {
    slug: "full-growth-system",
    title: "Full Growth System",
    category: "Website + Automation",
    audience: "Businesses that want one connected system instead of a disconnected website and CRM.",
    intro:
      "This is the complete setup: a conversion-focused website connected to a GoHighLevel workflow engine so every inquiry is captured, acknowledged, and followed up automatically.",
    outcome:
      "A connected revenue system where your site and CRM work together instead of operating in isolation.",
    credibility: ["Single-owner implementation", "Website and CRM integration", "End-to-end lead tracking", "Built for speed"],
    deliverables: [
      "Custom website pages and conversion structure",
      "Lead capture forms connected to GHL",
      "Automated booking, reminders, and follow-up",
      "Pipeline setup and response routing",
      "Reporting touchpoints for visibility",
      "Launch support and workflow handoff",
    ],
    process: [
      {
        title: "Plan the system",
        description:
          "We define the customer journey from first click to booked appointment so the build stays focused.",
      },
      {
        title: "Build both layers",
        description:
          "We develop the website and automation stack together so every touchpoint is connected properly.",
      },
      {
        title: "Test the full path",
        description:
          "We verify the forms, handoffs, reminders, and booking flow from the user’s perspective before launch.",
      },
    ],
    faq: [
      {
        q: "Why choose the full system instead of separate services?",
        a: "Because one connected workflow is easier to maintain and usually converts better than two separate setups.",
      },
      {
        q: "Can you use my current brand and content?",
        a: "Yes. We can work with existing assets or help improve the structure and messaging if needed.",
      },
      {
        q: "Is this suitable for clinics and local services?",
        a: "Yes. It is especially useful when lead speed, booking, and follow-up directly affect revenue.",
      },
    ],
    cta: "Build the full system once and make every lead count.",
    serviceType: "Integrated Website and Automation System",
  },
  {
    slug: "airtable-business-hub",
    title: "Airtable Business Hub",
    category: "Operations and CRM",
    audience: "Teams that need a lightweight, custom internal hub for tracking clients, projects, or operations.",
    intro:
      "We design Airtable systems that make the back office easier to run. Instead of scattered spreadsheets and manual check-ins, you get a central source of truth.",
    outcome:
      "A flexible operations hub with clearer data, easier handoffs, and less time spent hunting for information.",
    credibility: ["Custom data structure", "Visual dashboards", "Process-oriented design", "Automation-ready"],
    deliverables: [
      "Base architecture and table design",
      "Views, filters, and dashboard layouts",
      "Client or project tracking workflows",
      "Automated alerts and status updates",
      "Documentation for internal use",
      "Optional integrations with forms or email tools",
    ],
    process: [
      {
        title: "Map the workflow",
        description:
          "We identify what needs to be tracked, who uses the data, and what should happen when status changes.",
      },
      {
        title: "Build the hub",
        description:
          "We create the structure, views, and automations so the system stays easy to understand and maintain.",
      },
      {
        title: "Train and refine",
        description:
          "We walk your team through the system and make adjustments based on real usage.",
      },
    ],
    faq: [
      {
        q: "What can an Airtable hub replace?",
        a: "It can replace manual spreadsheets, messy inbox-based tracking, and inconsistent project or client updates.",
      },
      {
        q: "Can it connect to forms or automation tools?",
        a: "Yes. Airtable works well with forms, email automation, webhooks, and tools like Make or Zapier.",
      },
      {
        q: "Is this a CRM or an internal dashboard?",
        a: "It can be either, or both. We shape it around how your team actually works.",
      },
    ],
    cta: "Bring order to the tools your team already uses.",
    serviceType: "Airtable Operations Hub",
  },
  {
    slug: "make-zapier-automation",
    title: "Make / Zapier Automation",
    category: "Automation Workflows",
    audience: "Businesses that need different tools to talk to each other without manual copy-paste work.",
    intro:
      "We connect the apps your business already relies on so leads, tasks, and updates move automatically from one system to the next.",
    outcome:
      "A practical automation layer that saves time, reduces errors, and keeps your team focused on actual work.",
    credibility: ["Cross-platform integrations", "Webhook and API logic", "Fast implementation", "Lean workflow design"],
    deliverables: [
      "Trigger and routing logic for connected tools",
      "Lead capture to CRM or spreadsheet handoff",
      "Notifications, reminders, and task creation",
      "Error handling and fallback logic",
      "Workflow mapping and documentation",
      "Testing across the full automation path",
    ],
    process: [
      {
        title: "Choose the trigger",
        description:
          "We define the event that starts the automation and the exact destination for each output.",
      },
      {
        title: "Build the chain",
        description:
          "We connect the tools, validate the logic, and make sure the automation behaves reliably.",
      },
      {
        title: "Monitor and improve",
        description:
          "We review the flow after launch so the system stays useful as the business grows.",
      },
    ],
    faq: [
      {
        q: "Which tools can you connect?",
        a: "We commonly connect forms, CRMs, calendars, email tools, spreadsheets, and lead ad platforms.",
      },
      {
        q: "Do I need Make or Zapier already?",
        a: "Not necessarily. We can work with the tool you already use or help you choose the right one.",
      },
      {
        q: "Can you replace manual admin work?",
        a: "Yes. This service is built to remove repetitive steps from your process wherever it is practical to do so.",
      },
    ],
    cta: "Stop moving data by hand between your tools.",
    serviceType: "Workflow Automation",
  },
  {
    slug: "monthly-maintenance",
    title: "Monthly Maintenance",
    category: "Ongoing Support",
    audience: "Businesses that want a reliable partner to keep the website healthy, fast, and updated.",
    intro:
      "A good launch is only the start. Ongoing maintenance keeps your site secure, your automations reliable, and your content up to date as the business changes.",
    outcome:
      "A dependable support plan that protects your site, keeps small issues from becoming big ones, and reduces downtime risk.",
    credibility: ["Preventive maintenance", "Security-minded updates", "Speed and uptime checks", "Direct support access"],
    deliverables: [
      "WordPress core, theme, and plugin updates",
      "Backups and basic security monitoring",
      "Speed and uptime checks",
      "Minor content updates and tweaks",
      "GHL or automation health checks if included",
      "Priority support for active clients",
    ],
    process: [
      {
        title: "Review the current setup",
        description:
          "We check the site and automation stack so we know what needs ongoing attention.",
      },
      {
        title: "Maintain and monitor",
        description:
          "We handle updates, watch for issues, and keep the important parts of the system stable.",
      },
      {
        title: "Support changes",
        description:
          "When you need small edits or fixes, we handle them without slowing your team down.",
      },
    ],
    faq: [
      {
        q: "What is included in maintenance?",
        a: "Regular updates, backups, checks, and support for the items agreed in the plan.",
      },
      {
        q: "Do you support sites you did not build?",
        a: "In some cases, yes. We first review the setup to confirm it is safe and maintainable.",
      },
      {
        q: "Is this only for WordPress?",
        a: "WordPress is the most common use case, but related automation support can also be included depending on the plan.",
      },
    ],
    cta: "Keep your site and systems stable after launch.",
    serviceType: "Website and Automation Maintenance",
  },
  {
    slug: "search-visibility-engine",
    title: "Search Visibility Engine",
    category: "Discovery and Visibility",
    audience: "Businesses that want stronger visibility in local results, map listings, and AI-assisted discovery.",
    intro:
      "We build a visibility system that helps your business show up when people search in the places that matter most: organic results, map packs, and AI-powered answer engines.",
    outcome:
      "A sharper discovery footprint that makes your brand easier to find, easier to trust, and easier to choose.",
    credibility: ["Local discovery focus", "Map-ready structure", "AI-friendly content cues", "Trust-building content"],
    deliverables: [
      "Visibility audit across pages, listings, and content structure",
      "Service and location page architecture",
      "Search-intent copy that matches real customer questions",
      "Map and profile consistency guidance",
      "Schema, internal linking, and metadata refinement",
      "Content plan for ongoing authority building",
    ],
    process: [
      {
        title: "Find the gaps",
        description:
          "We review how your business currently shows up and where it is losing visibility compared with stronger competitors.",
      },
      {
        title: "Build the visibility layer",
        description:
          "We improve the structure, wording, and trust signals so your pages are easier to understand and recommend.",
      },
      {
        title: "Expand discovery",
        description:
          "We create a practical roadmap for content and local relevance so your visibility keeps growing after launch.",
      },
    ],
    faq: [
      {
        q: "Is this just another SEO service?",
        a: "No. The focus is broader: organic discovery, map presence, and AI-driven visibility cues that help people find you in more places.",
      },
      {
        q: "Who is this best for?",
        a: "It works well for local businesses, clinics, and service brands that depend on being discovered by nearby or intent-driven searchers.",
      },
      {
        q: "Do you also improve existing pages?",
        a: "Yes. We can tune what you already have, then add the structure and content gaps that make it easier to rank and get chosen.",
      },
    ],
    cta: "Make your business easier to discover in the places people actually search.",
    serviceType: "Search Visibility and Discovery Strategy",
  },
];

export const INDUSTRIES = [
  {
    slug: "healthcare",
    label: "Healthcare Clinics",
    emoji: "⚕",
    headline: "Every missed patient call is a missed appointment.",
    description:
      "We build WordPress websites for pain management clinics, vein treatment centers, orthopedic practices, telehealth providers, and wellness centers across the United States. Every site connects directly to a GoHighLevel CRM with instant SMS follow-up — so no patient inquiry goes cold, even at 11pm. We understand HIPAA-safe intake form requirements and patient portal integrations.",
    what: ["Physician referral pipelines", "Instant patient SMS confirmation via GoHighLevel", "Appointment booking + automated reminders", "HIPAA-safe intake forms", "Google review automation", "Telehealth integration pages"],
  },
  {
    slug: "home-services",
    label: "Home Services",
    emoji: "🔧",
    headline: "Your next customer called. Did you answer?",
    description:
      "HVAC companies, plumbers, electricians, roofers, and cleaning services lose thousands of dollars every month to missed calls and slow follow-up. We build WordPress websites with GoHighLevel missed call text-back and automated lead nurture — so every inquiry gets an instant response, even when your team is on a job.",
    what: ["Missed call text-back automation", "Online booking and dispatch integration", "Service area landing pages for local SEO", "Facebook Lead Ads to GHL automation", "Review generation workflows"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    emoji: "🏠",
    headline: "Buyers and sellers choose the agent who responds first.",
    description:
      "We build WordPress websites for real estate agents and brokers with IDX property listings, automated lead capture, and GoHighLevel follow-up sequences that keep buyers and sellers engaged from first inquiry to signed contract.",
    what: ["IDX property search integration", "Automated buyer and seller nurture sequences", "Lead capture forms connected to GoHighLevel", "Neighborhood and listing landing pages", "SMS appointment reminders"],
  },
  {
    slug: "beauty-wellness",
    label: "Beauty & Wellness",
    emoji: "✦",
    headline: "Your booking calendar should fill itself.",
    description:
      "Med spas, salons, aesthetics clinics, and wellness studios need websites that make booking effortless. We build WordPress sites with online booking integration and GoHighLevel automation for appointment reminders, review requests, and client reactivation campaigns.",
    what: ["Online booking integration", "Automated appointment reminders", "Client reactivation SMS campaigns", "Google review automation", "Before/after gallery pages"],
  },
];

export const SECONDARY_INDUSTRIES = [
  {
    slug: "dental-practices",
    label: "Dental Practices",
    emoji: "🦷",
    headline: "A clean, reassuring presence that turns local searchers into booked patients.",
    summary: "Emergency booking flows, treatment pages, and follow-up systems for practices that need trust fast.",
    what: ["Treatment page structure", "New patient booking flows", "Review request automation"],
  },
  {
    slug: "law-firms",
    label: "Law Firms",
    emoji: "⚖",
    headline: "Clear positioning, stronger intake, and a more confident first impression.",
    summary: "Built for firms that need to explain services simply, capture consultations, and respond quickly.",
    what: ["Practice area pages", "Consultation intake forms", "Lead routing automations"],
  },
  {
    slug: "ecommerce-brands",
    label: "Ecommerce Brands",
    emoji: "🛒",
    headline: "Product-first pages that keep attention on the offer and reduce friction.",
    summary: "Landing pages, abandoned cart follow-up, and conversion-focused messaging for product sellers.",
    what: ["Offer landing pages", "Cart recovery automations", "Conversion copy alignment"],
  },
  {
    slug: "contractors",
    label: "Contractors",
    emoji: "🏗",
    headline: "Local trust signals and fast response systems for quote-driven businesses.",
    summary: "Perfect for builders, remodelers, and specialty trades that win work by replying first and proving value.",
    what: ["Service area pages", "Quote request funnels", "Missed-call response workflows"],
  },
  {
    slug: "restaurants-hospitality",
    label: "Restaurants & Hospitality",
    emoji: "🍽",
    headline: "Bookings, events, and loyalty touchpoints that keep the tables and rooms moving.",
    summary: "A better digital front door for venues, hotels, and hospitality brands that rely on repeat attention.",
    what: ["Menu or room showcase pages", "Event inquiry forms", "Guest follow-up automations"],
  },
  {
    slug: "saas-startups",
    label: "SaaS & Startups",
    emoji: "🚀",
    headline: "Sharper product messaging and lead capture for early-stage growth teams.",
    summary: "Ideal for startups that need a simple but strong launch presence and a reliable inbound flow.",
    what: ["Launch pages", "Waitlist capture", "Demo booking automations"],
  },
];

export const LOCATION_PAGES = [
  {
    slug: "us",
    label: "United States",
    short: "US",
    headline: "Built for high-intent US service markets.",
    summary:
      "We help US clinics and service businesses convert more inbound leads with fast websites, automation follow-up, and practical visibility systems.",
    focus: ["Local intent pages", "Fast mobile performance", "Lead response automation", "Conversion-first UX"],
  },
  {
    slug: "uk",
    label: "United Kingdom",
    short: "UK",
    headline: "Conversion-focused systems for UK growth teams.",
    summary:
      "From clinic websites to service funnels, we build clean digital systems that make your brand easier to discover and contact in the UK market.",
    focus: ["Market-fit messaging", "Service landing pages", "Lead capture flows", "Trust signal design"],
  },
  {
    slug: "canada",
    label: "Canada",
    short: "CA",
    headline: "Reliable websites and automation for Canadian businesses.",
    summary:
      "We design high-clarity websites and connected follow-up workflows so Canadian service brands can respond faster and close better.",
    focus: ["Clarity-focused UX", "Automation handoff", "Map-ready page structure", "Long-term content growth"],
  },
  {
    slug: "india",
    label: "India",
    short: "IN",
    headline: "Performance-first digital systems for Indian businesses.",
    summary:
      "For Indian companies scaling online, we build modern websites, process automation, and better conversion journeys that reduce manual operations.",
    focus: ["Speed optimization", "Modern UI architecture", "CRM-ready forms", "Automation workflow setup"],
  },
  {
    slug: "chandigarh",
    label: "Chandigarh",
    short: "CHD",
    headline: "Premium web presence for Chandigarh businesses.",
    summary:
      "We help Chandigarh-based businesses stand out with polished websites, stronger credibility, and lead systems built for local intent.",
    focus: ["Local service pages", "Brand-first design", "Lead inquiry routing", "Review-friendly structure"],
  },
  {
    slug: "hoshiarpur",
    label: "Hoshiarpur",
    short: "HSP",
    headline: "Digital growth support for Hoshiarpur businesses.",
    summary:
      "From business websites to automation basics, we help Hoshiarpur brands create stronger first impressions and capture more qualified inquiries.",
    focus: ["Local discoverability", "Service credibility pages", "Simple automation flows", "Conversion CTA architecture"],
  },
  {
    slug: "punjab",
    label: "Punjab",
    short: "PB",
    headline: "Scalable digital foundations for businesses across Punjab.",
    summary:
      "We support Punjab-focused businesses with dependable websites, process automation, and SEO-friendly structures that support long-term growth.",
    focus: ["Regional targeting pages", "Technical SEO structure", "Workflow automation", "Mobile-first experience"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Free 30-minute discovery call",
    description: "We learn your business, your goals, your current tech stack, and the leads you're losing right now. No pitch — just a focused conversation about what you actually need. We'll tell you honestly if we're not the right fit.",
  },
  {
    number: "02",
    title: "Full Figma design — before any code",
    description: "Every page of your WordPress website is designed in Figma first. You review and approve the complete design before we write a single line of code. No surprises when we build, no back-and-forth revisions mid-development.",
  },
  {
    number: "03",
    title: "WordPress build + GoHighLevel setup — simultaneously",
    description: "WordPress development and GoHighLevel CRM configuration run in parallel. You see your staging site as we build it. Your automation workflows are built and tested before launch day.",
  },
  {
    number: "04",
    title: "Full QA across 5 browsers and mobile",
    description: "Every contact form, every GoHighLevel automation, every SMS workflow, every booking trigger — tested before you see it. We test across Chrome, Safari, Firefox, Edge, and mobile on both iOS and Android.",
  },
  {
    number: "05",
    title: "Launch, handover, and 30 days of direct support",
    description: "We handle DNS migration, hosting configuration, and SSL setup. You receive a full recorded video walkthrough of your WordPress site and GoHighLevel system so you're never dependent on us for basic changes. Then 30 days of direct WhatsApp and email support — no ticket queue.",
  },
];

export const WORK_PROJECTS = [
  {
    title: "MVM Health",
    category: "Healthcare Platform · New Jersey",
    tags: ["WordPress", "GHL", "Telehealth"],
    industry: "healthcare",
    url: "https://mvmhealth.com",
    image: "/images/mvmhealth.png",
    description: "Multi-specialty pain management platform with custom WordPress design, provider directory, patient portal, telehealth integration, and full GoHighLevel CRM automation for missed call recovery and appointment booking.",
    accent: "#FF5C35",
  },
  {
    title: "Vascura Pain & Vein",
    category: "Specialty Clinic · New Jersey",
    tags: ["WordPress", "GHL", "Booking"],
    industry: "healthcare",
    url: "https://vascurapainandvein.com",
    image: "/images/vascurapainandvein.png",
    description: "Pain and vein treatment clinic website with appointment booking system, instant GHL lead follow-up, and patient insurance portal — built on WordPress with Elementor.",
    accent: "#2563EB",
  },
  {
    title: "EC Bone & Joint",
    category: "Orthopedic Practice",
    tags: ["WordPress", "Elementor", "SEO"],
    industry: "healthcare",
    url: "https://ecboneandjoint.com",
    image: "/images/ecboneandjoint.png",
    description: "Orthopedic and joint health center website. Custom WordPress design, individual procedure pages, and integrated online booking system optimized for local SEO.",
    accent: "#16A34A",
  },
  {
    title: "Med Way NJ",
    category: "Medical Services · New Jersey",
    tags: ["WordPress", "GHL", "Multi-service"],
    industry: "healthcare",
    url: "https://medwaynj.com",
    image: "/images/medwaynj.png",
    description: "Comprehensive multi-specialty medical services platform. Custom WordPress build with dedicated service pages and full GoHighLevel CRM integration for lead management.",
    accent: "#9333EA",
  },
  {
    title: "Phone Repair Decatur",
    category: "Local Service Business · Atlanta, GA",
    tags: ["WordPress", "Booking", "Local SEO"],
    industry: "home-services",
    url: "https://phonerepairdecatur.com",
    image: "/images/phonerepairdecatur.png",
    description: "Mobile phone repair shop website with online booking, repair status tracker, and local SEO optimization — ranked on Google Maps for phone repair searches in Atlanta.",
    accent: "#EA580C",
  },
  {
    title: "Farhan Yousuf — Realtor",
    category: "Real Estate · United States",
    tags: ["WordPress", "IDX", "Lead Capture"],
    industry: "real-estate",
    url: "https://farhanyousufirealtor.com",
    image: "/images/farhanyousufirealtor.png",
    description: "Real estate agent website with IDX property listings, lead capture forms, and automated GoHighLevel buyer and seller follow-up sequences.",
    accent: "#0891B2",
  },
];

export const STATS = [
  { number: "4+", label: "Years — Building WordPress + GoHighLevel systems for US businesses" },
  { number: "6", label: "Healthcare & service brands delivered" },
  { number: "90+", label: "PageSpeed score on every site we build" },
  { number: "14 Days", label: "Average project delivery time" },
];

export const TOOLS = [
  "WordPress", "GoHighLevel", "Airtable", "Figma",
  "Elementor", "Make", "Zapier", "Cloudflare",
  "Google Analytics 4", "Rank Math SEO", "Lenis", "GSAP",
];

export const TESTIMONIALS = [
  {
    quote: "Gagan built our healthcare website in under two weeks. The GoHighLevel automation he set up catches every missed patient call — we've recovered appointments we would have lost completely. Our Google ranking improved in the first month. Best investment we made for our practice.",
    author: "Healthcare Client",
    location: "New Jersey, US",
    role: "Pain Management Clinic",
  },
  {
    quote: "The website speed and design exceeded our expectations. From the first call, communication was always clear and fast. Gagan understood exactly what a medical practice needs — a site that builds trust and makes booking easy. We saw a measurable increase in online appointment requests within 30 days.",
    author: "Medical Practice",
    location: "New Jersey, US",
    role: "Specialty Clinic",
  },
];
