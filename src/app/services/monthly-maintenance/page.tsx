import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import ServiceLandingPage, { ServiceFaq } from "../_components/ServiceLandingPage";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "WordPress & GoHighLevel Monthly Maintenance Plan",
  description:
    "Keep your WordPress website and GoHighLevel system updated, secure, backed up, tested, optimized, and supported with monthly maintenance.",
  path: "/services/monthly-maintenance",
});

const faqs: ServiceFaq[] = [
  { q: "What is included in WordPress maintenance?", a: "WordPress maintenance can include core updates, plugin updates, theme updates, backups, security checks, form testing, broken link review, performance checks, and small content edits." },
  { q: "Why do WordPress websites need maintenance?", a: "WordPress websites need maintenance because plugins, themes, WordPress core, security standards, browsers, and integrations change over time. Regular maintenance helps reduce technical issues and security risks." },
  { q: "Do you maintain GoHighLevel workflows?", a: "Yes. We can review and support GoHighLevel workflows, forms, pipelines, calendars, appointment reminders, missed-call text back, review requests, and lead follow-up sequences." },
  { q: "Can you fix broken forms?", a: "Yes. We can test and troubleshoot WordPress forms, GoHighLevel forms, notifications, redirects, and CRM connections." },
  { q: "Do you provide backups?", a: "We can help set up and check website backups depending on your hosting and plugin setup." },
  { q: "Can you make monthly content updates?", a: "Yes. Depending on your plan, we can help with small text edits, image changes, CTA updates, page edits, FAQ additions, and blog upload support." },
  { q: "Is maintenance only for websites you built?", a: "No. We can maintain existing WordPress websites and GoHighLevel systems after reviewing the setup." },
  { q: "Can you improve my website during maintenance?", a: "Yes. Maintenance can include small improvements, but larger redesigns, new pages, advanced SEO work, or new automation builds may require a separate project." },
  { q: "What happens if an update breaks the site?", a: "We update carefully and recommend backups before major updates. If an issue appears during maintenance, we troubleshoot and restore or fix the affected part where possible." },
  { q: "Is this good for clinics and service businesses?", a: "Yes. Clinics, home service businesses, real estate professionals, consultants, and local businesses benefit from maintenance because their websites and CRM systems directly support leads and appointments." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress & GoHighLevel Monthly Maintenance",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "WordPress Website Maintenance and GoHighLevel CRM Support",
  areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
  description:
    "Monthly maintenance service for WordPress websites and GoHighLevel systems, including updates, backups, security checks, form testing, workflow checks, CRM support, and small content edits.",
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

export default function MonthlyMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <ServiceLandingPage
        eyebrow="WordPress and GoHighLevel Care"
        h1="WordPress and GoHighLevel Monthly Maintenance Service"
        heroTitle="Keep Your Website, CRM and Automations Running Smoothly"
        heroBody={[
          "Your website and CRM are part of your business engine. If your WordPress site breaks, forms stop working, plugins go outdated, pages load slowly, or GoHighLevel workflows fail, leads can be lost before you even notice.",
          "Flux Media Creations provides monthly WordPress and GoHighLevel maintenance for service businesses that need reliable support, updates, backups, content edits, workflow checks, and ongoing technical care.",
          "We help clinics, home service companies, real estate professionals, consultants, agencies, and local businesses keep their website and automation systems stable, secure, and ready to capture leads.",
        ]}
        primaryCta="Start Monthly Maintenance"
        secondaryCta="Request a Website & CRM Checkup"
        trustItems={["WordPress updates", "Plugin checks", "Website backups", "Security monitoring", "Speed checks", "Form testing", "GHL workflow checks", "CRM support", "Content edits", "Monthly support"]}
        introTitle="Your Website and CRM Need Ongoing Care"
        introBody={[
          "Launching a website or CRM system is only the beginning.",
          "WordPress needs updates. Plugins change. Themes need maintenance. Forms can break. Pages need edits. Security risks appear. Backups need to be checked. GoHighLevel workflows need testing. Phone numbers, forms, pipelines, triggers, calendars, and automations can stop working correctly if nobody monitors them.",
          "Our monthly maintenance service helps you stay ahead of problems instead of reacting after something breaks.",
        ]}
        problemTitle="What Happens When Your Website and CRM Are Not Maintained?"
        problemIntro="Without regular maintenance, small issues can become expensive problems."
        problems={["Outdated WordPress plugins", "Broken forms", "Slow page speed", "Theme conflicts", "Security vulnerabilities", "Missing backups", "Broken buttons or links", "Layout issues after updates", "Missed website leads", "Failed automation workflows", "Incorrect CRM pipeline updates", "Calendar or booking errors", "Review request workflows not firing", "SMS or email sequence issues", "Poor mobile user experience"]}
        problemOutro="For service businesses, this is not just a technical issue. It can affect real leads, appointments, revenue, and trust."
        solutionTitle="Monthly Maintenance for WordPress Websites and GoHighLevel Systems"
        solutionBody={[
          "Flux Media Creations provides ongoing support for businesses that depend on their website and CRM to generate and manage leads.",
          "The goal is to keep your website and CRM reliable, updated, and aligned with your business.",
        ]}
        solutionItems={["WordPress website", "Elementor pages", "Plugins and themes", "Forms and CTAs", "Landing pages", "SEO basics", "Security checks", "Backups", "GoHighLevel CRM", "Pipelines", "Calendars", "Forms", "Workflows", "SMS and email automations", "Review request flows", "Missed-call text back", "Lead routing"]}
        buildTitle="What Is Included in WordPress Monthly Maintenance"
        buildItems={[
          { title: "WordPress Core, Theme and Plugin Updates", body: "We review and apply updates carefully so your website stays current, including core updates, plugins, themes, Elementor updates, compatibility checks, and post-update testing." },
          { title: "Website Backup Checks", body: "We help ensure your website has a backup system in place, including backup plugin checks, scheduled backup review, manual backups before major updates, restore point confirmation, and storage review." },
          { title: "Security Monitoring and Basic Hardening", body: "We review basic security signals and recommend improvements for plugin risk, user roles, login security, SSL, security plugins, spam protection, and malware scan review when supported." },
          { title: "Website Performance Checks", body: "We review common performance issues including image size, caching, slow pages, plugin bloat, Core Web Vitals awareness, and mobile experience." },
          { title: "Form and CTA Testing", body: "We test contact forms, quote forms, appointment forms, newsletter forms, booking buttons, click-to-call buttons, WhatsApp buttons, thank-you pages, and notification emails." },
          { title: "Content Edits", body: "Depending on your plan, we can handle text updates, image swaps, service updates, CTA changes, pricing edits, team updates, blog uploads, FAQ additions, and minor layout edits." },
        ]}
        audienceTitle="Monthly Maintenance for Businesses That Depend on Leads"
        audienceItems={[
          { title: "Healthcare Clinics", body: "Clinics need reliable forms, appointment links, missed-call workflows, reminders, review requests, and patient inquiry tracking." },
          { title: "Home Service Companies", body: "Home service businesses need working quote forms, call buttons, service pages, local landing pages, and fast lead notifications." },
          { title: "Real Estate Professionals", body: "Real estate professionals need lead capture forms, CRM follow-up, buyer/seller pages, valuation forms, and booking links working properly." },
          { title: "Agencies and Consultants", body: "Agencies and consultants need reliable websites, lead forms, onboarding workflows, automations, and content updates." },
          { title: "Local Service Businesses", body: "Local businesses need stable websites, updated service information, working contact forms, and dependable CRM follow-up." },
        ]}
        extraSections={[
          { title: "GoHighLevel Monthly Maintenance and Support", body: "GoHighLevel workflows should be reviewed regularly to make sure leads are captured, routed, tagged, and followed up correctly.", bullets: ["New lead follow-up", "Missed-call text back", "Appointment reminders", "No-show follow-up", "Review requests", "Lead nurturing", "Old lead reactivation", "Internal notifications", "Pipeline movement", "Tagging and segmentation"] },
          { title: "Pipeline, Calendar, SMS and Email Review", body: "We can review pipeline stages, duplicate contacts, task workflows, calendar availability, booking links, confirmations, reminders, SMS copy, email copy, broken links, timing delays, reply routing, unsubscribe language, and compliance reminders.", bullets: ["Pipeline stages", "Calendar links", "Booking confirmations", "SMS and email copy", "Reply routing", "A2P awareness"] },
          { title: "Why Maintain WordPress and GoHighLevel Together?", body: "Your website and CRM are connected. If the form breaks, GoHighLevel may never receive the lead. If the workflow fails, the lead may never get a reply. Maintaining both systems together gives your business a stronger safety net.", bullets: ["Form to CRM checks", "CTA link checks", "Workflow testing", "Lead routing", "Booking path review", "Page speed awareness"] },
          { title: "Monthly Website and CRM Maintenance Checklist", body: "A strong monthly maintenance plan keeps the important pieces visible and tested.", bullets: ["WordPress update review", "Backup check", "Security plugin check", "Broken form testing", "CTA testing", "Mobile layout review", "Page speed check", "Broken link review", "GoHighLevel form test", "Pipeline test", "Workflow test", "Calendar test", "SMS/email review", "Internal notification check", "Lead source tracking check"] },
        ]}
        processTitle="How Monthly Maintenance Works"
        processItems={[
          { title: "Review", body: "We review your website, forms, CRM, workflows, and support needs." },
          { title: "Update", body: "We apply approved updates carefully and watch for compatibility issues." },
          { title: "Test", body: "We test forms, CTAs, key pages, CRM flows, calendars, and notifications." },
          { title: "Support", body: "We handle agreed content edits, small fixes, and support requests." },
          { title: "Document", body: "We keep practical notes about checks, updates, and issues found." },
          { title: "Improve", body: "Where useful, we recommend small improvements that reduce lead leakage and technical risk." },
        ]}
        pricingTitle="WordPress & GoHighLevel Monthly Maintenance Pricing"
        pricingIntro="Ongoing support is scoped around website size, platform complexity, update frequency, workflow monitoring, content needs, response expectations, and support level."
        pricingItems={[
          { title: "Website Care Plan", body: "Best for businesses that need WordPress updates, backups, security checks, form testing, and small content edits." },
          { title: "Website + CRM Maintenance Plan", body: "Best for businesses using WordPress and GoHighLevel together for leads, forms, calendars, workflows, and follow-up." },
          { title: "Growth Support Plan", body: "Best for businesses that need ongoing website updates, SEO page edits, CRM workflow improvements, landing page support, and monthly optimization." },
        ]}
        whyTitle="Why Choose Flux Media Creations for Monthly Maintenance?"
        whyBody={["Flux Media Creations builds and maintains the systems that service businesses rely on to generate and manage leads.", "We understand WordPress, Elementor, GoHighLevel, automation workflows, SEO page structure, forms, booking flows, and lead follow-up systems. That means we maintain the parts of your website and CRM that affect business outcomes."]}
        whyItems={["Careful", "Practical", "Lead-focused", "Tested", "Documented", "Built for service businesses", "Connected to your growth system"]}
        directTitle="What Is WordPress and GoHighLevel Monthly Maintenance?"
        directBody="WordPress and GoHighLevel monthly maintenance is an ongoing support service that helps keep your website, CRM, forms, workflows, calendars, backups, updates, and lead capture systems working properly. It includes regular checks, updates, testing, small fixes, and support so your business can reduce downtime and missed leads."
        faqTitle="WordPress & GHL Monthly Maintenance FAQs"
        faqs={faqs}
        finalTitle="Keep Your Website and CRM Working Before Problems Cost You Leads"
        finalBody="Your WordPress website and GoHighLevel system should support your business every day. Regular maintenance helps reduce broken forms, outdated plugins, failed workflows, missed leads, and technical surprises."
        finalPrimaryCta="Start Monthly Maintenance"
        finalSecondaryCta="Request a Website & CRM Checkup"
        internalLinks={[
          { label: "WordPress Website Design", href: "/services/wordpress-website-build" },
          { label: "GoHighLevel Automation", href: "/services/gohighlevel-automation" },
          { label: "Full Growth System", href: "/services/full-growth-system" },
          { label: "Search Visibility Engine", href: "/services/search-visibility-engine" },
          { label: "Make & Zapier Automation", href: "/services/make-zapier-automation" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
