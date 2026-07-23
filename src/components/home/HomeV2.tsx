"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import PlatformEcosystem from "@/components/brand/PlatformEcosystem";
import { RecognitionStrip } from "@/components/brand/AuthorityEcosystem";

const framework = [
  {
    number: "01",
    title: "Market Presence Intelligence",
    body: "Being findable now means being understood and trusted by Google, AI search tools like ChatGPT and Gemini, Google Maps, and every platform a customer checks before choosing you. Flux structures your business information, reviews, and content so search and AI systems can recommend you with confidence.",
    href: "/ai-discovery",
    tone: "bg-pulse-light text-ink",
  },
  {
    number: "02",
    title: "Digital Headquarters",
    body: "Most websites are digital brochures. Flux turns them into working environments that answer questions, capture the right information, and route customers toward booking without requiring someone to manually manage every step.",
    href: "/services/wordpress-website-build",
    tone: "bg-ink text-white",
  },
  {
    number: "03",
    title: "Revenue Intelligence",
    body: "See where opportunities come from, where they stall, and where revenue is actually won or lost. Replace guesswork with a structured view of the real pipeline.",
    href: "/revenue-intelligence",
    tone: "bg-flux text-white",
  },
  {
    number: "04",
    title: "Customer Progression",
    body: "Acknowledge inquiries quickly, follow up consistently, and guide each person toward a booked appointment or closed sale—whether it is 9am or 11pm on Sunday.",
    href: "/customer-progression",
    tone: "bg-sage text-ink",
  },
  {
    number: "05",
    title: "AI Workforce Systems",
    body: "Deploy AI as a working part of the business: answering routine questions, recovering missed calls, qualifying inquiries, and flagging what genuinely needs a human.",
    href: "/services/gohighlevel-automation",
    tone: "bg-pulse text-white",
  },
];

const industries = [
  ["Healthcare", "Clinics and practices where patient trust, response time, and appointment progression directly affect access to care.", "/industries/healthcare"],
  ["Home Services", "Local, urgent, call-heavy demand that needs fast routing, quote progression, and reliable follow-up.", "/industries/home-services"],
  ["Legal", "Consultation-led practices that need authoritative discovery, structured intake, and clear matter progression.", "/industries/legal"],
  ["Wellness", "Appointment and membership businesses connecting education, booking, communication, and repeat visits.", "/industries/wellness"],
];

const faqs = [
  ["What is Flux?", "Flux is an Operating Intelligence Company. It builds connected systems that link how a business is discovered, how its website performs, how customer inquiries are followed up on, and how automation and AI support the team, so these functions work as one coordinated system instead of separate disconnected tools."],
  ["Who does Flux help?", "Flux works with appointment based service businesses, starting with healthcare clinics and practices, and extending to home services, legal, wellness, and other professional service businesses where fast, consistent follow up determines whether an inquiry becomes a customer."],
  ["What problem does Flux solve?", "Flux solves fragmentation. Most businesses already have a website, a CRM, and marketing running, but these systems do not communicate. Flux connects them into one intelligence layer so inquiries, follow up, and business data move reliably."],
  ["How is Flux different from a marketing agency?", "A marketing agency typically delivers isolated services such as a website, advertising, or SEO. Flux builds the connected system underneath these functions and measures whether inquiries progress into customers."],
  ["What is Operating Intelligence?", "Operating Intelligence coordinates a business's discovery, website, revenue tracking, customer follow up, and automation into a connected system that improves over time."],
  ["Why do businesses need connected systems instead of separate tools?", "Separate tools create gaps: a website that does not feed the CRM, a CRM that is not followed up on, and data that is never reviewed. Connected systems close those gaps by moving information and next actions automatically."],
  ["What is a Business Intelligence Assessment?", "It is a review of how a business currently handles discovery, response time, follow up, and conversion, identifying where customers are being lost before any system is built or changed."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <m.div initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay, duration: .72, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</m.div>;
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return <Reveal className="border-t border-ink/15 pt-5"><p className="flux-kicker text-flux">{kicker}</p><h2 className="mt-7 max-w-[1100px] font-display text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[.98] tracking-[-.06em]">{title}</h2></Reveal>;
}

export default function HomeV2() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-10 pt-24 md:pt-28">
        <div className="flux-shell">
          <div className="flex items-center justify-between border-y border-ink/15 py-3"><p className="flux-kicker text-ink/55">Operating Intelligence Company</p><p className="hidden text-xs font-semibold text-ink/45 sm:block">Connected systems · Built to improve</p></div>
          <div className="grid gap-12 py-10 md:py-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:py-16">
            <m.div initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className="max-w-6xl font-display text-[clamp(3.35rem,6.4vw,6.8rem)] font-medium leading-[.92] tracking-[-.07em]">Your business doesn&apos;t need more tools. <span className="text-flux">It needs them to talk.</span></h1>
            </m.div>
            <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .72 }} className="border-t border-ink/15 pt-6">
              <p className="text-lg leading-8 text-ink/65">Most businesses are not short on technology. What they lack is a system where the website, CRM, booking, follow-up, AI, and business data work together. Flux builds that connective layer so every inquiry and next action moves automatically, in the right direction.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/business-intelligence-audit" className="flux-button flux-button-red">Start your assessment <ArrowUpRight size={16} /></Link><Link href="/operating-intelligence" className="flux-button flux-button-line">How it works</Link></div>
            </m.div>
          </div>
          <Link href="#business-shift" className="group ml-auto flex w-fit items-center gap-3 py-4 text-xs font-bold uppercase tracking-[.12em] text-ink/45">Explore the shift <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-500 group-hover:translate-y-1 group-hover:bg-ink group-hover:text-white"><ArrowDownRight size={16} /></span></Link>
        </div>
      </section>

      <section id="business-shift" className="bg-pulse-light py-24 md:py-36">
        <div className="flux-shell"><SectionHead kicker="The business shift" title="The old rules of marketing don't explain how customers find you anymore." />
          <div className="mt-16 grid gap-8 lg:grid-cols-2"><Reveal className="rounded-[2rem] bg-white p-8 md:p-12"><p className="text-xl leading-9 text-ink/70">For twenty years, growth followed a familiar formula: build a website, run ads, rank on Google, answer the phone. That formula is quietly breaking. Search has split across Google, ChatGPT, Gemini, Maps, reviews, and AI-generated comparisons.</p></Reveal><Reveal delay={.1} className="rounded-[2rem] bg-ink p-8 text-white md:p-12"><p className="text-xl leading-9 text-white/70">Customers now expect answers within minutes. The businesses that win are not simply spending more; their systems respond faster and more consistently everywhere a customer might look.</p><p className="mt-10 font-display text-3xl font-medium text-white">This is infrastructure—not a marketing trend.</p></Reveal></div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-36"><div className="flux-shell"><SectionHead kicker="The problem" title="The problem was never a lack of tools. It's a lack of connection." />
        <div className="mt-16 grid gap-12 lg:grid-cols-[.65fr_.35fr]"><Reveal><p className="max-w-4xl text-2xl leading-[1.55] text-ink/65">The website does not talk to the CRM. The CRM does not talk to the calendar. An inquiry sits in an inbox for six hours while the customer books somewhere else. Staff rely on memory and sticky notes. Reviews are scattered across platforms nobody actively manages.</p><p className="mt-8 max-w-4xl text-2xl leading-[1.55] text-ink/65">Each gap looks small. Together, they cost real customers every week.</p></Reveal><Reveal delay={.1} className="flex flex-col justify-between rounded-[2rem] bg-flux p-8 text-white"><p className="flux-kicker text-white/60">Appointment businesses feel it first</p><p className="mt-28 font-display text-4xl font-medium">A clinic can have great care and strong rankings—and still lose a patient because one Tuesday call went unanswered.</p></Reveal></div>
      </div></section>

      <section className="bg-ink py-24 text-white md:py-36"><div className="flux-shell"><Reveal className="border-t border-white/20 pt-5"><p className="flux-kicker text-flux">The Flux solution</p><h2 className="mt-7 max-w-5xl font-display text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[.98] tracking-[-.06em]">Flux builds the intelligence layer your business runs on.</h2></Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2"><Reveal><p className="text-xl leading-9 text-white/65">We are not a marketing agency selling services one at a time. Flux builds connected systems underneath how a business finds, wins, and keeps customers—from discovery and website behavior to inquiry progression and business learning.</p></Reveal><Reveal delay={.1}><p className="text-xl leading-9 text-white/65">Operating Intelligence means discovery, the website, revenue tracking, follow-up, and automation working from the same source of truth and improving as they run.</p><Link href="/operating-intelligence" className="flux-button mt-8 border border-white/25 text-white">Explore Operating Intelligence <ArrowUpRight size={16} /></Link></Reveal></div>
      </div></section>

      <PlatformEcosystem variant="full" />

      <section className="bg-cream py-24 md:py-36"><div className="flux-shell"><SectionHead kicker="Operating Intelligence framework" title="Five systems. One connected business." />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12">{framework.map((item, index) => <m.div key={item.title} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .07, duration: .65 }} className={`${index < 2 ? "lg:col-span-6" : index === 2 ? "lg:col-span-5" : index === 3 ? "lg:col-span-7" : "lg:col-span-12"}`}><Link href={item.href} className={`${item.tone} group flex min-h-[380px] flex-col justify-between rounded-[2rem] p-8 transition-[transform,border-radius,box-shadow] duration-500 hover:-translate-y-2 hover:rounded-[2.6rem] hover:shadow-[0_30px_80px_rgba(6,7,10,.15)] md:p-10`}><div className="flex justify-between"><span className="text-xs font-bold opacity-50">{item.number}</span><span className="living-arrow"><ArrowUpRight /></span></div><div><h3 className="font-display text-[clamp(2.25rem,3.6vw,3.75rem)] font-medium leading-[1]">{item.title}</h3><p className="mt-5 max-w-2xl text-sm leading-7 opacity-65">{item.body}</p></div></Link></m.div>)}</div>
      </div></section>

      <section className="bg-white py-24 md:py-36"><div className="flux-shell"><SectionHead kicker="Systems" title="From discovery to improvement, every handoff is designed as one journey." />
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-ink/15">{[["Operating Intelligence", "/operating-intelligence"], ["Patient Revenue System", "/patient-revenue-system"], ["Healthcare", "/industries/healthcare"], ["AI Discovery", "/ai-discovery"], ["Business Intelligence Audit", "/business-intelligence-audit"], ["Insights", "/blog"]].map(([label, href], index) => <Link key={href} href={href} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-ink/15 px-6 py-7 transition-colors duration-500 last:border-0 hover:bg-pulse-light md:px-10 md:py-9"><span className="text-xs font-bold text-flux">0{index + 1}</span><span className="font-display text-2xl font-medium transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">{label}</span><MoveRight className="transition-transform duration-500 group-hover:translate-x-2" /></Link>)}</div>
      </div></section>

      <section className="bg-pulse-light py-24 md:py-36"><div className="flux-shell"><SectionHead kicker="Industries" title="Built first for businesses where every missed response costs a customer." />
        <Reveal className="mt-12 max-w-4xl"><p className="text-xl leading-9 text-ink/65">Flux starts with appointment-based service businesses, especially healthcare clinics and practices. The same underlying problem extends across home services, legal, wellness, and professional services: fragmented systems, inconsistent follow-up, and no clear view of where customers are won or lost.</p></Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-ink/15 md:grid-cols-2">{industries.map(([title, body, href], index) => <Link key={title} href={href} className="group min-h-[300px] bg-white p-8 transition-colors duration-500 hover:bg-ink hover:text-white md:p-10"><div className="flex h-full flex-col justify-between"><div className="flex justify-between"><span className="text-xs font-bold text-flux">0{index + 1}</span><span className="living-arrow"><ArrowUpRight /></span></div><div><h3 className="font-display text-3xl font-medium md:text-4xl">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 opacity-60">{body}</p></div></div></Link>)}</div>
      </div></section>

      <RecognitionStrip />

      <section className="bg-white py-24 md:py-36"><div className="flux-shell"><SectionHead kicker="Why Flux" title="We are not selling you a website. We are building the system behind it." />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">{["Start with where customers are being lost—not a predetermined deliverable.", "Build only what closes the gap, connected to what is already in place.", "Measure the pipeline and customer progression, not a list of completed tasks."].map((item, index) => <Reveal key={item} delay={index * .08} className="rounded-[2rem] border border-ink/15 p-8 md:p-10"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white"><Check size={18} /></span><p className="mt-20 font-display text-2xl font-medium leading-tight md:text-3xl">{item}</p></Reveal>)}</div>
        <div className="mt-24 border-t border-ink/15 pt-5"><p className="flux-kicker text-ink/45">Frequently asked questions</p><div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium md:text-2xl"><span>{question}</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-transform duration-500 group-open:rotate-45">+</span></summary><p className="max-w-4xl pb-3 pt-5 text-base leading-8 text-ink/60">{answer}</p></details>)}</div></div>
      </div></section>

      <section className="bg-flux py-24 text-white md:py-36"><div className="flux-shell"><p className="flux-kicker text-white/60">Business Intelligence Assessment</p><Reveal><h2 className="mt-8 max-w-6xl font-display text-display font-medium">Find out where your business is actually losing customers.</h2></Reveal><div className="mt-14 grid gap-10 border-t border-white/25 pt-8 lg:grid-cols-[1fr_auto] lg:items-end"><p className="max-w-3xl text-xl leading-9 text-white/70">Before Flux builds anything, we review discovery, response time, follow-up, and conversion to show where gaps are costing you. No generic pitch. Just a clear picture of what is working, what is leaking, and what connecting it would look like.</p><div><Link href="/business-intelligence-audit" className="flux-button bg-white text-ink">Start your assessment <ArrowUpRight size={16} /></Link><p className="mt-4 max-w-sm text-xs leading-6 text-white/60">Takes 20 minutes. You leave with a clear map of the gaps, whether or not you work with us.</p></div></div></div></section>

      <section className="bg-ink py-28 text-white md:py-40"><div className="flux-shell text-center"><Reveal><h2 className="mx-auto max-w-6xl font-display text-[clamp(3rem,6vw,6.25rem)] font-medium leading-[.94] tracking-[-.065em]">Flux builds the intelligence layer through which businesses <span className="text-flux">grow.</span></h2></Reveal><p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/55">Not another tool. Not another dashboard nobody checks. The connected system underneath discovery, conversion, and follow-up.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="/business-intelligence-audit" className="flux-button flux-button-red">Start the assessment <ArrowUpRight size={16} /></Link><Link href="/about" className="flux-button border border-white/25 text-white">Why Flux</Link></div></div></section>
    </>
  );
}
