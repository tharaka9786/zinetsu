import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website (e.g., Dananjaya Prasad Photography)',
    }),
    defineField({
      name: 'subtitle',
      title: 'Site Subtitle',
      type: 'string',
      description: 'The subtitle or tagline under the main title in the Hero section.',
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Background Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Images to display in the fading background slider of the Hero section.',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Profile URL',
      type: 'url',
    }),
  ],
})
