import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import ServiceLandingPage, { ServiceFaq } from "../_components/ServiceLandingPage";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Make & Zapier Automation for Business Workflows",
  description:
    "Automate repetitive business tasks with Make and Zapier workflows for leads, forms, CRM updates, notifications, reporting, and app integrations.",
  path: "/services/make-zapier-automation",
});

const faqs: ServiceFaq[] = [
  { q: "What is the difference between Make and Zapier?", a: "Make is often preferred for visual, complex, multi-step workflows with branching logic. Zapier is often preferred for fast, reliable app connections and has a very large app directory. The best choice depends on your workflow." },
  { q: "Can you connect WordPress forms to GoHighLevel?", a: "Yes. We can connect WordPress forms to GoHighLevel using Make, Zapier, webhooks, or direct integrations depending on your setup." },
  { q: "Can you automate lead follow-up?", a: "Yes. We can create workflows that send new leads to a CRM, notify your team, create tasks, and trigger SMS or email follow-up." },
  { q: "Can you connect Airtable with other apps?", a: "Yes. Airtable can be connected with CRMs, forms, email, calendars, Slack, Google Sheets, GoHighLevel, and other tools using Make or Zapier." },
  { q: "Can automation replace my team?", a: "No. Automation should support your team, not replace your judgment. It handles repetitive tasks so your team can focus on higher-value work." },
  { q: "Do you test automations before launch?", a: "Yes. We test field mapping, triggers, actions, filters, duplicate handling, and failure cases before handing over the workflow." },
  { q: "Can you fix broken Zapier or Make workflows?", a: "Yes. We can review, troubleshoot, rebuild, or simplify broken automations." },
  { q: "Do you provide documentation?", a: "Yes. We can provide a simple workflow summary so you understand what each automation does." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Make & Zapier Automation",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "Workflow Automation and App Integration Service",
  areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
  description:
    "Make and Zapier automation service for business workflows, including app integrations, form automation, CRM updates, lead routing, task creation, reporting, and no-code workflow automation.",
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

export default function MakeZapierAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <ServiceLandingPage
        eyebrow="Make and Zapier Automation"
        h1="Make and Zapier Automation Service for Business Workflows"
        heroTitle="Automate Repetitive Tasks and Connect the Tools Your Business Uses Every Day"
        heroBody={[
          "Manual work slows your business down. Leads get copied from one tool to another. Form submissions are missed. Team notifications are delayed. Reports take too long. Client updates depend on someone remembering the next step.",
          "Flux Media Creations builds Make and Zapier automation workflows that connect your apps, reduce repetitive work, and help your business move faster.",
          "We automate lead routing, form submissions, CRM updates, task creation, notifications, appointment workflows, reporting, and internal operations for service businesses, clinics, agencies, home service companies, real estate professionals, and local brands.",
        ]}
        primaryCta="Automate My Workflow"
        secondaryCta="Request an Automation Audit"
        trustItems={["Make automation", "Zapier automation", "App integrations", "Lead routing", "CRM workflows", "Form automation", "Task creation", "Notifications", "Reporting workflows", "No-code systems"]}
        introTitle="Your Business Should Not Depend on Manual Copy-Paste Work"
        introBody={[
          "Most businesses already use multiple tools: a website, CRM, email, calendar, spreadsheets, forms, project management software, chat apps, and payment tools.",
          "The problem is that these tools often do not talk to each other, which creates manual work: copying leads into a CRM, sending repeated follow-ups, updating spreadsheets, creating tasks by hand, notifying team members, moving files, tracking appointments, and building reports from disconnected data.",
          "Make and Zapier help connect your tools so actions in one app can trigger actions in another. Flux Media Creations designs these automations around your business process, not random tool connections.",
        ]}
        problemTitle="Where Manual Work Is Costing You Time and Leads"
        problems={["Website leads are manually copied into your CRM.", "Your team forgets to follow up.", "Form submissions do not trigger notifications.", "You manually update spreadsheets.", "Tasks are created by hand.", "Client onboarding is inconsistent.", "Appointment reminders are not automated.", "Review requests are sent manually.", "Reports take hours to prepare.", "Your tools are disconnected.", "You have too many repetitive admin tasks."]}
        problemOutro="Automation is not only about saving time. It is about making your business more consistent."
        solutionTitle="Workflow Automation Built Around Your Real Business Process"
        solutionBody={[
          "We build automations that help your tools work together.",
          "A workflow might start with a WordPress form submission, create a GoHighLevel lead, assign a team task, send a Slack or email notification, update Airtable, start follow-up, and refresh a reporting sheet.",
          "This reduces manual work and gives your team a faster, cleaner process.",
        ]}
        solutionItems={["WordPress form submitted", "Lead added to GoHighLevel", "Task created", "Team notification sent", "Lead added to Airtable", "SMS or email follow-up starts", "Reporting sheet updates"]}
        buildTitle="Make and Zapier Automation Workflows We Build"
        buildItems={[
          { title: "Website Form Automation", body: "Connect WordPress forms, landing pages, quote forms, appointment forms, and contact forms to your CRM, spreadsheet, Airtable base, or email notifications.", bullets: ["CRM contact", "Airtable record", "Lead source", "Auto-reply", "Task creation"] },
          { title: "CRM Automation", body: "Connect your CRM with forms, calendars, spreadsheets, email, SMS, and task tools.", bullets: ["Pipeline opportunity", "Stage task", "Reactivation list", "Onboarding workflow"] },
          { title: "GoHighLevel Automation Support", body: "Use Make or Zapier to extend GoHighLevel workflows when you need deeper integrations with external tools.", bullets: ["WordPress to GHL", "GHL to Airtable", "GHL to Sheets", "GHL to Slack"] },
          { title: "Airtable Automation", body: "Connect Airtable with CRMs, forms, project tools, calendars, email, and reporting systems.", bullets: ["Task creation", "Notifications", "Onboarding", "Review request"] },
          { title: "Appointment and Calendar Automation", body: "Automate booking workflows so your team does not manually manage every step.", bullets: ["CRM contact", "Reminder trigger", "No-show task", "Dashboard update"] },
          { title: "Reporting and AI Workflow Automation", body: "Move data into dashboards and use practical AI-supported workflows for summarization, classification, draft generation, CRM notes, and routing.", bullets: ["Lead reports", "Task drafts", "Email drafts", "CRM notes"] },
        ]}
        audienceTitle="Automation for Service Businesses"
        audienceItems={[
          { title: "Clinics and Healthcare Businesses", body: "Automate appointment requests, patient inquiry routing, missed-call workflows, notifications, review requests, and CRM updates." },
          { title: "Home Service Companies", body: "Automate quote requests, job intake, customer updates, team notifications, service area routing, and review requests." },
          { title: "Real Estate Professionals", body: "Automate buyer and seller inquiries, home valuation forms, open-house follow-up, listing requests, CRM updates, and tasks." },
          { title: "Agencies and Consultants", body: "Automate onboarding, project creation, content workflows, reporting, invoices, proposals, and internal task management." },
          { title: "Local Businesses", body: "Automate contact forms, customer requests, reminders, internal alerts, and data entry." },
        ]}
        tableTitle="Make vs Zapier: Which Automation Tool Should You Use?"
        tableIntro="Make may be better for multiple branches, data transformation, and visual logic. Zapier may be better for quick, reliable connections across many common apps."
        table={{
          headings: ["Feature", "Make", "Zapier"],
          rows: [
            ["Best for", "Visual, complex workflows", "Fast app connections"],
            ["Workflow style", "Scenario-based visual builder", "Trigger-action workflows"],
            ["Complexity", "Strong for multi-step logic", "Strong for simple to advanced automations"],
            ["App coverage", "3,000+ apps", "9,000+ apps"],
            ["Visual mapping", "Very strong", "Good"],
            ["Beginner-friendly", "Moderate", "Very beginner-friendly"],
            ["Advanced routing", "Strong", "Available depending on setup"],
          ],
        }}
        processTitle="Our Make and Zapier Automation Process"
        processItems={[
          { title: "Workflow Audit", body: "We review your current tools, manual tasks, repeated steps, and bottlenecks." },
          { title: "Automation Mapping", body: "We map the trigger, action, conditions, data fields, errors, and expected outcome." },
          { title: "Tool Selection", body: "We recommend Make, Zapier, or another integration approach depending on your workflow." },
          { title: "Automation Build", body: "We build your automation with proper field mapping, filters, conditions, and logic." },
          { title: "Testing", body: "We test normal cases, missing data, duplicate records, failed steps, and notification accuracy." },
          { title: "Documentation", body: "We provide clear notes so you understand what the automation does and how to monitor it." },
          { title: "Optimization", body: "We refine the workflow after testing so it is reliable and practical." },
        ]}
        pricingTitle="Make and Zapier Automation Pricing"
        pricingIntro="Business automation is scoped according to the workflows, integrations, data movement, testing, documentation, and operational complexity involved."
        pricingItems={[
          { title: "Simple Automation", body: "Best for one basic workflow, such as form submission to CRM or new lead notification." },
          { title: "Business Workflow Automation", body: "Best for multi-step workflows involving CRM, Airtable, spreadsheets, tasks, notifications, and follow-up." },
          { title: "Advanced Automation System", body: "Best for businesses that need multiple workflows, branching logic, AI steps, reporting, error handling, and ongoing support." },
        ]}
        whyTitle="Why Choose Flux Media Creations?"
        whyBody={["Flux Media Creations builds automation systems with business outcomes in mind.", "We understand websites, CRMs, forms, GoHighLevel, Airtable, SEO, and service-business operations, so we can build workflows that support the full customer journey instead of isolated automations that break later."]}
        whyItems={["Practical", "Documented", "Tested", "Built around your tools", "Designed for real business use", "Focused on reducing manual work", "Connected to lead capture and follow-up"]}
        directTitle="What Is Make and Zapier Automation?"
        directBody="Make and Zapier automation is the process of connecting business apps so tasks happen automatically. A trigger in one tool, such as a form submission or new CRM contact, can create actions in another tool, such as sending a notification, creating a task, updating Airtable, adding a lead to GoHighLevel, or generating a report."
        faqTitle="Make & Zapier Automation FAQs"
        faqs={faqs}
        finalTitle="Ready to Automate the Work That Slows You Down?"
        finalBody="Your tools should work together. Your team should not waste time copying data, sending repeated updates, or chasing manual tasks. Flux Media Creations builds Make and Zapier automations that connect your apps, reduce repetitive work, and help your business run smoother."
        finalPrimaryCta="Automate My Workflow"
        finalSecondaryCta="Request an Automation Audit"
        internalLinks={[
          { label: "Airtable CRM & Business Hub", href: "/services/airtable-business-hub" },
          { label: "GoHighLevel Automation", href: "/services/gohighlevel-automation" },
          { label: "WordPress Website Design", href: "/services/wordpress-website-build" },
          { label: "WordPress & GHL Monthly Maintenance", href: "/services/monthly-maintenance" },
          { label: "Full Growth System", href: "/services/full-growth-system" },
        ]}
      />
    </>
  );
}
