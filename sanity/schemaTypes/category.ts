import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Portfolio Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: 'E.g., "Fashion & Portraiture"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'A URL-friendly version of the title (click Generate).',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The image displayed on the home page for this category.',
    }),
  ],
})
