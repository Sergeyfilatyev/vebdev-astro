import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
  labels: {
    singular: { en: 'Statistics', ru: 'Статистика', uk: 'Статистика' },
    plural: { en: 'Statistics Sections', ru: 'Разделы статистики', uk: 'Розділи статистики' },
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
      name: 'stats',
      type: 'array',
      label: { en: 'Statistics', ru: 'Статистика', uk: 'Статистика' },
      fields: [
        {
          name: 'number',
          type: 'number',
          required: true,
          label: { en: 'Number', ru: 'Число', uk: 'Число' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
          label: { en: 'Label', ru: 'Подпись', uk: 'Підпис' },
        },
        {
          name: 'icon',
          type: 'text',
          label: { en: 'Icon', ru: 'Иконка', uk: 'Іконка' },
          admin: {
            description: {
              en: 'Optional icon (emoji or iconify name)',
              ru: 'Опциональная иконка (эмодзи или название iconify)',
              uk: 'Опціональна іконка (емодзі або назва iconify)',
            },
          },
        },
      ],
    },
  ],
}
