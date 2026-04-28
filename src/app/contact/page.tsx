"use client";

import type { Metadata } from "next";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

// Note: export const metadata must be in a server component — use generateMetadata pattern
// For simplicity here we handle meta in layout; this page is client for form interactivity

const SERVICES_OPTIONS = [
  "WordPress Website",
  "GHL Automation Setup",
  "Full Growth System (Website + GHL)",
  "Airtable Hub",
  "Make / Zapier Automation",
  "Monthly Maintenance",
  "Not sure yet",
];

const BUDGETS = [
  "Under $300",
  "$300–$600",
  "$600–$1,200",
  "$1,200+",
  "Let's discuss",
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xbdqqvjy";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    budget: "",
    message: "",
    consent: false,
  });

  const set = (key: keyof typeof form, val: string | boolean) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!FORMSPREE_ENDPOINT) {
      setError("Form is not configured yet. Please use email or WhatsApp above.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New project enquiry from ${form.name} — ${form.business}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please try WhatsApp or email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="section pt-32 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Contact</p>
            <h1
              className="font-display font-semibold mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              Let's talk about your{" "}
              <span style={{ color: "var(--flux)", fontStyle: "italic" }}>project.</span>
            </h1>
            <p className="text-base text-ink/50 leading-relaxed mb-10 max-w-sm">
              Free 30-minute discovery call. We'll learn exactly what you need and tell you honestly whether we're the right fit.
            </p>

            {/* Contact methods */}
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-sm group-hover:border-flux group-hover:text-flux transition-all duration-300">
                  ✉
                </span>
                <div>
                  <p className="text-xs text-ink/30 mb-0.5">Email</p>
                  <p className="text-sm font-medium group-hover:text-flux transition-colors">{SITE.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-sm group-hover:border-flux group-hover:text-flux transition-all duration-300">
                  ◎
                </span>
                <div>
                  <p className="text-xs text-ink/30 mb-0.5">WhatsApp</p>
                  <p className="text-sm font-medium group-hover:text-flux transition-colors">{SITE.phoneDisplay}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-sm">
                  ◈
                </span>
                <div>
                  <p className="text-xs text-ink/30 mb-0.5">Response time</p>
                  <p className="text-sm font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-10 p-5 rounded-2xl bg-sage">
              <p className="text-sm font-medium mb-3">What happens after you send this?</p>
              <ol className="flex flex-col gap-2">
                {[
                  "We review your submission within 24 hours",
                  "We send a calendar link for a 30-min call",
                  "We send a proposal within 48 hours of the call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/60">
                    <span className="text-xs font-medium w-4 flex-shrink-0 mt-0.5" style={{ color: "#16A34A" }}>
                      {i + 1}.
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right form */}
          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-3xl border border-ink/8 bg-white text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
                    style={{ background: "var(--blush)", color: "var(--flux)" }}
                  >
                    ✓
                  </div>
                  <h2 className="font-display font-semibold text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                    Message received!
                  </h2>
                  <p className="text-sm text-ink/55 leading-relaxed mb-6">
                    We'll be in touch within 24 hours. While you wait, check out our work to see what we've built.
                  </p>
                  <a
                    href="/work"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
                    style={{ color: "var(--flux)" }}
                  >
                    See our work →
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl border border-ink/8 bg-white flex flex-col gap-5"
                >
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-ink/40 block mb-1.5">Your name *</label>
                      <input
                        required
                        className="flux-input"
                        placeholder="Gagan Deep"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-ink/40 block mb-1.5">Business name</label>
                      <input
                        className="flux-input"
                        placeholder="Acme Clinic"
                        value={form.business}
                        onChange={(e) => set("business", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-ink/40 block mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        className="flux-input"
                        placeholder="you@business.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-ink/40 block mb-1.5">Phone / WhatsApp</label>
                      <input
                        className="flux-input"
                        placeholder="+1 201 555 0100"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-ink/40 block mb-1.5">Industry</label>
                    <select
                      className="flux-input"
                      value={form.industry}
                      onChange={(e) => set("industry", e.target.value)}
                    >
                      <option value="">Select your industry</option>
                      <option>Healthcare clinic</option>
                      <option>Home services (HVAC/Plumbing/etc.)</option>
                      <option>Real estate</option>
                      <option>Beauty & wellness</option>
                      <option>Restaurant</option>
                      <option>Professional services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-ink/40 block mb-2">Service interested in</label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_OPTIONS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => set("service", s)}
                          className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                          style={{
                            background: form.service === s ? "var(--flux)" : "transparent",
                            color: form.service === s ? "white" : "var(--ink-muted)",
                            borderColor: form.service === s ? "var(--flux)" : "rgba(13,13,13,0.12)",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-ink/40 block mb-2">Budget range</label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => set("budget", b)}
                          className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                          style={{
                            background: form.budget === b ? "var(--ink)" : "transparent",
                            color: form.budget === b ? "var(--cream)" : "var(--ink-muted)",
                            borderColor: form.budget === b ? "var(--ink)" : "rgba(13,13,13,0.12)",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-ink/40 block mb-1.5">Tell us about your project</label>
                    <textarea
                      className="flux-input resize-none"
                      rows={3}
                      placeholder="What are you trying to achieve? Any existing site? Any problems you're trying to solve?"
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs text-ink/50 leading-5">
                    <input
                      required
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      className="mt-0.5"
                    />
                    <span>
                      I agree to be contacted by email or phone/WhatsApp regarding my inquiry and accept the
                      <Link href="/privacy" className="mx-1 text-flux hover:underline">Privacy Policy</Link>
                      and
                      <Link href="/terms" className="mx-1 text-flux hover:underline">Terms of Service</Link>.
                    </span>
                  </label>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:gap-4"
                      style={{
                        background: "var(--flux)",
                        color: "white",
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? "Sending..." : "Send message →"}
                    </button>
                  </MagneticButton>

                  <p className="text-xs text-center text-ink/25">
                    We reply within 24 hours. No spam and no unrelated marketing blasts.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
