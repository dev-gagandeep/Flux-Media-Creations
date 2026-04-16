export type IndustryDetail = {
  slug: string;
  label: string;
  preHeadline: string;
  sectionTitle: string;
  body: string[];
  whatWeBuild: string[];
  specialties?: string[];
  caseStudies?: Array<{
    title: string;
    href: string;
    label: string;
  }>;
  ctaLabel: string;
};

export const INDUSTRY_DETAILS: IndustryDetail[] = [
  {
    slug: "healthcare",
    label: "Healthcare Clinics",
    preHeadline: "Every missed patient call is a missed appointment and a missed appointment is lost revenue.",
    sectionTitle: "WordPress Website Design and GoHighLevel Automation for Healthcare Clinics",
    body: [
      "Healthcare is the industry where your website's credibility is most important and most difficult to establish. A potential patient is making a decision about their health. They're anxious, often in pain, and comparing you with two or three other clinics they found on Google. Your website has roughly five seconds to communicate that you are trustworthy, competent, and the right choice for their condition.",
      "We've built WordPress websites for pain management clinics, vein treatment centers, orthopedic practices, telehealth providers, and multi-specialty medical groups across the United States, with especially strong experience around New Jersey, New York, and California. Every healthcare site we build is designed around one core objective: turning a patient search into a booked appointment.",
      "In practice, that means a mobile experience that loads quickly, provider profiles that build trust immediately, service pages written in plain language patients actually understand, and booking pathways that stay simple enough to complete without friction. We also shape intake handling around HIPAA-conscious form flows so submitted information is treated appropriately.",
      "On the GoHighLevel side, clinics face a brutal response-time problem. A patient who calls at 10pm and gets voicemail often calls the next clinic before 10:05pm. Our healthcare automation setups typically include missed call text-back within 30 seconds, instant form-to-SMS confirmation, nurture sequences for undecided leads, appointment reminders, no-show recovery, and automated review requests that support local healthcare rankings.",
      "The common thread across all of it is patient confidence. The design has to feel clinical without being cold, the copy has to explain complex care without jargon, and the automation has to move quickly without sounding robotic. That combination is what turns search traffic into appointments instead of abandoned tabs.",
    ],
    whatWeBuild: [
      "Custom WordPress websites for clinics and medical practices",
      "Provider directory and physician profile pages",
      "Condition and procedure pages optimized for local SEO",
      "Online appointment booking integration",
      "Telehealth and patient portal integration pages",
      "Insurance and accepted plans pages",
      "HIPAA-safe patient intake forms",
      "Multi-location pages for clinic groups",
      "GoHighLevel missed call text-back",
      "Patient lead nurture sequences by SMS and email",
      "Automated appointment reminders",
      "No-show re-engagement workflows",
      "Google review generation automation",
      "A2P SMS registration and compliance setup",
    ],
    specialties: ["Pain management", "Vein and vascular", "Orthopedics", "Telehealth", "Multi-specialty", "Physical therapy", "Medical weight loss"],
    caseStudies: [
      { title: "MVM Health", href: "/work/mvm-health", label: "Multi-specialty pain management platform, New Jersey" },
      { title: "Vascura Pain & Vein", href: "/work/vascura-pain-vein", label: "Specialty clinic, New Jersey" },
      { title: "EC Bone & Joint", href: "/work/ec-bone-joint", label: "Orthopedic practice" },
      { title: "Med Way NJ", href: "/work/med-way-nj", label: "Multi-specialty medical services" },
    ],
    ctaLabel: "Build my healthcare website →",
  },
  {
    slug: "home-services",
    label: "Home Services",
    preHeadline: "Your next customer called while you were on a job. Did your system respond?",
    sectionTitle: "WordPress Website Design and GoHighLevel Automation for Home Service Companies",
    body: [
      "Home services is the most response-speed-sensitive industry we work with. An HVAC customer searching for emergency air conditioning repair in July is not waiting an hour for a callback. A plumbing customer with a burst pipe is going with whoever answers, or whoever texts back, first.",
      "That reality shapes everything about how we build websites and automation for home service businesses. The WordPress site needs to rank for local searches like service plus city, convert the visitor into a call or form submission within seconds, and stay friction-free on mobile. The GoHighLevel layer needs to respond instantly whether the inquiry came in by phone, web form, or Facebook Lead Ad.",
      "We build local-SEO-ready WordPress websites for HVAC companies, plumbers, roofers, electricians, cleaning services, landscapers, contractors, and similar businesses where urgency matters. Every site includes service area pages, fast mobile design built around emergency intent, and prominent tap-to-call actions that work cleanly on every device.",
      "Automation is what keeps the system from relying on whether the owner happens to be available at the right moment. Missed call text-back, estimate-request follow-up, ad lead routing, seasonal reactivation, and post-job review requests all remove manual leakage from the process.",
    ],
    whatWeBuild: [
      "Local SEO-optimized WordPress websites",
      "Service area landing pages for each city or region",
      "Before and after photo galleries",
      "Online booking and quote request forms",
      "Emergency service CTAs optimized for mobile",
      "Google review integration and display",
      "GoHighLevel missed call text-back",
      "Facebook Lead Ads to GHL automation",
      "Estimate request to instant SMS follow-up",
      "Seasonal campaign reactivation workflows",
      "Review generation after job completion",
      "A2P SMS registration",
    ],
    specialties: ["HVAC", "Plumbing", "Roofing", "Electrical", "Cleaning", "Landscaping", "General contracting", "Phone repair"],
    caseStudies: [
      { title: "Phone Repair Decatur", href: "/work/phone-repair-decatur", label: "Local service business, Atlanta GA" },
    ],
    ctaLabel: "Build my home service website →",
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    preHeadline: "Buyers and sellers choose the agent who responds first and follows up longest.",
    sectionTitle: "WordPress Website Design and GoHighLevel Automation for Real Estate Agents and Brokers",
    body: [
      "Real estate is a relationship-speed business. The agent who responds to a new buyer inquiry within five minutes is dramatically more likely to convert that lead than the agent who replies an hour later. The agent who follows up consistently over 30, 60, and 90 days is far more likely to close than the one who gives up after two attempts.",
      "We build WordPress websites for agents and brokers that do three jobs well: showcase listings and neighborhoods, capture buyer and seller leads, and connect those leads directly to GoHighLevel follow-up sequences that keep the conversation alive automatically. The result is a real estate website that acts more like a lead management system than a brochure.",
      "Every real estate site we build includes a personal-brand layer, because in this industry people hire the agent as much as the property. Strong bios, credibility pages, neighborhood guides, and IDX-connected search all help buyers and sellers understand why they should trust you with a six- or seven-figure transaction.",
      "The automation side is built for longer decision windows than most other industries. Buyer and seller pipelines, valuation requests, listing alerts, nurture campaigns, booking reminders, and reactivation sequences all keep leads warm without requiring constant manual follow-up from the agent.",
    ],
    whatWeBuild: [
      "Custom WordPress agent and broker websites",
      "IDX property search integration",
      "Neighborhood guide and market report pages",
      "Lead capture forms connected to GoHighLevel",
      "Agent bio and credibility pages",
      "Property showcase and listing highlight pages",
      "Buyer nurture sequences",
      "Seller lead follow-up automation",
      "Open house attendee to post-visit follow-up",
      "Long-term drip campaigns",
      "Appointment booking with reminders",
      "Past client reactivation for referrals",
    ],
    caseStudies: [
      { title: "Farhan Yousuf — Realtor", href: "/work/farhan-yousuf-realtor", label: "Real estate agent website, US" },
    ],
    ctaLabel: "Build my real estate website →",
  },
  {
    slug: "beauty-wellness",
    label: "Beauty & Wellness",
    preHeadline: "Your booking calendar should fill itself. Your reviews should write themselves.",
    sectionTitle: "WordPress Website Design and GoHighLevel Automation for Med Spas, Salons, and Wellness Clinics",
    body: [
      "Beauty and wellness businesses operate in a visually high-expectation market. Your website is part of the experience clients expect before they ever walk through the door. A dated or generic website does not just lose bookings. It signals that the service itself may not feel premium.",
      "We build WordPress websites for med spas, aesthetics clinics, salons, massage studios, and wellness centers that are polished, fast, and built around conversion. Treatment and service pages, galleries, staff profiles, package pages, and mobile-first booking flows all work together to turn interest into scheduled appointments.",
      "GoHighLevel handles the communication layer your front desk should not be carrying manually. Appointment confirmations, 24-hour reminders, post-visit review requests, and reactivation campaigns for clients who have not booked in 60 or 90 days create a more consistent client experience without constant admin effort.",
      "This category also benefits from strong lifecycle messaging. New service launches, membership reminders, treatment follow-up, and return-visit prompts are simple to automate, and they increase repeat revenue without making the customer experience feel generic when the copy is written correctly.",
    ],
    whatWeBuild: [
      "Custom WordPress websites for med spas and salons",
      "Treatment and service showcase pages",
      "Online booking integration",
      "Before and after gallery pages",
      "Membership and package pages",
      "Staff and practitioner profile pages",
      "Client testimonial sections",
      "GoHighLevel appointment reminders",
      "Post-visit Google review requests",
      "Client reactivation SMS campaigns",
      "New service announcement campaigns",
    ],
    ctaLabel: "Build my wellness website →",
  },
];
