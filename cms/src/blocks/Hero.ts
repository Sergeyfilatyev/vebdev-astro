import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: { en: 'Hero', ru: 'Главный экран', uk: 'Головний екран' },
    plural: { en: 'Heroes', ru: 'Главные экраны', uk: 'Головні екрани' },
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: { en: 'Variant', ru: 'Варіант', uk: 'Варіант' },
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: { en: 'Default (Homepage)', ru: 'По умолчанию (Главная)', uk: 'За замовчуванням (Головна)' },
          value: 'default',
        },
        {
          label: { en: 'Text Left', ru: 'Текст слева', uk: 'Текст зліва' },
          value: 'left',
        },
        {
          label: { en: 'Text Right', ru: 'Текст справа', uk: 'Текст справа' },
          value: 'right',
        },
        {
          label: { en: 'Centered', ru: 'По центру', uk: 'По центру' },
          value: 'center',
        },
      ],
    },
    // Default variant fields
    {
      name: 'headline',
      type: 'text',
      localized: true,
      label: { en: 'Headline', ru: 'Заголовок', uk: 'Заголовок' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      localized: true,
      label: { en: 'Subheadline', ru: 'Подзаголовок', uk: 'Підзаголовок' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
    },
    {
      name: 'primaryCTA',
      type: 'group',
      label: { en: 'Primary CTA', ru: 'Основная кнопка', uk: 'Основна кнопка' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
          label: { en: 'Text', ru: 'Текст', uk: 'Текст' },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: { en: 'URL', ru: 'URL', uk: 'URL' },
        },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      label: { en: 'Secondary CTA', ru: 'Дополнительная кнопка', uk: 'Додаткова кнопка' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          label: { en: 'Text', ru: 'Текст', uk: 'Текст' },
        },
        {
          name: 'url',
          type: 'text',
          label: { en: 'URL', ru: 'URL', uk: 'URL' },
        },
      ],
    },
    {
      name: 'backgroundVideo',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Background Video (MP4)', ru: 'Фоновое видео (MP4)', uk: 'Фонове відео (MP4)' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Background Image (Fallback)', ru: 'Фоновое изображение (резервное)', uk: 'Фонове зображення (резервне)' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'default',
      },
    },
    // Other variants fields
    {
      name: 'titleBrand',
      type: 'text',
      localized: true,
      label: { en: 'Brand Title', ru: 'Бренд Заголовок', uk: 'Бренд Заголовок' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Title', ru: 'Заголовок', uk: 'Заголовок' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      label: { en: 'Subtitle', ru: 'Подзаголовок', uk: 'Підзаголовок' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'paragraph',
      type: 'textarea',
      localized: true,
      label: { en: 'Paragraph', ru: 'Параграф', uk: 'Параграф' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      localized: true,
      label: { en: 'Button Text', ru: 'Текст кнопки', uk: 'Текст кнопки' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: { en: 'Button Link', ru: 'Ссылка кнопки', uk: 'Посилання кнопки' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
    {
      name: 'variantBackgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Background Image', ru: 'Фоновое изображение', uk: 'Фонове зображення' },
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'default',
      },
    },
  ],
}
