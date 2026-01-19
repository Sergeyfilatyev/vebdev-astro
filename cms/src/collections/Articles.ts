import type { CollectionConfig } from 'payload'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: { en: 'Article', ru: 'Статья', uk: 'Стаття' },
    plural: { en: 'Articles', ru: 'Статьи', uk: 'Статті' },
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
      label: { en: 'Title', ru: 'Заголовок', uk: 'Заголовок' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'URL-идентификатор', uk: 'URL-ідентифікатор' },
      admin: {
        description: {
          en: 'URL-friendly identifier (auto-generated from title if not provided)',
          ru: 'URL-идентификатор (автоматически генерируется из заголовка, если не указано)',
          uk: 'URL-ідентифікатор (автоматично генерується з заголовка, якщо не вказано)',
        },
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      label: { en: 'Excerpt', ru: 'Краткое описание', uk: 'Короткий опис' },
      admin: {
        description: {
          en: 'Short summary for article preview',
          ru: 'Краткое описание для предпросмотра статьи',
          uk: 'Короткий опис для попереднього перегляду статті',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      label: { en: 'Content', ru: 'Контент', uk: 'Контент' },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Featured Image', ru: 'Главное изображение', uk: 'Головне зображення' },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: { en: 'Published Date', ru: 'Дата публикации', uk: 'Дата публікації' },
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'author',
      type: 'text',
      label: { en: 'Author', ru: 'Автор', uk: 'Автор' },
      admin: {
        description: {
          en: 'Article author name',
          ru: 'Имя автора статьи',
          uk: "Ім'я автора статті",
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      label: { en: 'Status', ru: 'Статус', uk: 'Статус' },
      options: [
        {
          label: { en: 'Draft', ru: 'Черновик', uk: 'Чернетка' },
          value: 'draft',
        },
        {
          label: { en: 'Published', ru: 'Опубликовано', uk: 'Опубліковано' },
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
  hooks: createFrontendRebuildHooks({
    triggerOnlyIfStatus: 'published',
  }),
}
