import type { CollectionConfig } from 'payload'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const Steps: CollectionConfig = {
  slug: 'steps',
  labels: {
    singular: { en: 'Step', ru: 'Шаг', uk: 'Крок' },
    plural: { en: 'Steps', ru: 'Шаги', uk: 'Кроки' },
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'step',
      type: 'text',
      required: true,
      label: { en: 'Step Number', ru: 'Номер шага', uk: 'Номер кроку' },
      admin: {
        description: {
          en: 'Step number (e.g., "01", "02", "03")',
          ru: 'Номер шага (например, "01", "02", "03")',
          uk: 'Номер кроку (наприклад, "01", "02", "03")',
        },
      },
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      label: { en: 'Icon', ru: 'Иконка', uk: 'Іконка' },
      admin: {
        description: {
          en: 'Emoji icon (e.g., "📞", "🎯", "📝")',
          ru: 'Иконка-эмодзи (например, "📞", "🎯", "📝")',
          uk: 'Іконка-емодзі (наприклад, "📞", "🎯", "📝")',
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
