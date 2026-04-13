import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Terms of Service",
  description: `Terms and conditions for using ${SITE.name} services and website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section pt-32 max-w-[900px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Legal</p>
      <h1 className="font-display font-semibold text-4xl md:text-6xl mb-8" style={{ letterSpacing: "-0.03em" }}>
        Terms of Service
      </h1>

      <div className="space-y-8 text-sm md:text-base text-ink/65 leading-8">
        <div>
          <h2 className="font-medium text-ink mb-2">1. Scope of services</h2>
          <p>
            {SITE.name} provides website development, CRM setup, automation implementation, and related consulting
            services. Final scope, timeline, and deliverables are defined in each project proposal or written agreement.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">2. Estimates and timelines</h2>
          <p>
            Any estimated timeline is a planning guideline and may change based on revision cycles, response delays,
            third-party dependencies, or scope updates. We communicate major timeline changes in writing.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">3. Client responsibilities</h2>
          <p>
            You agree to provide required content, account access, and approvals in a timely manner. Delays in required
            inputs may impact project delivery windows.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">4. Payments</h2>
          <p>
            Payment terms are specified per project. Work may be paused if agreed invoices are overdue. Ownership and
            transfer terms are finalized once payment obligations are completed.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">5. Third-party tools</h2>
          <p>
            Services may involve platforms such as WordPress, GoHighLevel, Airtable, Make, Zapier, analytics tools, and
            hosting providers. Fees and policies for those platforms are governed by their own terms.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">6. Intellectual property</h2>
          <p>
            Unless otherwise agreed in writing, custom deliverables are licensed or transferred as stated in your project
            agreement. Pre-existing frameworks, reusable methods, and internal implementation patterns remain our property.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">7. Warranty and liability</h2>
          <p>
            We provide services in good faith and with professional care, but do not guarantee specific revenue, ranking,
            or conversion outcomes. To the maximum extent permitted by law, liability is limited to fees paid for the
            relevant service.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-ink mb-2">8. Contact</h2>
          <p>
            For questions about these terms, contact us at {SITE.email}.
          </p>
        </div>

        <p className="text-xs text-ink/45 pt-4 border-t border-ink/10">
          Last updated: 13 April 2026
        </p>
      </div>
    </section>
  );
}
