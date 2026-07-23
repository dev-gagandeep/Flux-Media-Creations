import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import ServiceLandingPage, { ServiceFaq } from "../_components/ServiceLandingPage";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Airtable CRM Setup for Service Businesses",
  description:
    "Build a custom Airtable CRM and business hub to manage leads, clients, projects, tasks, operations, and workflows in one organized system.",
  path: "/services/airtable-business-hub",
});

const faqs: ServiceFaq[] = [
  { q: "Can Airtable be used as a CRM?", a: "Yes. Airtable can be used as a custom CRM to manage leads, contacts, clients, deals, follow-ups, tasks, and project details. It is especially useful for businesses that need more flexibility than a standard CRM." },
  { q: "Is Airtable better than Google Sheets?", a: "Airtable is better than Google Sheets when your business needs linked records, custom views, forms, automations, dashboards, and structured workflows. Google Sheets is useful for simple spreadsheets, but Airtable is better for operational systems." },
  { q: "Can you build a custom Airtable CRM for my business?", a: "Yes. Flux Media Creations can build a custom Airtable CRM based on your lead flow, client process, project stages, team tasks, and reporting needs." },
  { q: "Can Airtable connect with GoHighLevel?", a: "Yes. Airtable can be connected with GoHighLevel through automation tools such as Make or Zapier, depending on the workflow." },
  { q: "Can Airtable connect with my WordPress website?", a: "Yes. Website forms can be connected to Airtable so leads, requests, or submissions are captured in your business hub." },
  { q: "What kind of businesses should use Airtable?", a: "Airtable is useful for agencies, consultants, clinics, home service companies, real estate professionals, operations teams, and service businesses that need a custom way to manage data and workflows." },
  { q: "Can you automate tasks in Airtable?", a: "Yes. Airtable can support automations, notifications, status updates, task creation, and integrations with external tools." },
  { q: "Do you provide training after setup?", a: "Yes. We can provide basic handoff guidance so your team understands how to use and update the Airtable system." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Airtable CRM & Business Hub",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "Airtable CRM Setup and Business Operations Hub",
  areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
  description:
    "Custom Airtable CRM and business hub setup for service businesses, including lead tracking, client databases, project management, task workflows, dashboards, forms, and automation integrations.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function AirtableBusinessHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <ServiceLandingPage
        eyebrow="Airtable CRM Setup"
        h1="Airtable CRM Setup and Business Hub for Service Businesses"
        heroTitle="Organize Your Leads, Clients, Projects and Operations in Airtable"
        heroBody={[
          "Your business should not depend on scattered spreadsheets, lost notes, messy follow-ups, and disconnected task lists.",
          "Flux Media Creations builds custom Airtable CRM and business hub systems for service businesses that need one clean place to manage leads, clients, projects, tasks, operations, documents, and team workflows.",
          "Whether you are running a clinic, agency, home service company, consulting business, real estate operation, or growing local brand, we can turn Airtable into a practical operating system built around how your business actually works.",
        ]}
        primaryCta="Build My Airtable Business Hub"
        secondaryCta="Request an Airtable Audit"
        trustItems={["Custom Airtable CRM", "Lead tracking", "Client database", "Project management", "Task workflows", "Team dashboards", "Automation setup", "Client portals", "Operations hub", "Reporting views"]}
        introTitle="From Messy Spreadsheets to a Clean Business Operating System"
        introBody={[
          "Many businesses start with spreadsheets because they are simple. But as the business grows, spreadsheets become harder to manage.",
          "Leads get missed. Client details are duplicated. Project updates are buried in chats. Team tasks live in different places. Reporting becomes manual. Nobody knows which version of the file is correct.",
          "Airtable gives businesses a flexible way to organize data, build custom workflows, collaborate, and automate repetitive tasks without needing a full custom software build. We help you turn that flexibility into a system your team can actually use.",
        ]}
        problemTitle="Is Your Business Outgrowing Spreadsheets?"
        problems={["Leads are tracked manually.", "Client information is spread across different tools.", "Projects are hard to monitor.", "Your team uses spreadsheets, email, WhatsApp, and notes for operations.", "Follow-ups are missed.", "Reports take too long to prepare.", "Task ownership is unclear.", "You do not have one source of truth.", "You need a lightweight CRM without a complex enterprise platform.", "Your business needs a custom workflow generic tools do not support."]}
        problemOutro="Airtable works well when your business needs flexibility, structure, visibility, and automation in one place."
        solutionTitle="A Custom Airtable CRM Built Around Your Workflow"
        solutionBody={[
          "We do not build generic Airtable templates and hand them over.",
          "We design your Airtable system around your actual business process: how leads come in, how clients are managed, how projects move forward, how tasks are assigned, and how your team needs to see information.",
          "The goal is simple: make your business easier to see, manage, and scale.",
        ]}
        solutionItems={["Leads", "Clients", "Contacts", "Deals", "Projects", "Tasks", "Appointments", "Documents", "Invoices", "Vendors", "Campaigns", "Requests", "Status updates", "Internal operations"]}
        buildTitle="Airtable CRM and Business Hub Setup"
        buildItems={[
          { title: "Lead Management CRM", body: "A custom lead tracking system for new inquiries, follow-up status, source tracking, deal stages, notes, next actions, assigned owners, lead value, and lost-lead reasons.", bullets: ["New lead intake", "Lead source tracking", "Deal stages", "Follow-up dates", "Next action"] },
          { title: "Client Database", body: "A clean client database so your team can quickly access client names, contacts, services purchased, project history, documents, notes, renewal dates, and account status.", bullets: ["Client records", "Documents", "Project history", "Renewal dates"] },
          { title: "Project Management Hub", body: "Airtable project systems that track work from start to finish with stages, owners, timelines, tasks, priorities, deliverables, files, dependencies, and approval status.", bullets: ["Stages", "Owners", "Deliverables", "Approvals"] },
          { title: "Task and Team Workflow System", body: "Task views that show what needs to be done, who owns it, and what is overdue.", bullets: ["My tasks", "This week", "Overdue", "Team workload"] },
          { title: "Business Operations Dashboard", body: "Dashboards and views for active leads, open deals, current projects, pending tasks, revenue pipeline, client status, renewals, bottlenecks, and workload.", bullets: ["Pipeline", "Projects", "Renewals", "Bottlenecks"] },
          { title: "Client Portal or Request Tracker", body: "Lightweight portals, request trackers, and internal submission forms for agencies, consultants, operations teams, and service businesses.", bullets: ["Requests", "Forms", "Client visibility", "Internal intake"] },
        ]}
        audienceTitle="Airtable Systems for Service-Based Businesses"
        audienceItems={[
          { title: "Agencies and Consultants", body: "Manage leads, clients, deliverables, campaigns, tasks, invoices, retainers, and project timelines." },
          { title: "Healthcare and Clinic Operations", body: "Manage admin workflows, provider tasks, marketing requests, vendor tracking, content planning, and operational checklists." },
          { title: "Home Service Businesses", body: "Manage quote requests, job tracking, service areas, contractors, follow-ups, and customer records." },
          { title: "Real Estate Professionals", body: "Manage buyers, sellers, listings, follow-ups, vendors, open houses, property details, and transaction stages." },
          { title: "Local Service Brands", body: "Centralize operations, tasks, requests, customer information, documents, and recurring workflows." },
        ]}
        tableTitle="Airtable CRM vs Spreadsheet"
        tableIntro="A spreadsheet stores information. A custom Airtable business hub helps your team run the business."
        table={{
          headings: ["Feature", "Spreadsheet", "Airtable Business Hub"],
          rows: [
            ["Data structure", "Flat rows and columns", "Linked tables and custom views"],
            ["Team collaboration", "Limited and messy", "Organized views by role or workflow"],
            ["Lead tracking", "Manual", "CRM-style pipeline"],
            ["Project tracking", "Hard to scale", "Statuses, tasks, owners, timelines"],
            ["Automation", "Limited", "Automations and integrations"],
            ["Reporting", "Manual filtering", "Dashboards and saved views"],
            ["Scalability", "Becomes messy", "Easier to expand over time"],
          ],
        }}
        extraSections={[
          {
            title: "Airtable Automation and Tool Integration",
            body: "Airtable becomes more powerful when connected to the rest of your business tools. We can connect Airtable with GoHighLevel, WordPress forms, Zapier, Make, Google Sheets, Gmail, Slack, Google Drive, calendars, forms, project management tools, and reporting dashboards.",
            bullets: ["Website form creates an Airtable lead", "New client creates onboarding tasks", "Completed project triggers a review request", "Support request creates a task", "Status change sends a notification", "Weekly report is generated from filtered views"],
          },
        ]}
        processTitle="Our Airtable CRM Setup Process"
        processItems={[
          { title: "Workflow Discovery", body: "We review how your business currently manages leads, clients, projects, tasks, and operations." },
          { title: "System Planning", body: "We map your Airtable structure, tables, fields, views, permissions, and workflows." },
          { title: "Database Build", body: "We create the core Airtable base with linked tables, fields, formulas, statuses, and views." },
          { title: "CRM and Workflow Setup", body: "We build pipelines, task boards, client views, dashboards, intake forms, and operational trackers." },
          { title: "Automation Setup", body: "We connect Airtable with tools like GoHighLevel, WordPress, Make, Zapier, Gmail, Slack, or Google Sheets when needed." },
          { title: "Testing", body: "We test records, views, automations, forms, filters, and workflows." },
          { title: "Handoff and Training", body: "We show your team how to use the system and manage daily operations inside Airtable." },
        ]}
        pricingTitle="Airtable CRM Setup Pricing"
        pricingIntro="Our Airtable CRM and Business Hub setup starts from $500. Final pricing depends on the number of tables, workflows, automations, integrations, dashboards, forms, user roles, and complexity of your operations."
        pricingItems={[
          { title: "Starter Airtable CRM", body: "Best for businesses that need lead tracking, client records, basic views, and simple follow-up management." },
          { title: "Business Operations Hub", body: "Best for businesses that need CRM, project tracking, tasks, dashboards, forms, and internal workflows." },
          { title: "Advanced Airtable Automation System", body: "Best for businesses that need Airtable connected with GoHighLevel, WordPress, Make, Zapier, Slack, Gmail, or reporting tools." },
        ]}
        whyTitle="Why Choose Flux Media Creations?"
        whyBody={["Flux Media Creations builds websites, CRM systems, automation workflows, and business operations hubs for service businesses.", "We do not look at Airtable as a standalone database. We look at how it connects to your website, lead capture, CRM, follow-up, project delivery, reporting, and daily operations."]}
        whyItems={["Practical, not overcomplicated", "Built around your real workflow", "Designed for your team to use", "Connected to your lead generation system", "Flexible for future growth"]}
        directTitle="What Is an Airtable CRM?"
        directBody="An Airtable CRM is a custom customer relationship management system built inside Airtable. It helps businesses track leads, contacts, clients, deals, follow-ups, tasks, and project information in one organized database. Unlike a fixed CRM, Airtable can be customized around the way your business actually works."
        faqTitle="Airtable CRM & Business Hub FAQs"
        faqs={faqs}
        finalTitle="Ready to Replace Messy Spreadsheets With a Real Business Hub?"
        finalBody="Your business needs one clear system for leads, clients, projects, tasks, and operations. Flux Media Creations can build a custom Airtable CRM and business hub that gives your team structure, visibility, and control."
        finalPrimaryCta="Build My Airtable CRM"
        finalSecondaryCta="Request an Airtable Audit"
        internalLinks={[
          { label: "Make & Zapier Automation", href: "/services/make-zapier-automation" },
          { label: "GoHighLevel Automation", href: "/services/gohighlevel-automation" },
          { label: "WordPress Website Design", href: "/services/wordpress-website-build" },
          { label: "Full Growth System", href: "/services/full-growth-system" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
