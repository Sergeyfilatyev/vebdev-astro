import type { Block } from 'payload'

export const AdvantagesBlock: Block = {
  slug: 'advantages',
  labels: {
    singular: { en: 'Advantages', ru: 'Преимущества', uk: 'Переваги' },
    plural: { en: 'Advantages Sections', ru: 'Разделы преимуществ', uk: 'Розділи переваг' },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      label: { en: 'Title', ru: 'Заголовок', uk: 'Заголовок' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      label: { en: 'Subtitle', ru: 'Подзаголовок', uk: 'Підзаголовок' },
    },
    {
      name: 'advantages',
      type: 'array',
      label: { en: 'Advantages', ru: 'Преимущества', uk: 'Переваги' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: { en: 'Icon', ru: 'Иконка', uk: 'Іконка' },
          admin: {
            description: {
              en: 'Emoji icon (e.g., "⚡", "🎨", "🔍")',
              ru: 'Иконка-эмодзи (например, "⚡", "🎨", "🔍")',
              uk: 'Іконка-емодзі (наприклад, "⚡", "🎨", "🔍")',
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
          name: 'description',
          type: 'textarea',
          localized: true,
          label: { en: 'Description', ru: 'Описание', uk: 'Опис' },
        },
        {
          name: 'points',
          type: 'array',
          label: { en: 'Points', ru: 'Пункты', uk: 'Пункти' },
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
              localized: true,
              label: { en: 'Point', ru: 'Пункт', uk: 'Пункт' },
            },
          ],
        },
        {
          name: 'order',
          type: 'number',
          label: { en: 'Order', ru: 'Порядок', uk: 'Порядок' },
          defaultValue: 0,
        },
      ],
    },
  ],
}
