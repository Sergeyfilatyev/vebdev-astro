import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: {
    singular: { en: 'Contact Form', ru: 'Форма обратной связи', uk: 'Форма зворотного зв\'язку' },
    plural: { en: 'Contact Forms', ru: 'Формы обратной связи', uk: 'Форми зворотного зв\'язку' },
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
      name: 'showNameField',
      type: 'checkbox',
      label: { en: 'Show Name Field', ru: 'Показать поле имени', uk: 'Показати поле імені' },
      defaultValue: true,
    },
    {
      name: 'showEmailField',
      type: 'checkbox',
      label: { en: 'Show Email Field', ru: 'Показать поле email', uk: 'Показати поле email' },
      defaultValue: true,
    },
    {
      name: 'showPhoneField',
      type: 'checkbox',
      label: { en: 'Show Phone Field', ru: 'Показать поле телефона', uk: 'Показати поле телефону' },
      defaultValue: true,
    },
    {
      name: 'showMessageField',
      type: 'checkbox',
      label: { en: 'Show Message Field', ru: 'Показать поле сообщения', uk: 'Показати поле повідомлення' },
      defaultValue: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      localized: true,
      label: { en: 'Button Text', ru: 'Текст кнопки', uk: 'Текст кнопки' },
    },
    {
      name: 'policyText',
      type: 'text',
      localized: true,
      label: { en: 'Policy Text', ru: 'Текст политики', uk: 'Текст політики' },
    },
    {
      name: 'policyLink',
      type: 'text',
      label: { en: 'Policy Link', ru: 'Ссылка на политику', uk: 'Посилання на політику' },
      defaultValue: '/privacy-policy',
    },
    {
      name: 'successMessage',
      type: 'text',
      localized: true,
      label: { en: 'Success Message', ru: 'Сообщение об успехе', uk: 'Повідомлення про успіх' },
    },
  ],
}
