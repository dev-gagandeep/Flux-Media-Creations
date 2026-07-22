import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { PROCESS_STEPS } from "@/lib/constants";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = generateMeta({
  title: "Methodology",
  description:
    "See how Flux maps, designs, connects, validates, and improves operating intelligence systems for service businesses.",
  path: "/process",
});

const TIMELINES = [
  { type: "WordPress site", days: "7–10 days" },
  { type: "GHL automation only", days: "5–7 days" },
  { type: "Full Growth System", days: "14–21 days" },
  { type: "Airtable hub", days: "4–6 days" },
  { type: "Make/Zapier automation", days: "2–4 days" },
];

const CLIENT_ITEMS = [
  "Domain access or registrar login",
  "Logo and brand assets if available",
  "Services, offers, and target customer notes",
  "Existing website content you want to keep",
  "GoHighLevel access if you already have it",
  "Any must-have design preferences",
];

const FLUX_ITEMS = [
  "Figma direction before build",
  "WordPress implementation and responsive QA",
  "GoHighLevel pipelines and workflow setup",
  "A2P SMS registration guidance",
  "DNS, SSL, forms, analytics, and Search Console",
  "30 days of post-launch direct support",
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-blush/45 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-flux">Methodology</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl" style={{ letterSpacing: "0" }}>
              A clear operating system from brief to launch.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink/58 md:text-lg">
              We have removed the usual agency friction: vague scope, slow approvals, surprise handoffs, and unclear launch ownership. Every project follows a visible path with defined milestones and direct communication.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/business-intelligence-audit" className="inline-flex items-center justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,92,53,0.22)]">
                Measure your intelligence score
              </Link>
              <a href="#timelines" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink/65 transition-colors hover:border-ink/35 hover:text-ink">
                View timelines
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-ink/8 bg-white p-6 shadow-[0_24px_70px_rgba(13,13,13,0.08)]">
            <p className="mb-5 text-xs uppercase tracking-widest text-ink/35">Project control panel</p>
            <div className="space-y-3">
              {["Scope locked before build", "Design approved before code", "Automation tested end-to-end", "Launch handoff recorded"].map((item, index) => (
                <div key={item} className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-xl bg-blush/45 p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flux text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-sm font-medium text-ink/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />

      <section id="timelines" className="bg-blush/45 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">Typical timelines</p>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
              When can you expect to go live?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {TIMELINES.map((t) => (
              <div key={t.type} className="rounded-xl border border-ink/8 bg-white p-6">
                <p className="font-display text-4xl font-semibold text-flux" style={{ letterSpacing: "0" }}>
                  {t.days}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/55">{t.type}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/38">
            Timeline starts after design approval. Delays caused by missing client assets add 2-3 days.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2">
          <Checklist title="What you provide" subtitle="We need very little to get started." items={CLIENT_ITEMS} tone="light" />
          <Checklist title="What we handle" subtitle="Everything else is owned by Flux." items={FLUX_ITEMS} tone="dark" />
        </div>
      </section>

      <section className="bg-blush/45 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px] rounded-xl border border-ink/8 bg-white p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">Quality gates</p>
              <h2 className="font-display text-4xl font-semibold leading-none md:text-5xl" style={{ letterSpacing: "0" }}>
                Nothing goes live until the full journey works.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Forms submit and notify correctly",
                "CRM stages and tags are clean",
                "SMS/email sequences are tested",
                "Mobile layouts are checked",
                "Analytics and Search Console are connected",
                "Recorded walkthrough is delivered",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-blush/45 px-4 py-3 text-sm font-medium text-ink/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Checklist({ title, subtitle, items, tone }: { title: string; subtitle: string; items: string[]; tone: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <div className={`rounded-xl border p-7 md:p-8 ${dark ? "border-ink bg-ink text-cream" : "border-ink/8 bg-blush/35 text-ink"}`}>
      <p className={`mb-4 text-xs uppercase tracking-widest ${dark ? "text-flux" : "text-flux"}`}>{title}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
        {subtitle}
      </h2>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-6 ${dark ? "text-cream/60" : "text-ink/62"}`}>
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-flux text-[0.7rem] text-white">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
