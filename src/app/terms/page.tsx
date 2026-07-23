import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Terms and Conditions | Flux",
  description: "Review Flux Terms and Conditions for information about website usage, services, responsibilities, and agreements.",
  path: "/terms",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms and Conditions",
  url: `${SITE.url}/terms`,
  description: "Flux's Terms and Conditions explain the rules for using the Flux website and the terms governing engagement with Flux services.",
};

const terms = [
  ["Website Use", <><p>You may use this website for lawful purposes only. When using it, you agree not to:</p><ul><li>Misuse or reproduce website content without permission</li><li>Attempt to gain unauthorized access to any part of the website or its underlying systems</li><li>Interfere with or disrupt the operation of the website in any way</li></ul><p>We reserve the right to restrict or terminate access for anyone who violates these terms.</p></>],
  ["Services Information", <p>The information on this website describes Flux&apos;s services in general terms and is provided for informational purposes. It does not constitute an offer or binding commitment to provide a specific service. Any engagement is subject to a separate agreement outlining its scope, deliverables, timeline, and terms.</p>],
  ["Consultations and Assessments", <p>Submitting a form, completing a business assessment, or requesting a consultation does not by itself create a service agreement or contractual relationship. These actions allow us to understand and respond to your inquiry. Flux may contact you using the information you provide.</p>],
  ["Intellectual Property", <p>All website content, including text, design, graphics, frameworks, methodology names, and other materials, is the property of Flux or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or use it commercially without prior written permission.</p>],
  ["User-Submitted Information", <p>You are responsible for the accuracy and legality of information you submit through forms, assessments, or direct communication. Do not submit information that is false, misleading, or that you do not have the right to share.</p>],
  ["Third-Party Links", <p>This website may reference or link to third-party websites for convenience. Flux does not control and is not responsible for their content, accuracy, or practices. Visiting a linked website is at your own discretion and risk.</p>],
  ["No Guarantees of Results", <><p>Flux builds systems intended to help businesses improve how they discover customers, convert opportunities, and operate. Outcomes depend on factors outside our control, including market conditions, competition, and how a business implements and maintains its systems.</p><p>Except where explicitly agreed in a separate written service agreement, Flux does not guarantee specific results, including revenue, search rankings, lead volume, or growth outcomes.</p></>],
  ["Limitation of Liability", <><p>To the extent permitted by applicable law, Flux will not be liable for indirect, incidental, or consequential damages arising from your use of this website or reliance on its information. This website and its content are provided on an “as is” basis, without warranties beyond what is expressly stated in a separate written client agreement.</p><p>Nothing in these terms is intended to limit any liability that cannot be limited under applicable law.</p></>],
  ["Changes to These Terms", <p>We may update these Terms and Conditions to reflect changes in our services, practices, or legal requirements. When we do, we will update the “Last updated” date. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>],
  ["Governing Information", <p>These Terms and Conditions are governed by the laws of India. Subject to applicable law, courts having jurisdiction over Garhshankar, Punjab, India will have jurisdiction over disputes arising from these terms or use of this website.</p>],
];

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-cream pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="flux-shell">
          <header className="border-t border-ink/15 py-10 md:py-14">
            <p className="flux-kicker text-flux">Legal</p>
            <h1 className="mt-6 font-display text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-none tracking-[-.06em]">Terms and Conditions</h1>
            <p className="mt-6 text-sm text-ink/45">Last updated: 23 July 2026</p>
          </header>
          <div className="grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[.3fr_.7fr]">
            <aside><p className="max-w-xs text-sm leading-7 text-ink/50">The terms governing use of the Flux website and engagement with our services.</p></aside>
            <article className="legal-copy">
              <section><h2>Introduction</h2><p>These Terms and Conditions govern your use of the Flux website and your engagement with Flux services. By accessing or using this website, you agree to these terms. If you do not agree with any part of them, please do not use this website.</p></section>
              {terms.map(([title, content]) => <section key={title as string}><h2>{title}</h2>{content}</section>)}
              <section><h2>Contact</h2><p>If you have questions about these Terms and Conditions, contact us:</p><address className="not-italic"><strong>Flux</strong><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />Garhshankar, Punjab, India</address></section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
