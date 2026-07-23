"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, MoveRight } from "lucide-react";
import { SITE } from "@/lib/constants";

type NavItem = { name: string; href: string; note?: string };
type NavGroup = { label: string; href?: string; items: NavItem[] };

const solutions: NavItem[] = [
  { name: "Patient Revenue System", href: "/patient-revenue-system", note: "Healthcare discovery through long-term relationship" },
  { name: "Patient Revenue System for Clinics", href: "/clinics", note: "Recover patient enquiry and appointment leakage" },
  { name: "Revenue Intelligence", href: "/revenue-intelligence", note: "Connect marketing, sales, CRM, and revenue signals" },
  { name: "AI Discovery", href: "/ai-discovery", note: "Visibility across Google and AI recommendation systems" },
  { name: "Customer Progression", href: "/customer-progression", note: "Move every enquiry toward the right next action" },
  { name: "Implementation Services", href: "/services", note: "Website, CRM, SEO, and automation delivery" },
];

const groups: NavGroup[] = [
  { label: "Why Flux", items: [
    { name: "Operating Intelligence", href: "/operating-intelligence", note: "The connected foundation behind modern growth" },
    { name: "The Problem", href: "/the-problem", note: "Why disconnected tools quietly lose opportunity" },
    { name: "Our Philosophy", href: "/philosophy", note: "The principles behind intelligent businesses" },
  ] },
  { label: "Industries", href: "/industries", items: [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Wellness", href: "/industries/wellness" },
  ] },
  { label: "Assessment", items: [
    { name: "Business Intelligence Audit", href: "/business-intelligence-audit", note: "Measure discovery, journey, revenue, systems, and AI readiness" },
  ] },
  { label: "Insights", href: "/blog", items: [
    { name: "AI Search", href: "/blog?category=ai-search", note: "AI visibility, search, entities, and discovery" },
    { name: "Business Intelligence", href: "/blog?category=business-intelligence", note: "Connected systems, automation, and revenue operations" },
    { name: "Healthcare Growth", href: "/blog?category=healthcare-growth", note: "Patient journeys, clinic visibility, and conversion" },
  ] },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => { const y = window.scrollY; setScrolled(y > 40); setHidden(y > lastY.current && y > 120); lastY.current = y; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const active = (items: NavItem[]) => items.some(item => pathname === item.href.split("?")[0] || pathname.startsWith(`${item.href.split("?")[0]}/`));
  const close = () => setOpenMenu(null);

  return <>
    <m.header animate={{ y: hidden && !mobileOpen ? -100 : 0 }} transition={{ duration: .4, ease: [0.16, 1, .3, 1] }} className="fixed inset-x-0 top-0 z-50 transition-colors" style={{ background: scrolled ? "rgba(243,244,241,.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(13,13,13,.08)" : "none" }}>
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-9">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[-.03em]">Flux<span className="text-flux">.</span></Link>
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          <DesktopMenu label="Solutions" items={solutions} open={openMenu === "Solutions"} active={active(solutions)} wide onOpen={() => setOpenMenu("Solutions")} onClose={close} />
          {groups.map(group => <DesktopMenu key={group.label} {...group} open={openMenu === group.label} active={active(group.items)} onOpen={() => setOpenMenu(group.label)} onClose={close} />)}
          <Link href="/about" className={`nav-link py-2 text-[13px] font-semibold tracking-[-.01em] ${pathname === "/about" ? "active" : ""}`}>Company</Link>
        </nav>
        <div className="flex items-center gap-4"><Link href="/business-intelligence-audit" className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(6,7,10,.16)] transition-transform hover:scale-105 xl:flex">Measure your score →</Link><button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 p-2 lg:hidden" aria-label="Toggle menu"><m.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="h-0.5 w-6 bg-ink" /><m.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="h-0.5 w-6 bg-ink" /><m.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="h-0.5 w-6 bg-ink" /></button></div>
      </div>
    </m.header>
    <AnimatePresence>{mobileOpen ? <m.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: .4, ease: [0.16, 1, .3, 1] }} className="fixed inset-0 z-40 overflow-y-auto bg-cream px-7 pb-10 pt-24 lg:hidden"><div className="border-t border-ink/15">{[{ label: "Solutions", href: "/solutions", items: solutions }, ...groups].map(group => <MobileMenu key={group.label} {...group} open={openMenu === group.label} toggle={() => setOpenMenu(openMenu === group.label ? null : group.label)} />)}<Link href="/about" className="block border-b border-ink/15 py-5 font-display text-3xl font-medium">Company</Link></div><Link href="/business-intelligence-audit" className="flux-button flux-button-red mt-8 w-full justify-center">Measure your score</Link><div className="mt-10 border-t border-ink/15 pt-6"><p className="text-xs uppercase tracking-widest text-ink/40">Say hello</p><a href={`mailto:${SITE.email}`} className="mt-2 block text-lg font-medium">{SITE.email}</a></div></m.div> : null}</AnimatePresence>
  </>;
}

function DesktopMenu({ label, href, items, open, active, wide = false, onOpen, onClose }: NavGroup & { open: boolean; active: boolean; wide?: boolean; onOpen: () => void; onClose: () => void }) {
  return <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}><button type="button" onClick={open ? onClose : onOpen} className={`nav-link gap-1.5 py-2 text-[13px] font-semibold tracking-[-.01em] ${active ? "active" : ""}`} aria-expanded={open}>{label}<ChevronDown size={12} strokeWidth={2.2} className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} /></button><AnimatePresence>{open ? <m.div initial={{ opacity: 0, y: 14, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .99 }} transition={{ duration: .24, ease: [0.16, 1, .3, 1] }} className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream shadow-[0_28px_80px_rgba(6,7,10,.14)] ${wide ? "w-[min(860px,calc(100vw-56px))]" : "w-[420px]"}`}><div className="flex items-end justify-between gap-6 border-b border-ink/10 px-7 py-6"><div><p className="flux-kicker text-flux">{label}</p><p className="mt-2 text-xs leading-5 text-ink/45">{wide ? "Connected systems designed around the full customer journey." : `Explore ${label.toLowerCase()} at Flux.`}</p></div>{href ? <Link href={href} onClick={onClose} className="group flex shrink-0 items-center gap-2 text-xs font-bold text-ink transition-colors hover:text-flux">View all <MoveRight size={14} className="transition-transform group-hover:translate-x-1" /></Link> : null}</div><div className={`px-7 py-3 ${wide ? "grid grid-cols-2 gap-x-10" : ""}`}>{items.map((item, index) => <Link key={item.name} href={item.href} onClick={onClose} className={`group flex min-h-[76px] items-center justify-between gap-6 border-ink/10 py-4 transition-colors hover:text-flux ${index < items.length - (wide ? 2 : 1) ? "border-b" : ""}`}><div><span className="block font-display text-[19px] font-medium tracking-[-.025em]">{item.name}</span>{item.note ? <span className="mt-1.5 block max-w-[310px] text-xs leading-5 text-ink/45">{item.note}</span> : null}</div><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-300 group-hover:translate-x-1 group-hover:border-flux group-hover:bg-flux group-hover:text-white"><MoveRight size={14} /></span></Link>)}</div></m.div> : null}</AnimatePresence></div>;
}
function MobileMenu({ label, href, items, open, toggle }: NavGroup & { open: boolean; toggle: () => void }) {
  return <div className="border-b border-ink/15"><button type="button" onClick={toggle} className="flex w-full items-center justify-between py-5 text-left font-display text-3xl font-medium">{label}<ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} /></button><AnimatePresence>{open ? <m.div initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} className="overflow-hidden"><div className="space-y-2 pb-5">{href ? <Link href={href} className="block rounded-xl bg-ink p-4 font-semibold text-white">View all {label}</Link> : null}{items.map(item => <Link key={item.name} href={item.href} className="block rounded-xl bg-white p-4"><span className="font-semibold">{item.name}</span>{item.note ? <span className="mt-1 block text-xs leading-5 text-ink/45">{item.note}</span> : null}</Link>)}</div></m.div> : null}</AnimatePresence></div>;
}
