"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "flux-founding-partner-popup-v1";

const benefits = [
  "Custom website design",
  "Mobile responsive build",
  "Conversion-focused structure",
  "Lead capture setup",
  "Basic SEO foundation",
  "Analytics & tracking",
  "Growth consultation",
];

export default function SmartPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    setOpen(false);
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armedForExit = false;
    const show = () => {
      if (openRef.current || sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "shown");
      openRef.current = true;
      setOpen(true);
    };

    const scrollTrigger = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available > 0 && window.scrollY / available >= 0.35) show();
    };
    const timer = window.setTimeout(show, 14000);
    const armTimer = window.setTimeout(() => {
      armedForExit = true;
    }, 6000);
    const exitTrigger = (event: MouseEvent) => {
      if (armedForExit && event.clientY <= 0 && !event.relatedTarget && window.matchMedia("(pointer: fine)").matches) show();
    };

    window.addEventListener("scroll", scrollTrigger, { passive: true });
    document.addEventListener("mouseout", exitTrigger);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(armTimer);
      window.removeEventListener("scroll", scrollTrigger);
      document.removeEventListener("mouseout", exitTrigger);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#050608]/75 p-3 backdrop-blur-md sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="founding-popup-title"
        aria-describedby="founding-popup-description"
        className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/15 bg-[#050608] text-[#F4F4F1] shadow-[0_35px_110px_rgba(0,0,0,.65)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2.25rem]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#DB3826]/20 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#383B7C]/20 blur-[90px]" />
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[#050608]/70 text-xl text-white/70 backdrop-blur transition hover:rotate-90 hover:border-white/35 hover:text-white sm:right-5 sm:top-5"
        >
          ×
        </button>

        <div className="relative grid lg:grid-cols-[1.08fr_.92fr]">
          <div className="p-6 pb-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 pr-10">
              <span className="rounded-full border border-[#DB3826]/45 bg-[#DB3826]/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em]">Founding Partner Program</span>
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.13em] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-[#DB3826] shadow-[0_0_12px_#DB3826]" />Only 5 spots available</span>
            </div>
            <h2 id="founding-popup-title" className="mt-6 max-w-2xl font-display text-[clamp(2.15rem,4vw,4rem)] font-medium leading-[.96] tracking-[-.055em]">
              Get your growth foundation built with <span className="text-[#DB3826]">no upfront development fee.</span>
            </h2>
            <p id="founding-popup-description" className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">Flux is accepting five clinics and service businesses for a conversion-focused website and online growth foundation.</p>
            <Link
              href="/contact?program=founding-partner"
              onClick={() => setOpen(false)}
              className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#DB3826] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_45px_rgba(219,56,38,.3)] transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-[#c83222] hover:shadow-[0_20px_55px_rgba(219,56,38,.4)] sm:w-auto"
            >
              Apply For Your Spot <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <p className="mt-4 text-[11px] leading-5 text-white/40">Available for clinics and service businesses.</p>
          </div>

          <div className="border-t border-white/10 bg-white/[.035] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 lg:pt-16">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#AEC6FA]">What&apos;s included</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-black/20 px-3.5 py-2.5 text-xs leading-5 text-white/70 sm:text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D7E3D0] text-[#050608]"><Check size={11} strokeWidth={3} /></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setOpen(false)} className="mt-5 text-xs text-white/35 underline-offset-4 transition hover:text-white hover:underline">Maybe later</button>
          </div>
        </div>
      </section>
    </div>
  );
}
