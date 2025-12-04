import type { Block } from 'payload'
import { lexicalEditor, lexicalHTMLField } from '@payloadcms/richtext-lexical'

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  labels: {
    singular: 'Текстовый блок',
    plural: 'Текстовые блоки',
  },
  fields: [
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor(),
      label: 'Контент',
    },
    lexicalHTMLField({
      lexicalFieldName: 'body', 
      htmlFieldName: 'body_html', 
    }),
  ],
}
