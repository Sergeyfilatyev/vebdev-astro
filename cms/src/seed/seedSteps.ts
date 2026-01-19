import type { Payload } from 'payload'

/**
 * Modern selling-focused steps content
 */
const stepsData = [
  {
    step: '01',
    icon: '📞',
    uk: { title: 'Перший контакт', description: 'Ви залишаєте заявку або пишете нам. Ми зв\'язуємось з вами протягом 15 хвилин для обговорення деталей.' },
    ru: { title: 'Первый контакт', description: 'Вы оставляете заявку или пишете нам. Мы свяжемся с вами в течение 15 минут для обсуждения деталей.' },
    en: { title: 'First Contact', description: 'You leave a request or message us. We\'ll get back to you within 15 minutes to discuss details.' },
  },
  {
    step: '02',
    icon: '🎯',
    uk: { title: 'Консультація та аналіз', description: 'Обговорюємо цілі, задачі, бюджет та терміни. Аналізуємо конкурентів та пропонуємо найкраще рішення.' },
    ru: { title: 'Консультация и анализ', description: 'Обсуждаем цели, задачи, бюджет и сроки. Анализируем конкурентов и предлагаем лучшее решение.' },
    en: { title: 'Consultation & Analysis', description: 'We discuss goals, tasks, budget, and deadlines. Analyze competitors and suggest the best solution.' },
  },
  {
    step: '03',
    icon: '📝',
    uk: { title: 'Брифінг та планування', description: 'Ви заповнюєте детальний бриф. Ми створюємо план робіт, технічне завдання та комерційну пропозицію.' },
    ru: { title: 'Бриф и планирование', description: 'Вы заполняете детальный бриф. Мы создаём план работ, техническое задание и коммерческое предложение.' },
    en: { title: 'Briefing & Planning', description: 'You complete a detailed brief. We create a work plan, technical specification, and commercial proposal.' },
  },
  {
    step: '04',
    icon: '💼',
    uk: { title: 'Пропозиція та договір', description: 'Отримуєте детальну пропозицію з вартістю, термінами та етапами. Підписуємо договір та стартуємо.' },
    ru: { title: 'Предложение и договор', description: 'Получаете детальное предложение со стоимостью, сроками и этапами. Подписываем договор и стартуем.' },
    en: { title: 'Proposal & Contract', description: 'You receive a detailed proposal with costs, deadlines, and stages. We sign a contract and start.' },
  },
  {
    step: '05',
    icon: '📐',
    uk: { title: 'Дизайн та прототипування', description: 'Створюємо прототип та дизайн сайту згідно з вашим брендом. Затверджуємо макети перед розробкою.' },
    ru: { title: 'Дизайн и прототипирование', description: 'Создаём прототип и дизайн сайта согласно вашему бренду. Утверждаем макеты перед разработкой.' },
    en: { title: 'Design & Prototyping', description: 'We create a prototype and website design according to your brand. Approve layouts before development.' },
  },
  {
    step: '06',
    icon: '💻',
    uk: { title: 'Розробка', description: 'Верстаємо та програмуємо сайт на сучасних технологіях. Інтегруємо необхідні сервіси та налаштовуємо функціонал.' },
    ru: { title: 'Разработка', description: 'Верстаем и программируем сайт на современных технологиях. Интегрируем необходимые сервисы и настраиваем функционал.' },
    en: { title: 'Development', description: 'We build and program the website using modern technologies. Integrate necessary services and configure functionality.' },
  },
  {
    step: '07',
    icon: '🔍',
    uk: { title: 'Тестування та оптимізація', description: 'Перевіряємо сайт на помилки, швидкість, адаптивність та SEO. Оптимізуємо та підготовлюємо до запуску.' },
    ru: { title: 'Тестирование и оптимизация', description: 'Проверяем сайт на ошибки, скорость, адаптивность и SEO. Оптимизируем и готовим к запуску.' },
    en: { title: 'Testing & Optimization', description: 'We test the site for bugs, speed, responsiveness, and SEO. Optimize and prepare for launch.' },
  },
  {
    step: '08',
    icon: '🚀',
    uk: { title: 'Запуск сайту', description: 'Розміщуємо сайт на хостингу, підключаємо домен, налаштовуємо SSL. Проводимо фінальне тестування та передаємо доступ.' },
    ru: { title: 'Запуск сайта', description: 'Размещаем сайт на хостинге, подключаем домен, настраиваем SSL. Проводим финальное тестирование и передаём доступ.' },
    en: { title: 'Website Launch', description: 'We deploy the website, connect the domain, set up SSL. Conduct final testing and hand over access.' },
  },
  {
    step: '09',
    icon: '📊',
    uk: { title: 'Навчання та передача', description: 'Навчаємо вас роботі з системою управління. Передаємо всі доступы, документацію та налаштовуємо аналітику.' },
    ru: { title: 'Обучение и передача', description: 'Обучаем вас работе с системой управления. Передаём все доступы, документацию и настраиваем аналитику.' },
    en: { title: 'Training & Handover', description: 'We train you on the management system. Hand over all access, documentation, and set up analytics.' },
  },
  {
    step: '10',
    icon: '🔧',
    uk: { title: 'Підтримка та розвиток', description: 'Пропонуємо технічну підтримку, оновлення та розвиток сайту. Допомагаємо з ростом та масштабуванням.' },
    ru: { title: 'Поддержка и развитие', description: 'Предлагаем техническую поддержку, обновления и развитие сайта. Помогаем с ростом и масштабированием.' },
    en: { title: 'Support & Growth', description: 'We offer technical support, updates, and website development. Help with growth and scaling.' },
  },
]

export async function seedSteps(payload: Payload) {
  let order = 0

  for (const step of stepsData) {
    try {
      // Create with default locale (uk)
      const stepData: any = {
        step: step.step,
        icon: step.icon,
        order: order++,
        title: step.uk.title,
        description: step.uk.description,
      }

      const created = await payload.create({
        collection: 'steps',
        data: stepData,
        locale: 'uk',
      })

      // Update for ru locale
      await payload.update({
        collection: 'steps',
        id: created.id,
        data: {
          title: step.ru.title,
          description: step.ru.description,
        },
        locale: 'ru',
      })

      // Update for en locale
      await payload.update({
        collection: 'steps',
        id: created.id,
        data: {
          title: step.en.title,
          description: step.en.description,
        },
        locale: 'en',
      })

      console.log(`  ✅ Created step: ${step.step} - ${step.uk.title}`)
    } catch (error: any) {
      console.error(`  ❌ Failed to create step "${step.step}":`, error.message)
    }
  }
}
