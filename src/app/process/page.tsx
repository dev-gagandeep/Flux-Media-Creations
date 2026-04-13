import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";
import { PROCESS_STEPS } from "@/lib/constants";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  title: "How We Work",
  description:
    "Clear process, no surprises. From discovery call to launch day — see exactly how a Flux Media Creations project runs.",
  path: "/process",
});

const TIMELINES = [
  { type: "WordPress site", days: "7–10 days" },
  { type: "GHL automation only", days: "5–7 days" },
  { type: "Full Growth System", days: "14–21 days" },
  { type: "Airtable hub", days: "4–6 days" },
  { type: "Make/Zapier automation", days: "2–4 days" },
];

export default function ProcessPage() {
  return (
    <>
      <section className="section pt-32 max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">How we work</p>
        <TextReveal
          text="No confusion. No delays. Just a clear path from brief to launch."
          className="font-display font-semibold text-4xl md:text-6xl max-w-3xl mb-6"
          as="h1"
        />
        <p className="text-base text-ink/50 max-w-xl leading-relaxed">
          We've worked out every friction point that makes agency work frustrating. This is our process — and we stick to it.
        </p>
      </section>

      <Process />

      {/* Timeline */}
      <section className="section max-w-[1400px] mx-auto border-t border-ink/8">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Typical timelines</p>
        <h2
          className="font-display font-semibold text-3xl md:text-4xl mb-10"
          style={{ letterSpacing: "-0.03em" }}
        >
          When can you expect to go live?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TIMELINES.map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-ink/8 bg-white text-center"
            >
              <p
                className="font-display font-semibold text-2xl mb-2"
                style={{ color: "var(--flux)", letterSpacing: "-0.02em" }}
              >
                {t.days}
              </p>
              <p className="text-sm text-ink/50">{t.type}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink/35">
          Timeline starts after design approval. Delays caused by missing client assets add 2–3 days.
        </p>
      </section>

      {/* What you need to provide */}
      <section className="section max-w-[1400px] mx-auto border-t border-ink/8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What you provide</p>
            <h2 className="font-display font-semibold text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              We need very little to get started.
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Domain access (we'll handle DNS)",
                "Logo file if you have one (we create one if not)",
                "A brief about your services and target customer",
                "Access to GHL if you have it already (or we help you set it up)",
                "Any existing content you want to keep",
                "Your brand colors and preferences (optional)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink/65">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 flex-shrink-0" style={{ background: "var(--blush)", color: "var(--flux)" }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What we handle</p>
            <h2 className="font-display font-semibold text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              Everything else — that's us.
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Figma design — every page before we code",
                "WordPress development and theme customization",
                "GHL sub-account setup and workflow building",
                "A2P SMS registration (so texts actually deliver)",
                "DNS configuration, SSL, hosting setup",
                "PageSpeed optimization (90+ target)",
                "Google Analytics 4 and Search Console",
                "30-day post-launch direct support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink/65">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 flex-shrink-0" style={{ background: "rgba(37,99,235,0.1)", color: "var(--pulse)" }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
