import type { CollectionConfig } from 'payload'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: { en: 'Project', ru: 'Проект', uk: 'Проєкт' },
    plural: { en: 'Projects', ru: 'Проекты', uk: 'Проєкти' },
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Title', ru: 'Название', uk: 'Назва' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      label: { en: 'Subtitle', ru: 'Подзаголовок', uk: 'Підзаголовок' },
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      label: { en: 'Description', ru: 'Описание', uk: 'Опис' },
    },
    {
      name: 'advantages',
      type: 'textarea',
      localized: true,
      label: { en: 'Advantages', ru: 'Преимущества', uk: 'Переваги' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'URL-идентификатор', uk: 'URL-ідентифікатор' },
      admin: {
        description: {
          en: 'URL-friendly identifier (e.g., "dobro-med-odesa")',
          ru: 'URL-идентификатор (например, "dobro-med-odesa")',
          uk: 'URL-ідентифікатор (наприклад, "dobro-med-odesa")',
        },
      },
    },
    {
      name: 'url',
      type: 'text',
      label: { en: 'Project URL', ru: 'URL проекта', uk: 'URL проєкту' },
      admin: {
        description: {
          en: 'Link to the live project website',
          ru: 'Ссылка на рабочий сайт проекта',
          uk: 'Посилання на робочий сайт проєкту',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: { en: 'Project Image', ru: 'Изображение проекта', uk: 'Зображення проєкту' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: { en: 'Featured', ru: 'Показывать на главной', uk: 'Показувати на головній' },
      defaultValue: false,
      admin: {
        description: {
          en: 'Show this project on the homepage',
          ru: 'Показывать этот проект на главной странице',
          uk: 'Показувати цей проєкт на головній сторінці',
        },
      },
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
