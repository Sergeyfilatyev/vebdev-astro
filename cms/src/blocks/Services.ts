import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  labels: {
    singular: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
    plural: { en: 'Services Sections', ru: 'Разделы услуг', uk: 'Розділи послуг' },
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
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
      admin: {
        description: {
          en: 'Select services to display',
          ru: 'Выберите услуги для отображения',
          uk: 'Виберіть послуги для відображення',
        },
      },
    },
  ],
}
