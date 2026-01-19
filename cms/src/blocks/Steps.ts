import type { Block } from 'payload'

export const StepsBlock: Block = {
  slug: 'stepsBlock',
  labels: {
    singular: { en: 'Steps', ru: 'Шаги', uk: 'Кроки' },
    plural: { en: 'Steps Sections', ru: 'Разделы шагов', uk: 'Розділи кроків' },
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
      name: 'steps',
      type: 'relationship',
      relationTo: 'steps',
      hasMany: true,
      label: { en: 'Steps', ru: 'Шаги', uk: 'Кроки' },
      admin: {
        description: {
          en: 'Select steps to display',
          ru: 'Выберите шаги для отображения',
          uk: 'Виберіть кроки для відображення',
        },
      },
    },
  ],
}
