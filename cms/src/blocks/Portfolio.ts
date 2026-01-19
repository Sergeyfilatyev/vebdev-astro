import type { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolio',
  labels: {
    singular: { en: 'Portfolio', ru: 'Портфолио', uk: 'Портфоліо' },
    plural: { en: 'Portfolio Sections', ru: 'Разделы портфолио', uk: 'Розділи портфоліо' },
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
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: { en: 'Projects', ru: 'Проекты', uk: 'Проєкти' },
      admin: {
        description: {
          en: 'Select projects to display',
          ru: 'Выберите проекты для отображения',
          uk: 'Виберіть проєкти для відображення',
        },
      },
    },
    {
      name: 'showAllButton',
      type: 'checkbox',
      label: { en: 'Show "View All" Button', ru: 'Показать кнопку "Смотреть все"', uk: 'Показати кнопку "Переглянути все"' },
      defaultValue: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      localized: true,
      label: { en: 'Button Text', ru: 'Текст кнопки', uk: 'Текст кнопки' },
    },
  ],
}
