"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const SERVICES = [
  "WordPress Website Build",
  "GoHighLevel Setup & Automation",
  "Full Growth System",
  "Airtable CRM & Business Hub",
  "Make & Zapier Automation",
  "WordPress & GHL Monthly Maintenance",
  "Search Visibility Engine",
  "Not sure - need advice",
];

const BUDGETS = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500+",
  "Prefer not to say",
];

const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

type Step = "info" | "calendar" | "confirm";

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  website: string;
  organisation: string;
  services: string[];
  budget: string;
  message: string;
  date: Date | null;
  time: string;
};

function getDays() {
  const days: Date[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i += 1) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);

    if (day.getDay() !== 0 && day.getDay() !== 6) {
      days.push(day);
    }
  }

  return days;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function stepDone(step: Step, current: Step) {
  const order: Step[] = ["info", "calendar", "confirm"];
  return order.indexOf(step) < order.indexOf(current);
}

export default function BookACallPage() {
  const days = useMemo(() => getDays(), []);
  const [step, setStep] = useState<Step>("info");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    website: "",
    organisation: "",
    services: [],
    budget: "",
    message: "",
    date: null,
    time: "",
  });

  const infoValid = form.name.trim().length > 1 && form.email.includes("@") && form.services.length > 0;
  const calendarValid = Boolean(form.date && form.time);

  const updateForm = <K extends keyof BookingForm>(key: K, value: BookingForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const toggleService = (service: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const handleSubmit = async () => {
    if (!calendarValid) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: form.date?.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book call");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-ink px-6 py-28 text-cream">
        <section className="mx-auto max-w-xl text-center">
          <div className="mb-6 text-4xl text-flux">*</div>
          <h1 className="font-display text-4xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
            You're booked.
          </h1>
          <p className="mt-4 text-sm leading-7 text-cream/60">
            A confirmation email is on its way to <strong className="text-cream">{form.email}</strong>. Gagan will review your details and send the meeting link shortly.
          </p>

          <div className="mt-8 rounded-lg border border-cream/10 bg-cream/[0.04] p-5 text-left">
            <div className="flex justify-between gap-4 border-b border-cream/10 py-3 text-sm">
              <span className="text-cream/45">Date</span>
              <span className="text-right text-cream/80">{form.date ? formatDate(form.date) : ""}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream/10 py-3 text-sm">
              <span className="text-cream/45">Time</span>
              <span className="text-right text-cream/80">{form.time}</span>
            </div>
            <div className="flex justify-between gap-4 py-3 text-sm">
              <span className="text-cream/45">Interest</span>
              <span className="text-right text-cream/80">{form.services.join(", ")}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-lg border border-cream/15 px-5 py-3 text-sm font-medium text-cream transition-colors hover:border-cream/30">
              Back to home
            </Link>
            <a
              href="https://wa.me/17789836113"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
              style={{ background: "var(--flux)" }}
            >
              WhatsApp now
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink px-6 py-28 text-cream">
      <section className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link href="/" className="text-sm text-cream/50 transition-colors hover:text-cream">
            Flux.
          </Link>
          <p className="mt-12 text-xs uppercase tracking-widest text-cream/35">Free 30-minute discovery call</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Tell us about your project. We'll tell you what to build first.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cream/55">
            No pitch. No pressure. Just an honest conversation about what you need and the fastest way to get there.
          </p>
        </div>

        <div className="mb-10 grid overflow-hidden rounded-lg border border-cream/10 md:grid-cols-3">
          {(["info", "calendar", "confirm"] as Step[]).map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 border-cream/10 px-4 py-3 text-sm md:border-r md:last:border-r-0 ${
                step === item ? "bg-cream/[0.06] text-cream" : "text-cream/40"
              }`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                {stepDone(item, step) ? "✓" : index + 1}
              </span>
              <span>{item === "info" ? "Your details" : item === "calendar" ? "Pick a time" : "Confirm"}</span>
            </div>
          ))}
        </div>

        {step === "info" ? (
          <section className="flex flex-col gap-6">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name *">
                <input className="book-input" value={form.name} onChange={(event) => updateForm("name", event.target.value)} placeholder="Jane Smith" />
              </Field>
              <Field label="Email address *">
                <input className="book-input" type="email" value={form.email} onChange={(event) => updateForm("email", event.target.value)} placeholder="jane@company.com" />
              </Field>
              <Field label="Phone / WhatsApp">
                <input className="book-input" value={form.phone} onChange={(event) => updateForm("phone", event.target.value)} placeholder="+1 555 000 0000" />
              </Field>
              <Field label="Organisation / business">
                <input className="book-input" value={form.organisation} onChange={(event) => updateForm("organisation", event.target.value)} placeholder="Acme Clinic LLC" />
              </Field>
              <Field label="Current website" className="md:col-span-2">
                <input className="book-input" type="url" value={form.website} onChange={(event) => updateForm("website", event.target.value)} placeholder="https://yoursite.com" />
              </Field>
            </div>

            <Field label="Services you're interested in *">
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-full border px-3 py-2 text-xs transition-colors ${
                      form.services.includes(service)
                        ? "border-cream bg-cream text-ink"
                        : "border-cream/15 text-cream/55 hover:border-cream/30 hover:text-cream"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Budget range">
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => updateForm("budget", budget)}
                    className={`rounded-full border px-3 py-2 text-xs transition-colors ${
                      form.budget === budget
                        ? "border-cream bg-cream text-ink"
                        : "border-cream/15 text-cream/55 hover:border-cream/30 hover:text-cream"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Anything specific you want to cover?">
              <textarea
                className="book-input min-h-28 resize-y"
                value={form.message}
                onChange={(event) => updateForm("message", event.target.value)}
                placeholder="E.g. we're a pain management clinic in NJ and need a full WordPress + GHL system..."
              />
            </Field>

            <button type="button" className="book-button" disabled={!infoValid} onClick={() => setStep("calendar")}>
              Pick a time →
            </button>
          </section>
        ) : null}

        {step === "calendar" ? (
          <section className="flex flex-col gap-6">
            <button type="button" className="self-start text-sm text-cream/45 transition-colors hover:text-cream" onClick={() => setStep("info")}>
              ← Back
            </button>
            <div>
              <h2 className="text-base font-medium text-cream">Choose a date</h2>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {days.map((day) => (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => setForm((current) => ({ ...current, date: day, time: "" }))}
                    className={`rounded-lg border px-2 py-3 text-center transition-colors ${
                      form.date?.toDateString() === day.toDateString()
                        ? "border-cream bg-cream text-ink"
                        : "border-cream/15 text-cream/55 hover:border-cream/30 hover:text-cream"
                    }`}
                  >
                    <span className="block text-[11px] uppercase tracking-widest">{day.toLocaleDateString("en-US", { weekday: "short" })}</span>
                    <span className="block text-lg font-semibold">{day.getDate()}</span>
                    <span className="block text-[11px]">{day.toLocaleDateString("en-US", { month: "short" })}</span>
                  </button>
                ))}
              </div>
            </div>

            {form.date ? (
              <div>
                <h2 className="text-base font-medium text-cream">Choose a time</h2>
                <p className="mt-2 text-xs text-cream/40">Times are shown in your local timezone. The call is 30 minutes.</p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => updateForm("time", time)}
                      className={`rounded-lg border px-4 py-3 text-sm transition-colors ${
                        form.time === time
                          ? "border-cream bg-cream text-ink"
                          : "border-cream/15 text-cream/55 hover:border-cream/30 hover:text-cream"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <button type="button" className="book-button" disabled={!calendarValid} onClick={() => setStep("confirm")}>
              Review booking →
            </button>
          </section>
        ) : null}

        {step === "confirm" ? (
          <section className="flex flex-col gap-6">
            <button type="button" className="self-start text-sm text-cream/45 transition-colors hover:text-cream" onClick={() => setStep("calendar")}>
              ← Back
            </button>
            <h2 className="text-base font-medium text-cream">Review and confirm</h2>
            <div className="rounded-lg border border-cream/10 bg-cream/[0.04] p-5">
              <Summary label="Name" value={form.name} />
              <Summary label="Email" value={form.email} />
              {form.phone ? <Summary label="Phone" value={form.phone} /> : null}
              {form.organisation ? <Summary label="Organisation" value={form.organisation} /> : null}
              {form.website ? <Summary label="Website" value={form.website} /> : null}
              <Summary label="Services" value={form.services.join(", ")} />
              {form.budget ? <Summary label="Budget" value={form.budget} /> : null}
              <div className="my-3 border-t border-cream/10" />
              <Summary label="Date" value={form.date ? formatDate(form.date) : ""} strong />
              <Summary label="Time" value={form.time} strong />
            </div>
            <p className="text-xs leading-6 text-cream/45">
              By confirming, you'll receive an email confirmation. Gagan will send a meeting link to <strong className="text-cream/65">{form.email}</strong>.
            </p>
            {error ? <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}
            <button type="button" className="book-button" disabled={loading} onClick={handleSubmit}>
              {loading ? "Booking..." : "Confirm free call"}
            </button>
          </section>
        ) : null}

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-cream/30">
          <span>No credit card required</span>
          <span>30-minute call, no commitment</span>
          <span>Reply within 24 hours</span>
        </div>
      </section>
    </main>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-medium text-cream/50">{label}</span>
      {children}
    </label>
  );
}

function Summary({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-5 py-2 text-sm">
      <span className="shrink-0 text-cream/40">{label}</span>
      <span className={`text-right ${strong ? "font-medium text-cream" : "text-cream/70"}`}>{value}</span>
    </div>
  );
}
