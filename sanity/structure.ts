import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin Dashboard')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('About Section')
        .child(
          S.document()
            .schemaType('aboutSection')
            .documentId('aboutSection')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'aboutSection'].includes(listItem.getId() as string)
      ),
    ])
