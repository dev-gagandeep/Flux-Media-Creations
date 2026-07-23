import {defineArrayMember, defineField, defineType} from "sanity";

export const postType = defineType({
  name: "post",
  title: "Insight",
  type: "document",
  fields: [
    defineField({name: "title", title: "Title", type: "string", validation: (rule) => rule.required()}),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "title", maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "AI Search",
          "Business Intelligence",
          "Healthcare Growth",
          "Local SEO and Search Visibility",
          "CRM and Automation",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (rule) => rule.required()}),
    defineField({name: "publishedAt", title: "Published at", type: "datetime", validation: (rule) => rule.required()}),
    defineField({name: "author", title: "Author", type: "string", initialValue: "Gagan Deep"}),
    defineField({name: "readTime", title: "Read time", type: "string", initialValue: "8 min read"}),
    defineField({
      name: "cover",
      title: "Cover image",
      type: "image",
      options: {hotspot: true},
      fields: [defineField({name: "alt", title: "Alternative text", type: "string"})],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            {title: "Normal", value: "normal"},
            {title: "Heading 2", value: "h2"},
            {title: "Heading 3", value: "h3"},
            {title: "Quote", value: "blockquote"},
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "faq",
      title: "FAQs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({name: "question", title: "Question", type: "string", validation: (rule) => rule.required()}),
            defineField({name: "answer", title: "Answer", type: "text", rows: 3, validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: "question"}},
        }),
      ],
    }),
    defineField({name: "metaTitle", title: "SEO title", type: "string", validation: (rule) => rule.max(60)}),
    defineField({name: "metaDescription", title: "SEO description", type: "text", rows: 3, validation: (rule) => rule.max(160)}),
  ],
  preview: {
    select: {title: "title", subtitle: "category", media: "cover"},
  },
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{field: "publishedAt", direction: "desc"}],
    },
  ],
});
