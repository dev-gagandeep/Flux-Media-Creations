"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type PopupKind = "assessment" | "newsletter" | "exit";

const SESSION_KEY = "flux-popup-shown";
const WEB3FORMS_ACCESS_KEY = "9c81aa58-8835-4d78-87db-6a707c241ba9";

const solutionPaths = new Set([
  "/solutions",
  "/patient-revenue-system",
  "/clinics",
  "/revenue-intelligence",
  "/ai-discovery",
  "/customer-progression",
  "/services",
]);

const excludedPaths = new Set([
  "/business-intelligence-audit",
  "/contact",
  "/privacy",
  "/terms",
]);

export default function SmartPopup() {
  const pathname = usePathname();
  const [kind, setKind] = useState<PopupKind | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = Boolean(kind);
  }, [kind]);

  useEffect(() => {
    setKind(null);
    setStatus("idle");
    setEmail("");

    if (excludedPaths.has(pathname) || sessionStorage.getItem(SESSION_KEY)) return;

    const isArticle = pathname === "/blog" || pathname.startsWith("/blog/");
    const isHighIntent =
      pathname === "/" ||
      pathname.startsWith("/industries") ||
      solutionPaths.has(pathname);
    let armedForExit = false;

    const show = (nextKind: PopupKind) => {
      if (openRef.current || sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, nextKind);
      openRef.current = true;
      setKind(nextKind);
    };

    const scrollTrigger = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const progress = window.scrollY / available;

      if (isArticle && progress >= 0.45) show("newsletter");
      if (isHighIntent && progress >= 0.5) show("assessment");
    };

    const timer = isHighIntent
      ? window.setTimeout(() => show("assessment"), 22000)
      : undefined;
    const armTimer = window.setTimeout(() => {
      armedForExit = true;
    }, 8000);

    const exitTrigger = (event: MouseEvent) => {
      if (
        armedForExit &&
        event.clientY <= 0 &&
        !event.relatedTarget &&
        window.matchMedia("(pointer: fine)").matches
      ) {
        show("exit");
      }
    };

    window.addEventListener("scroll", scrollTrigger, { passive: true });
    document.addEventListener("mouseout", exitTrigger);

    return () => {
      if (timer) window.clearTimeout(timer);
      window.clearTimeout(armTimer);
      window.removeEventListener("scroll", scrollTrigger);
      document.removeEventListener("mouseout", exitTrigger);
    };
  }, [pathname]);

  useEffect(() => {
    if (!kind) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setKind(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [kind]);

  async function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("email", email);
    formData.append("subject", "New Flux Insights subscriber");
    formData.append("from_name", "Flux Website Popup");
    formData.append("message", `New monthly insights signup from ${pathname}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean };
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (!kind) return null;

  const isNewsletter = kind === "newsletter";
  const content =
    kind === "assessment"
      ? {
          eyebrow: "Free 20-minute assessment",
          title: "How connected is your operating system?",
          description:
            "Find out where your business is losing customers in a free 20-minute assessment. No generic pitch, just a clear picture of what’s working and what’s leaking.",
          button: "Start My Free Assessment",
          dismiss: "Not right now",
        }
      : kind === "exit"
        ? {
            eyebrow: "Before you go",
            title: "Before you go, one question.",
            description:
              "Do you know where your business is actually losing customers? Most don’t, until they run the assessment. It takes 20 minutes and costs nothing.",
            button: "Show Me the Gaps",
            dismiss: "I’ll pass",
          }
        : {
            eyebrow: "Monthly intelligence",
            title: "Enjoying this? Get insights like this in your inbox.",
            description:
              "One practical email a month on AI search, automation, and growth for appointment-based businesses. No fluff, no spam.",
            button: "Send Me the Insights",
            dismiss: "No thanks",
          };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/45 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setKind(null);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="smart-popup-title"
        className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/15 bg-ink px-6 py-8 text-white shadow-2xl sm:px-10 sm:py-10"
      >
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-flux/30 blur-3xl" aria-hidden="true" />
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setKind(null)}
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xl text-white/70 transition hover:rotate-90 hover:border-white/35 hover:text-white"
        >
          ×
        </button>

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flux">{content.eyebrow}</p>
          <h2 id="smart-popup-title" className="mt-5 max-w-lg font-display text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/65">{content.description}</p>

          {isNewsletter ? (
            status === "success" ? (
              <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="font-semibold">You’re on the list.</p>
                <p className="mt-1 text-sm text-white/60">The next practical Flux insight will arrive in your inbox.</p>
              </div>
            ) : (
              <form onSubmit={submitNewsletter} className="mt-7">
                <label htmlFor="popup-email" className="sr-only">Email address</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email address"
                    className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/40 focus:border-flux"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="min-h-12 rounded-full bg-flux px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : content.button}
                  </button>
                </div>
                {status === "error" ? <p className="mt-3 text-sm text-red-300">Something went wrong. Please try again.</p> : null}
              </form>
            )
          ) : (
            <Link
              href="/business-intelligence-audit"
              onClick={() => setKind(null)}
              className="mt-7 inline-flex min-h-12 items-center rounded-full bg-flux px-6 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              {content.button} →
            </Link>
          )}

          <button
            type="button"
            onClick={() => setKind(null)}
            className="mt-5 block text-sm text-white/45 underline-offset-4 transition hover:text-white hover:underline"
          >
            {content.dismiss}
          </button>
        </div>
      </section>
    </div>
  );
}
