import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: { en: 'Contact Submission', ru: 'Заявка', uk: 'Заявка' },
    plural: { en: 'Contact Submissions', ru: 'Заявки', uk: 'Заявки' },
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: { en: 'Name', ru: 'Имя', uk: "Ім'я" },
    },
    {
      name: 'email',
      type: 'email',
      label: { en: 'Email', ru: 'Email', uk: 'Email' },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: { en: 'Phone', ru: 'Телефон', uk: 'Телефон' },
    },
    {
      name: 'message',
      type: 'textarea',
      label: { en: 'Message', ru: 'Сообщение', uk: 'Повідомлення' },
    },
    {
      name: 'status',
      type: 'select',
      label: { en: 'Status', ru: 'Статус', uk: 'Статус' },
      options: [
        {
          label: { en: 'New', ru: 'Новая', uk: 'Нова' },
          value: 'new',
        },
        {
          label: { en: 'Contacted', ru: 'Связались', uk: 'Зв\'язалися' },
          value: 'contacted',
        },
        {
          label: { en: 'Closed', ru: 'Закрыта', uk: 'Закрита' },
          value: 'closed',
        },
      ],
      defaultValue: 'new',
      required: true,
    },
  ],
  timestamps: true,
}
