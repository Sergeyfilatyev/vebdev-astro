import type { CollectionConfig } from 'payload'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: { en: 'FAQ Item', ru: 'Элемент FAQ', uk: 'Елемент FAQ' },
    plural: { en: 'FAQ', ru: 'FAQ', uk: 'FAQ' },
  },
  admin: {
    useAsTitle: 'question',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Question', ru: 'Вопрос', uk: 'Питання' },
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
      localized: true,
      label: { en: 'Answer', ru: 'Ответ', uk: 'Відповідь' },
    },
    {
      name: 'category',
      type: 'select',
      label: { en: 'Category', ru: 'Категория', uk: 'Категорія' },
      options: [
        {
          label: { en: 'General', ru: 'Общее', uk: 'Загальне' },
          value: 'general',
        },
        {
          label: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
          value: 'services',
        },
        {
          label: { en: 'Portfolio', ru: 'Портфолио', uk: 'Портфоліо' },
          value: 'portfolio',
        },
        {
          label: { en: 'Pricing', ru: 'Ценообразование', uk: 'Ціноутворення' },
          value: 'pricing',
        },
        {
          label: { en: 'Other', ru: 'Другое', uk: 'Інше' },
          value: 'other',
        },
      ],
      defaultValue: 'general',
    },
    {
      name: 'order',
      type: 'number',
      label: { en: 'Order', ru: 'Порядок', uk: 'Порядок' },
      defaultValue: 0,
      admin: {
        description: {
          en: 'Display order (lower numbers appear first)',
          ru: 'Порядок отображения (меньшие числа отображаются первыми)',
          uk: 'Порядок відображення (менші числа відображаються першими)',
        },
      },
    },
  ],
  hooks: createFrontendRebuildHooks(),
}
