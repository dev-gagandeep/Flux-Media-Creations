export type StrategicCard = { title: string; body: string; href?: string };

export type StrategicPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  parent?: { label: string; href: string };
  intro: string;
  cards: StrategicCard[];
  related: StrategicCard[];
  schemaType?: "Service" | "CollectionPage" | "AboutPage";
};

export const FLUX2_PAGES: Record<string, StrategicPageContent> = {
  "/operating-intelligence": {
    eyebrow: "Why Flux",
    title: "Operating Intelligence for service businesses",
    description: "Learn how Flux connects discovery, demand capture, conversion, workflows, and measurement into one operating intelligence system.",
    path: "/operating-intelligence",
    intro: "Operating Intelligence is the connected layer between how a business is discovered, how opportunities are captured, how customers progress, and how teams learn what to improve next.",
    cards: [
      { title: "Discover demand", body: "Make the business understandable across search, maps, and AI-assisted discovery.", href: "/ai-discovery" },
      { title: "Capture opportunity", body: "Turn calls, forms, chats, and booking requests into structured opportunities.", href: "/patient-revenue-system" },
      { title: "Understand revenue", body: "Connect source, response, pipeline, booking, and outcome data.", href: "/revenue-intelligence" },
      { title: "Improve progression", body: "Design the workflows that move each customer toward the next useful action.", href: "/customer-progression" },
    ],
    related: [
      { title: "Our philosophy", body: "Why connected systems outperform isolated tactics.", href: "/philosophy" },
      { title: "The operating problem", body: "Where demand and revenue disappear between disconnected tools.", href: "/the-problem" },
      { title: "Healthcare", body: "The first industry focus for Flux operating intelligence.", href: "/industries/healthcare" },
    ],
  },
  "/philosophy": {
    eyebrow: "Why Flux",
    title: "Systems should improve the business, not add more tools",
    description: "The Flux philosophy for building connected, measurable operating systems for service businesses.",
    path: "/philosophy",
    parent: { label: "Operating Intelligence", href: "/operating-intelligence" },
    intro: "Flux starts with the decisions, handoffs, and outcomes a business needs. Technology is useful only when it makes those relationships clearer, faster, and more measurable.",
    cards: [
      { title: "Connect before adding", body: "Strengthen the flow between existing systems before introducing more software." },
      { title: "Measure the progression", body: "Track the movement from discovery to inquiry, response, booking, and revenue." },
      { title: "Design for the team", body: "Workflows must be understandable and usable by the people operating them." },
    ],
    related: [
      { title: "The problem", body: "See the operational gaps this approach is designed to solve.", href: "/the-problem" },
      { title: "Methodology", body: "How Flux maps, builds, connects, and improves systems.", href: "/process" },
    ],
    schemaType: "AboutPage",
  },
  "/the-problem": {
    eyebrow: "Why Flux",
    title: "Demand is often lost between disconnected systems",
    description: "See how fragmented discovery, follow-up, workflow, and measurement create hidden revenue loss for service businesses.",
    path: "/the-problem",
    parent: { label: "Operating Intelligence", href: "/operating-intelligence" },
    intro: "Most service businesses do not have a single lead problem. They have a chain of small operating gaps that make demand difficult to see, respond to, progress, and learn from.",
    cards: [
      { title: "Discovery without clarity", body: "Customers find pages and profiles that do not clearly explain the business or next step." },
      { title: "Capture without context", body: "Calls and forms enter separate inboxes without source, urgency, or ownership." },
      { title: "Follow-up without progression", body: "Automation sends messages but does not reflect the customer journey." },
      { title: "Reporting without decisions", body: "Dashboards show activity without connecting it to appointments or revenue." },
    ],
    related: [
      { title: "Operating Intelligence", body: "The connected model for solving these gaps.", href: "/operating-intelligence" },
      { title: "Measure your score", body: "Assess where your current operating system is weakest.", href: "/business-intelligence-audit" },
    ],
  },
  "/solutions": {
    eyebrow: "Solutions",
    title: "Connected systems for discovery, revenue, and customer progression",
    description: "Explore Flux operating intelligence solutions for healthcare and appointment-based service businesses.",
    path: "/solutions",
    intro: "Each solution addresses a different part of the operating system while sharing the same underlying customer, workflow, and performance context.",
    cards: [
      { title: "Patient Revenue System", body: "Connect patient discovery, inquiry, booking, follow-up, and revenue visibility.", href: "/patient-revenue-system" },
      { title: "Revenue Intelligence", body: "Understand which demand becomes qualified opportunity, booking, and revenue.", href: "/revenue-intelligence" },
      { title: "Customer Progression", body: "Move each customer toward the next appropriate action with connected workflows.", href: "/customer-progression" },
      { title: "AI Discovery", body: "Build a clear, authoritative entity across search, maps, and AI systems.", href: "/ai-discovery" },
    ],
    related: [
      { title: "Implementation services", body: "Explore the tactical website, CRM, SEO, and automation capabilities behind the systems.", href: "/services" },
      { title: "Operating Intelligence", body: "Understand the model connecting every solution.", href: "/operating-intelligence" },
    ],
    schemaType: "CollectionPage",
  },
  "/patient-revenue-system": {
    eyebrow: "Healthcare solution",
    title: "The Patient Revenue System",
    description: "A Patient Revenue System connects discovery, booking, and follow-up so clinics stop losing patients after the first call.",
    path: "/patient-revenue-system",
    parent: { label: "Solutions", href: "/solutions" },
    intro: "Connect patient discovery, enquiry capture, communication, appointment conversion, and continuity into one visible healthcare growth system.",
    cards: [
      { title: "Patient discovery", body: "Structured clinic, service, location, and answer content across search and AI." },
      { title: "Opportunity capture", body: "Connected calls, forms, booking requests, and missed-call recovery." },
      { title: "Patient progression", body: "Clear ownership, reminders, follow-up logic, and appointment status." },
      { title: "Revenue visibility", body: "Connect source and response data to appointments and meaningful outcomes." },
    ],
    related: [
      { title: "Patient Revenue System for clinics", body: "See the complete clinic-specific system for enquiry capture, booking, response, and follow-up.", href: "/clinics" },
      { title: "Healthcare implementation", body: "Existing website and CRM capabilities for clinic demand.", href: "/healthcare-website-crm" },
      { title: "Clinic booking automation", body: "Supporting implementation for appointment workflows.", href: "/services/clinic-appointment-booking-automation" },
      { title: "Healthcare industry", body: "Industry context and connected solution map.", href: "/industries/healthcare" },
    ],
    schemaType: "Service",
  },
  "/revenue-intelligence": {
    eyebrow: "Solution",
    title: "Turn Disconnected Business Data Into Revenue Intelligence",
    description: "Connect CRM, marketing, communication, and customer journey data so service businesses can see where opportunities originate, move, and disappear.",
    path: "/revenue-intelligence",
    parent: { label: "Solutions", href: "/solutions" },
    intro: "Revenue Intelligence turns scattered signals into a single understood view of what drives growth, what blocks it, and what to fix first.",
    cards: [
      { title: "Source intelligence", body: "Identify which channels, pages, calls, and campaigns create useful demand." },
      { title: "Response intelligence", body: "Measure speed, ownership, contact attempts, and recovery paths." },
      { title: "Pipeline intelligence", body: "See progression, delay, loss reasons, bookings, and outcomes." },
    ],
    related: [
      { title: "GoHighLevel automation", body: "CRM implementation supporting revenue intelligence.", href: "/services/gohighlevel-automation" },
      { title: "Customer Progression", body: "Design what should happen between each measured stage.", href: "/customer-progression" },
    ],
    schemaType: "Service",
  },
  "/customer-progression": {
    eyebrow: "Solution",
    title: "Getting Attention Was Never the Hard Part. Customer Progression Is.",
    description: "Connect communication, workflows, and customer intelligence so interest keeps moving from enquiry through conversion and long-term relationship.",
    path: "/customer-progression",
    parent: { label: "Solutions", href: "/solutions" },
    intro: "Customer Progression captures every enquiry, responds consistently, understands customer intent, and triggers the right next action without relying on memory.",
    cards: [
      { title: "Define stages", body: "Make each customer state, owner, next action, and exit condition explicit." },
      { title: "Connect workflows", body: "Coordinate CRM, calendars, notifications, forms, and operational tools." },
      { title: "Recover stalled demand", body: "Identify missed calls, incomplete bookings, delayed responses, and inactive opportunities." },
    ],
    related: [
      { title: "Make and Zapier automation", body: "Implementation for connected cross-platform workflows.", href: "/services/make-zapier-automation" },
      { title: "Airtable Business Hub", body: "Operational data and workflow implementation.", href: "/services/airtable-business-hub" },
    ],
    schemaType: "Service",
  },
  "/ai-discovery": {
    eyebrow: "Solution",
    title: "AI Discovery: Getting Found When Search Isn't Just Google Anymore",
    description: "Become visible and recommendable across Google, AI Overviews, ChatGPT, Gemini, Perplexity, Maps, and emerging discovery platforms.",
    path: "/ai-discovery",
    parent: { label: "Solutions", href: "/solutions" },
    intro: "AI Discovery helps search engines, AI assistants, and recommendation systems understand who your business is, what it does, and when to recommend it.",
    cards: [
      { title: "Entity clarity", body: "Define who the business serves, what it solves, where it operates, and why it is credible." },
      { title: "Answer architecture", body: "Structure pages and knowledge so important questions have clear, supportable answers." },
      { title: "Technical discoverability", body: "Align crawlability, canonicals, structured data, internal links, and sitemaps." },
    ],
    related: [
      { title: "Search Visibility Engine", body: "Existing SEO, maps, AEO, and GEO implementation capability.", href: "/services/search-visibility-engine" },
      { title: "New Jersey local SEO", body: "Local demand-capture implementation and supporting content.", href: "/local-seo-new-jersey" },
    ],
    schemaType: "Service",
  },
  "/business-intelligence-audit": {
    eyebrow: "Assessment",
    title: "Measure your Business Intelligence Score",
    description: "Assess how well your business connects discovery, opportunity capture, customer progression, workflows, and revenue measurement.",
    path: "/business-intelligence-audit",
    intro: "The assessment creates a structured baseline across the five operating layers Flux uses to identify gaps, dependencies, and the highest-leverage next improvement.",
    cards: [
      { title: "Discovery", body: "Can customers and AI systems clearly find and understand the business?" },
      { title: "Capture", body: "Do calls, forms, chats, and bookings enter a reliable system with context?" },
      { title: "Progression", body: "Does every opportunity have a stage, owner, and appropriate next action?" },
      { title: "Connection", body: "Do the website, CRM, calendar, communications, and operations share useful context?" },
      { title: "Measurement", body: "Can the business connect demand and activity to appointments or revenue outcomes?" },
    ],
    related: [
      { title: "Operating Intelligence", body: "Learn the model behind the assessment.", href: "/operating-intelligence" },
      { title: "Discuss the assessment", body: "Share your current setup and assessment goals.", href: "/contact" },
    ],
    schemaType: "Service",
  },
};

export const INDUSTRY_PAGES: Record<string, StrategicPageContent> = {
  healthcare: {
    eyebrow: "Industry",
    title: "Operating Intelligence for healthcare clinics",
    description: "Connected patient discovery, inquiry, booking, progression, and revenue systems for healthcare clinics and practices.",
    path: "/industries/healthcare",
    parent: { label: "Industries", href: "/industries" },
    intro: "Healthcare is Flux's initial operating intelligence focus because patient demand depends on trust, timing, clear service information, reliable intake, and coordinated appointment progression.",
    cards: [
      { title: "Patient Revenue System", body: "Connect patient acquisition, booking, follow-up, and outcome visibility.", href: "/clinics" },
      { title: "AI Discovery", body: "Make clinic expertise, services, locations, and answers understandable.", href: "/ai-discovery" },
      { title: "Revenue Intelligence", body: "Connect demand sources and response to appointments and outcomes.", href: "/revenue-intelligence" },
    ],
    related: [
      { title: "Patient Revenue System overview", body: "Explore the operating model behind the clinic-specific system.", href: "/patient-revenue-system" },
      { title: "Healthcare website and CRM", body: "Supporting implementation for clinic conversion and follow-up.", href: "/healthcare-website-crm" },
      { title: "Healthcare SEO structure", body: "Supporting clinic search architecture.", href: "/services/healthcare-seo-structure" },
      { title: "Healthcare Growth insights", body: "Existing clinic growth and automation articles.", href: "/blog" },
    ],
    schemaType: "CollectionPage",
  },
  "home-services": {
    eyebrow: "Industry",
    title: "Operating Intelligence for home services",
    description: "Connected discovery, call capture, quote progression, workflow, and revenue systems for home service businesses.",
    path: "/industries/home-services",
    parent: { label: "Industries", href: "/industries" },
    intro: "Home service demand is local, urgent, and call-heavy. The operating system must connect discovery, missed-call recovery, quote requests, scheduling, follow-up, and job outcomes.",
    cards: [
      { title: "Local discovery", body: "Connect service, location, map, review, and AI visibility signals.", href: "/ai-discovery" },
      { title: "Opportunity progression", body: "Route calls and quote requests into owned next actions.", href: "/customer-progression" },
      { title: "Revenue visibility", body: "Understand which sources and services produce qualified jobs.", href: "/revenue-intelligence" },
    ],
    related: [
      { title: "Local SEO New Jersey", body: "Supporting local discovery implementation.", href: "/local-seo-new-jersey" },
      { title: "HVAC local SEO", body: "Existing home-services search-demand page.", href: "/local-seo-new-jersey/local-seo-hvac-new-jersey" },
    ],
    schemaType: "CollectionPage",
  },
  legal: {
    eyebrow: "Industry",
    title: "Operating Intelligence for legal services",
    description: "Connected discovery, consultation capture, intake progression, and revenue intelligence for legal service businesses.",
    path: "/industries/legal",
    parent: { label: "Industries", href: "/industries" },
    intro: "Legal-service growth depends on clear expertise, fast consultation response, structured intake, appropriate routing, and visibility into which matters progress.",
    cards: [
      { title: "Authority and discovery", body: "Clarify practice areas, jurisdiction, expertise, evidence, and answers.", href: "/ai-discovery" },
      { title: "Consultation progression", body: "Connect inquiry, qualification, scheduling, ownership, and follow-up.", href: "/customer-progression" },
      { title: "Matter-source intelligence", body: "Understand which channels create relevant consultations and matters.", href: "/revenue-intelligence" },
    ],
    related: [{ title: "Business Intelligence Audit", body: "Assess the current legal intake and progression system.", href: "/business-intelligence-audit" }],
    schemaType: "CollectionPage",
  },
  wellness: {
    eyebrow: "Industry",
    title: "Operating Intelligence for wellness businesses",
    description: "Connected discovery, consultation, booking, membership, and customer progression systems for wellness businesses.",
    path: "/industries/wellness",
    parent: { label: "Industries", href: "/industries" },
    intro: "Wellness businesses need a clear bridge between educational discovery, trust, consultation or booking, ongoing communication, and repeat customer progression.",
    cards: [
      { title: "Service discovery", body: "Explain services, suitability, expertise, location, and next steps.", href: "/ai-discovery" },
      { title: "Booking progression", body: "Connect inquiry, consultation, appointment, reminder, and reactivation workflows.", href: "/customer-progression" },
      { title: "Revenue intelligence", body: "Connect acquisition and progression to bookings, packages, and retention.", href: "/revenue-intelligence" },
    ],
    related: [{ title: "Business Intelligence Audit", body: "Assess the current wellness customer system.", href: "/business-intelligence-audit" }],
    schemaType: "CollectionPage",
  },
};
