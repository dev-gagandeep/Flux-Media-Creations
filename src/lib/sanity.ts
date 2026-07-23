import {createClient} from "@sanity/client";
import type {BlogPost} from "@/lib/constants";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2ljzfn1e",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-02-19",
};

export const sanityClient = createClient({
  ...sanityConfig,
  useCdn: true,
  perspective: "published",
});

type SanityBlock = {
  _key: string;
  _type: "block";
  style?: string;
  children?: Array<{text?: string}>;
};

type SanityPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  category: string;
  author?: string;
  cover?: string;
  body?: SanityBlock[];
  faq?: Array<{question: string; answer: string}>;
};

const postProjection = `{
  "slug": slug.current,
  title,
  metaTitle,
  metaDescription,
  excerpt,
  publishedAt,
  readTime,
  category,
  author,
  "cover": cover.asset->url,
  body,
  faq
}`;

function blockToText(block: SanityBlock) {
  const text = block.children?.map((child) => child.text || "").join("") || "";
  if (block.style === "h2") return `## ${text}`;
  if (block.style === "h3") return `### ${text}`;
  return text;
}

function normalizePost(post: SanityPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    metaTitle: post.metaTitle || post.title,
    metaDescription: post.metaDescription || post.excerpt,
    excerpt: post.excerpt,
    date: post.publishedAt,
    readTime: post.readTime || "8 min read",
    category: post.category,
    author: post.author || "Gagan Deep",
    cover: post.cover || "/og-image.svg",
    content: (post.body || []).map(blockToText).filter(Boolean),
    faq: post.faq || [],
  };
}

export async function getSanityPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postProjection}`,
      {},
      {next: {revalidate: 60}},
    );
    return posts.map(normalizePost);
  } catch (error) {
    console.error("Unable to load Sanity posts; using local content.", error);
    return [];
  }
}

export async function getSanityPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClient.fetch<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug][0] ${postProjection}`,
      {slug},
      {next: {revalidate: 60}},
    );
    return post ? normalizePost(post) : null;
  } catch (error) {
    console.error(`Unable to load Sanity post "${slug}"; using local content.`, error);
    return null;
  }
}

export function mergePosts(cmsPosts: BlogPost[], localPosts: BlogPost[]) {
  const posts = new Map(localPosts.map((post) => [post.slug, post]));
  for (const post of cmsPosts) posts.set(post.slug, post);
  return [...posts.values()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
