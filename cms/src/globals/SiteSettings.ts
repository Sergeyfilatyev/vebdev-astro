import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: {
    en: 'Site Settings',
    ru: 'Настройки сайта',
    uk: 'Налаштування сайту',
  },
  admin: {
    description: {
      en: 'Global site settings including header, footer, contact information, and social media',
      ru: 'Глобальные настройки сайта, включая заголовок, футер, контактную информацию и социальные сети',
      uk: 'Глобальні налаштування сайту, включаючи заголовок, футер, контактну інформацію та соціальні мережі',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: { en: 'Header', ru: 'Заголовок', uk: 'Заголовок' },
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: { en: 'Logo', ru: 'Логотип', uk: 'Логотип' },
              admin: {
                description: { en: 'Main site logo', ru: 'Главный логотип сайта', uk: 'Головний логотип сайту' },
              },
            },
            {
              name: 'navigation',
              type: 'array',
              label: { en: 'Navigation Links', ru: 'Навигационные ссылки', uk: 'Навігаційні посилання' },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: { en: 'Label', ru: 'Название', uk: 'Назва' },
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: { en: 'URL', ru: 'URL', uk: 'URL' },
                  admin: {
                    description: {
                      en: 'URL or anchor link (e.g., "/services" or "#contact")',
                      ru: 'URL или якорная ссылка (например, "/services" или "#contact")',
                      uk: 'URL або якірне посилання (наприклад, "/services" або "#contact")',
                    },
                  },
                },
                {
                  name: 'visibility',
                  type: 'select',
                  label: { en: 'Visibility', ru: 'Видимость', uk: 'Видимість' },
                  options: [
                    { label: { en: 'Everywhere', ru: 'Везде', uk: 'Всюди' }, value: 'all' },
                    { label: { en: 'Desktop Only', ru: 'Только десктоп', uk: 'Тільки десктоп' }, value: 'desktop' },
                    { label: { en: 'Mobile Only', ru: 'Только мобильный', uk: 'Тільки мобільний' }, value: 'mobile' },
                  ],
                  defaultValue: 'all',
                },
              ],
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: { en: 'CTA Button', ru: 'Кнопка действия', uk: 'Кнопка дії' },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  localized: true,
                  label: { en: 'Button Text', ru: 'Текст кнопки', uk: 'Текст кнопки' },
                },
                {
                  name: 'url',
                  type: 'text',
                  label: { en: 'Button URL', ru: 'URL кнопки', uk: 'URL кнопки' },
                },
              ],
            },
          ],
        },
        {
          label: { en: 'Footer', ru: 'Футер', uk: 'Футер' },
          fields: [
            {
              name: 'footerLogo',
              type: 'upload',
              relationTo: 'media',
              label: { en: 'Footer Logo', ru: 'Логотип футера', uk: 'Логотип футера' },
              admin: {
                description: {
                  en: 'Logo displayed in footer (can be different from header logo)',
                  ru: 'Логотип, отображаемый в футере (может отличаться от логотипа заголовка)',
                  uk: 'Логотип, що відображається у футері (може відрізнятися від логотипу заголовка)',
                },
              },
            },
            {
              name: 'companyInfo',
              type: 'richText',
              localized: true,
              label: { en: 'Company Information', ru: 'Информация о компании', uk: 'Інформація про компанію' },
              admin: {
                description: {
                  en: 'Company description or information displayed in footer',
                  ru: 'Описание компании или информация, отображаемая в футере',
                  uk: 'Опис компанії або інформація, що відображається у футері',
                },
              },
            },
            {
              name: 'footerLinkGroups',
              type: 'array',
              label: { en: 'Footer Link Groups', ru: 'Группы ссылок в футере', uk: 'Групи посилань у футері' },
              admin: {
                description: {
                  en: 'Organize footer links into groups (e.g., Services, Company)',
                  ru: 'Организуйте ссылки в футере в группы (например, Услуги, Компания)',
                  uk: 'Організуйте посилання у футері в групи (наприклад, Послуги, Компанія)',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: { en: 'Group Title', ru: 'Заголовок группы', uk: 'Заголовок групи' },
                },
                {
                  name: 'links',
                  type: 'array',
                  required: true,
                  label: { en: 'Links', ru: 'Ссылки', uk: 'Посилання' },
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      localized: true,
                      label: { en: 'Label', ru: 'Название', uk: 'Назва' },
                    },
                    {
                      name: 'url',
                      type: 'text',
                      required: true,
                      label: { en: 'URL', ru: 'URL', uk: 'URL' },
                    },
                  ],
                },
              ],
            },
            {
              name: 'copyright',
              type: 'text',
              localized: true,
              label: { en: 'Copyright Text', ru: 'Текст авторских прав', uk: 'Текст авторських прав' },
            },
          ],
        },
        {
          label: { en: 'Contact', ru: 'Контакты', uk: 'Контакти' },
          fields: [
            {
              name: 'email',
              type: 'email',
              label: { en: 'Email Address', ru: 'Адрес электронной почты', uk: 'Адреса електронної пошти' },
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
              label: { en: 'Phone Number', ru: 'Номер телефона', uk: 'Номер телефону' },
            },
            {
              name: 'address',
              type: 'textarea',
              localized: true,
              label: { en: 'Address', ru: 'Адрес', uk: 'Адреса' },
              admin: {
                description: { en: 'Company physical address', ru: 'Физический адрес компании', uk: 'Фізична адреса компанії' },
              },
            },
            {
              name: 'workingHours',
              type: 'group',
              label: { en: 'Working Hours', ru: 'Часы работы', uk: 'Години роботи' },
              fields: [
                {
                  name: 'weekdays',
                  type: 'text',
                  localized: true,
                  label: { en: 'Weekdays', ru: 'Будни', uk: 'Будні' },
                },
                {
                  name: 'weekend',
                  type: 'text',
                  localized: true,
                  label: { en: 'Weekend', ru: 'Выходные', uk: 'Вихідні' },
                },
              ],
            },
          ],
        },
        {
          label: { en: 'Social Media', ru: 'Социальные сети', uk: 'Соціальні мережі' },
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              label: { en: 'Social Media Links', ru: 'Ссылки на социальные сети', uk: 'Посилання на соціальні мережі' },
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  label: { en: 'Platform', ru: 'Платформа', uk: 'Платформа' },
                  options: [
                    { label: { en: 'Telegram', ru: 'Telegram', uk: 'Telegram' }, value: 'telegram' },
                    { label: { en: 'WhatsApp', ru: 'WhatsApp', uk: 'WhatsApp' }, value: 'whatsapp' },
                    { label: { en: 'Viber', ru: 'Viber', uk: 'Viber' }, value: 'viber' },
                    { label: { en: 'Instagram', ru: 'Instagram', uk: 'Instagram' }, value: 'instagram' },
                    { label: { en: 'Facebook', ru: 'Facebook', uk: 'Facebook' }, value: 'facebook' },
                    { label: { en: 'LinkedIn', ru: 'LinkedIn', uk: 'LinkedIn' }, value: 'linkedin' },
                    { label: { en: 'Other', ru: 'Другое', uk: 'Інше' }, value: 'other' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: { en: 'URL', ru: 'URL', uk: 'URL' },
                },
                {
                  name: 'label',
                  type: 'text',
                  localized: true,
                  label: { en: 'Label', ru: 'Название', uk: 'Назва' },
                },
              ],
            },
          ],
        },
        {
          label: { en: 'Hero Section', ru: 'Главный экран', uk: 'Головний екран' },
          fields: [
            {
              name: 'heroTitle1',
              type: 'text',
              localized: true,
              label: { en: 'Hero Title 1', ru: 'Заголовок героя 1', uk: 'Заголовок героя 1' },
            },
            {
              name: 'heroTitle2',
              type: 'text',
              localized: true,
              label: { en: 'Hero Title 2', ru: 'Заголовок героя 2', uk: 'Заголовок героя 2' },
            },
            {
              name: 'heroText',
              type: 'textarea',
              localized: true,
              label: { en: 'Hero Text', ru: 'Текст героя', uk: 'Текст героя' },
            },
            {
              name: 'consultButtonText',
              type: 'text',
              localized: true,
              label: { en: 'Consultation Button Text', ru: 'Текст кнопки консультации', uk: 'Текст кнопки консультації' },
            },
          ],
        },
        {
          label: { en: 'About Section', ru: 'Раздел "О нас"', uk: 'Розділ "Про нас"' },
          fields: [
            {
              name: 'aboutTitle',
              type: 'text',
              localized: true,
              label: { en: 'About Title', ru: 'Заголовок "О нас"', uk: 'Заголовок "Про нас"' },
            },
            {
              name: 'aboutSubtitle',
              type: 'textarea',
              localized: true,
              label: { en: 'About Subtitle', ru: 'Подзаголовок "О нас"', uk: 'Підзаголовок "Про нас"' },
            },
            {
              name: 'aboutParagraph',
              type: 'richText',
              localized: true,
              label: { en: 'About Paragraph', ru: 'Текст "О нас"', uk: 'Текст "Про нас"' },
            },
          ],
        },
        {
          label: { en: 'Advantages Section', ru: 'Раздел преимуществ', uk: 'Розділ переваг' },
          fields: [
            {
              name: 'advTitle',
              type: 'text',
              localized: true,
              label: { en: 'Advantages Title', ru: 'Заголовок преимуществ', uk: 'Заголовок переваг' },
            },
            {
              name: 'advantages',
              type: 'array',
              label: { en: 'Advantages', ru: 'Преимущества', uk: 'Переваги' },
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  label: { en: 'Icon', ru: 'Иконка', uk: 'Іконка' },
                  admin: {
                    description: {
                      en: 'Emoji icon (e.g., "⚡", "🎨", "🔍")',
                      ru: 'Иконка-эмодзи (например, "⚡", "🎨", "🔍")',
                      uk: 'Іконка-емодзі (наприклад, "⚡", "🎨", "🔍")',
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
                  name: 'points',
                  type: 'array',
                  label: { en: 'Points', ru: 'Пункты', uk: 'Пункти' },
                  fields: [
                    {
                      name: 'point',
                      type: 'text',
                      required: true,
                      localized: true,
                      label: { en: 'Point', ru: 'Пункт', uk: 'Пункт' },
                    },
                  ],
                },
                {
                  name: 'order',
                  type: 'number',
                  label: { en: 'Order', ru: 'Порядок', uk: 'Порядок' },
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
        {
          label: { en: 'Statistics', ru: 'Статистика', uk: 'Статистика' },
          fields: [
            {
              name: 'statsClients',
              type: 'number',
              label: { en: 'Happy Clients', ru: 'Довольных клиентов', uk: 'Задоволених клієнтів' },
              defaultValue: 0,
            },
            {
              name: 'statsYears',
              type: 'number',
              label: { en: 'Years of Growth', ru: 'Годы уверенного роста', uk: 'Роки впевненого зростання' },
              defaultValue: 0,
            },
            {
              name: 'statsProjects',
              type: 'number',
              label: { en: 'Completed Projects', ru: 'Успешных проектов', uk: 'Успішних проєктів' },
              defaultValue: 0,
            },
          ],
        },
        {
          label: { en: 'Banner', ru: 'Баннер', uk: 'Банер' },
          fields: [
            {
              name: 'bannerTitle',
              type: 'text',
              localized: true,
              label: { en: 'Banner Title', ru: 'Заголовок баннера', uk: 'Заголовок банера' },
            },
            {
              name: 'bannerText1',
              type: 'text',
              localized: true,
              label: { en: 'Banner Text 1', ru: 'Текст баннера 1', uk: 'Текст банера 1' },
            },
            {
              name: 'bannerText2',
              type: 'text',
              localized: true,
              label: { en: 'Banner Text 2', ru: 'Текст баннера 2', uk: 'Текст банера 2' },
            },
            {
              name: 'bannerButtonText',
              type: 'text',
              localized: true,
              label: { en: 'Banner Button Text', ru: 'Текст кнопки баннера', uk: 'Текст кнопки банера' },
            },
            {
              name: 'bannerSubtext',
              type: 'text',
              localized: true,
              label: { en: 'Banner Subtext', ru: 'Подтекст баннера', uk: 'Підтекст банера' },
            },
            {
              name: 'bannerActive',
              type: 'checkbox',
              label: { en: 'Show Banner', ru: 'Показать баннер', uk: 'Показати банер' },
              defaultValue: false,
            },
          ],
        },
        {
          label: { en: 'SEO & Analytics', ru: 'SEO и аналитика', uk: 'SEO та аналітика' },
          fields: [
            {
              name: 'siteUrl',
              type: 'text',
              label: { en: 'Site URL', ru: 'URL сайта', uk: 'URL сайту' },
              admin: {
                description: {
                  en: 'Base URL of the site, e.g. "https://veb-dev.com" (without trailing slash). Used for sitemap, canonical URLs, and social sharing.',
                  ru: 'Базовый URL сайта, например "https://veb-dev.com" (без слеша в конце). Используется для sitemap, canonical URL и распространения в соцсетях.',
                  uk: 'Базовий URL сайту, наприклад "https://veb-dev.com" (без слеша в кінці). Використовується для sitemap, canonical URL та поширення в соцмережах.',
                },
              },
            },
            {
              name: 'allowIndexing',
              type: 'checkbox',
              label: {
                en: 'Allow search engines to index the site',
                ru: 'Разрешить индексацию сайта поисковыми системами',
                uk: 'Дозволити індексацію сайту пошуковими системами',
              },
              defaultValue: false,
              admin: {
                description: {
                  en: 'When disabled, robots.txt and meta robots will disallow indexing (recommended while the site is under construction).',
                  ru: 'Когда отключено, robots.txt и meta robots будут запрещать индексацию (рекомендуется во время настройки сайта).',
                  uk: 'Коли вимкнено, robots.txt та meta robots заборонятимуть індексацію (рекомендовано під час налаштування сайту).',
                },
              },
            },
            {
              name: 'defaultMetaTitle',
              type: 'text',
              localized: true,
              label: { en: 'Default Meta Title', ru: 'Стандартный meta title', uk: 'Стандартний meta title' },
              admin: {
                description: {
                  en: 'Fallback <title> for pages that do not provide their own.',
                  ru: 'Заголовок по умолчанию для страниц без собственного title.',
                  uk: 'Заголовок за замовчуванням для сторінок без власного title.',
                },
              },
            },
            {
              name: 'defaultMetaDescription',
              type: 'textarea',
              localized: true,
              label: { en: 'Default Meta Description', ru: 'Стандартный meta description', uk: 'Стандартний meta description' },
              admin: {
                description: {
                  en: 'Fallback description for pages that do not provide their own.',
                  ru: 'Описание по умолчанию для страниц без собственного описания.',
                  uk: 'Опис за замовчуванням для сторінок без власного опису.',
                },
              },
            },
            {
              name: 'defaultOgImage',
              type: 'upload',
              relationTo: 'media',
              label: { en: 'Default Open Graph Image', ru: 'Стандартное OG-изображение', uk: 'Стандартне OG-зображення' },
              admin: {
                description: {
                  en: 'Used for social sharing (Facebook, LinkedIn, etc.) when a page does not set its own og:image.',
                  ru: 'Используется при распространении в соцсетях, если страница не задает собственное og:image.',
                  uk: 'Використовується при поширенні в соцмережах, якщо сторінка не задає власне og:image.',
                },
              },
            },
            {
              name: 'analytics',
              type: 'group',
              label: { en: 'Analytics & Custom Code', ru: 'Аналитика и кастомный код', uk: 'Аналітика та кастомний код' },
              fields: [
                {
                  name: 'headScript',
                  type: 'textarea',
                  label: { en: 'Custom code in <head>', ru: 'Кастомный код в <head>', uk: 'Кастомний код у <head>' },
                  admin: {
                    description: {
                      en: 'Full HTML/JS snippet that will be injected into the <head>. You can paste complete <script>...</script> blocks (e.g. Google Analytics, GTM, pixels) or other tags (meta, link, etc.).',
                      ru: 'Полный HTML/JS-фрагмент, который будет вставлен в <head>. Можно вставлять целые блоки <script>...</script> (например, Google Analytics, GTM, пиксели) или другие теги (meta, link и т.д.).',
                      uk: 'Повний HTML/JS-фрагмент, який буде вставлено у <head>. Можна вставляти цілі блоки <script>...</script> (наприклад, Google Analytics, GTM, пікселі) або інші теги (meta, link тощо).',
                    },
                  },
                },
                {
                  name: 'bodyEndScript',
                  type: 'textarea',
                  label: { en: 'Custom code before </body>', ru: 'Кастомный код перед </body>', uk: 'Кастомний код перед </body>' },
                  admin: {
                    description: {
                      en: 'Full HTML/JS snippet that will be injected right before </body>. You can paste complete <script>...</script> blocks (e.g. chat widgets, heatmaps) or other HTML.',
                      ru: 'Полный HTML/JS-фрагмент, который будет вставлен непосредственно перед </body>. Можно вставлять целые блоки <script>...</script> (например, чат-виджеты, тепловые карты) или другой HTML.',
                      uk: 'Повний HTML/JS-фрагмент, який буде вставлено безпосередньо перед </body>. Можна вставляти цілі блоки <script>...</script> (наприклад, чат-віджети, теплові карти) або інший HTML.',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        console.log('[SiteSettings] Settings updated. Use the "Deploy Frontend" button to trigger a rebuild.')
      },
    ],
  },
}
