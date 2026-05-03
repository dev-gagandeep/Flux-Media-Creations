import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, WORK_PROJECTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import { WORK_CASE_STUDIES } from "@/lib/work-content";

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
  const detail = WORK_CASE_STUDIES[params.slug];

  if (!project) {
    return generateMeta({ title: "Work", path: "/work" });
  }

  if (detail) {
    return generateMeta({
      absoluteTitle: detail.metaTitle,
      description: detail.metaDescription,
      path: `/work/${params.slug}`,
      image: project.image,
    });
  }

  return generateMeta({
    title: `${project.title} Case Study`,
    description: project.description,
    path: `/work/${params.slug}`,
  });
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getProject(params.slug);
  const detail = WORK_CASE_STUDIES[params.slug];

  if (!project || !detail) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: detail.headline,
    description: detail.metaDescription,
    author: {
      "@type": "Person",
      name: "Gagan Deep",
      url: `${SITE.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: detail.published,
    dateModified: detail.modified,
    url: `${SITE.url}/work/${detail.slug}`,
    image: `${SITE.url}${project.image}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="section pt-32 md:pt-40 max-w-[1320px] mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Work → {detail.title}</p>
        <p className="text-sm uppercase tracking-widest text-flux mb-4">{detail.categoryTag}</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          {detail.headline}
        </h1>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={`${project.title} case study preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

          <aside className="rounded-lg border border-ink/10 bg-white p-6 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Project Overview</p>
            <div className="space-y-4 text-sm">
              {detail.overview.map((item) => (
                <div key={item.label}>
                  <p className="text-ink/35 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-flux hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-ink/75 leading-6">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
            The Challenge
          </h2>
          <div className="space-y-5 text-base leading-8 text-ink/68 max-w-4xl">
            {detail.challenge.map((paragraph, index) => (
              <p key={`challenge-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
            What We Built
          </h2>
          <div className="space-y-6">
            {detail.build.map((block) => (
              <div key={block.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>
                  {block.title}
                </h3>
                <div className="space-y-4 text-sm leading-7 text-ink/68">
                  {block.body.map((paragraph, index) => (
                    <p key={`${block.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-lg bg-ink p-8 text-cream">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              The Result
            </h2>
            <ul className="space-y-4 text-sm md:text-base leading-7 text-cream/78">
              {detail.result.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {detail.techStack.map((item) => (
              <span key={item} className="rounded-md bg-ink/5 px-3 py-1.5 text-xs text-ink/68">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-ink/10 bg-white p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>
            {detail.ctaTitle}
          </h3>
          <p className="text-sm md:text-base leading-7 text-ink/65 max-w-3xl mb-6">{detail.ctaBody}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--flux-dark)]"
              style={{ background: "var(--flux)" }}
            >
              Book your free call →
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              Visit live site ↗
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
