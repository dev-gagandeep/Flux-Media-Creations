export type ServiceDetailContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  image: {
    src: string;
    alt: string;
  };
  breadcrumb: string[];
  preHeadline: string;
  heroTitle: string;
  heroBody: string;
  heroStats: Array<{
    value: string;
    label: string;
  }>;
  problemSection: {
    label: string;
    title: string;
    cards: Array<{
      title: string;
      body: string;
    }>;
  };
  includedSection: {
    label: string;
    title: string;
    body: string;
    groups: Array<{
      title: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    }>;
  };
  audienceSection: {
    label: string;
    title: string;
    blocks: Array<{
      title: string;
      body: string;
    }>;
  };
  processSection: {
    label: string;
    title: string;
    steps: Array<{
      title: string;
      body: string;
    }>;
  };
  pricingSection: {
    label: string;
    title: string;
    plans: Array<{
      name: string;
      price: string;
      timeline?: string;
      bestFor?: string;
      payment?: string;
      note?: string;
      items: string[];
    }>;
  };
  faqSection: {
    label: string;
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  finalCta: {
    title: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
    trust: string;
  };
};

export const SERVICE_DETAIL_CONTENT: Record<string, ServiceDetailContent> = {
  "full-growth-system": {
    slug: "full-growth-system",
    metaTitle: "WordPress GoHighLevel Growth System | Flux Media Creations",
    metaDescription:
      "Get your WordPress website and GoHighLevel CRM built and connected by one team. Complete lead capture and follow-up system delivered in 14 to 21 days.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      alt: "Team planning a connected website and CRM growth system around a desk with laptops and notes.",
    },
    breadcrumb: ["Services", "Full Growth System"],
    preHeadline: "Most Popular Engagement",
    heroTitle: "Full Growth System — Your WordPress Website and GoHighLevel CRM Built and Connected by One Team.",
    heroBody:
      "A website without a CRM is a net. A CRM without a website is a bucket. Most service businesses have one or the other, but not both working together. The Full Growth System solves that by building your WordPress site and GoHighLevel CRM at the same time, connecting them directly, and delivering a complete lead capture and follow-up system in 14 to 21 days.",
    heroStats: [
      { value: "14–21 Days", label: "Complete system delivery" },
      { value: "1 Team", label: "Design, build, and automation all by us" },
      { value: "0", label: "Manual follow-up steps required after launch" },
      { value: "90+", label: "PageSpeed score on every WordPress site" },
    ],
    problemSection: {
      label: "Why separate tools fail",
      title: "A website and CRM that work in silos will leak leads every week.",
      cards: [
        {
          title: "Your website captures leads but nothing automatic happens next",
          body: "When a visitor fills out your contact form and the response depends on someone checking an inbox later, you are already behind. In the Full Growth System, every form submission can trigger an instant, relevant follow-up automatically.",
        },
        {
          title: "Your CRM exists, but your website is not feeding it cleanly",
          body: "GoHighLevel is only useful when the right lead sources, form fields, tags, and pipeline logic are connected from the start. We build the front-end site and the CRM structure together so data flows properly from day one.",
        },
        {
          title: "Two vendors usually means nobody owns the gap between them",
          body: "If one team builds the website and another builds the automation later, the integration usually becomes an afterthought. We handle the site, the CRM, the workflows, and the testing as one system with one point of responsibility.",
        },
      ],
    },
    includedSection: {
      label: "What the Full Growth System includes",
      title: "Your complete WordPress and GoHighLevel growth system, built and connected from the start.",
      body: "This package combines the website, CRM, automation, and integration layer into one delivery path so nothing important gets bolted on after launch.",
      groups: [
        {
          title: "WordPress Website",
          items: [
            { title: "Custom Figma design for every page", body: "Full design approval before any code is written. What you approve is exactly what gets built." },
            { title: "Elementor Pro WordPress development", body: "Up to 10 custom pages including home, service, about, contact, and any pages specific to your business." },
            { title: "Conversion-focused page structure", body: "Strategic CTAs, trust signals, and social proof placed where they actually convert." },
            { title: "On-page SEO on every page", body: "Target keywords in H1s, metadata, image alt text, internal links, and a fully configured Rank Math setup." },
            { title: "Schema markup", body: "Organization, Service, and FAQ schema implemented for richer visibility in search." },
            { title: "PageSpeed 90+ target", body: "Image optimization, Cloudflare CDN, caching, and clean code so the site loads fast from day one." },
            { title: "GA4 and Search Console setup", body: "Both tools are verified and configured on launch day." },
            { title: "Conversion-focused copy direction", body: "Core page messaging shaped around what your visitors need to see to contact you." },
          ],
        },
        {
          title: "GoHighLevel Automation",
          items: [
            { title: "Full GHL sub-account setup", body: "Clean account structure, custom fields, contact tags, and pipeline stages built around your real sales process." },
            { title: "Missed call text-back", body: "Every unanswered inbound call triggers an instant SMS to the caller within 30 seconds." },
            { title: "Form to CRM to instant SMS", body: "Every WordPress form submission routes directly to GoHighLevel and triggers an automated response." },
            { title: "Appointment booking and reminders", body: "Calendar setup with confirmation, 24-hour reminder, 2-hour reminder, and post-appointment follow-up." },
            { title: "Lead nurture sequences", body: "Multi-touch SMS and email follow-up for leads that do not book immediately." },
            { title: "Review generation automation", body: "Review request SMS sent automatically after completed visits or jobs." },
            { title: "A2P SMS registration", body: "Complete 10DLC brand and campaign registration handled so your SMS actually gets delivered." },
            { title: "No-show re-engagement", body: "If a booked appointment is missed, a reschedule workflow fires automatically." },
          ],
        },
        {
          title: "Integration Layer",
          items: [
            { title: "Every WordPress form to the correct GHL pipeline", body: "Quote requests, contact forms, and booking actions all route into the right stage with the right tags." },
            { title: "Live chat and popup capture to GHL", body: "Any live chat widget or popup routes directly into your pipeline so every conversation is captured." },
            { title: "Facebook Lead Ads into GHL", body: "If you run Meta ads, new leads route straight into your GoHighLevel workflow with instant SMS follow-up." },
          ],
        },
      ],
    },
    audienceSection: {
      label: "Who this is right for",
      title: "The Full Growth System is built for service businesses where each lead has real value.",
      blocks: [
        {
          title: "Healthcare clinics",
          body: "A strong fit for clinics that need both a patient-facing website and an automated follow-up system. We have delivered this model for pain management, vein treatment, orthopedic, and multi-specialty practices.",
        },
        {
          title: "Home service businesses",
          body: "Ideal for companies starting fresh or replacing a site that is not generating enquiries. The website drives demand and the CRM handles the speed-to-lead problem automatically.",
        },
        {
          title: "Real estate professionals",
          body: "Useful for agents and teams that want a complete lead capture and nurturing system instead of a site that only showcases listings.",
        },
        {
          title: "Service businesses that want one team handling everything",
          body: "Best for owners who do not want to coordinate between a designer, developer, automation consultant, and support person just to launch one working system.",
        },
      ],
    },
    processSection: {
      label: "Delivery process",
      title: "From discovery to live system in 14 to 21 days.",
      steps: [
        {
          title: "Project review",
          body: "We learn your business, your goals, your existing tools, and where leads are being lost.",
        },
        {
          title: "Figma design",
          body: "Every page of your site is designed and approved before development begins.",
        },
        {
          title: "Parallel build, integration, and testing",
          body: "WordPress development and GoHighLevel configuration run simultaneously, then we connect your forms to GHL, run test leads through every workflow, verify the automations, complete QA across browsers and mobile, and handle launch and handover.",
        },
      ],
    },
    pricingSection: {
      label: "Investment",
      title: "Full Growth System pricing, everything included, nothing outsourced.",
      plans: [
        {
          name: "Full Growth System",
          price: "from $1,300",
          timeline: "14–21 days",
          payment: "50% upfront · 50% on launch",
          note: "GoHighLevel Starter plan ($97/mo) is purchased directly by you from GoHighLevel and is not included in our fee.",
          items: [
            "Custom WordPress website with up to 10 pages",
            "Full Figma design for all pages",
            "Elementor Pro build",
            "On-page SEO and schema markup",
            "GA4 and Search Console setup",
            "Full GoHighLevel account setup",
            "Missed call text-back",
            "Form to CRM to instant SMS automation",
            "Appointment booking and reminder sequences",
            "5-step lead nurture by SMS and email",
            "Review generation automation",
            "A2P SMS registration",
            "Facebook Lead Ads to GHL if applicable",
            "Full WordPress to GHL integration",
            "Recorded walkthrough and 30 days direct WhatsApp support",
          ],
        },
      ],
    },
    faqSection: {
      label: "Questions about the Full Growth System",
      title: "What people ask before starting.",
      items: [
        { q: "Can I get just the website or just the automation instead?", a: "Yes. Our WordPress Website Build starts from $500 and our GoHighLevel Automation setup starts from $300. The Full Growth System is the strongest option when you need both built together and connected from the start." },
        { q: "Do you build the GoHighLevel automations while building the website?", a: "Yes. Design, development, and GHL configuration run in parallel. We do not finish the website and then start the automation later." },
        { q: "What if I already have a GoHighLevel account?", a: "We audit your existing setup, clean up what is not working, and build on top of what is salvageable. We will tell you honestly what should stay and what needs to be rebuilt." },
        { q: "What if I already have a WordPress website?", a: "We can connect your existing WordPress site to a new GoHighLevel system, or recommend a rebuild if the current site is holding back rankings or conversions." },
        { q: "Is the Full Growth System suitable for a brand new business?", a: "Absolutely. Starting with both your website and CRM connected from day one is often the cleanest possible setup." },
        { q: "What ongoing costs should I expect after launch?", a: "Plan for the GoHighLevel Starter plan at $97 per month, WordPress hosting typically around $20–$50 per month, and optional monthly maintenance if you want ongoing hands-on support." },
      ],
    },
    finalCta: {
      title: "Stop running your website and CRM as two separate things. Build them together.",
      body: "Contact us with your current lead flow. We will identify what is leaking and show you exactly what your Full Growth System should look like. Most clients are live within three weeks of signing.",
      primaryLabel: "Get your Growth System built →",
      secondaryLabel: "WhatsApp us",
      trust: "One team. One point of contact. WordPress and GoHighLevel built together for US healthcare clinics, home service businesses, and real estate professionals.",
    },
  },
  "airtable-business-hub": {
    slug: "airtable-business-hub",
    metaTitle: "Airtable CRM Setup & Business Hub for Small Businesses | Flux Media Creations",
    metaDescription:
      "Custom Airtable CRM, project tracker, client portal, automations, and dashboards for small businesses. Done-for-you Airtable setup from $200.",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Business dashboard and analytics workspace representing a custom Airtable operations hub.",
    },
    breadcrumb: ["Services", "Airtable Business Hub"],
    preHeadline: "Custom Airtable CRM & Operations Hub",
    heroTitle: "Your Business Runs on Spreadsheets and Sticky Notes. Let’s Fix That With a Custom Airtable System.",
    heroBody:
      "Airtable is one of the most flexible operations tools available to small and mid-sized service businesses, and most businesses are using only a fraction of what it can do. We build custom Airtable CRM systems, project trackers, client portals, and automated dashboards that replace scattered spreadsheets, messy inboxes, and manual reporting with one clean system your team can actually use.",
    heroStats: [
      { value: "from $200", label: "Starting investment for a custom Airtable build" },
      { value: "5–7 Days", label: "Average delivery timeline" },
      { value: "1 Platform", label: "Replaces spreadsheets, project tools, and manual reports" },
      { value: "100%", label: "Custom built for your workflow" },
    ],
    problemSection: {
      label: "What we hear every time",
      title: "Your business data is everywhere. Contacts in Gmail. Projects in a spreadsheet. Client notes in your head. That is not a system.",
      cards: [
        {
          title: "You have no single source of truth for client data",
          body: "Client contact details in your phone, project status in a spreadsheet, invoices in email, and notes in a notebook. When someone asks where things stand, nobody has a fast answer. A custom Airtable CRM puts client records, project status, and communication history in one place.",
        },
        {
          title: "Your project management is manual and inconsistent",
          body: "Every new project starts from scratch. You copy a checklist, set reminders in your phone, and hope nothing gets missed. A custom Airtable project tracker gives you a repeatable workflow with automated task assignment, status views, and deadline tracking.",
        },
        {
          title: "You have no visibility into business performance",
          body: "If you cannot quickly see delivery time, best lead source, or overloaded team members, you are managing blind. Airtable dashboards give you a live view of your business without manual exports or spreadsheet wrangling.",
        },
      ],
    },
    includedSection: {
      label: "What’s included",
      title: "Custom Airtable systems built around how your business actually works, not a generic template.",
      body: "We do not install a prebuilt Airtable template and leave you to figure it out. We map your workflow, design the database structure, build the automations, and train your team on how to use it confidently.",
      groups: [
        {
          title: "Core Builds",
          items: [
            { title: "Custom Airtable CRM", body: "Client records with contact details, lead source, project history, communication logs, contract status, and payment status, all in one structured system." },
            { title: "Project tracker and operations hub", body: "Project databases linked to your CRM with milestones, due dates, team assignment, workload views, and repeatable templates." },
            { title: "Client portal integration", body: "Read-only client-facing views, approval forms, and shared asset tracking without exposing your full internal base." },
          ],
        },
        {
          title: "Automation and Reporting",
          items: [
            { title: "Automated email triggers", body: "Welcome emails, review requests, payment reminders, and status notifications driven by what changes in the base." },
            { title: "Form and tool integrations", body: "Website forms, Typeform, Gmail, Slack, Calendly, Stripe, and other tools connected through Airtable, Make, or Zapier." },
            { title: "Visual dashboards", body: "Revenue pipeline, active versus completed projects, overdue tasks, lead source breakdown, and workload visibility in one place." },
          ],
        },
      ],
    },
    audienceSection: {
      label: "Is Airtable right for you?",
      title: "Airtable works best for service businesses with repeatable processes and a growing team.",
      blocks: [
        { title: "Airtable for web and marketing agencies", body: "Track clients, deliverables, retainers, billing, and freelancer workload in one clean operations hub that scales without hiring an operations manager first." },
        { title: "Airtable for healthcare operations", body: "Use Airtable for non-clinical operations like vendor management, staff onboarding, inventory, compliance documentation, and facility tracking, separate from your EHR." },
        { title: "Airtable for home service companies", body: "Manage jobs, subcontractors, estimates, material procurement, and customer follow-up in one structured system your team can update in real time." },
        { title: "Airtable for real estate teams", body: "Coordinate transactions, listings, vendors, buyer pipelines, and commission tracking without losing deadlines or documents across tools." },
      ],
    },
    processSection: {
      label: "How we build your Airtable system",
      title: "Discovery to delivered system in 5–7 days.",
      steps: [
        { title: "Day 1: Workflow mapping", body: "We map how you currently track clients, projects, billing, and the data your team needs every day before building anything." },
        { title: "Day 2–3: Base build", body: "Your custom Airtable base is built with the right tables, fields, linked records, and views for your workflow." },
        { title: "Day 4–5: Automation setup", body: "Email triggers, form integrations, and Make or Zapier connections are built alongside your dashboard and reporting layer." },
        { title: "Day 6: QA and data import", body: "Existing spreadsheet data is cleaned and imported, then every automation is tested with real sample records." },
        { title: "Day 7: Handover and training", body: "You receive a recorded walkthrough, written usage notes, and 30 days of support." },
      ],
    },
    pricingSection: {
      label: "Investment",
      title: "Airtable setup pricing, transparent and fixed.",
      plans: [
        {
          name: "Starter Hub",
          price: "from $200",
          timeline: "5–7 days",
          bestFor: "Solo operators and small teams needing one clean system",
          items: [
            "1 custom Airtable base with up to 3 tables",
            "CRM or project tracker, choose one",
            "Up to 3 custom views",
            "2 automated triggers",
            "Data import from an existing spreadsheet",
            "Recorded walkthrough and 30 days support",
          ],
        },
        {
          name: "Business Hub",
          price: "from $400",
          timeline: "7–10 days",
          bestFor: "Growing service businesses needing CRM plus project management",
          items: [
            "Custom Airtable base with up to 6 tables",
            "Full CRM and project tracker built and linked",
            "Dashboard with key metrics",
            "Up to 5 automated triggers",
            "Website form to Airtable integration",
            "Client portal view configuration",
            "Data import and cleanup",
            "Recorded walkthrough, written documentation, and 30 days support",
          ],
        },
        {
          name: "Full Operations Hub",
          price: "from $700",
          timeline: "10–14 days",
          bestFor: "Teams with complex workflows needing full operations visibility",
          note: "Airtable Free can work for Starter Hub. Larger builds may benefit from Airtable Team depending on users and automation volume.",
          items: [
            "Unlimited tables in a custom base",
            "CRM, project management, invoicing tracker, and team dashboard",
            "Make or Zapier integrations for advanced automations",
            "Multiple form integrations and custom reporting",
            "Team permissions setup",
            "Full data migration from existing tools",
            "Live training session, recorded walkthrough, and written documentation",
            "30 days direct support",
          ],
        },
      ],
    },
    faqSection: {
      label: "Airtable questions",
      title: "What people ask before we start.",
      items: [
        { q: "Do I need to know how to use Airtable before you build my system?", a: "No. We build the system and walk you through every table, view, and automation. Most clients are comfortable using it within the first day." },
        { q: "Can you connect Airtable to my website or other tools?", a: "Yes. We regularly connect Airtable to WordPress, GoHighLevel, Gmail, Slack, Typeform, Calendly, Stripe, and many other tools." },
        { q: "Can you migrate my data from Google Sheets or Excel?", a: "Yes. Data migration from spreadsheets is included in all tiers, with cleanup and restructuring so the data fits the new base properly." },
        { q: "Is Airtable free?", a: "Airtable has a free plan that works for some small teams. Larger builds often benefit from Team depending on records, automations, and collaborators." },
        { q: "What is the difference between Airtable and GoHighLevel?", a: "GoHighLevel is best for inbound leads, follow-up, SMS, and booking. Airtable is best for operations, projects, tasks, and business data. Many clients use both together." },
        { q: "Can my whole team use it at the same time?", a: "Yes. Airtable is built for team collaboration, and we configure permissions so each team sees what they actually need." },
      ],
    },
    finalCta: {
      title: "Replace your scattered spreadsheets with one clean Airtable system.",
      body: "Contact us with your current workflow. We will map what your Airtable system needs to do and give you a fixed-price quote within 24 hours.",
      primaryLabel: "Get your Airtable system built →",
      secondaryLabel: "WhatsApp us",
      trust: "Custom Airtable CRM and operations systems for agencies, healthcare practices, home service companies, and real estate teams. Delivered in 5–14 days.",
    },
  },
  "make-zapier-automation": {
    slug: "make-zapier-automation",
    metaTitle: "Make & Zapier Automation Setup Service for US Businesses | Flux Media Creations",
    metaDescription:
      "Make and Zapier automation workflows that connect your tools, route leads, and eliminate manual work. Done-for-you automation from $150.",
    image: {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
      alt: "Code and automation workflow visual on a screen representing connected tools running in the background.",
    },
    breadcrumb: ["Services", "Make & Zapier Automation"],
    preHeadline: "Workflow Automation · Make · Zapier · Webhooks",
    heroTitle: "Connect Your Tools. Eliminate Manual Work. Build Automation Workflows That Run Your Business in the Background.",
    heroBody:
      "Every hour your team spends copying data between tools, manually updating spreadsheets, or chasing down information that should have been routed automatically is an hour not spent on work that grows the business. We design and build Make and Zapier workflows that connect your existing tools and eliminate repetitive manual tasks, starting from $150 and delivered within days.",
    heroStats: [
      { value: "from $150", label: "Automation workflow starting investment" },
      { value: "3–7 Days", label: "Average build and delivery timeline" },
      { value: "1,000+", label: "Tools connectable via Make and Zapier" },
      { value: "0", label: "Manual steps required after go-live" },
    ],
    problemSection: {
      label: "What manual work is costing you",
      title: "Your team is doing the same tasks over and over. Every day. That is an automation problem.",
      cards: [
        { title: "Data living in silos, copied manually between tools", body: "Facebook Lead Ad comes in, someone copies it into GoHighLevel, someone else adds it to a spreadsheet, then somebody sends a follow-up email. A single automation can handle the entire sequence in under 60 seconds." },
        { title: "Follow-up depends on your team remembering", body: "If your process depends on checking multiple places or asking multiple people whether something happened, it is not a process. Automated workflows mean every trigger gets the right action every time." },
        { title: "Reporting takes hours to assemble", body: "If weekly reporting involves opening multiple tools, exporting CSVs, and pasting into a spreadsheet, we can automate the data pull and deliver it where you need it." },
      ],
    },
    includedSection: {
      label: "Common workflows we build",
      title: "Automation workflows we’ve built for service businesses, ready to adapt for yours.",
      body: "Every automation starts with your actual process, not a generic template. These are the workflow categories our clients ask for most often.",
      groups: [
        {
          title: "Lead Capture and Routing",
          items: [
            { title: "Facebook Lead Ads to GoHighLevel to instant SMS", body: "New ad leads routed, tagged, and responded to within 60 seconds." },
            { title: "Website forms to Airtable and GHL", body: "Form submissions create records, update pipeline stages, and notify the right people instantly." },
            { title: "Calendly, Typeform, and Jotform automations", body: "Bookings and form submissions trigger confirmations, proposals, and downstream actions automatically." },
          ],
        },
        {
          title: "CRM, Reporting, and Delivery",
          items: [
            { title: "CRM stage changes synced across systems", body: "Keep Airtable, GHL, Slack, and spreadsheet reporting aligned without human copy-paste." },
            { title: "Automated internal alerts and reports", body: "Daily lead summaries, weekly revenue reports, overdue task alerts, and no-show notifications delivered automatically." },
            { title: "Client onboarding and delivery automation", body: "Signed contracts, created projects, welcome emails, onboarding checklists, and milestone updates routed with no manual bottlenecks." },
          ],
        },
      ],
    },
    audienceSection: {
      label: "Built for your team",
      title: "If your team does anything repeatedly, we can automate it.",
      blocks: [
        { title: "Automation for marketing agencies", body: "Automate reporting, lead routing, invoice triggers, and client onboarding so the team spends more time on campaign work and less on ops glue." },
        { title: "Automation for healthcare practices", body: "Route new patient leads into GHL, trigger reminders and internal notifications, and keep non-clinical admin from swallowing staff time." },
        { title: "Automation for home service businesses", body: "Connect estimate requests, reviews, invoices, and seasonal campaigns so the field team can stay focused on the job." },
        { title: "Automation for e-commerce and SaaS", body: "Handle order notifications, payment failures, churn recovery, customer check-ins, and product review requests automatically." },
      ],
    },
    processSection: {
      label: "How we build your automation",
      title: "Discovery to live automation in 3–7 days.",
      steps: [
        { title: "Day 1: Workflow discovery", body: "We map the current manual process step by step, document the trigger, outputs, tools involved, and expected outcome, then agree on the workflow before we build." },
        { title: "Day 2–4: Automation build", body: "The workflow is built in Make or Zapier, connections are configured, and error handling or fallback logic is added so failures are visible instead of silent." },
        { title: "Day 5–6: Testing", body: "We run the automation with real data under multiple conditions, including blanks, failures, and retries, so the workflow behaves properly in the real world." },
        { title: "Day 7: Handover", body: "You receive a recorded walkthrough, written notes on how to monitor or pause the workflow, and 30 days of support." },
      ],
    },
    pricingSection: {
      label: "Investment",
      title: "Automation pricing, fixed rates and no surprises.",
      plans: [
        {
          name: "Single Workflow",
          price: "from $150",
          timeline: "3–5 days",
          bestFor: "One specific automation you need built fast",
          items: [
            "1 custom Make or Zapier workflow",
            "Up to 5 steps or actions",
            "Testing with live data",
            "Recorded walkthrough",
            "30 days support",
          ],
        },
        {
          name: "Automation Bundle",
          price: "from $400",
          timeline: "5–10 days",
          bestFor: "Businesses wanting 3–5 connected automations",
          items: [
            "Up to 5 custom automation workflows",
            "Multi-tool connections across CRM, ops, and notifications",
            "Error handling and notifications built in",
            "Workflow documentation",
            "Recorded walkthrough",
            "30 days direct support",
          ],
        },
        {
          name: "Full Automation Buildout",
          price: "from $700",
          timeline: "10–14 days",
          bestFor: "Teams wanting a deeper automated operations layer",
          note: "Make and Zapier subscription costs are separate and paid directly to the platform you use.",
          items: [
            "Unlimited workflows for one business process area",
            "Complex multi-step logic with routers, iterators, and filters",
            "Webhook configuration for custom integrations",
            "Full workflow map and documentation",
            "Live training session",
            "Recorded walkthrough and 30 days direct support",
          ],
        },
      ],
    },
    faqSection: {
      label: "Automation questions",
      title: "What people ask before we start building.",
      items: [
        { q: "Do I need to know how Make or Zapier works?", a: "No. You tell us what the manual process looks like and what should happen automatically. We handle the technical side and then walk you through the finished system." },
        { q: "What tools can you connect?", a: "Anything with a native integration or API is fair game, including GoHighLevel, WordPress, Airtable, Google Workspace, Slack, Stripe, QuickBooks, Facebook Ads, Calendly, WooCommerce, Shopify, and many more." },
        { q: "What is the difference between Make and Zapier?", a: "Make is usually better for complex multi-step workflows and cost efficiency at scale. Zapier is often faster for simpler linear automations. We recommend the right one based on your process." },
        { q: "What happens if my automation breaks?", a: "We build error handling into every workflow and include 30 days of support after launch. If something fails, you get visibility instead of silent data loss." },
        { q: "Can you automate something with a tool you have not mentioned here?", a: "Almost certainly yes. If the tool exposes an API, we can often connect it through webhooks even without a native integration." },
        { q: "Do I need Make or Zapier accounts already?", a: "No. We can help set them up, though we recommend the accounts stay in your ownership." },
      ],
    },
    finalCta: {
      title: "Stop doing manually what a machine should be doing for you.",
      body: "Contact us with your biggest manual workflow headache and we will map the automation, then give you a fixed quote within 24 hours.",
      primaryLabel: "Get your automation built →",
      secondaryLabel: "WhatsApp us",
      trust: "Make and Zapier automation workflows built for agencies, healthcare practices, home service businesses, and e-commerce brands. Delivered in 3–14 days and fully tested.",
    },
  },
  "monthly-maintenance": {
    slug: "monthly-maintenance",
    metaTitle: "WordPress & GoHighLevel Monthly Maintenance Service | Flux Media Creations",
    metaDescription:
      "WordPress updates, security scans, backups, GoHighLevel monitoring, speed checks, and content updates. Maintenance from $150/mo.",
    image: {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
      alt: "Cybersecurity and site monitoring visual representing maintenance, uptime, and system protection.",
    },
    breadcrumb: ["Services", "Monthly Maintenance"],
    preHeadline: "WordPress & GoHighLevel Monthly Care Plan",
    heroTitle: "Your WordPress Website and GoHighLevel System Need Regular Maintenance. We Handle It So You Never Have To Think About It.",
    heroBody:
      "An unmanaged WordPress website is a security liability, a performance risk, and a potential SEO disaster waiting to happen. Outdated plugins, missed core updates, and unmonitored automations do not just cause headaches. They lose leads and rankings. Our Monthly Maintenance plan keeps your WordPress site and GoHighLevel system secure, fast, and working exactly as intended, every month, handled directly by us.",
    heroStats: [
      { value: "from $150/mo", label: "Monthly maintenance starting rate" },
      { value: "24hr", label: "Maximum response time for reported issues" },
      { value: "Monthly", label: "WordPress core, plugin, and theme updates" },
      { value: "Direct", label: "WhatsApp and email access with no ticket queue" },
    ],
    problemSection: {
      label: "What happens when WordPress goes unmaintained",
      title: "Most WordPress websites are not hacked by sophisticated attacks. They are hacked by outdated plugins nobody updated three months ago.",
      cards: [
        { title: "Outdated plugins are the number one WordPress security vulnerability", body: "We run regular plugin, theme, and core updates with a pre-update backup before every change so rollback is quick if anything conflicts." },
        { title: "Site slowdowns hurt your rankings silently", body: "PageSpeed degrades over time as images, plugins, and cache issues accumulate. We run recurring performance checks and fix the drift before it damages rankings." },
        { title: "GoHighLevel automations can break quietly", body: "A stopped trigger, a changed webhook, or an A2P issue can break your lead follow-up without obvious warning. We monitor the automation layer so problems get caught before they cost leads." },
      ],
    },
    includedSection: {
      label: "Everything in your maintenance plan",
      title: "Monthly WordPress and GoHighLevel maintenance, every task handled, every month.",
      body: "This is structured monthly care, not reactive support only. We handle the updates, monitoring, small changes, and system health checks that keep a live business site dependable.",
      groups: [
        {
          title: "WordPress Maintenance",
          items: [
            { title: "Core, plugin, and theme updates", body: "Updates are applied with backups taken first. More complex sites can be tested on staging before live rollout." },
            { title: "Daily automated backups", body: "Backups are retained offsite so recovery is possible after a hack, server issue, or bad update." },
            { title: "Security monitoring and malware scanning", body: "Known vulnerability alerts are watched and critical plugin issues are patched or replaced quickly." },
            { title: "Monthly speed and performance checks", body: "Desktop and mobile speed are monitored, with cleanup and optimization where scores drift." },
            { title: "Uptime monitoring", body: "If the site goes down, investigation starts quickly instead of the outage going unnoticed." },
            { title: "Monthly report", body: "Clear summary of updates applied, backup status, security results, speed checks, and issues resolved." },
          ],
        },
        {
          title: "GoHighLevel Maintenance",
          items: [
            { title: "Workflow monitoring", body: "Triggers, delivery rates, and failed runs are reviewed on a recurring schedule." },
            { title: "A2P SMS compliance monitoring", body: "Delivery rates and carrier compliance are watched so follow-up systems do not quietly degrade." },
            { title: "Pipeline and CRM health checks", body: "Dead contacts, stuck leads, and stage drift are cleaned up before the system turns messy." },
            { title: "Light content updates", body: "Small monthly changes like business hours, service text, images, or page edits are included within the plan allowance." },
          ],
        },
      ],
    },
    audienceSection: {
      label: "Is this for you?",
      title: "If you are running a service business on WordPress and GoHighLevel, you need a maintenance plan.",
      blocks: [
        { title: "You built your site and GHL system with us", body: "We already know the stack, plugins, workflows, hosting, and handoff details, so ongoing care is seamless." },
        { title: "You have an existing WordPress site that is not actively maintained", body: "If another agency built the site and nobody is watching updates, backups, or security, you are carrying risk whether you feel it yet or not." },
        { title: "You have GoHighLevel automations running but nobody monitoring them", body: "GHL is not a set-and-forget tool. If nobody checks it, silent failures eventually cost you leads." },
        { title: "You run a clinic or home service business that cannot afford downtime", body: "If your website generates real appointments or calls, downtime is a revenue event, not just a tech inconvenience." },
      ],
    },
    processSection: {
      label: "How maintenance works",
      title: "What happens every month on a clear, documented schedule.",
      steps: [
        { title: "Week 1", body: "Backups before updates, WordPress core and plugin updates, theme updates where needed, security scans, and A2P checks for GHL plans." },
        { title: "Week 2", body: "Speed tests, performance fixes, workflow audits, CRM checks, and light content updates if requested." },
        { title: "Week 3", body: "Monthly report is compiled and sent, and any outstanding issues are resolved." },
        { title: "Week 4", body: "Next month’s maintenance schedule and any planned changes are discussed." },
      ],
    },
    pricingSection: {
      label: "Plans",
      title: "Simple, transparent monthly maintenance pricing.",
      plans: [
        {
          name: "WordPress Essential",
          price: "$150/month",
          bestFor: "Simple WordPress sites with lower update frequency",
          items: [
            "Monthly core, plugin, and theme updates",
            "Daily automated backups with 30-day retention",
            "Monthly malware scan",
            "Monthly speed check",
            "Uptime monitoring",
            "Monthly one-page report",
            "1 hour light content updates",
            "Email support with 24hr response",
          ],
        },
        {
          name: "WordPress + GHL",
          price: "$250/month",
          bestFor: "Businesses running WordPress and GoHighLevel together",
          items: [
            "Everything in WordPress Essential",
            "GoHighLevel workflow monitoring",
            "A2P SMS compliance monitoring",
            "GHL pipeline health check",
            "CRM dead contact cleanup",
            "2 hours light content updates",
            "Direct WhatsApp support with 24hr response",
          ],
        },
        {
          name: "Priority Care",
          price: "$400/month",
          bestFor: "Healthcare clinics and businesses where downtime has direct revenue impact",
          note: "All plans are month-to-month with no long-term contract.",
          items: [
            "Everything in WordPress + GHL",
            "Weekly security scans",
            "Staging environment setup for safer update testing",
            "Priority response for critical issues",
            "3 hours light content updates",
            "Quarterly SEO health check",
            "Direct WhatsApp support for critical issues",
          ],
        },
      ],
    },
    faqSection: {
      label: "Maintenance questions",
      title: "What people ask before signing up.",
      items: [
        { q: "What if my site breaks during an update?", a: "We take a full backup before every update. If something conflicts, we restore quickly and investigate before trying again." },
        { q: "Can I join a maintenance plan even if you did not build my site?", a: "Yes. We start with a one-time audit so we understand the current state and can take over safely." },
        { q: "What counts as light content updates?", a: "Small edits like swapping images, changing text, updating contact details, business hours, or adding a team member. Larger redesigns or new features are quoted separately." },
        { q: "Do I still need maintenance if my site does not get much traffic?", a: "Yes. Low traffic does not make a WordPress site less vulnerable to outdated plugin exploits." },
        { q: "What happens if I cancel?", a: "You can cancel with notice. We provide a final report and hand over a clean backup snapshot of the site." },
        { q: "Is uptime monitoring included in all plans?", a: "Yes. All plans include uptime monitoring so downtime gets noticed quickly." },
        { q: "Do you manage WordPress hosting?", a: "We do not resell hosting. Your account stays with your provider, and we manage what happens inside the WordPress environment." },
      ],
    },
    finalCta: {
      title: "Stop hoping your WordPress site stays secure. Know it is.",
      body: "Contact us for a maintenance review. We will check your current site health, identify the biggest vulnerabilities, and recommend the right monthly plan.",
      primaryLabel: "Start your maintenance plan →",
      secondaryLabel: "WhatsApp us",
      trust: "WordPress and GoHighLevel monthly maintenance for healthcare clinics, home service businesses, real estate professionals, and agencies. No contracts. Direct access.",
    },
  },
  "search-visibility-engine": {
    slug: "search-visibility-engine",
    metaTitle: "Search Visibility Engine — SEO, Google Maps & AI Search for Service Businesses | Flux Media Creations",
    metaDescription:
      "Get found on Google Search, Google Maps, ChatGPT, and Perplexity with search visibility systems for US service businesses. From $400.",
    image: {
      src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
      alt: "Search analytics and performance dashboard representing SEO, Google Maps, and AI search visibility.",
    },
    breadcrumb: ["Services", "Search Visibility Engine"],
    preHeadline: "SEO · Google Maps · AI Search · Local Discovery",
    heroTitle: "Get Found on Google, Google Maps, and AI Search Before Your Competitors Do.",
    heroBody:
      "Search has changed. Your potential clients are not just typing into Google anymore. They are asking ChatGPT, searching in Perplexity, using AI Overviews, and checking Google Maps before they ever visit a website. The Search Visibility Engine builds your presence across all of these discovery channels so the right people find you first, trust you faster, and contact you directly.",
    heroStats: [
      { value: "3 Channels", label: "Google Search, Google Maps, and AI results" },
      { value: "from $400", label: "Starting investment" },
      { value: "90 Days", label: "Typical timeframe for first ranking improvements" },
      { value: "1 System", label: "Built and managed by one team" },
    ],
    problemSection: {
      label: "How search has changed",
      title: "Ranking on Google used to be enough. Now your clients discover businesses in multiple ways, and most brands are visible in only one of them.",
      cards: [
        { title: "Google organic search", body: "Traditional SEO still drives the majority of high-intent traffic, but it takes a proper technical and content foundation to compound over time." },
        { title: "Google Maps and Local Pack", body: "The map pack often wins the click because it shows location, reviews, and contact info immediately. It relies on Business Profile quality, NAP consistency, and reviews." },
        { title: "AI Overviews and answer engines", body: "Google’s AI answers, ChatGPT, Perplexity, and voice assistants reward businesses that publish direct, structured, trustworthy answers and show up across credible sources." },
      ],
    },
    includedSection: {
      label: "What the Search Visibility Engine builds",
      title: "A complete multi-channel discovery system built for search engines, maps, and AI results.",
      body: "This is not one checklist. It is a layered visibility system that improves the site, the local presence, and the source signals AI tools rely on when recommending businesses.",
      groups: [
        {
          title: "On-Page SEO Foundation",
          items: [
            { title: "Technical SEO audit and fixes", body: "Crawlability, indexation, speed, Core Web Vitals, canonicals, broken links, mobile issues, and structural gaps are documented and resolved." },
            { title: "Keyword research and page mapping", body: "Keywords are mapped by service, location, and buyer intent so each important query has a page built to answer it." },
            { title: "On-page optimization on every key page", body: "Headings, metadata, URL structure, alt text, internal linking, and schema are refined for both ranking and click-through." },
            { title: "Schema implementation", body: "Organization, Service, FAQ, and Local Business schema improve eligibility for richer search presentation." },
          ],
        },
        {
          title: "Maps, AEO, and GEO",
          items: [
            { title: "Google Business Profile optimization", body: "Services, categories, Q&A, descriptions, posts, and profile completeness are improved to support map visibility." },
            { title: "Review generation and citation cleanup", body: "Review requests and consistent NAP across directories strengthen local trust and map ranking potential." },
            { title: "Answer Engine Optimization", body: "FAQ strategy, featured snippet formatting, and direct-answer content help pages surface in AI Overviews and answer boxes." },
            { title: "Generative engine visibility", body: "Profiles, directory presence, case studies, and authority content improve the chance of being cited by ChatGPT, Perplexity, Gemini, and similar tools." },
          ],
        },
      ],
    },
    audienceSection: {
      label: "Built for your industry",
      title: "Search visibility for service businesses that cannot afford to be invisible online.",
      blocks: [
        { title: "Local SEO for healthcare clinics", body: "Pain clinics, vein centers, orthopedic practices, and multi-specialty groups competing for high-value patient searches where a single lead can be worth hundreds or thousands over time." },
        { title: "Local SEO for home service businesses", body: "HVAC, plumbing, electrical, and roofing brands fighting for local search demand where the map pack and first page rankings directly influence call volume." },
        { title: "SEO for WordPress and GoHighLevel agencies", body: "Agencies and consultants trying to rank for specialist keywords need stronger authority signals, better page targeting, and content that earns citations." },
        { title: "Local SEO for real estate professionals", body: "Agents and brokers competing for neighborhood and city-level searches where local trust and fast discovery shape lead flow." },
      ],
    },
    processSection: {
      label: "What to expect",
      title: "Honest expectations for the first 90 days.",
      steps: [
        { title: "Month 1: Foundation", body: "Technical fixes, on-page updates, Business Profile optimization, citation cleanup, schema, and tracking setup. This is groundwork, not instant ranking magic." },
        { title: "Month 2: Early signals", body: "Search Console begins showing keyword movement, profile impressions improve, reviews start compounding, and FAQ or answer content begins getting indexed." },
        { title: "Month 3 and beyond: Visible progress", body: "Long-tail rankings improve first, local pack visibility strengthens, traffic starts moving, and AI citation signals begin appearing for branded and niche queries." },
      ],
    },
    pricingSection: {
      label: "Investment",
      title: "Search Visibility Engine pricing with clear deliverables and no retainer trap.",
      plans: [
        {
          name: "Visibility Foundation",
          price: "from $400",
          bestFor: "Businesses that want the technical SEO and GBP base set up correctly first",
          items: [
            "Technical SEO audit and fix report",
            "On-page optimization for up to 5 pages",
            "Google Business Profile setup or full optimization",
            "Schema implementation",
            "Search Console and GA4 setup or verification",
            "Core citation audit and inconsistency fixes",
            "Keyword research report with 20 targets",
            "30 days support",
          ],
        },
        {
          name: "Growth Visibility",
          price: "from $400/month",
          bestFor: "Businesses committed to building search presence over time",
          items: [
            "Everything in Visibility Foundation during month one",
            "2 SEO-focused blog posts per month",
            "GBP post calendar and posting support",
            "Review generation workflow setup and monitoring",
            "Ongoing citation building",
            "Monthly Search Console and ranking review",
            "AEO updates including FAQ and schema refinement",
            "Direct WhatsApp support",
          ],
        },
        {
          name: "Full Visibility System",
          price: "from $700/month",
          bestFor: "Businesses targeting competitive markets or multiple service areas",
          note: "Visibility Foundation can be done standalone or used as month one of a monthly plan.",
          items: [
            "Everything in Growth Visibility",
            "4 SEO-focused blog posts per month",
            "GEO citation building across industry and review platforms",
            "AI search mention monitoring and reporting",
            "Local landing page creation",
            "Competitor ranking analysis",
            "Featured snippet targeting and tracking",
            "Qualified backlink outreach",
            "Bi-weekly check-ins",
          ],
        },
      ],
    },
    faqSection: {
      label: "Search visibility questions",
      title: "What people ask before starting.",
      items: [
        { q: "How long does SEO take to work?", a: "Meaningful movement usually takes 3–6 months, and stronger first-page targets often take longer depending on competition, domain age, and consistency." },
        { q: "Do I need a physical address for Google Maps ranking?", a: "Not always. Service area businesses can rank without publicly displaying an address when the profile is set up correctly." },
        { q: "What is the difference between SEO, AEO, and GEO?", a: "SEO is for traditional search rankings. AEO is for answer boxes, AI Overviews, and voice-style direct answers. GEO is for being cited in tools like ChatGPT and Perplexity." },
        { q: "Can you guarantee a page one ranking?", a: "No legitimate SEO provider can promise exact rankings. What we can do is build the strongest possible technical, local, and content foundation for the market you are in." },
        { q: "Do I need to write blog content myself?", a: "No. On monthly visibility plans we can handle the content strategy and writing for you." },
        { q: "Can I start with the one-time foundation and add monthly later?", a: "Yes. Many clients begin there, then extend into monthly visibility work once the baseline is fixed." },
        { q: "Do you work on sites you did not build?", a: "Yes. We audit the existing site first so we understand what is already helping, what is broken, and what needs to change." },
      ],
    },
    finalCta: {
      title: "Your next client is already searching for what you offer. Make sure they find you.",
      body: "Contact us for a visibility review. We will check your rankings, Google Business Profile, and AI search presence, then show you where visibility is leaking.",
      primaryLabel: "Build my search visibility →",
      secondaryLabel: "WhatsApp us",
      trust: "Search visibility systems built for US healthcare clinics, home service businesses, real estate professionals, and agencies. SEO, AEO, and GEO under one roof.",
    },
  },
};
