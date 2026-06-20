import { type SchemaTypeDefinition } from 'sanity'
import { galleryImage } from './galleryImage'
import { siteSettings } from './siteSettings'
import { aboutSection } from './aboutSection'
import { category } from './category'
import { servicePackage } from './servicePackage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, siteSettings, aboutSection, category, servicePackage],
}
