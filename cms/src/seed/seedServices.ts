import type { Payload } from 'payload'

/**
 * Modern selling-focused services content
 * Improved and optimized for conversion
 */
const servicesData = [
  {
    slug: 'corporate-websites',
    uk: {
      title: 'Корпоративні сайти',
      description: 'Професійні корпоративні сайти, що формують імідж компанії та залучають клієнтів. Індивідуальний дизайн, зручна навігація та повна інтеграція з вашими бізнес-процесами.',
      list: [
        'Унікальний дизайн під ваш бренд',
        'Адаптивність для всіх пристроїв',
        'Інтеграція з CRM та аналітикою',
        'SEO-оптимізація з першого дня',
        'Швидке завантаження та висока продуктивність',
        'Зручна система управління контентом',
      ],
    },
    ru: {
      title: 'Корпоративные сайты',
      description: 'Профессиональные корпоративные сайты, формирующие имидж компании и привлекающие клиентов. Индивидуальный дизайн, удобная навигация и полная интеграция с вашими бизнес-процессами.',
      list: [
        'Уникальный дизайн под ваш бренд',
        'Адаптивность для всех устройств',
        'Интеграция с CRM и аналитикой',
        'SEO-оптимизация с первого дня',
        'Быстрая загрузка и высокая производительность',
        'Удобная система управления контентом',
      ],
    },
    en: {
      title: 'Corporate Websites',
      description: 'Professional corporate websites that build your company image and attract customers. Custom design, intuitive navigation, and full integration with your business processes.',
      list: [
        'Unique design for your brand',
        'Responsive for all devices',
        'CRM and analytics integration',
        'SEO optimization from day one',
        'Fast loading and high performance',
        'Easy content management system',
      ],
    },
    price: '800',
    price_discount: '599',
    icon: 'twemoji:briefcase',
  },
  {
    slug: 'landing-pages',
    uk: {
      title: 'Лендінги',
      description: 'Висококонверсійні лендінги, націлені на конкретну мету. Продумана структура, переконливі тексти та оптимізація для рекламних кампаній.',
      list: [
        'Структура, що веде до конверсії',
        'Швидке завантаження та мобільна оптимізація',
        'Інтеграція з рекламними системами',
        'A/B тестування та аналітика',
        'Оптимізація під різні канали трафіку',
        'Максимальна конверсія заявок',
      ],
    },
    ru: {
      title: 'Лендинги',
      description: 'Высококонверсионные лендинги, нацеленные на конкретную цель. Продуманная структура, убедительные тексты и оптимизация для рекламных кампаний.',
      list: [
        'Структура, ведущая к конверсии',
        'Быстрая загрузка и мобильная оптимизация',
        'Интеграция с рекламными системами',
        'A/B тестирование и аналитика',
        'Оптимизация под разные каналы трафика',
        'Максимальная конверсия заявок',
      ],
    },
    en: {
      title: 'Landing Pages',
      description: 'High-conversion landing pages focused on a specific goal. Thoughtful structure, compelling copy, and optimization for ad campaigns.',
      list: [
        'Conversion-focused structure',
        'Fast loading and mobile optimization',
        'Integration with ad systems',
        'A/B testing and analytics',
        'Optimization for different traffic channels',
        'Maximum lead conversion',
      ],
    },
    price: '500',
    price_discount: '249',
    icon: 'twemoji:rocket',
  },
  {
    slug: 'e-commerce',
    uk: {
      title: 'Інтернет-магазини',
      description: 'Повноцінні інтернет-магазини з інтеграцією платежів, управлінням товарами та автоматизацією замовлень. Готові до продажів з першого дня.',
      list: [
        'Каталог товарів з фільтрацією та пошуком',
        'Інтеграція платіжних систем (WayForPay, Stripe)',
        'Управління замовленнями та складом',
        'Особистий кабінет покупця',
        'Система знижок та акцій',
        'Мобільна оптимізація для покупок',
      ],
    },
    ru: {
      title: 'Интернет-магазины',
      description: 'Полноценные интернет-магазины с интеграцией платежей, управлением товарами и автоматизацией заказов. Готовы к продажам с первого дня.',
      list: [
        'Каталог товаров с фильтрацией и поиском',
        'Интеграция платёжных систем (WayForPay, Stripe)',
        'Управление заказами и складом',
        'Личный кабинет покупателя',
        'Система скидок и акций',
        'Мобильная оптимизация для покупок',
      ],
    },
    en: {
      title: 'E-commerce',
      description: 'Full-featured online stores with payment integration, product management, and order automation. Ready for sales from day one.',
      list: [
        'Product catalog with filtering and search',
        'Payment system integration (WayForPay, Stripe)',
        'Order and inventory management',
        'Customer account',
        'Discount and promotion system',
        'Mobile optimization for shopping',
      ],
    },
    price: '1200',
    price_discount: '799',
    icon: 'twemoji:shopping-cart',
  },
  {
    slug: 'portfolio-sites',
    uk: {
      title: 'Сайти-візитки та портфоліо',
      description: 'Елегантні мінімалістичні сайти для фрілансерів, фотографів, дизайнерів та малого бізнесу. Швидка розробка, просте управління.',
      list: [
        '3-5 сторінок з необхідним функціоналом',
        'Мінімалістичний та стильний дизайн',
        'Адаптивність для мобільних пристроїв',
        'Швидка розробка та запуск',
        'Зручне управління контентом',
        'Підвищення довіри до вашого бренду',
      ],
    },
    ru: {
      title: 'Сайты-визитки и портфолио',
      description: 'Элегантные минималистичные сайты для фрилансеров, фотографов, дизайнеров и малого бизнеса. Быстрая разработка, простое управление.',
      list: [
        '3-5 страниц с необходимым функционалом',
        'Минималистичный и стильный дизайн',
        'Адаптивность для мобильных устройств',
        'Быстрая разработка и запуск',
        'Удобное управление контентом',
        'Повышение доверия к вашему бренду',
      ],
    },
    en: {
      title: 'Portfolio and Business Card Websites',
      description: 'Elegant minimalist websites for freelancers, photographers, designers, and small businesses. Fast development, easy management.',
      list: [
        '3-5 pages with necessary functionality',
        'Minimalist and stylish design',
        'Responsive for mobile devices',
        'Fast development and launch',
        'Easy content management',
        'Building trust in your brand',
      ],
    },
    price: '500',
    price_discount: '349',
    icon: 'twemoji:camera',
  },
  {
    slug: 'seo-optimization',
    uk: {
      title: 'SEO та технічна оптимізація',
      description: 'Комплексна оптимізація для покращення позицій у пошукових системах та збільшення органічного трафіку. Технічна SEO, контент-маркетинг та аналітика.',
      list: [
        'Глибокий аналіз ключових слів та конкурентів',
        'Технічна оптимізація сайту',
        'Налаштування мета-тегів та структури',
        'Покращення швидкості завантаження',
        'Структуровані дані та мікроразмітка',
        'Моніторинг позицій та аналітика',
      ],
    },
    ru: {
      title: 'SEO и техническая оптимизация',
      description: 'Комплексная оптимизация для улучшения позиций в поисковых системах и увеличения органического трафика. Техническая SEO, контент-маркетинг и аналитика.',
      list: [
        'Глубокий анализ ключевых слов и конкурентов',
        'Техническая оптимизация сайта',
        'Настройка мета-тегов и структуры',
        'Улучшение скорости загрузки',
        'Структурированные данные и микроразметка',
        'Мониторинг позиций и аналитика',
      ],
    },
    en: {
      title: 'SEO and Technical Optimization',
      description: 'Comprehensive optimization to improve search engine rankings and increase organic traffic. Technical SEO, content marketing, and analytics.',
      list: [
        'Deep keyword and competitor analysis',
        'Technical website optimization',
        'Meta tags and structure setup',
        'Loading speed improvement',
        'Structured data and micro-markup',
        'Position monitoring and analytics',
      ],
    },
    price: '200',
    price_discount: '99',
    icon: 'twemoji:bar-chart',
  },
  {
    slug: 'website-maintenance',
    uk: {
      title: 'Технічна підтримка та супровід',
      description: 'Постійна підтримка та обслуговування вашого сайту. Регулярні оновлення, моніторинг безпеки та технічна підтримка 24/7.',
      list: [
        'Моніторинг роботи сайту та виправлення помилок',
        'Регулярні оновлення CMS та плагінів',
        'Резервне копіювання даних',
        'Захист від атак та вірусів',
        'Технічна підтримка та консультації',
        'Гнучкі тарифні плани',
      ],
    },
    ru: {
      title: 'Техническая поддержка и сопровождение',
      description: 'Постоянная поддержка и обслуживание вашего сайта. Регулярные обновления, мониторинг безопасности и техническая поддержка 24/7.',
      list: [
        'Мониторинг работы сайта и исправление ошибок',
        'Регулярные обновления CMS и плагинов',
        'Резервное копирование данных',
        'Защита от атак и вирусов',
        'Техническая поддержка и консультации',
        'Гибкие тарифные планы',
      ],
    },
    en: {
      title: 'Technical Support and Maintenance',
      description: 'Ongoing support and maintenance of your website. Regular updates, security monitoring, and 24/7 technical support.',
      list: [
        'Website monitoring and bug fixing',
        'Regular CMS and plugin updates',
        'Data backup',
        'Protection against attacks and viruses',
        'Technical support and consultations',
        'Flexible pricing plans',
      ],
    },
    price: '100',
    price_discount: '49',
    icon: 'twemoji:wrench',
  },
]

export async function seedServices(payload: Payload) {
  let order = 0

  for (const service of servicesData) {
    try {
      // Check if service already exists
      const existing = await payload.find({
        collection: 'services',
        where: {
          slug: {
            equals: service.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Service "${service.slug}" already exists, skipping...`)
        continue
      }

      // Create with default locale (uk)
      const serviceData: any = {
        slug: service.slug,
        price: service.price,
        price_discount: service.price_discount || null,
        icon: service.icon,
        order: order++,
        title: service.uk.title,
        description: service.uk.description,
        list: service.uk.list.map((item) => ({ item })),
      }

      const created = await payload.create({
        collection: 'services',
        data: serviceData,
        locale: 'uk',
      })

      // Update for ru locale
      await payload.update({
        collection: 'services',
        id: created.id,
        data: {
          title: service.ru.title,
          description: service.ru.description,
          list: service.ru.list.map((item) => ({ item })),
        },
        locale: 'ru',
      })

      // Update for en locale
      await payload.update({
        collection: 'services',
        id: created.id,
        data: {
          title: service.en.title,
          description: service.en.description,
          list: service.en.list.map((item) => ({ item })),
        },
        locale: 'en',
      })

      console.log(`  ✅ Created service: ${service.slug}`)
    } catch (error: any) {
      console.error(`  ❌ Failed to create service "${service.slug}":`, error.message)
    }
  }
}
