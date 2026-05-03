import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}, including contact form data, cookies, analytics, and user rights.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section pt-32 max-w-[800px] mx-auto">
      <h1 className="font-display font-semibold text-3xl md:text-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
        Privacy policy
      </h1>
      <div className="flex flex-col gap-6 text-sm text-ink/65 leading-relaxed">
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          {SITE.name} ("we", "us", or "our") operates {SITE.url}. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
        </p>
        <h2 className="font-display font-semibold text-xl text-ink mt-4" style={{ letterSpacing: "-0.02em" }}>
          Data we collect
        </h2>
        <p>
          When you fill out our contact form, we collect your name, email address, phone number (optional), and any information you choose to include in your message. This data is transmitted via Formspree and stored securely. We do not sell, trade, or share your personal data with third parties.
        </p>
        <h2 className="font-display font-semibold text-xl text-ink mt-4" style={{ letterSpacing: "-0.02em" }}>
          Cookies and analytics
        </h2>
        <p>
          We use Google Tag Manager and analytics tools to understand how visitors interact with our site. This data is anonymous and does not identify individual users. You can opt out of analytics tracking via your browser settings.
        </p>
        <h2 className="font-display font-semibold text-xl text-ink mt-4" style={{ letterSpacing: "-0.02em" }}>
          Your rights
        </h2>
        <p>
          You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at {SITE.email}.
        </p>
        <h2 className="font-display font-semibold text-xl text-ink mt-4" style={{ letterSpacing: "-0.02em" }}>
          Contact
        </h2>
        <p>
          If you have any questions about this privacy policy, please contact us at {SITE.email}.
        </p>
      </div>
    </section>
  );
}
