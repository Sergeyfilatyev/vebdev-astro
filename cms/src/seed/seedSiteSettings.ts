import type { Payload } from 'payload'
import { textToLexical } from './helpers'

/**
 * Modern, selling-focused content for Site Settings
 * Not copying word-by-word, but creating new compelling content
 */
export async function seedSiteSettings(payload: Payload) {
  try {
    // Modern selling content for UK locale (default)
    const ukData = {
      // Hero Section
      heroTitle1: 'Сучасна веб-розробка під ключ',
      heroTitle2: 'Створюємо сайти, які продають',
      heroText: 'Професійна розробка сайтів на сучасних технологіях. Швидкі, адаптивні та SEO-оптимізовані рішення, які залучають клієнтів та збільшують продажі. Від лендингів до інтернет-магазинів — ми створюємо сайти, що працюють 24/7.',
      consultButtonText: 'Отримати консультацію',

      // About Section
      aboutTitle: 'Про нас',
      aboutSubtitle: 'Команда веб-розробників, яка створює сайти нового рівня',
      aboutParagraph: textToLexical(
        'Ми — команда професійних веб-розробників з Одеси, що спеціалізується на створенні сучасних, високопродуктивних сайтів. Наш підхід поєднує передові технології, креативний дизайн та глибоке розуміння бізнес-процесів. Кожен проект — це індивідуальне рішення, націлене на конкретні цілі клієнта та його цільову аудиторію. Ми не просто створюємо сайти — ми будуємо інструменти для зростання бізнесу.'
      ),

      // Advantages Section
      advTitle: 'Чому обирають нас',
      advantages: [
        {
          icon: '⚡',
          title: 'Миттєва швидкість',
          description: 'Сайти завантажуються за секунди, що покращує SEO та збільшує конверсію',
          points: [
            { point: 'Оптимізований код та мінімальні запити' },
            { point: 'Кешування та CDN для швидкої доставки' },
            { point: 'Сучасні технології (Astro, Next.js)' },
          ],
          order: 0,
        },
        {
          icon: '🎨',
          title: 'Сучасний дизайн',
          description: 'Унікальний дизайн, що відображає ваш бренд та залучає клієнтів',
          points: [
            { point: 'Індивідуальний підхід до кожного проекту' },
            { point: 'UX/UI оптимізований для конверсії' },
            { point: 'Адаптивність для всіх пристроїв' },
          ],
          order: 1,
        },
        {
          icon: '🔍',
          title: 'SEO з першого дня',
          description: 'Ваш сайт готовий до просування з моменту запуску',
          points: [
            { point: 'Технічна SEO-оптимізація' },
            { point: 'Структуровані дані та мікроразмітка' },
            { point: 'Швидке індексування пошуковими системами' },
          ],
          order: 2,
        },
        {
          icon: '🛠️',
          title: 'Повна кастомізація',
          description: 'Розробка під ваш бізнес без шаблонів та обмежень',
          points: [
            { point: 'Індивідуальний функціонал під ваші задачі' },
            { point: 'Масштабованість та гнучкість' },
            { point: 'Інтеграції з CRM, платіжними системами' },
          ],
          order: 3,
        },
        {
          icon: '🛡️',
          title: 'Безпека та надійність',
          description: 'Захист даних та стабільна робота 24/7',
          points: [
            { point: 'SSL-сертифікати та HTTPS' },
            { point: 'Регулярні оновлення безпеки' },
            { point: 'Захист від атак та спаму' },
          ],
          order: 4,
        },
        {
          icon: '🌍',
          title: 'Багатомовність',
          description: 'Підтримка кількох мов для масштабування бізнесу',
          points: [
            { point: 'Автоматичне перемикання мов' },
            { point: 'SEO-оптимізація для кожної мови' },
            { point: 'Зручне управління контентом' },
          ],
          order: 5,
        },
        {
          icon: '🛒',
          title: 'E-commerce рішення',
          description: 'Повноцінні інтернет-магазини з інтеграцією платежів',
          points: [
            { point: 'Каталог товарів з фільтрацією' },
            { point: 'Інтеграція платіжних систем' },
            { point: 'Управління замовленнями та складом' },
          ],
          order: 6,
        },
        {
          icon: '🔗',
          title: 'Потужні інтеграції',
          description: 'Підключення всіх необхідних сервісів для автоматизації',
          points: [
            { point: 'CRM, аналітика, email-маркетинг' },
            { point: 'Telegram-бот для заявок' },
            { point: 'Інтеграція з соціальними мережами' },
          ],
          order: 7,
        },
        {
          icon: '🏆',
          title: 'Підтримка та розвиток',
          description: 'Постійна підтримка та розвиток вашого сайту',
          points: [
            { point: 'Технічна підтримка 24/7' },
            { point: 'Регулярні оновлення та покращення' },
            { point: 'Додавання нового функціоналу' },
          ],
          order: 8,
        },
      ],

      // Statistics
      statsClients: 150,
      statsYears: 5,
      statsProjects: 120,

      // Banner
      bannerTitle: '🔥 Спеціальна пропозиція',
      bannerText1: 'Залиште заявку та отримайте безкоштовну консультацію!',
      bannerText2: 'Обмежена пропозиція — встигніть залишити заявку! 🚀',
      bannerButtonText: 'Зв\'язатися з нами',
      bannerSubtext: 'Ми передзвонимо вам протягом 15 хвилин!',
      bannerActive: true,

      // Contact info
      email: 'info@veb-dev.com',
      phone: '+380 (50) 123-45-67',
      address: 'м. Одеса, вул. Ярослава Мудрого, 29',
      workingHours: {
        weekdays: 'Пн-Пт: 9:00 - 21:00',
        weekend: 'Сб-Нд: 10:00 - 15:00',
      },

      // Navigation
      navigation: [
        { label: 'Головна', url: '/', visibility: 'all' },
        { label: 'Послуги', url: '/services', visibility: 'all' },
        { label: 'Портфоліо', url: '/portfolio', visibility: 'all' },
        { label: 'Блог', url: '/blog', visibility: 'all' },
        { label: 'Контакти', url: '/contacts', visibility: 'all' },
      ],

      // CTA Button
      ctaButton: {
        text: 'Отримати консультацію',
        url: '#contact',
      },

      // Copyright
      copyright: `© ${new Date().getFullYear()} Veb-Dev. Всі права захищені.`,
    }

    // RU locale content
    const ruData = {
      heroTitle1: 'Современная веб-разработка под ключ',
      heroTitle2: 'Создаём сайты, которые продают',
      heroText: 'Профессиональная разработка сайтов на современных технологиях. Быстрые, адаптивные и SEO-оптимизированные решения, которые привлекают клиентов и увеличивают продажи. От лендингов до интернет-магазинов — мы создаём сайты, которые работают 24/7.',
      consultButtonText: 'Получить консультацию',
      aboutTitle: 'О нас',
      aboutSubtitle: 'Команда веб-разработчиков, которая создаёт сайты нового уровня',
      aboutParagraph: textToLexical(
        'Мы — команда профессиональных веб-разработчиков из Одессы, специализирующаяся на создании современных, высокопроизводительных сайтов. Наш подход сочетает передовые технологии, креативный дизайн и глубокое понимание бизнес-процессов. Каждый проект — это индивидуальное решение, нацеленное на конкретные цели клиента и его целевую аудиторию. Мы не просто создаём сайты — мы строим инструменты для роста бизнеса.'
      ),
      advTitle: 'Почему выбирают нас',
      advantages: [
        {
          icon: '⚡',
          title: 'Мгновенная скорость',
          description: 'Сайты загружаются за секунды, что улучшает SEO и увеличивает конверсию',
          points: [{ point: 'Оптимизированный код и минимальные запросы' }, { point: 'Кеширование и CDN для быстрой доставки' }, { point: 'Современные технологии (Astro, Next.js)' }],
          order: 0,
        },
        {
          icon: '🎨',
          title: 'Современный дизайн',
          description: 'Уникальный дизайн, отражающий ваш бренд и привлекающий клиентов',
          points: [{ point: 'Индивидуальный подход к каждому проекту' }, { point: 'UX/UI оптимизированный для конверсии' }, { point: 'Адаптивность для всех устройств' }],
          order: 1,
        },
        {
          icon: '🔍',
          title: 'SEO с первого дня',
          description: 'Ваш сайт готов к продвижению с момента запуска',
          points: [{ point: 'Техническая SEO-оптимизация' }, { point: 'Структурированные данные и микроразметка' }, { point: 'Быстрое индексирование поисковыми системами' }],
          order: 2,
        },
        {
          icon: '🛠️',
          title: 'Полная кастомизация',
          description: 'Разработка под ваш бизнес без шаблонов и ограничений',
          points: [{ point: 'Индивидуальный функционал под ваши задачи' }, { point: 'Масштабируемость и гибкость' }, { point: 'Интеграции с CRM, платёжными системами' }],
          order: 3,
        },
        {
          icon: '🛡️',
          title: 'Безопасность и надёжность',
          description: 'Защита данных и стабильная работа 24/7',
          points: [{ point: 'SSL-сертификаты и HTTPS' }, { point: 'Регулярные обновления безопасности' }, { point: 'Защита от атак и спама' }],
          order: 4,
        },
        {
          icon: '🌍',
          title: 'Мультиязычность',
          description: 'Поддержка нескольких языков для масштабирования бизнеса',
          points: [{ point: 'Автоматическое переключение языков' }, { point: 'SEO-оптимизация для каждого языка' }, { point: 'Удобное управление контентом' }],
          order: 5,
        },
        {
          icon: '🛒',
          title: 'E-commerce решения',
          description: 'Полноценные интернет-магазины с интеграцией платежей',
          points: [{ point: 'Каталог товаров с фильтрацией' }, { point: 'Интеграция платёжных систем' }, { point: 'Управление заказами и складом' }],
          order: 6,
        },
        {
          icon: '🔗',
          title: 'Мощные интеграции',
          description: 'Подключение всех необходимых сервисов для автоматизации',
          points: [{ point: 'CRM, аналитика, email-маркетинг' }, { point: 'Telegram-бот для заявок' }, { point: 'Интеграция с социальными сетями' }],
          order: 7,
        },
        {
          icon: '🏆',
          title: 'Поддержка и развитие',
          description: 'Постоянная поддержка и развитие вашего сайта',
          points: [{ point: 'Техническая поддержка 24/7' }, { point: 'Регулярные обновления и улучшения' }, { point: 'Добавление нового функционала' }],
          order: 8,
        },
      ],
      statsClients: 150,
      statsYears: 5,
      statsProjects: 120,
      bannerTitle: '🔥 Специальное предложение',
      bannerText1: 'Оставьте заявку и получите бесплатную консультацию!',
      bannerText2: 'Ограниченное предложение — успейте оставить заявку! 🚀',
      bannerButtonText: 'Связаться с нами',
      bannerSubtext: 'Мы перезвоним вам в течение 15 минут!',
      bannerActive: true,
      email: 'info@veb-dev.com',
      phone: '+380 (50) 123-45-67',
      address: 'г. Одесса, ул. Ярослава Мудрого, 29',
      workingHours: {
        weekdays: 'Пн-Пт: 9:00 - 21:00',
        weekend: 'Сб-Вс: 10:00 - 15:00',
      },
      navigation: [
        { label: 'Главная', url: '/', visibility: 'all' },
        { label: 'Услуги', url: '/services', visibility: 'all' },
        { label: 'Портфолио', url: '/portfolio', visibility: 'all' },
        { label: 'Блог', url: '/blog', visibility: 'all' },
        { label: 'Контакты', url: '/contacts', visibility: 'all' },
      ],
      ctaButton: {
        text: 'Получить консультацию',
        url: '#contact',
      },
      copyright: `© ${new Date().getFullYear()} Veb-Dev. Все права защищены.`,
    }

    // EN locale content
    const enData = {
      heroTitle1: 'Modern Web Development',
      heroTitle2: 'We Build Websites That Sell',
      heroText: 'Professional website development using modern technologies. Fast, responsive, and SEO-optimized solutions that attract customers and increase sales. From landing pages to e-commerce stores — we create websites that work 24/7.',
      consultButtonText: 'Get Consultation',
      aboutTitle: 'About Us',
      aboutSubtitle: 'A web development team that creates next-level websites',
      aboutParagraph: textToLexical(
        'We are a team of professional web developers from Odesa, specializing in creating modern, high-performance websites. Our approach combines cutting-edge technologies, creative design, and deep understanding of business processes. Each project is a custom solution tailored to specific client goals and target audiences. We don\'t just create websites — we build tools for business growth.'
      ),
      advTitle: 'Why Choose Us',
      advantages: [
        {
          icon: '⚡',
          title: 'Lightning Fast',
          description: 'Websites load in seconds, improving SEO and increasing conversion',
          points: [{ point: 'Optimized code and minimal requests' }, { point: 'Caching and CDN for fast delivery' }, { point: 'Modern technologies (Astro, Next.js)' }],
          order: 0,
        },
        {
          icon: '🎨',
          title: 'Modern Design',
          description: 'Unique design that reflects your brand and attracts customers',
          points: [{ point: 'Individual approach to each project' }, { point: 'UX/UI optimized for conversion' }, { point: 'Responsive for all devices' }],
          order: 1,
        },
        {
          icon: '🔍',
          title: 'SEO from Day One',
          description: 'Your website is ready for promotion from launch',
          points: [{ point: 'Technical SEO optimization' }, { point: 'Structured data and micro-markup' }, { point: 'Fast indexing by search engines' }],
          order: 2,
        },
        {
          icon: '🛠️',
          title: 'Full Customization',
          description: 'Development tailored to your business without templates or limitations',
          points: [{ point: 'Custom functionality for your needs' }, { point: 'Scalability and flexibility' }, { point: 'Integrations with CRM, payment systems' }],
          order: 3,
        },
        {
          icon: '🛡️',
          title: 'Security & Reliability',
          description: 'Data protection and stable 24/7 operation',
          points: [{ point: 'SSL certificates and HTTPS' }, { point: 'Regular security updates' }, { point: 'Protection against attacks and spam' }],
          order: 4,
        },
        {
          icon: '🌍',
          title: 'Multilingual Support',
          description: 'Multiple language support for business scaling',
          points: [{ point: 'Automatic language switching' }, { point: 'SEO optimization for each language' }, { point: 'Easy content management' }],
          order: 5,
        },
        {
          icon: '🛒',
          title: 'E-commerce Solutions',
          description: 'Full-featured online stores with payment integration',
          points: [{ point: 'Product catalog with filtering' }, { point: 'Payment system integration' }, { point: 'Order and inventory management' }],
          order: 6,
        },
        {
          icon: '🔗',
          title: 'Powerful Integrations',
          description: 'Connect all necessary services for automation',
          points: [{ point: 'CRM, analytics, email marketing' }, { point: 'Telegram bot for leads' }, { point: 'Social media integration' }],
          order: 7,
        },
        {
          icon: '🏆',
          title: 'Support & Growth',
          description: 'Ongoing support and development of your website',
          points: [{ point: '24/7 technical support' }, { point: 'Regular updates and improvements' }, { point: 'Adding new features' }],
          order: 8,
        },
      ],
      statsClients: 150,
      statsYears: 5,
      statsProjects: 120,
      bannerTitle: '🔥 Special Offer',
      bannerText1: 'Leave a request and get a free consultation!',
      bannerText2: 'Limited offer — hurry to leave a request! 🚀',
      bannerButtonText: 'Contact Us',
      bannerSubtext: 'We\'ll call you back within 15 minutes!',
      bannerActive: true,
      email: 'info@veb-dev.com',
      phone: '+380 (50) 123-45-67',
      address: '29 Yaroslav Mudryi St, Odesa',
      workingHours: {
        weekdays: 'Mon-Fri: 9:00 AM - 9:00 PM',
        weekend: 'Sat-Sun: 10:00 AM - 3:00 PM',
      },
      navigation: [
        { label: 'Home', url: '/', visibility: 'all' },
        { label: 'Services', url: '/services', visibility: 'all' },
        { label: 'Portfolio', url: '/portfolio', visibility: 'all' },
        { label: 'Blog', url: '/blog', visibility: 'all' },
        { label: 'Contacts', url: '/contacts', visibility: 'all' },
      ],
      ctaButton: {
        text: 'Get Consultation',
        url: '#contact',
      },
      copyright: `© ${new Date().getFullYear()} Veb-Dev. All rights reserved.`,
    }

    // Update with default locale (uk)
    await payload.updateGlobal({
      slug: 'site-settings',
      data: ukData,
      locale: 'uk',
    })

    // Update for ru locale
    await payload.updateGlobal({
      slug: 'site-settings',
      data: ruData,
      locale: 'ru',
    })

    // Update for en locale
    await payload.updateGlobal({
      slug: 'site-settings',
      data: enData,
      locale: 'en',
    })

    console.log('  ✅ Created/Updated Site Settings')
  } catch (error: any) {
    console.error('  ❌ Failed to seed Site Settings:', error.message)
    if (error.data) {
      console.error('  Error details:', error.data)
    }
  }
}
