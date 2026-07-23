import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappIndia}`;
const ORDER_FORM_LINK = "https://forms.gle/fyfz3YE89Gu8rMQGA";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Student Portfolio Website at Rs. 199",
  description:
    "Get a polished one-page student portfolio website with sections for projects, skills, education, resume, and contact links. Built and deployed for students in 24 to 48 hours.",
  path: "/student-portfolio",
  noIndex: true,
});

const painPoints = [
  "Your resume cannot show the quality of your actual projects.",
  "Recruiters see the same PDF format from every student.",
  "Your LinkedIn and GitHub feel incomplete without a personal site.",
  "Building and deploying a portfolio feels technical and time-consuming.",
  "Most freelancers quote thousands for a basic student website.",
  "You need one clean link you can share everywhere with confidence.",
];

const includedItems = [
  "One-page student portfolio website",
  "Mobile-friendly responsive layout",
  "About, skills, projects, education, and contact sections",
  "LinkedIn, GitHub, resume, and social link integration",
  "Free Vercel deployment with shareable hosted link",
  "Clean template-based professional design",
  "One minor revision after delivery",
  "Delivery within 24 to 48 hours",
];

const benefits = [
  {
    title: "Look Prepared Before the Interview",
    body: "A live portfolio link helps you show initiative before anyone opens your resume in detail.",
  },
  {
    title: "Make Projects Easier to Understand",
    body: "Present project goals, tools used, screenshots, GitHub links, and outcomes in one structured place.",
  },
  {
    title: "Upgrade Your LinkedIn Presence",
    body: "Use your portfolio link in your LinkedIn bio, featured section, internship forms, and email signature.",
  },
  {
    title: "Create a Professional First Impression",
    body: "A polished portfolio makes you feel more credible when applying for internships, placements, and freelance work.",
  },
  {
    title: "Share One Link Anywhere",
    body: "Send one simple link to recruiters, mentors, classmates, placement coordinators, and clients.",
  },
  {
    title: "Start Small, Improve Later",
    body: "Begin with an affordable portfolio now and add custom sections, content, or animation as your work grows.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share Your Details",
    body: "Send your name, education, skills, projects, links, resume, and preferred style through the order form.",
  },
  {
    step: "02",
    title: "We Structure the Portfolio",
    body: "Your information is organized into a clean page that feels suitable for students and freshers.",
  },
  {
    step: "03",
    title: "We Build and Deploy",
    body: "The portfolio is built, checked on mobile, and deployed to a free Vercel hosted link.",
  },
  {
    step: "04",
    title: "You Start Sharing",
    body: "Add the link to your resume, LinkedIn, GitHub, internship applications, and placement profiles.",
  },
];

const plans = [
  {
    name: "Basic Portfolio",
    price: "Rs. 199",
    note: "Best starting point",
    featured: true,
    features: [
      "One-page portfolio website",
      "Template-based professional layout",
      "Free Vercel hosted link",
      "Mobile-friendly design",
      "One minor revision",
      "Delivery in 24 to 48 hours",
    ],
  },
  {
    name: "Standard Portfolio",
    price: "Rs. 499",
    note: "More polish and personalization",
    features: [
      "Everything in Basic",
      "More personalized layout",
      "Improved content formatting",
      "Additional visual polish",
      "More flexible sections",
      "Two revisions",
    ],
  },
  {
    name: "Premium Portfolio",
    price: "Rs. 999",
    note: "For students building a stronger brand",
    features: [
      "Everything in Standard",
      "Premium design direction",
      "Light animation and interactions",
      "More advanced customization",
      "Resume and LinkedIn presentation support",
      "Priority delivery",
    ],
  },
];

const addOns = [
  ["Extra customization", "Rs. 99 to Rs. 299"],
  ["Content writing", "Rs. 99"],
  ["Extra section", "Rs. 99 per section"],
  ["Fast delivery within 12 hours", "Rs. 99"],
  ["Custom domain setup", "Rs. 199 plus domain cost"],
  ["Premium animated design", "Rs. 299"],
];

const faqItems = [
  {
    question: "What is included in the Rs. 199 plan?",
    answer:
      "The Basic plan includes a one-page portfolio with about, skills, projects, education, resume link, contact links, mobile-friendly design, free Vercel deployment, and one minor revision.",
  },
  {
    question: "Will I get a custom domain?",
    answer:
      "The Rs. 199 plan includes a free Vercel hosted link. A custom domain can be added later as a paid add-on with the domain cost billed separately.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. You share your details and links. We handle the page structure, build, responsive checks, and deployment.",
  },
  {
    question: "Can I use the portfolio link on my resume?",
    answer:
      "Yes. The portfolio is designed for resumes, LinkedIn profiles, GitHub bios, internship forms, placement portals, and direct recruiter messages.",
  },
  {
    question: "Can you write the content for me?",
    answer:
      "Yes. Content writing can be added for Rs. 99 if you want your details turned into clean student-friendly copy.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Click any Order Now Rs 199 button, fill the form, and share the details requested there. We will use that information to start your student portfolio.",
  },
];

function PrimaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={ORDER_FORM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,92,53,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-flux-dark ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryCTA({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-flux hover:text-flux ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-flux">
      {children}
    </p>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink/65">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flux" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StudentPortfolioPage() {
  return (
    <div className="bg-cream text-ink">
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center md:px-10 md:pb-24 md:pt-40">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_8%,rgba(255,92,53,0.18),transparent_34%),linear-gradient(180deg,#fff7f1_0%,rgba(250,248,244,0)_78%)]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
            Limited-time student offer
          </div>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
            Portfolio website for students at <span className="text-flux">Rs. 199</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/65 md:text-xl md:leading-9">
            A clean personal website for internships, placements, LinkedIn, GitHub, and freelance opportunities. Built and deployed for you in 24 to 48 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCTA>Order Now Rs 199</PrimaryCTA>
            <SecondaryCTA href={WHATSAPP_LINK}>Ask on WhatsApp</SecondaryCTA>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why students need it</SectionLabel>
            <h2 className="font-display text-headline font-semibold">Your work deserves more than a PDF attachment.</h2>
            <p className="mt-4 text-base leading-7 text-ink/60">
              A portfolio turns your projects, learning, and ambition into a clear online profile that recruiters can understand quickly.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
                <span className="mb-5 block h-1 w-10 rounded-full bg-flux" />
                <p className="text-sm leading-7 text-ink/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionLabel>The offer</SectionLabel>
            <h2 className="font-display text-headline font-semibold">A ready-to-share student portfolio, delivered fast.</h2>
            <p className="mt-5 text-base leading-8 text-ink/62">
              The Rs. 199 plan is intentionally simple: a clean, template-based portfolio that gives students a professional online identity without a high website budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA>Order Now Rs 199</PrimaryCTA>
              <SecondaryCTA href={WHATSAPP_LINK}>Message us first</SecondaryCTA>
            </div>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 md:p-8">
            <CheckList items={includedItems} />
            <div className="mt-8 rounded-xl border border-flux/20 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Ready to order</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                Fill the order form with your student details, portfolio content, and social links. We will review it and start your portfolio build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <SectionLabel>Career value</SectionLabel>
            <h2 className="font-display text-headline font-semibold">Built for how students actually apply today.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(13,13,13,0.08)]">
                <h3 className="font-display text-2xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-flux">Process</p>
              <h2 className="font-display text-headline font-semibold">Four simple steps from details to live link.</h2>
              <p className="mt-5 text-base leading-8 text-white/58">
                No hosting setup, no technical confusion, no design tools to learn. Just send the details and get a portfolio you can use.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step) => (
                <div key={step.step} className="rounded-xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-sm font-semibold text-flux">{step.step}</p>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display text-headline font-semibold">Start small. Upgrade when your profile grows.</h2>
            <p className="mt-4 text-base leading-7 text-ink/60">
              Transparent student pricing with optional add-ons when you want more customization.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border bg-white p-7 shadow-sm ${plan.featured ? "border-flux shadow-[0_20px_60px_rgba(255,92,53,0.14)]" : "border-ink/10"}`}
              >
                {plan.featured && (
                  <p className="mb-4 inline-flex rounded-full bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-flux">
                    Best for students
                  </p>
                )}
                <h3 className="font-display text-3xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-ink/50">{plan.note}</p>
                <p className="mt-6 font-display text-5xl font-semibold text-flux">{plan.price}</p>
                <div className="mt-7">
                  <CheckList items={plan.features} />
                </div>
                {plan.featured ? (
                  <PrimaryCTA className="mt-8 w-full">Order Now Rs 199</PrimaryCTA>
                ) : (
                  <SecondaryCTA href={WHATSAPP_LINK} className="mt-8 w-full">Discuss this plan</SecondaryCTA>
                )}
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-ink/10 bg-white p-6 md:p-8">
            <h3 className="font-display text-3xl font-semibold">Available add-ons</h3>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {addOns.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between gap-4 rounded-xl bg-cream px-4 py-4">
                  <span className="text-sm font-medium text-ink/70">{name}</span>
                  <span className="text-right text-sm font-semibold text-flux">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-headline font-semibold">Questions students usually ask.</h2>
          </div>
          <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold">
                  {item.question}
                  <span className="text-sm font-body text-flux transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-ink/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1200px] rounded-[28px] bg-ink px-6 py-14 text-center text-white md:px-10 md:py-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-flux">Student portfolio launch</p>
          <h2 className="mx-auto max-w-3xl font-display text-headline font-semibold">
            Be easier to remember when recruiters compare students.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
            Get a clean portfolio page at Rs. 199, share your work professionally, and add one stronger asset to every application.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCTA>Order Now Rs 199</PrimaryCTA>
            <SecondaryCTA href={WHATSAPP_LINK}>Chat on WhatsApp</SecondaryCTA>
          </div>
          <p className="mt-5 text-sm tracking-[0.04em] text-white/30">No coding needed. Free Vercel link. 24 to 48 hour delivery.</p>
        </div>
      </section>
    </div>
  );
}
