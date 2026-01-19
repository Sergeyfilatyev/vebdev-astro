import type { Block } from 'payload'
import { lexicalEditor, lexicalHTMLField } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: { en: 'Content', ru: 'Контент', uk: 'Контент' },
    plural: { en: 'Contents', ru: 'Контенты', uk: 'Контенти' },
  },
  fields: [
    {
      name: 'sectionIdentifier',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Section Identifier', ru: 'Идентификатор секции', uk: 'Ідентифікатор секції' },
      admin: {
        description: {
          en: 'Unique identifier for this section (e.g., "mission", "approach", "partnership")',
          ru: 'Уникальный идентификатор для этой секции (например, "mission", "approach", "partnership")',
          uk: 'Унікальний ідентифікатор для цієї секції (наприклад, "mission", "approach", "partnership")',
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Title', ru: 'Заголовок', uk: 'Заголовок' },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      editor: lexicalEditor(),
      label: { en: 'Content', ru: 'Контент', uk: 'Контент' },
    },
    lexicalHTMLField({
      lexicalFieldName: 'content',
      htmlFieldName: 'content_html',
    }),
    {
      name: 'isVisible',
      type: 'checkbox',
      label: { en: 'Visible', ru: 'Показать', uk: 'Показати' },
      defaultValue: true,
      admin: {
        description: { en: 'Show this section on the website', ru: 'Показать этот раздел на сайте', uk: 'Показати цей розділ на сайті' },
      },
    },
  ],
}
