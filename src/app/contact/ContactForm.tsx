"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const SERVICES_OPTIONS = [
  "WordPress Website",
  "GHL Automation Setup",
  "Full Growth System (Website + GHL)",
  "Healthcare Website System",
  "Local SEO",
  "Monthly Maintenance",
  "Not sure yet",
];

const BUDGETS = ["Under $300", "$300-$600", "$600-$1,200", "$1,200+", "Let's discuss"];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xbdqqvjy";

export default function ContactForm() {
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

  const set = (key: keyof typeof form, val: string | boolean) => setForm((current) => ({ ...current, [key]: val }));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New project enquiry from ${form.name} - ${form.business}`,
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

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blush text-2xl text-flux">OK</div>
        <h2 className="font-display text-2xl font-semibold mb-3">Message received.</h2>
        <p className="text-sm text-ink/55 leading-7 mb-6">We will review the details and reply with the clearest next step.</p>
        <Link href="/services" className="text-sm font-semibold text-flux">
          Explore services -&gt;
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink/10 bg-white p-6 md:p-8 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-ink/40 block mb-1.5">Your name *</label>
          <input required className="flux-input" placeholder="Your name" value={form.name} onChange={(event) => set("name", event.target.value)} />
        </div>
        <div>
          <label className="text-xs text-ink/40 block mb-1.5">Business name</label>
          <input className="flux-input" placeholder="Business or clinic name" value={form.business} onChange={(event) => set("business", event.target.value)} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-ink/40 block mb-1.5">Email *</label>
          <input required type="email" className="flux-input" placeholder="you@business.com" value={form.email} onChange={(event) => set("email", event.target.value)} />
        </div>
        <div>
          <label className="text-xs text-ink/40 block mb-1.5">Phone / WhatsApp</label>
          <input className="flux-input" placeholder="+1 555 000 0000" value={form.phone} onChange={(event) => set("phone", event.target.value)} />
        </div>
      </div>

      <div>
        <label className="text-xs text-ink/40 block mb-1.5">Industry</label>
        <select className="flux-input" value={form.industry} onChange={(event) => set("industry", event.target.value)}>
          <option value="">Select your industry</option>
          <option>Healthcare clinic</option>
          <option>Home services</option>
          <option>Real estate</option>
          <option>Beauty & wellness</option>
          <option>Professional services</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-ink/40 block mb-2">What do you need?</label>
        <div className="flex flex-wrap gap-2">
          {SERVICES_OPTIONS.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => set("service", service)}
              className="rounded-full border px-3 py-1.5 text-xs transition"
              style={{
                background: form.service === service ? "var(--flux)" : "transparent",
                color: form.service === service ? "white" : "var(--ink-muted)",
                borderColor: form.service === service ? "var(--flux)" : "rgba(13,13,13,0.12)",
              }}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs text-ink/40 block mb-2">Budget range</label>
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => set("budget", budget)}
              className="rounded-full border px-3 py-1.5 text-xs transition"
              style={{
                background: form.budget === budget ? "var(--ink)" : "transparent",
                color: form.budget === budget ? "var(--cream)" : "var(--ink-muted)",
                borderColor: form.budget === budget ? "var(--ink)" : "rgba(13,13,13,0.12)",
              }}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs text-ink/40 block mb-1.5">Tell us about your project</label>
        <textarea
          className="flux-input resize-none"
          rows={4}
          placeholder="Send your website link, business type, services, and the problem you want to fix."
          value={form.message}
          onChange={(event) => set("message", event.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/50 leading-5">
        <input required type="checkbox" checked={form.consent} onChange={(event) => set("consent", event.target.checked)} className="mt-0.5" />
        <span>
          I agree to be contacted about my inquiry and accept the
          <Link href="/privacy" className="mx-1 text-flux hover:underline">Privacy Policy</Link>
          and
          <Link href="/terms" className="mx-1 text-flux hover:underline">Terms of Service</Link>.
        </span>
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button type="submit" disabled={loading} className="rounded-full bg-flux py-4 text-sm font-semibold uppercase tracking-wide text-white transition disabled:opacity-70">
        {loading ? "Sending..." : "Send your project details ->"}
      </button>
    </form>
  );
}
