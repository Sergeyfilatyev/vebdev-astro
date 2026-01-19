import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: {
    singular: { en: 'Media Block', ru: 'Медиа Блок', uk: 'Медіа Блок' },
    plural: { en: 'Media Blocks', ru: 'Медиа Блоки', uk: 'Медіа Блоки' },
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: { en: 'Media', ru: 'Медиа', uk: 'Медіа' },
    },
  ],
}
