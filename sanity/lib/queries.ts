import { groq } from 'next-sanity'

export const galleryQuery = groq`*[_type == "galleryImage"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  category
}`

export const featuredGalleryQuery = groq`*[_type == "galleryImage" && category == "feature"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  category
}`
