"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, X } from "@/components/ui/animated-icons";

const leakage = [
  ["01", "Discovery", "They can't find or understand you.", "Your clinic does not show up for the searches patients use, or the site does not make it obvious what you treat and why someone should choose you."],
  ["02", "Response", "They wait too long.", "A missed call, a slow reply, or a form that goes unanswered for a day. Patients act on whichever clinic responds first."],
  ["03", "Conversion", "Interest doesn't become a visit.", "The path from interest to appointment has too many steps—or no clear next step at all."],
  ["04", "Follow-through", "Booked patients or old leads go quiet.", "There is no reminder system, reactivation sequence, or review request after a good visit."],
];

const system = [
  ["Discover", "Patients find you through search, maps, and referrals, and understand what you do within seconds."],
  ["Capture", "Every call, form, and message enters one system instead of a personal inbox or sticky note."],
  ["Respond", "Missed calls receive an automatic text-back and form submissions receive a timely reply."],
  ["Convert", "Booking takes one clear action instead of phone-tag back-and-forth."],
  ["Continue", "Reminders, follow-up sequences, and review requests run without relying on memory."],
];

const included = [
  "Clinic website built to explain services clearly and convert visitors into callers or bookers",
  "Missed-call text-back, so a missed call still gets a response within a minute",
  "Online booking connected directly to your calendar",
  "Automated appointment reminders that reduce manual staff work",
  "Follow-up sequences for patients who enquired but did not book",
  "Review request automation after completed visits",
  "Google Business Profile setup and local search optimization",
  "One dashboard where your team can see every enquiry and its current stage",
];

const steps = [
  ["01", "Patient Revenue Assessment", "We review your website, phone handling, and follow-up process to identify where enquiries are likely falling through."],
  ["02", "System Blueprint", "We map what needs to be built or connected—website, booking, missed-call response, and follow-up—around how your clinic runs."],
  ["03", "Build", "We set up the system and test it with real enquiry scenarios before it goes live."],
  ["04", "Ongoing Support", "We monitor performance and adjust the system as your clinic grows. Most clients are live within 1–2 weeks of blueprint approval."],
];

const faqs = [
  ["What is a patient revenue system?", "A patient revenue system connects how patients discover a healthcare clinic, submit enquiries, communicate with the practice, schedule appointments, receive follow-up, and continue their relationship with the clinic."],
  ["Why do healthcare clinics lose patient enquiries?", "Many clinics lose opportunities because patient journeys are disconnected. Missed calls, delayed responses, unclear booking processes, and inconsistent follow-up can prevent interested patients from becoming appointments."],
  ["How can AI help healthcare clinics?", "AI can support healthcare clinics by improving communication, assisting with patient enquiries, organizing information, supporting follow-up workflows, and helping teams respond more consistently."],
  ["Is Flux a healthcare marketing agency?", "Flux goes beyond traditional healthcare marketing by building connected intelligence systems that improve patient discovery, conversion, communication, and operational efficiency."],
  ["Do you replace our current website, or work with what we have?", "If the site is structurally sound, Flux can connect booking, text-back, and follow-up to it. If it is not converting or mobile-friendly, a rebuild may be recommended."],
  ["How long does setup take?", "Most clinics are live within 1–2 weeks of approving the blueprint, depending on how much of the current setup is connected versus built new."],
  ["What does this cost?", "It depends on how much needs to be built versus connected. Flux provides a specific quote after the Patient Revenue Assessment, with no obligation."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <m.div initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ delay, duration: .68, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</m.div>;
}

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <Reveal className="border-t border-ink/15 pt-5"><p className="flux-kicker text-flux">{eyebrow}</p><h2 className="mt-7 max-w-[1050px] font-display text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[.98] tracking-[-.06em]">{children}</h2></Reveal>;
}

export default function ClinicsPage() {
  return <>
    <section className="bg-cream pb-12 pt-28"><div className="flux-shell">
      <nav aria-label="Breadcrumb" className="border-t border-ink/15 pt-5 text-xs text-ink/45"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/industries/healthcare">Healthcare</Link><span className="mx-2">/</span><span>Patient Revenue System</span></nav>
      <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><m.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}><p className="flux-kicker mb-7 text-flux">Patient Revenue System</p><h1 className="max-w-5xl font-display text-[clamp(3.5rem,6.6vw,7rem)] font-medium leading-[.9] tracking-[-.07em]">Turn more patient calls into <span className="text-flux">booked appointments.</span></h1></m.div><m.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }} className="border-t border-ink/15 pt-6"><p className="text-lg leading-8 text-ink/65">We set up the system behind your clinic&apos;s website—so every enquiry gets a fast response, a clear next step, and follow-up that does not rely on someone remembering.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/business-intelligence-audit" className="flux-button flux-button-red">Get a free patient leakage audit <ArrowUpRight size={16} /></Link><a href="#how-it-works" className="flux-button flux-button-line">See how it works</a></div></m.div></div>
      <a href="#problem" className="group ml-auto flex w-fit items-center gap-3 py-4 text-xs font-bold uppercase tracking-[.12em] text-ink/45">Follow the patient journey <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-500 group-hover:translate-y-1 group-hover:bg-ink group-hover:text-white"><ArrowDownRight size={16} /></span></a>
    </div></section>

    <section id="problem" className="bg-pulse-light py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="The hidden problem">The hidden problem most clinics never see.</Heading><div className="mt-14 grid gap-5 lg:grid-cols-[1fr_.72fr]"><Reveal className="rounded-[2rem] bg-white p-8 md:p-12"><p className="text-xl leading-9 text-ink/68">Most clinics that struggle to grow are not short on interest. Interest simply does not survive contact with the front desk. A patient finds you and calls, but the line is busy because the team is with another patient. They do not leave voicemail. They call the next clinic.</p><p className="mt-8 text-xl leading-9 text-ink/68">That patient was not lost to better marketing. They were lost to a fifteen-second gap.</p></Reveal><Reveal delay={.1} className="rounded-[2rem] bg-ink p-8 text-white md:p-12"><p className="flux-kicker text-flux">Invisible leakage</p><p className="mt-20 font-display text-3xl font-medium leading-tight md:text-4xl">Forms sitting in inboxes. Reminders that never go out. Patients who planned to call back and never did.</p><p className="mt-8 text-sm leading-7 text-white/55">It does not appear in ad spend or traffic. It appears as patients who wanted to book and quietly did not.</p></Reveal></div></div></section>

    <section className="bg-white py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="Where revenue gets lost">Four gaps, in the order patients experience them.</Heading><div className="mt-14 grid gap-4 md:grid-cols-2">{leakage.map(([number, title, lead, body], index) => <Reveal key={title} delay={index * .07} className={`${index === 0 ? "bg-flux text-white" : index === 1 ? "bg-ink text-white" : index === 2 ? "bg-sage text-ink" : "bg-pulse-light text-ink"} group flex min-h-[360px] flex-col justify-between rounded-[2rem] p-8 transition-[transform,border-radius] duration-500 hover:-translate-y-2 hover:rounded-[2.6rem] md:p-10`}><div className="flex justify-between"><span className="text-xs font-bold opacity-50">{number}</span><ArrowUpRight className="living-arrow" /></div><div><h3 className="font-display text-4xl font-medium">{title}</h3><p className="mt-4 text-lg font-semibold">{lead}</p><p className="mt-4 text-sm leading-7 opacity-65">{body}</p></div></Reveal>)}</div><p className="mt-10 max-w-4xl text-xl leading-9 text-ink/65">Any one of these gaps is enough to cap growth, regardless of how much a clinic spends on marketing.</p></div></section>

    <section id="how-it-works" className="bg-ink py-24 text-white md:py-36"><div className="flux-shell"><Reveal className="border-t border-white/20 pt-5"><p className="flux-kicker text-flux">The Flux system</p><h2 className="mt-7 max-w-5xl font-display text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[.98] tracking-[-.06em]">Discover → Capture → Respond → Convert → Continue</h2></Reveal><p className="mt-12 max-w-4xl text-xl leading-9 text-white/60">Instead of treating the website, phone response, booking, and follow-up as separate projects, Flux builds them as one connected Patient Revenue System.</p><div className="mt-14 grid border-t border-white/20 md:grid-cols-5">{system.map(([title, body], index) => <Reveal key={title} delay={index * .06} className="min-h-[300px] border-b border-white/20 p-6 transition-colors duration-500 hover:bg-white hover:text-ink md:border-r md:p-8"><div className="flex h-full flex-col justify-between"><span className="text-xs font-bold text-flux">0{index + 1}</span><div><h3 className="font-display text-2xl font-medium">{title}</h3><p className="mt-4 text-sm leading-7 opacity-55">{body}</p></div></div></Reveal>)}</div></div></section>

    <section className="bg-cream py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="What's included">The working infrastructure behind a better patient journey.</Heading><div className="mt-14 grid gap-3 md:grid-cols-2">{included.map((item, index) => <Reveal key={item} delay={(index % 2) * .05} className="flex items-start gap-4 rounded-2xl border border-ink/15 bg-white p-6 transition-transform duration-400 hover:-translate-y-1"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flux text-white"><Check size={14} /></span><p className="text-base leading-7 text-ink/68">{item}</p></Reveal>)}</div></div></section>

    <section className="bg-white py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="Why this approach">More traffic only helps when what happens next works.</Heading><Reveal className="mt-14 grid gap-5 lg:grid-cols-2"><div className="rounded-[2rem] border border-ink/15 p-8 md:p-12"><p className="flux-kicker text-ink/40">Traditional marketing</p><p className="mt-20 font-display text-3xl font-medium">More calls enter the same disconnected response process.</p></div><div className="rounded-[2rem] bg-flux p-8 text-white md:p-12"><p className="flux-kicker text-white/55">Patient Revenue System</p><p className="mt-20 font-display text-3xl font-medium">Fix what happens after interest—before paying to create more of it.</p></div></Reveal></div></section>

    <section className="bg-pulse-light py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="Who this is for">Designed for appointment-based practices that cannot afford enquiry leakage.</Heading><div className="mt-14 grid gap-5 lg:grid-cols-2"><Reveal className="rounded-[2rem] bg-white p-8 md:p-10"><p className="flux-kicker text-flux">Good fit</p><ul className="mt-10 space-y-5">{["Clinics dependent on calls and online enquiries to fill the schedule", "Dental, physiotherapy, chiropractic, pain management, med spa, wellness, and specialty practices", "Teams of 3–50 where enquiries sometimes fall through the cracks", "Owners who want a system that keeps working without hands-on management"].map(item => <li key={item} className="flex gap-4 text-base leading-7 text-ink/65"><Check className="mt-1 shrink-0 text-flux" size={18} />{item}</li>)}</ul></Reveal><Reveal delay={.08} className="rounded-[2rem] bg-ink p-8 text-white md:p-10"><p className="flux-kicker text-white/45">Not a fit</p><ul className="mt-10 space-y-5">{["Clinics only looking for a basic website with no interest in follow-up or automation", "Practices that do not accept new patient enquiries by phone, form, or online booking"].map(item => <li key={item} className="flex gap-4 text-base leading-7 text-white/60"><X className="mt-1 shrink-0 text-flux" size={18} />{item}</li>)}</ul></Reveal></div></div></section>

    <section className="bg-white py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="How we work">From leakage assessment to a tested operating system.</Heading><div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">{steps.map(([number, title, body], index) => <Reveal key={title} delay={index * .05} className="group grid gap-5 py-8 md:grid-cols-[4rem_.42fr_.58fr] md:items-start"><span className="text-xs font-bold text-flux">{number}</span><h3 className="font-display text-2xl font-medium transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{title}</h3><p className="text-base leading-8 text-ink/60">{body}</p></Reveal>)}</div></div></section>

    <section className="bg-cream py-24 md:py-36"><div className="flux-shell"><Heading eyebrow="FAQ">Questions clinics ask before connecting the system.</Heading><div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium md:text-2xl">{question}<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-transform duration-500 group-open:rotate-45">+</span></summary><p className="max-w-4xl pt-5 text-base leading-8 text-ink/60">{answer}</p></details>)}</div></div></section>

    <section className="bg-flux py-24 text-white md:py-36"><div className="flux-shell"><p className="flux-kicker text-white/60">Patient Revenue Assessment</p><Reveal><h2 className="mt-8 max-w-6xl font-display text-[clamp(3rem,5.6vw,5.8rem)] font-medium leading-[.95]">See exactly where patient enquiries are falling through.</h2></Reveal><div className="mt-12 flex flex-wrap items-center gap-4"><Link href="/business-intelligence-audit" className="flux-button bg-white text-ink">Get your free assessment <ArrowUpRight size={16} /></Link><a href="mailto:contact@fluxmediacreations.com" className="flux-button border border-white/30 text-white">Email a question first</a></div><p className="mt-6 text-sm text-white/60">No obligation. Flux responds within 24 hours.</p><div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/25 pt-6 text-sm text-white/65"><Link href="/services/clinic-appointment-booking-automation">Booking automation</Link><Link href="/services/healthcare-seo-structure">Healthcare SEO</Link><Link href="/blog/gohighlevel-for-clinics-patient-leads">Clinic lead systems</Link><Link href="/blog/how-to-set-up-gohighlevel-missed-call-text-back">Missed-call text-back</Link><Link href="/about">About Flux</Link></div></div></section>
  </>;
}
