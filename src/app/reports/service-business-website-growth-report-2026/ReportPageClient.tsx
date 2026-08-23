"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const insights = [
  ["01", "Websites are now growth systems", "A modern site has to support discovery, trust, enquiry, follow-up, and the eventual buying decision—not simply publish information."],
  ["02", "Clarity beats complexity", "The strongest service-business sites make the audience, value, proof, and next step obvious within seconds."],
  ["03", "Trust reduces hesitation", "Reviews, case studies, team visibility, credentials, and specific outcomes help customers choose with confidence."],
  ["04", "Speed protects opportunity", "Lead confirmation, routing, reminders, and useful follow-up prevent interested prospects from going cold."],
];

const preview = [
  ["Conversion-focused design", "Position the offer around the customer problem and create a clear action path on every important page."],
  ["Local search visibility", "Align dedicated service-area pages, Google Business Profile signals, useful content, and real-world relevance."],
  ["Trust architecture", "Use specific reviews, proof, people, expertise, and professional presentation to reduce uncertainty."],
  ["Lead response automation", "Confirm enquiries immediately, offer next steps, and maintain consistent follow-up without replacing the human relationship."],
  ["Mobile performance", "Prioritize fast pages and make calls, forms, bookings, and location information effortless to reach."],
  ["Measurement foundation", "Track meaningful actions so the website can improve around enquiries and customer progression—not vanity traffic."],
];

const faqs = [
  ["Why does a service business need a modern website?", "A modern website helps businesses build trust, improve visibility, capture enquiries, and create a better customer journey."],
  ["What should a service business website include?", "A strong website should include clear messaging, service pages, trust signals, conversion opportunities, and SEO foundations."],
  ["Can a website help generate more customers?", "Yes. A strategically designed website can attract visitors, build confidence, capture leads, and support business growth."],
];

export default function ReportPageClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => { trackEvent("report_view", { report: "service_business_website_growth_2026" }); }, []);

  function trackCta(location: string) {
    trackEvent("report_cta_click", { report: "service_business_website_growth_2026", location });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/report-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, consent: data.consent === "on" }) });
      const result = await response.json() as { error?: string; downloadUrl?: string };
      if (!response.ok || !result.downloadUrl) throw new Error(result.error || "Unable to process your request.");
      trackEvent("report_form_submit", { report: "service_business_website_growth_2026" });
      trackEvent("report_download_click", { report: "service_business_website_growth_2026", source: "gated_form" });
      setStatus("success");
      window.location.assign(result.downloadUrl);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to process your request.");
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#F4F4F1] text-[#050608]">
      <section className="relative overflow-hidden bg-[#050608] pb-20 pt-28 text-[#F4F4F1] md:pb-28 md:pt-36">
        <div aria-hidden="true" className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-[#DB3826]/20 blur-[110px]" />
        <div className="flux-shell relative">
          <nav aria-label="Breadcrumb" className="border-t border-white/15 pt-5 text-xs text-white/40"><Link href="/">Home</Link><span className="mx-2">/</span><span>Reports</span><span className="mx-2">/</span><span className="text-white/65">2026 Website Growth Report</span></nav>
          <div className="mt-10 grid gap-14 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#DB3826]">2026 Authority Report · Free Download</p>
              <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.3rem,6vw,6.3rem)] font-medium leading-[.9] tracking-[-.07em]">2026 Service Business Website <span className="text-[#DB3826]">Growth Report</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">Discover how service businesses are using websites, SEO, automation, and conversion strategies to attract more customers in 2026.</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[.15em] text-white/40">Created by Flux Media Creations</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#download-report" onClick={() => { trackCta("hero_download"); }} className="flux-button flux-button-red justify-center">Download Free Report <ArrowDownToLine size={16} /></a><Link href="/contact?program=founding-partner" onClick={() => trackCta("hero_founding_partner")} className="flux-button justify-center border border-white/20 text-white">Apply For Founding Partner Program <ArrowUpRight size={16} /></Link></div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto"><div className="absolute inset-8 translate-x-5 translate-y-6 rounded-[2rem] border border-[#AEC6FA]/20 bg-[#383B7C]/20" /><div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 shadow-[0_35px_100px_rgba(0,0,0,.5)]"><Image src="/images/reports/service-business-growth-report-cover.png" alt="Cover of the 2026 Service Business Website Growth Report" width={1200} height={1500} priority className="h-auto w-full" /></div></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="flux-shell grid gap-12 lg:grid-cols-[.4fr_.6fr]"><div><p className="flux-kicker text-[#DB3826]">Report introduction</p><h2 className="mt-7 font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">A website can no longer stop at being present.</h2></div><div className="space-y-6 text-lg leading-9 text-black/60"><p>Customers now research, compare, read reviews, examine credibility, and decide whether a company feels trustworthy before making contact. For service businesses, that turns the website into an active part of customer acquisition.</p><p>This report explains how visibility, trust, conversion, mobile experience, automation, and measurement work together as one practical growth foundation.</p><div className="rounded-2xl bg-[#D7E3D0] p-6 font-display text-2xl font-medium leading-tight text-[#050608]">The businesses that succeed online in 2026 will not simply have a website. They will have a customer growth system.</div></div></div></section>

      <section className="bg-white py-20 md:py-28"><div className="flux-shell"><p className="flux-kicker text-[#DB3826]">Key insights</p><h2 className="mt-7 max-w-5xl font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Four shifts shaping service-business growth.</h2><div className="mt-12 grid gap-4 md:grid-cols-2">{insights.map(([number, title, body]) => <article key={number} className="rounded-[2rem] border border-black/10 p-7 md:p-9"><span className="text-xs font-bold text-[#DB3826]">{number}</span><h3 className="mt-14 font-display text-3xl font-medium">{title}</h3><p className="mt-4 text-sm leading-7 text-black/55">{body}</p></article>)}</div></div></section>

      <section className="bg-[#AEC6FA] py-20 md:py-28"><div className="flux-shell"><div className="grid gap-10 lg:grid-cols-[.42fr_.58fr]"><div><p className="flux-kicker text-[#383B7C]">Inside the report</p><h2 className="mt-7 font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">A practical foundation for visibility, trust, and conversion.</h2></div><div className="grid gap-3 sm:grid-cols-2">{preview.map(([title, body]) => <article key={title} className="rounded-2xl bg-[#F4F4F1] p-6"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#050608] text-white"><Check size={14} /></span><h3 className="mt-10 font-display text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{body}</p></article>)}</div></div></div></section>

      <section id="download-report" className="bg-[#050608] py-20 text-[#F4F4F1] md:py-28"><div className="flux-shell grid gap-12 lg:grid-cols-[.48fr_.52fr] lg:items-start"><div><p className="flux-kicker text-[#DB3826]">Get the complete report</p><h2 className="mt-7 font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Turn the research into your next growth decision.</h2><p className="mt-6 max-w-xl text-base leading-8 text-white/55">Complete the short form to receive the downloadable PDF. Your details help Flux understand who is using the research and provide relevant follow-up.</p></div><form onSubmit={submit} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6 md:p-9"><div className="grid gap-5 sm:grid-cols-2">{[["name","Name","text",true],["businessName","Business Name","text",true],["businessType","Business Type","text",true],["websiteUrl","Website URL","url",false],["email","Email Address","email",true]].map(([name,label,type,required], index) => <label key={String(name)} className={index === 4 ? "sm:col-span-2" : ""}><span className="mb-2 block text-xs font-semibold text-white/55">{label}{required ? " *" : ""}</span><input name={String(name)} type={String(type)} required={Boolean(required)} className="min-h-12 w-full rounded-xl border border-white/15 bg-black/25 px-4 text-sm text-white outline-none transition focus:border-[#DB3826]" /></label>)}</div><label className="mt-5 flex items-start gap-3 text-xs leading-6 text-white/45"><input name="consent" type="checkbox" required className="mt-1 accent-[#DB3826]" />I agree that Flux may email me the report and contact me with relevant website-growth information. I can unsubscribe at any time.</label><button type="submit" disabled={status === "sending"} className="flux-button flux-button-red mt-6 w-full justify-center disabled:opacity-60">{status === "sending" ? "Preparing your report…" : status === "success" ? "Download started" : "Get Free Report"} <ArrowDownToLine size={16} /></button>{status === "error" ? <p role="alert" className="mt-4 text-sm text-red-300">{error}</p> : null}</form></div></section>

      <section className="py-20 md:py-28"><div className="flux-shell grid gap-12 lg:grid-cols-[.38fr_.62fr]"><div><p className="flux-kicker text-[#DB3826]">About Flux</p><h2 className="mt-7 font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Growth infrastructure for service businesses.</h2></div><div><p className="text-lg leading-9 text-black/60">Flux Media Creations helps clinics and service businesses build modern digital growth systems through conversion-focused website design, SEO foundations, lead capture, business automation, and digital strategy.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#DB3826]">Meet Flux Media Creations <MoveRight size={16} /></Link><div className="mt-14 divide-y divide-black/10 border-y border-black/10">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-medium md:text-2xl">{question}<span className="transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-black/55">{answer}</p></details>)}</div></div></div></section>

      <section className="bg-[#DB3826] py-20 text-white md:py-28"><div className="flux-shell text-center"><p className="flux-kicker text-white/60">Founding Partner Program</p><h2 className="mx-auto mt-7 max-w-5xl font-display text-4xl font-medium tracking-[-.05em] md:text-7xl">Ready to improve your online presence?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Flux Media Creations helps clinics and service businesses build websites designed for visibility, trust, and growth.</p><Link href="/contact?program=founding-partner" onClick={() => trackCta("final_founding_partner")} className="flux-button mt-9 bg-white text-[#050608]">Apply For Founding Partner Program <ArrowUpRight size={16} /></Link></div></section>
    </main>
  );
}
