import { defineField, defineType } from 'sanity'

export const servicePackage = defineType({
  name: 'servicePackage',
  title: 'Service Package',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Package Title',
      type: 'string',
      description: 'E.g., "Silver Package"',
    }),
    defineField({
      name: 'price',
      title: 'Price String',
      type: 'string',
      description: 'E.g., "LKR 50,000"',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'A brief overview of who or what this package is best suited for.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Features / Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add each feature or deliverable as a separate string.',
    }),
  ],
})
