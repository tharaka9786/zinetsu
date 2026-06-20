import { defineField, defineType } from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'E.g., "About"',
    }),
    defineField({
      name: 'name',
      title: 'Your Name',
      type: 'string',
      description: 'E.g., "Dananjaya Prasad"',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title / Subheading',
      type: 'string',
      description: 'E.g., "Founder & Lead Photographer, Zinetzu"',
    }),
    defineField({
      name: 'biography',
      title: 'Biography Paragraphs',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The rich-text paragraphs about yourself.',
    }),
  ],
})
