import type { CollectionConfig } from 'payload'
import { createFrontendRebuildHooks } from '../utils/collectionHooks'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: { en: 'Service', ru: 'Услуга', uk: 'Послуга' },
    plural: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
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
      name: 'description',
      type: 'textarea',
      localized: true,
      label: { en: 'Description', ru: 'Описание', uk: 'Опис' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', ru: 'URL-идентификатор', uk: 'URL-ідентифікатор' },
      admin: {
        description: {
          en: 'URL-friendly identifier (e.g., "corporate-websites")',
          ru: 'URL-идентификатор (например, "corporate-websites")',
          uk: 'URL-ідентифікатор (наприклад, "corporate-websites")',
        },
      },
    },
    {
      name: 'list',
      type: 'array',
      label: { en: 'Features List', ru: 'Список возможностей', uk: 'Список можливостей' },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          localized: true,
          label: { en: 'Item', ru: 'Пункт', uk: 'Пункт' },
        },
      ],
    },
    {
      name: 'price',
      type: 'text',
      label: { en: 'Price', ru: 'Цена', uk: 'Ціна' },
      admin: {
        description: {
          en: 'Service price (e.g., "800 $")',
          ru: 'Цена услуги (например, "800 $")',
          uk: 'Ціна послуги (наприклад, "800 $")',
        },
      },
    },
    {
      name: 'price_discount',
      type: 'text',
      label: { en: 'Discount Price', ru: 'Цена со скидкой', uk: 'Ціна зі знижкою' },
      admin: {
        description: {
          en: 'Discounted price (e.g., "599 $")',
          ru: 'Цена со скидкой (например, "599 $")',
          uk: 'Ціна зі знижкою (наприклад, "599 $")',
        },
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: { en: 'Icon Name', ru: 'Название иконки', uk: 'Назва іконки' },
      admin: {
        description: {
          en: 'Iconify icon name (e.g., "twemoji:briefcase")',
          ru: 'Название иконки Iconify (например, "twemoji:briefcase")',
          uk: 'Назва іконки Iconify (наприклад, "twemoji:briefcase")',
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
