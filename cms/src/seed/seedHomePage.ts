import type { Payload } from 'payload'
import { textToLexical } from './helpers'

/**
 * Create homepage with modern selling blocks
 */
export async function seedHomePage(payload: Payload) {
  try {
    // Check if homepage already exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log('  ⏭️  Homepage already exists, skipping...')
      return
    }

    // Get IDs of services, projects, steps, FAQ for blocks
    const services = await payload.find({
      collection: 'services',
      limit: 6,
      sort: 'order',
    })

    const projects = await payload.find({
      collection: 'projects',
      limit: 6,
      sort: 'order',
    })

    const steps = await payload.find({
      collection: 'steps',
      limit: 10,
      sort: 'order',
    })

    const faq = await payload.find({
      collection: 'faq',
      limit: 6,
    })

    // Create homepage with default locale (uk)
    const homePageData: any = {
      slug: 'home',
      status: 'published',
      title: 'Головна',
      metaDescription: 'Професійна розробка сайтів під ключ в Одесі. Сучасні, швидкі та ефективні веб-рішення для вашого бізнесу.',
      seoKeywords: 'розробка сайтів, веб-дизайн, створення сайтів Одеса, інтернет-магазини, лендинги',
      blocks: [
        // Hero Block
        {
          blockType: 'hero',
          variant: 'default',
          headline: 'Сучасна веб-розробка під ключ',
          subheadline: 'Створюємо сайти, які продають та залучають клієнтів 24/7',
          primaryCTA: {
            text: 'Отримати консультацію',
            url: '#contact',
          },
          secondaryCTA: {
            text: 'Переглянути портфоліо',
            url: '/portfolio',
          },
        },
        // Services Block
        {
          blockType: 'servicesBlock',
          title: 'Наші послуги',
          subtitle: 'Повний спектр веб-розробки для вашого бізнесу',
          services: services.docs.map((s) => s.id),
          showAllButton: true,
          buttonText: 'Всі послуги',
        },
        // Portfolio Block
        {
          blockType: 'portfolio',
          title: 'Наші роботи',
          subtitle: 'Реальні кейси успішних проектів',
          projects: projects.docs.map((p) => p.id),
          showAllButton: true,
          buttonText: 'Всі проекти',
        },
        // Steps Block
        {
          blockType: 'stepsBlock',
          title: 'Як ми працюємо',
          subtitle: 'Простий процес від ідеї до запуску',
          steps: steps.docs.map((s) => s.id),
        },
        // Stats Block
        {
          blockType: 'stats',
          stats: [
            {
              number: '150+',
              label: 'Задоволених клієнтів',
              icon: '👥',
            },
            {
              number: '5',
              label: 'Років досвіду',
              icon: '⭐',
            },
            {
              number: '120+',
              label: 'Успішних проектів',
              icon: '🚀',
            },
          ],
        },
        // Advantages Block
        {
          blockType: 'advantages',
          title: 'Чому обирають нас',
          subtitle: 'Переваги, які роблять нас найкращими',
          advantages: [
            {
              icon: '⚡',
              title: 'Миттєва швидкість',
              description: 'Сайти завантажуються за секунди',
            },
            {
              icon: '🎨',
              title: 'Сучасний дизайн',
              description: 'Унікальний стиль для вашого бренду',
            },
            {
              icon: '🔍',
              title: 'SEO з першого дня',
              description: 'Готовість до просування відразу',
            },
            {
              icon: '🛠️',
              title: 'Повна кастомізація',
              description: 'Рішення під ваші задачі',
            },
          ],
        },
        // FAQ Block
        {
          blockType: 'faqBlock',
          title: 'Часті питання',
          subtitle: 'Відповіді на найпопулярніші питання',
          faqs: faq.docs.map((f) => f.id),
        },
        // Contact Block
        {
          blockType: 'contact',
          title: 'Зв\'яжіться з нами',
          subtitle: 'Отримайте безкоштовну консультацію вже сьогодні',
          showNameField: true,
          showEmailField: true,
          showPhoneField: true,
          showMessageField: true,
          buttonText: 'Відправити заявку',
          policyText: 'Натискаючи кнопку, ви погоджуєтесь з',
          policyLink: '/privacy-policy',
          successMessage: 'Дякуємо! Ми зв\'яжемося з вами найближчим часом.',
        },
      ],
    }

    const created = await payload.create({
      collection: 'pages',
      data: homePageData,
      locale: 'uk',
    })

    // Update for ru locale
    await payload.update({
      collection: 'pages',
      id: created.id,
      data: {
        title: 'Главная',
        metaDescription: 'Профессиональная разработка сайтов под ключ в Одессе. Современные, быстрые и эффективные веб-решения для вашего бизнеса.',
        seoKeywords: 'разработка сайтов, веб-дизайн, создание сайтов Одесса, интернет-магазины, лендинги',
        blocks: [
          {
            blockType: 'hero',
            variant: 'default',
            headline: 'Современная веб-разработка под ключ',
            subheadline: 'Создаём сайты, которые продают и привлекают клиентов 24/7',
            primaryCTA: {
              text: 'Получить консультацию',
              url: '#contact',
            },
            secondaryCTA: {
              text: 'Посмотреть портфолио',
              url: '/portfolio',
            },
          },
          {
            blockType: 'servicesBlock',
            title: 'Наши услуги',
            subtitle: 'Полный спектр веб-разработки для вашего бизнеса',
            services: services.docs.map((s) => s.id),
            showAllButton: true,
            buttonText: 'Все услуги',
          },
          {
            blockType: 'portfolio',
            title: 'Наши работы',
            subtitle: 'Реальные кейсы успешных проектов',
            projects: projects.docs.map((p) => p.id),
            showAllButton: true,
            buttonText: 'Все проекты',
          },
          {
            blockType: 'stepsBlock',
            title: 'Как мы работаем',
            subtitle: 'Простой процесс от идеи до запуска',
            steps: steps.docs.map((s) => s.id),
          },
          {
            blockType: 'stats',
            stats: [
              {
                number: '150+',
                label: 'Довольных клиентов',
                icon: '👥',
              },
              {
                number: '5',
                label: 'Лет опыта',
                icon: '⭐',
              },
              {
                number: '120+',
                label: 'Успешных проектов',
                icon: '🚀',
              },
            ],
          },
          {
            blockType: 'advantages',
            title: 'Почему выбирают нас',
            subtitle: 'Преимущества, которые делают нас лучшими',
            advantages: [
              {
                icon: '⚡',
                title: 'Мгновенная скорость',
                description: 'Сайты загружаются за секунды',
              },
              {
                icon: '🎨',
                title: 'Современный дизайн',
                description: 'Уникальный стиль для вашего бренда',
              },
              {
                icon: '🔍',
                title: 'SEO с первого дня',
                description: 'Готовность к продвижению сразу',
              },
              {
                icon: '🛠️',
                title: 'Полная кастомизация',
                description: 'Решения под ваши задачи',
              },
            ],
          },
          {
            blockType: 'faqBlock',
            title: 'Частые вопросы',
            subtitle: 'Ответы на самые популярные вопросы',
            faqs: faq.docs.map((f) => f.id),
          },
          {
            blockType: 'contact',
            title: 'Свяжитесь с нами',
            subtitle: 'Получите бесплатную консультацию уже сегодня',
            showNameField: true,
            showEmailField: true,
            showPhoneField: true,
            showMessageField: true,
            buttonText: 'Отправить заявку',
            policyText: 'Нажимая кнопку, вы соглашаетесь с',
            policyLink: '/privacy-policy',
            successMessage: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
          },
        ],
      },
      locale: 'ru',
    })

    // Update for en locale
    await payload.update({
      collection: 'pages',
      id: created.id,
      data: {
        title: 'Home',
        metaDescription: 'Professional website development in Odesa. Modern, fast, and effective web solutions for your business.',
        seoKeywords: 'website development, web design, website creation Odesa, e-commerce, landing pages',
        blocks: [
          {
            blockType: 'hero',
            variant: 'default',
            headline: 'Modern Web Development',
            subheadline: 'We build websites that sell and attract customers 24/7',
            primaryCTA: {
              text: 'Get Consultation',
              url: '#contact',
            },
            secondaryCTA: {
              text: 'View Portfolio',
              url: '/portfolio',
            },
          },
          {
            blockType: 'servicesBlock',
            title: 'Our Services',
            subtitle: 'Full range of web development for your business',
            services: services.docs.map((s) => s.id),
            showAllButton: true,
            buttonText: 'All Services',
          },
          {
            blockType: 'portfolio',
            title: 'Our Work',
            subtitle: 'Real case studies of successful projects',
            projects: projects.docs.map((p) => p.id),
            showAllButton: true,
            buttonText: 'All Projects',
          },
          {
            blockType: 'stepsBlock',
            title: 'How We Work',
            subtitle: 'Simple process from idea to launch',
            steps: steps.docs.map((s) => s.id),
          },
          {
            blockType: 'stats',
            stats: [
              {
                number: '150+',
                label: 'Satisfied Clients',
                icon: '👥',
              },
              {
                number: '5',
                label: 'Years of Experience',
                icon: '⭐',
              },
              {
                number: '120+',
                label: 'Successful Projects',
                icon: '🚀',
              },
            ],
          },
          {
            blockType: 'advantages',
            title: 'Why Choose Us',
            subtitle: 'Advantages that make us the best',
            advantages: [
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Websites load in seconds',
              },
              {
                icon: '🎨',
                title: 'Modern Design',
                description: 'Unique style for your brand',
              },
              {
                icon: '🔍',
                title: 'SEO from Day One',
                description: 'Ready for promotion immediately',
              },
              {
                icon: '🛠️',
                title: 'Full Customization',
                description: 'Solutions tailored to your needs',
              },
            ],
          },
          {
            blockType: 'faqBlock',
            title: 'Frequently Asked Questions',
            subtitle: 'Answers to the most popular questions',
            faqs: faq.docs.map((f) => f.id),
          },
          {
            blockType: 'contact',
            title: 'Contact Us',
            subtitle: 'Get a free consultation today',
            showNameField: true,
            showEmailField: true,
            showPhoneField: true,
            showMessageField: true,
            buttonText: 'Submit Request',
            policyText: 'By clicking the button, you agree to',
            policyLink: '/privacy-policy',
            successMessage: 'Thank you! We will contact you shortly.',
          },
        ],
      },
      locale: 'en',
    })

    console.log('  ✅ Created Homepage')
  } catch (error: any) {
    console.error('  ❌ Failed to create Homepage:', error.message)
    if (error.data) {
      console.error('  Error details:', error.data)
    }
  }
}
