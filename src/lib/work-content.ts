export type WorkCaseStudy = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  categoryTag: string;
  published: string;
  modified: string;
  headline: string;
  overview: Array<{ label: string; value: string; href?: string }>;
  challenge: string[];
  build: Array<{
    title: string;
    body: string[];
  }>;
  result: string[];
  techStack: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const WORK_CASE_STUDIES: Record<string, WorkCaseStudy> = {
  "mvm-health": {
    slug: "mvm-health",
    metaTitle: "MVM Health — Multi-Specialty Pain Management Platform | Flux Media Creations",
    metaDescription:
      "How we built a custom WordPress website and GoHighLevel CRM automation system for MVM Health, a multi-specialty pain management clinic in New Jersey, improving patient lead response time and appointment booking.",
    title: "MVM Health",
    categoryTag: "Healthcare · Pain Management · New Jersey",
    published: "2026-01-15",
    modified: "2026-04-01",
    headline: "MVM Health — Building a Multi-Specialty Pain Management Platform That Captures Every Patient Lead",
    overview: [
      { label: "Client", value: "MVM Health" },
      { label: "Industry", value: "Healthcare — Pain Management" },
      { label: "Location", value: "New Jersey, US" },
      { label: "Live site", value: "mvmhealth.com", href: "https://mvmhealth.com" },
      { label: "Services", value: "WordPress Website Build · GoHighLevel Automation · Full Growth System" },
      { label: "Timeline", value: "18 days from signed contract to launch" },
    ],
    challenge: [
      "MVM Health is a multi-specialty pain management practice in New Jersey offering interventional pain procedures, regenerative medicine, and telehealth consultations across multiple specialties. When they came to us, the existing website did not reflect the depth of the practice, there was no online booking path, and there was no structured system for missed calls or after-hours inquiries.",
      "The biggest issues were clear. The old website used a generic medical template and did not explain procedures well. Provider profiles were thin, there was no patient portal or telehealth pathway, and the digital experience did not match the clinical credibility of the practice.",
      "On the operations side, missed calls had no recovery system. Calls going to voicemail often simply disappeared. Every appointment booking still required a phone call during business hours, which meant patients searching at night or patients who preferred not to call often never converted.",
    ],
    build: [
      {
        title: "Custom WordPress Website — Designed in Figma, Built with Elementor Pro",
        body: [
          "We designed and built a custom multi-page WordPress website for MVM Health that communicates clinical authority, simplifies patient navigation, and guides every visitor toward booking an appointment or submitting a contact request.",
          "The provider directory was structured around trust. Each physician received an individual profile page with specialties, credentials, treatment approach, and a direct booking path. For healthcare brands, that kind of provider-level detail directly affects whether a patient feels ready to book.",
          "We also created condition and procedure pages for interventional spine procedures, regenerative medicine treatments, and telehealth consultations. Those pages were written to target specific patient search intent while staying readable for non-clinical audiences. Dedicated telehealth and patient portal pathways reduced confusion for existing and new patients alike.",
          "The location architecture supported a multi-location setup with separate address, map, hours, and phone details per location. The final performance result landed at PageSpeed 93 on desktop and 91 on mobile.",
        ],
      },
      {
        title: "GoHighLevel CRM Automation — Complete Patient Lead System",
        body: [
          "Alongside the WordPress build, we configured a full patient acquisition and follow-up system in GoHighLevel. Every missed call triggered an automated SMS within 30 seconds so the practice could recover leads that would otherwise have gone cold immediately.",
          "Every contact form submission on the website connected to GoHighLevel through webhook-based routing. Within 60 seconds of form submission, the patient received an SMS confirmation, while the front desk received a parallel notification with the patient details and inquiry type.",
          "We also embedded appointment booking through GoHighLevel calendars so patients could self-book without waiting for office hours. That connected to confirmation, 24-hour reminder, 2-hour reminder, post-visit review request, and no-show re-engagement workflows. We handled A2P 10DLC registration before any SMS sequences went live so deliverability stayed compliant from day one.",
        ],
      },
    ],
    result: [
      "The full system went live 18 days after contract signing.",
      "Patient leads previously lost to missed calls are now captured through automated SMS text-back, with the front desk reporting recovered inquiries every week that would previously have vanished.",
      "Online appointment booking started from day one, removing the requirement that every new patient call during business hours.",
      "Automated review requests increased Google review volume, strengthening local search visibility for pain management and interventional procedure searches in New Jersey.",
      "Staff time previously spent on appointment reminder calls was reduced through automated reminders, with reported no-show improvement during the first 60 days.",
    ],
    techStack: ["WordPress", "Elementor Pro", "GoHighLevel", "Figma", "Rank Math Pro", "Cloudflare", "Google Analytics 4", "Search Console", "Telehealth booking", "Patient portal integration"],
    ctaTitle: "Building a healthcare website or patient automation system?",
    ctaBody: "Book a free discovery call. We’ll review your current setup and show you exactly what a system like this could look like for your practice.",
  },
  "vascura-pain-vein": {
    slug: "vascura-pain-vein",
    metaTitle: "Vascura Pain & Vein — Specialty Clinic WordPress Website | Flux Media Creations",
    metaDescription:
      "How we designed and built a custom WordPress website with appointment booking and GoHighLevel automation for Vascura Pain & Vein, a specialty pain and vein treatment clinic in New Jersey.",
    title: "Vascura Pain & Vein",
    categoryTag: "Healthcare · Specialty Clinic · New Jersey",
    published: "2026-02-01",
    modified: "2026-04-01",
    headline: "Vascura Pain & Vein — A Specialty Clinic Website Built to Convert Patient Searches Into Booked Appointments",
    overview: [
      { label: "Client", value: "Vascura Pain & Vein" },
      { label: "Industry", value: "Healthcare — Pain & Vein Treatment" },
      { label: "Location", value: "New Jersey, US" },
      { label: "Live site", value: "vascurapainandvein.com", href: "https://vascurapainandvein.com" },
      { label: "Services", value: "WordPress Website Build · GoHighLevel Automation" },
      { label: "Timeline", value: "14 days" },
    ],
    challenge: [
      "Vascura Pain & Vein is a specialty clinic offering interventional pain management and vein treatment procedures in New Jersey. These are high-intent, high-value specialties, which means the website had to establish trust quickly and convert the patient before they booked elsewhere.",
      "The clinic needed a faster, more authoritative website that explained procedures in patient-friendly language, ranked for local treatment searches, supported appointment booking, and handled insurance-related inquiries without overwhelming the front desk.",
      "The previous site was generic, slow, weak for local SEO, and offered no booking or automation layer for missed calls and after-hours form submissions.",
    ],
    build: [
      {
        title: "WordPress Website — Patient Trust and Local SEO Priority",
        body: [
          "We rebuilt the site around two priorities: patient trust and local search visibility. Every page was written in empathetic, plain language focused on the patient’s perspective rather than physician jargon.",
          "Condition and treatment pages answered the exact questions patients ask in search, which improved both clarity and ranking opportunity. The site structure included the core home page, provider pages, condition and treatment pages across pain and vein care, booking, insurance, patient resources, and contact with location context.",
          "Location schema and on-page optimization were aligned to the clinic’s New Jersey market. The final site reached PageSpeed 91 on desktop and 90 on mobile.",
        ],
      },
      {
        title: "GoHighLevel — Insurance Inquiry Automation and Booking Confirmation",
        body: [
          "One of the practice’s biggest operational bottlenecks was insurance verification. Patients wanted to know whether their insurance was accepted before committing to a consultation, and those inquiries often became scattered across email and phone.",
          "We built an insurance inquiry workflow in GoHighLevel so every form submission created a structured contact record with insurance provider and condition details, sent an automated SMS confirmation to the patient, and notified the front desk with the full context.",
          "We also implemented missed call text-back, instant SMS for new patient forms, appointment booking integration, reminders, review requests, and A2P-compliant SMS setup. The result was a much cleaner inquiry pipeline and much less manual sorting by the team.",
        ],
      },
    ],
    result: [
      "The site launched 14 days after contract signing with full GoHighLevel integration active from day one.",
      "Insurance inquiry handling became significantly more structured, with the front desk receiving complete inquiry data instead of piecing things together from voicemail and email.",
      "Appointment booking let straightforward consultation requests self-schedule without adding phone time to the team’s day.",
    ],
    techStack: ["WordPress", "Elementor Pro", "GoHighLevel", "Figma", "Rank Math Pro", "Cloudflare", "GA4"],
    ctaTitle: "Running a specialty clinic that needs a better website and patient automation?",
    ctaBody: "Book a free discovery call and we’ll map the booking, trust, and follow-up system your clinic actually needs.",
  },
  "ec-bone-joint": {
    slug: "ec-bone-joint",
    metaTitle: "EC Bone & Joint — Orthopedic Practice WordPress Website | Flux Media Creations",
    metaDescription:
      "How we built a custom WordPress website with procedure pages, provider profiles, and booking integration for EC Bone & Joint, an orthopedic and joint health practice.",
    title: "EC Bone & Joint",
    categoryTag: "Healthcare · Orthopedics · WordPress",
    published: "2026-01-20",
    modified: "2026-04-01",
    headline: "EC Bone & Joint — An Orthopedic Practice Website Built to Rank for Procedure Searches and Convert Patient Visits Into Appointments",
    overview: [
      { label: "Client", value: "EC Bone & Joint" },
      { label: "Industry", value: "Healthcare — Orthopedics and Joint Health" },
      { label: "Live site", value: "ecboneandjoint.com", href: "https://ecboneandjoint.com" },
      { label: "Services", value: "WordPress Website Build · On-Page SEO · Booking Integration" },
      { label: "Timeline", value: "12 days" },
    ],
    challenge: [
      "EC Bone & Joint is an orthopedic and joint health center offering a broad set of musculoskeletal procedures, consultations, sports injury care, and regenerative medicine options. Orthopedics is a procedure-driven specialty, so generic pages were not enough to rank for the searches patients were actually using.",
      "Their old website did not rank for procedure-specific searches, lacked proper local SEO, had no online booking, and loaded too slowly on mobile. That meant high-intent patients searching for knee pain treatment, sports injury care, or arthritis support were not finding the practice through the site they had.",
    ],
    build: [
      {
        title: "Procedure-First SEO Architecture",
        body: [
          "The most important structural decision was creating individual pages for each major procedure and condition rather than hiding everything on one generic services page. That included joint replacement consultation, knee pain treatment, hip pain treatment, shoulder pain, sports injury rehabilitation, regenerative medicine, spine and back pain, and arthritis treatment.",
          "Each page was written in patient-friendly language, structured around real search intent, and optimized for local ranking opportunity. This created an SEO foundation where every service line had its own chance to rank independently.",
        ],
      },
      {
        title: "Provider Profiles, Booking, and Local SEO",
        body: [
          "Each physician received a detailed profile page covering education, certifications, subspecialty focus, and treatment philosophy. That matters in orthopedics, where the physician’s credentials influence the patient’s decision heavily.",
          "We integrated booking directly into procedure pages and provider profiles to reduce friction and shorten the path from search to appointment request. Organization schema, medical-clinic signals, and Rank Math configuration were implemented across the site. The final performance result was 92 on desktop and 90 on mobile.",
        ],
      },
    ],
    result: [
      "The new site launched with 22 individual procedure and condition pages, giving the practice 22 specific ranking opportunities where the old site had effectively none.",
      "The booking integration immediately improved scheduling convenience for both patients and staff, especially for new patient consultations.",
    ],
    techStack: ["WordPress", "Elementor Pro", "Figma", "Rank Math Pro", "Cloudflare", "GA4", "Search Console"],
    ctaTitle: "Running an orthopedic practice or specialist clinic?",
    ctaBody: "Book a free discovery call and we’ll show you how procedure pages, provider trust, and booking flow can work together on one site.",
  },
  "med-way-nj": {
    slug: "med-way-nj",
    metaTitle: "Med Way NJ — Multi-Specialty Medical Services WordPress Website | Flux Media Creations",
    metaDescription:
      "How we built a comprehensive multi-specialty medical services WordPress platform with GoHighLevel CRM integration for Med Way NJ, a multi-specialty practice in New Jersey.",
    title: "Med Way NJ",
    categoryTag: "Healthcare · Multi-Specialty · New Jersey",
    published: "2026-02-10",
    modified: "2026-04-01",
    headline: "Med Way NJ — A Multi-Specialty Medical Platform Built to Handle Every Service, Every Patient Inquiry, Automatically",
    overview: [
      { label: "Client", value: "Med Way NJ" },
      { label: "Industry", value: "Healthcare — Multi-Specialty Medical Services" },
      { label: "Location", value: "New Jersey, US" },
      { label: "Live site", value: "medwaynj.com", href: "https://medwaynj.com" },
      { label: "Services", value: "WordPress Website Build · GoHighLevel Automation · Full Growth System" },
      { label: "Timeline", value: "21 days" },
    ],
    challenge: [
      "Med Way NJ is a multi-specialty medical services provider, which means the website had to present a wide range of services without turning the experience into a confusing navigation maze.",
      "The second challenge was operational. A multi-specialty practice generates many inquiry types across calls, forms, and appointment requests. Without structured routing and follow-up, everything funnels into one overloaded front desk workflow and leads get delayed or missed.",
    ],
    build: [
      {
        title: "Multi-Specialty WordPress Architecture",
        body: [
          "We designed the information architecture around the patient journey rather than the practice’s internal org chart. Patients do not think in departments. They think in symptoms, conditions, and the type of help they need.",
          "The structure included a homepage with specialty-finder navigation, individual specialty landing pages, symptom and condition pages that route to relevant specialties, a provider directory with specialty filtering, a unified appointment request flow, and supporting insurance and patient-resource pages.",
        ],
      },
      {
        title: "GoHighLevel — Multi-Pipeline Lead Management",
        body: [
          "The distinctive part of the GoHighLevel setup was a multi-pipeline structure, with separate routing logic for different service lines. A patient selecting one inquiry type would be routed to the relevant coordinator and pipeline automatically instead of dropping into one generic inbox.",
          "We also built missed call text-back with routing logic, specialty-specific confirmation templates, post-appointment review requests, and A2P-compliant SMS setup. That reduced manual sorting for the front desk and made follow-up much more consistent.",
        ],
      },
    ],
    result: [
      "The multi-pipeline structure became the most operationally valuable part of the build, reducing manual routing for the practice and improving response consistency.",
      "The specialty-finder homepage navigation helped patients locate the right service faster, reducing confusion and improving inquiry conversion from the site.",
    ],
    techStack: ["WordPress", "Elementor Pro", "GoHighLevel", "Figma", "Rank Math Pro", "Cloudflare", "GA4"],
    ctaTitle: "Running a multi-specialty practice or medical group?",
    ctaBody: "Book a free discovery call and we’ll map the service architecture and routing logic your patient journey actually needs.",
  },
  "phone-repair-decatur": {
    slug: "phone-repair-decatur",
    metaTitle: "Phone Repair Decatur — Local Service Business WordPress Website | Flux Media Creations",
    metaDescription:
      "How we built a local SEO-optimized WordPress website with online booking and repair tracker for Phone Repair Decatur, ranked on Google Maps for phone repair searches in Atlanta.",
    title: "Phone Repair Decatur",
    categoryTag: "Local Service · Home Services · Atlanta, GA",
    published: "2025-11-15",
    modified: "2026-04-01",
    headline: "Phone Repair Decatur — A Local Service Website Built to Rank on Google Maps and Convert Walk-In Traffic Online",
    overview: [
      { label: "Client", value: "Phone Repair Decatur" },
      { label: "Industry", value: "Local Service — Mobile Device Repair" },
      { label: "Location", value: "Decatur (Atlanta), Georgia, US" },
      { label: "Live site", value: "phonerepairdecatur.com", href: "https://phonerepairdecatur.com" },
      { label: "Services", value: "WordPress Website Build · Local SEO · Online Booking" },
      { label: "Timeline", value: "10 days" },
    ],
    challenge: [
      "Phone Repair Decatur is a walk-in and local-search-driven business. Customers search for screen repair or phone repair near them and choose the first credible option they find. The old web presence was minimal, and without a real website or optimized Google Business Profile, a large share of local demand simply never reached the shop.",
      "The goal was to build a fast, credible WordPress site that could rank in Google Maps and local search results for Decatur and Atlanta-area queries, while also giving customers a way to book repairs online instead of relying only on walk-ins and calls.",
    ],
    build: [
      {
        title: "Local SEO-First WordPress Architecture",
        body: [
          "Every structural decision was made with local ranking in mind. We built individual repair pages for iPhone screens, Samsung screens, battery replacement, charging ports, water damage, tablets, and other high-intent searches.",
          "We also added service area pages targeting Decatur, Atlanta, Stone Mountain, Tucker, and neighboring areas with unique local content rather than thin duplicates. LocalBusiness schema, pricing ranges, business hours, and map signals were all structured for search visibility.",
          "The Google Business Profile was optimized to match the website strategy, including service listings, photos, seeded Q&A, and review workflow support.",
        ],
      },
      {
        title: "Online Booking, Repair Tracker, and Trust Signals",
        body: [
          "We integrated online booking so customers could choose a repair appointment without calling during business hours. That widened the effective service radius beyond pure walk-in behavior.",
          "A repair status tracker reduced inbound status-update calls and improved customer experience. Because customers are handing over their device, trust elements mattered heavily too: warranties, no-fix-no-fee messaging, technician credibility, reviews, and before-and-after proof were all made highly visible.",
          "The final site reached PageSpeed 94 on desktop and 92 on mobile, which helped both user experience and local search performance.",
        ],
      },
    ],
    result: [
      "The combination of local SEO architecture, optimized GBP, and schema drove visibility for phone repair and screen repair searches in the Decatur area.",
      "Online booking reduced reliance on walk-in traffic alone and expanded how far customers were willing to schedule from.",
      "Review generation produced a steadier stream of Google reviews, which remains one of the strongest local map signals for this category.",
    ],
    techStack: ["WordPress", "Elementor Pro", "Figma", "Rank Math Pro", "Local Business Schema", "Cloudflare", "GA4", "Search Console", "GBP Optimization"],
    ctaTitle: "Running a local service business that needs to rank on Google Maps?",
    ctaBody: "Book a free discovery call and we’ll map the local SEO, booking, and review system your service business needs.",
  },
  "farhan-yousuf-realtor": {
    slug: "farhan-yousuf-realtor",
    metaTitle: "Farhan Yousuf Realtor — Real Estate Agent WordPress Website | Flux Media Creations",
    metaDescription:
      "How we built a custom real estate agent WordPress website with IDX listings, lead capture forms, and GoHighLevel automated buyer and seller follow-up for Farhan Yousuf, Realtor.",
    title: "Farhan Yousuf — Realtor",
    categoryTag: "Real Estate · IDX Website · Lead Automation",
    published: "2025-12-01",
    modified: "2026-04-01",
    headline: "Farhan Yousuf — A Real Estate Agent Website Built to Capture Buyer and Seller Leads and Follow Up Automatically",
    overview: [
      { label: "Client", value: "Farhan Yousuf — Realtor" },
      { label: "Industry", value: "Real Estate" },
      { label: "Live site", value: "farhanyousufirealtor.com", href: "https://farhanyousufirealtor.com" },
      { label: "Services", value: "WordPress Website Build · IDX Integration · GoHighLevel Automation" },
      { label: "Timeline", value: "14 days" },
    ],
    challenge: [
      "Farhan Yousuf needed a personal-brand real estate website that could scale lead capture and follow-up without requiring the staffing overhead of a larger brokerage. Every buyer and seller lead had real value, but manual follow-up across phone, email, and SMS does not scale well for a solo agent.",
      "The website needed to establish credibility, display live listings through IDX, capture buyer and seller inquiries, and connect everything to a GoHighLevel system that could nurture leads across much longer decision cycles.",
    ],
    build: [
      {
        title: "Personal Brand WordPress Website with IDX Integration",
        body: [
          "We built the WordPress site to balance personal brand authority with practical search and lead-capture utility. That meant a clear homepage with buyer and seller pathways, a strong about page, neighborhood and market guides, buyer and seller resources, testimonial sections, and dedicated inquiry forms.",
          "IDX integration allowed live property search and listing views directly inside the site, so buyers could search without leaving Farhan’s environment. Listing pages were tied to lead forms that captured both the buyer’s details and the specific property context.",
        ],
      },
      {
        title: "GoHighLevel — Automated Buyer and Seller Follow-Up",
        body: [
          "The automation logic for real estate was designed around long decision windows. Buyers and sellers often need 30, 60, or 90 days of contact, not just one fast follow-up.",
          "We built separate pipelines and automations for buyer and seller leads, including instant welcome SMS, scheduled check-ins, weekly or monthly market update emails, listing alerts, valuation form routing, and long-tail re-engagement. A2P registration was completed before launch so SMS outreach would actually deliver.",
        ],
      },
    ],
    result: [
      "The IDX integration turned the site from a brochure into a practical property-search tool that buyers could use repeatedly.",
      "Lead capture from listing pages and valuation forms created more structured intent signals inside the CRM.",
      "Automated nurture sequences reduced the risk of leads going cold during long decision windows while keeping follow-up consistent without manual tracking overhead.",
    ],
    techStack: ["WordPress", "Elementor Pro", "IDX Integration", "GoHighLevel", "Figma", "Rank Math Pro", "GA4"],
    ctaTitle: "Real estate agent or broker who needs a website and lead automation system?",
    ctaBody: "Book a free discovery call and we’ll map the site, IDX, and nurture system that fits your market and follow-up style.",
  },
};
