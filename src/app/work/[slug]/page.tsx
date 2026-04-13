import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK_PROJECTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

type WorkDetailPageProps = {
  params: {
    slug: string;
  };
};

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getProject(slug: string) {
  return WORK_PROJECTS.find((project) => toSlug(project.title) === slug);
}

export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({
    slug: toSlug(project.title),
  }));
}

export function generateMetadata({ params }: WorkDetailPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return generateMeta({ title: "Work", path: "/work" });
  }

  return generateMeta({
    title: `${project.title} Case Study`,
    description: project.description,
    path: `/work/${params.slug}`,
  });
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const outcomes = [
    "Clearer service architecture and CTA hierarchy",
    "Higher quality inbound leads through better page intent",
    "Faster response pipeline with CRM-connected forms",
  ];

  return (
    <section className="section pt-40 md:pt-48 pb-20 max-w-[1100px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Case study</p>
      <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
        {project.title}
      </h1>
      <p className="text-base md:text-lg text-ink/55 max-w-3xl leading-relaxed mb-10">{project.description}</p>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {project.tags.map((tag) => (
          <div key={tag} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm text-ink/70">
            {tag}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Challenge</p>
          <p className="text-sm text-ink/65 leading-7">
            The brand needed a professional digital presence with clearer conversion flow and stronger alignment between messaging, UX, and lead capture.
          </p>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Approach</p>
          <p className="text-sm text-ink/65 leading-7">
            We designed a focused page structure, improved trust presentation, and connected form actions into a workflow that supports faster follow-up.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-ink text-cream p-8 mb-10">
        <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Outcomes</p>
        <ul className="space-y-3 text-sm text-cream/80 leading-7">
          {outcomes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-flux mt-1">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4"
          style={{ background: "var(--flux)", color: "white" }}
        >
          Visit live site
          <span>↗</span>
        </a>
        <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-ink/15">
          Back to all work
        </Link>
      </div>
    </section>
  );
}
