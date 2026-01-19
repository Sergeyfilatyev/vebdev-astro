import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faqBlock',
  labels: {
    singular: { en: 'FAQ', ru: 'FAQ', uk: 'FAQ' },
    plural: { en: 'FAQ Sections', ru: 'Разделы FAQ', uk: 'Розділи FAQ' },
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
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      label: { en: 'FAQ Items', ru: 'Элементы FAQ', uk: 'Елементи FAQ' },
      admin: {
        description: {
          en: 'Select FAQ items to display',
          ru: 'Выберите элементы FAQ для отображения',
          uk: 'Виберіть елементи FAQ для відображення',
        },
      },
    },
  ],
}
