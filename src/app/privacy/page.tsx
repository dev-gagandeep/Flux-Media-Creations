import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Privacy Policy | Flux",
  description:
    "Read Flux's Privacy Policy to understand how we collect, use, and protect information provided through our website and services.",
  path: "/privacy",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: `${SITE.url}/privacy`,
  description:
    "Flux's Privacy Policy explains what information is collected through our website and services, how it is used, how it is protected, and what rights visitors have regarding their information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <h3>Personal information you provide to us</h3>
        <p>When you contact us, request a consultation, complete a business assessment, or submit a form on this website, we may collect:</p>
        <ul>
          <li>Name</li><li>Email address</li><li>Phone number</li><li>Company name and business details</li>
          <li>Information you choose to share about your business, goals, or challenges through a form or assessment</li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>When you visit our website, certain information may be collected automatically, including:</p>
        <ul><li>Browser type and version</li><li>Device information</li><li>IP address</li><li>Pages visited and how you interact with them</li><li>General website usage data</li></ul>
        <p>This information helps us understand how our website is used and where we can improve it. It is not typically used to identify you personally unless combined with information you have provided directly.</p>
      </>
    ),
  },
  {
    title: "How We Collect Information",
    content: <><p>We collect information through:</p><ul><li>Contact forms</li><li>Business assessment forms, such as the Business Intelligence Audit</li><li>General interactions with our website</li><li>Cookies and similar tracking technologies</li><li>Analytics tools</li><li>Direct communication with us, such as email or phone</li></ul></>,
  },
  {
    title: "How We Use Information",
    content: <><p>Information we collect may be used to:</p><ul><li>Respond to your inquiries and requests</li><li>Provide the services, consultations, or assessments you request</li><li>Improve the experience and content of our website</li><li>Better understand the needs of the businesses we work with</li><li>Communicate with you about our services, including follow-up after an inquiry or assessment</li><li>Support and improve our own business operations</li></ul><p>We do not use the information you provide for unrelated purposes without letting you know first.</p></>,
  },
  {
    title: "Cookies and Tracking Technologies",
    content: <><p>Our website may use cookies and similar tracking technologies to support core functionality, understand how visitors use the site, and improve overall performance.</p><p>Cookies are small files stored on your device that allow a website to recognize your browser and remember certain information. You can typically control or disable cookies through your browser settings. Disabling cookies may affect how some parts of this website function.</p><p>We may also use analytics tools to help us understand website traffic and usage patterns in aggregate.</p></>,
  },
  {
    title: "Third-Party Services",
    content: <><p>We may work with trusted third-party providers to support website hosting, analytics, email and communication tools, form processing, and other day-to-day business operations.</p><p>These providers may have access to certain information as needed to perform services on our behalf and are expected to handle that information responsibly. We do not sell personal information to third parties.</p></>,
  },
  {
    title: "Data Security",
    content: <p>We take reasonable measures to help protect the information you share with us from unauthorized access, use, or disclosure. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>,
  },
  {
    title: "Data Retention",
    content: <p>We retain personal information only for as long as it is needed to fulfill the purposes described in this policy or to meet legal, accounting, or reporting obligations. When information is no longer needed, we take reasonable steps to remove or securely dispose of it.</p>,
  },
  {
    title: "Your Rights",
    content: <><p>Depending on where you are located, you may have the right to:</p><ul><li>Request access to the information we hold about you</li><li>Request that inaccurate information be corrected</li><li>Request that your information be deleted</li><li>Ask questions about how your information is used</li></ul><p>These rights and how to exercise them may vary depending on the laws that apply to your location. Contact us using the details below to make a request.</p></>,
  },
  {
    title: "Children's Privacy",
    content: <p>This website is not directed at, and is not intended for use by, children under 13 or the relevant higher age of digital consent in their jurisdiction. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us.</p>,
  },
  {
    title: "Updates to This Privacy Policy",
    content: <p>We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. When we do, we will update the “Last updated” date on this page. We encourage you to review this page periodically.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <main className="bg-cream pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="flux-shell">
          <header className="border-t border-ink/15 py-10 md:py-14">
            <p className="flux-kicker text-flux">Legal</p>
            <h1 className="mt-6 font-display text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-none tracking-[-.06em]">Privacy Policy</h1>
            <p className="mt-6 text-sm text-ink/45">Last updated: 23 July 2026</p>
          </header>
          <div className="grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[.3fr_.7fr]">
            <aside><p className="max-w-xs text-sm leading-7 text-ink/50">How Flux collects, uses, protects, and manages information provided through our website and services.</p></aside>
            <article className="legal-copy">
              <section><h2>Introduction</h2><p>Flux respects the privacy of everyone who visits this website or uses our services. This Privacy Policy explains what information we collect, how we collect it, why we collect it, how we use and protect it, and what choices you have regarding your information.</p><p>By using this website, you agree to the practices described in this policy. If you have questions, you can reach us using the contact information below.</p></section>
              {sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.content}</section>)}
              <section><h2>Contact Information</h2><p>If you have questions about this Privacy Policy or how your information is handled, contact us:</p><address className="not-italic"><strong>Flux</strong><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />Garhshankar, Punjab, India</address></section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
