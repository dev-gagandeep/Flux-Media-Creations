"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

type Consent = "accepted" | "essential";

const CONSENT_KEY = "flux-cookie-consent-v1";

interface AnalyticsWindow extends Window {
  dataLayer?: Array<Record<string, unknown>>;
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
}

function loadAnalytics() {
  const analyticsWindow = window as AnalyticsWindow;

  if (!document.getElementById("flux-gtm-script")) {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const gtm = document.createElement("script");
    gtm.id = "flux-gtm-script";
    gtm.async = true;
    gtm.src = "https://www.googletagmanager.com/gtm.js?id=GTM-NBQFBVX8";
    document.head.appendChild(gtm);
  }

  if (!document.getElementById("flux-clarity-script")) {
    analyticsWindow.clarity =
      analyticsWindow.clarity ||
      Object.assign(
        (...args: unknown[]) => {
          analyticsWindow.clarity!.q = analyticsWindow.clarity!.q || [];
          analyticsWindow.clarity!.q!.push(args);
        },
        { q: [] as unknown[][] }
      );
    const clarity = document.createElement("script");
    clarity.id = "flux-clarity-script";
    clarity.async = true;
    clarity.src = "https://www.clarity.ms/tag/xqtb6kfps5";
    document.head.appendChild(clarity);
  }
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^(_ga|_gid|_gcl|_clck|_clsk)/.test(name)) return;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.fluxmediacreations.com`;
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [savedConsent, setSavedConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY) as Consent | null;
    setSavedConsent(saved);
    if (saved === "accepted") loadAnalytics();
    if (!saved) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener("flux:open-cookie-settings", reopen);
    return () => window.removeEventListener("flux:open-cookie-settings", reopen);
  }, []);

  function choose(consent: Consent) {
    const previouslyAccepted = savedConsent === "accepted";
    localStorage.setItem(CONSENT_KEY, consent);
    setSavedConsent(consent);
    setVisible(false);

    if (consent === "accepted") {
      loadAnalytics();
    } else {
      clearAnalyticsCookies();
      if (previouslyAccepted) window.location.reload();
    }
  }

  return (
    <AnimatePresence>
      {visible ? (
        <m.aside
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 left-3 right-3 z-[10000] max-w-xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-ink p-5 text-white shadow-[0_28px_90px_rgba(6,7,10,.3)] sm:bottom-5 sm:left-5 sm:right-auto sm:p-6"
        >
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-flux/25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-flux">Your privacy</p>
            <h2 id="cookie-consent-title" className="mt-3 font-display text-xl font-semibold tracking-[-.025em]">
              Choose how we use cookies.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
              Essential storage keeps the site working. With your permission, Google Tag Manager and Microsoft Clarity help us understand and improve the experience.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-flux px-5 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Accept analytics
              </button>
              <button
                type="button"
                onClick={() => choose("essential")}
                className="rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Essential only
              </button>
              <Link href="/privacy" className="px-1 py-2 text-xs text-white/45 underline-offset-4 hover:text-white hover:underline">
                Privacy policy
              </Link>
            </div>
          </div>
        </m.aside>
      ) : null}
    </AnimatePresence>
  );
}
