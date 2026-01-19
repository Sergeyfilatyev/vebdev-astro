import type { CollectionConfig } from 'payload'
import { blocks } from '../blocks'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: { en: 'Page', ru: 'Страница', uk: 'Сторінка' },
    plural: { en: 'Pages', ru: 'Страницы', uk: 'Сторінки' },
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
      label: { en: 'Page Title', ru: 'Заголовок страницы', uk: 'Заголовок сторінки' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'URL-идентификатор', uk: 'URL-ідентифікатор' },
      admin: {
        description: {
          en: 'URL-friendly identifier (e.g., "home", "services", "portfolio")',
          ru: 'URL-идентификатор (например, "home", "services", "portfolio")',
          uk: 'URL-ідентифікатор (наприклад, "home", "services", "portfolio")',
        },
      },
    },
    {
      name: 'metaDescription',
      type: 'text',
      localized: true,
      label: { en: 'Meta Description', ru: 'Мета-описание', uk: 'Мета-опис' },
      admin: {
        description: {
          en: 'SEO meta description',
          ru: 'Мета-описание для SEO',
          uk: 'Мета-опис для SEO',
        },
      },
    },
    {
      name: 'seoKeywords',
      type: 'text',
      localized: true,
      label: { en: 'SEO Keywords', ru: 'SEO ключевые слова', uk: 'SEO ключові слова' },
      admin: {
        description: {
          en: 'Comma-separated keywords for SEO',
          ru: 'Ключевые слова для SEO через запятую',
          uk: 'Ключові слова для SEO через кому',
        },
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Open Graph Image', ru: 'OG-изображение', uk: 'OG-зображення' },
      admin: {
        description: {
          en: 'Image for social sharing (Facebook, LinkedIn, etc.). If not set, the default OG image from Site Settings will be used.',
          ru: 'Изображение для распространения в соцсетях. Если не задано, будет использовано изображение по умолчанию из Site Settings.',
          uk: 'Зображення для поширення в соцмережах. Якщо не задано, буде використано зображення за замовчуванням із Site Settings.',
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
    {
      name: 'blocks',
      type: 'blocks',
      label: { en: 'Content Blocks', ru: 'Блоки контента', uk: 'Блоки контенту' },
      blocks,
      localized: true,
    },
  ],
  hooks: createFrontendRebuildHooks({
    triggerOnlyIfStatus: 'published',
  }),
}
