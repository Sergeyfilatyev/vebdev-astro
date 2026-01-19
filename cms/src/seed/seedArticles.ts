import type { Payload } from 'payload'
import { contentArrayToLexical } from './helpers'

/**
 * Modern selling-focused blog articles
 * Not copying word-by-word, but creating new compelling content
 */
const articlesData = [
  {
    slug: 'why-your-business-needs-a-website',
    date: '2025-01-15',
    uk: {
      title: 'Чому вашому бізнесу потрібен сайт: інвестиція в майбутнє',
      description: 'Сучасний сайт — це не просто візитка, а потужний інструмент продажів, який працює 24/7 та залучає нових клієнтів.',
      content: [
        { type: 'h2', value: 'Сайт як основа цифрової присутності' },
        { type: 'p', value: 'У 2025 році більшість клієнтів починають пошук товарів та послуг онлайн. Відсутність сайту або застарілий дизайн — це втрачені можливості та клієнти, які йдуть до конкурентів.' },
        { type: 'p', value: 'Сучасний сайт — це ваш цифровий офіс, доступний цілодобово. Він працює навіть коли ви спите, приймаючи заявки, збираючи контакти та представляючи ваш бізнес найкращим чином.' },
        { type: 'h2', value: 'Що втрачає бізнес без сайту' },
        { type: 'ul', value: ['До 80% потенційних клієнтів обирають конкурентів, яких знаходять у пошуку', 'Неможливість запускати ефективну рекламу в Google та соцмережах', 'Відсутність платформи для збору заявок та аналітики', 'Низька довіра з боку партнерів та інвесторів'] },
        { type: 'h2', value: 'Сайт — це інструмент продажів' },
        { type: 'p', value: 'Правильно налаштований сайт працює як продавець-консультант: презентує ваші послуги, відповідає на питання, збирає контакти та конвертує відвідувачів у клієнтів.' },
        { type: 'p', value: 'Ми створюємо сайти, які дійсно працюють: від лендингів до повноцінних інтернет-магазинів. Кожен проект оптимізований для конверсії та залучення клієнтів.' },
      ],
    },
    ru: {
      title: 'Зачем вашему бизнесу нужен сайт: инвестиция в будущее',
      description: 'Современный сайт — это не просто визитка, а мощный инструмент продаж, который работает 24/7 и привлекает новых клиентов.',
      content: [
        { type: 'h2', value: 'Сайт как основа цифрового присутствия' },
        { type: 'p', value: 'В 2025 году большинство клиентов начинают поиск товаров и услуг онлайн. Отсутствие сайта или устаревший дизайн — это упущенные возможности и клиенты, которые уходят к конкурентам.' },
        { type: 'p', value: 'Современный сайт — это ваш цифровой офис, доступный круглосуточно. Он работает даже когда вы спите, принимая заявки, собирая контакты и представляя ваш бизнес наилучшим образом.' },
        { type: 'h2', value: 'Что теряет бизнес без сайта' },
        { type: 'ul', value: ['До 80% потенциальных клиентов выбирают конкурентов, которых находят в поиске', 'Невозможность запускать эффективную рекламу в Google и соцсетях', 'Отсутствие платформы для сбора заявок и аналитики', 'Низкое доверие со стороны партнёров и инвесторов'] },
        { type: 'h2', value: 'Сайт — это инструмент продаж' },
        { type: 'p', value: 'Правильно настроенный сайт работает как продавец-консультант: презентует ваши услуги, отвечает на вопросы, собирает контакты и конвертирует посетителей в клиентов.' },
        { type: 'p', value: 'Мы создаём сайты, которые действительно работают: от лендингов до полноценных интернет-магазинов. Каждый проект оптимизирован для конверсии и привлечения клиентов.' },
      ],
    },
    en: {
      title: 'Why Your Business Needs a Website: An Investment in the Future',
      description: 'A modern website is more than a business card — it\'s a powerful sales tool that works 24/7 and attracts new customers.',
      content: [
        { type: 'h2', value: 'Website as the Foundation of Digital Presence' },
        { type: 'p', value: 'In 2025, most customers start searching for products and services online. No website or outdated design means missed opportunities and customers going to competitors.' },
        { type: 'p', value: 'A modern website is your digital office, available 24/7. It works even when you sleep, accepting requests, collecting contacts, and presenting your business in the best way.' },
        { type: 'h2', value: 'What a Business Loses Without a Website' },
        { type: 'ul', value: ['Up to 80% of potential customers choose competitors found in search', 'Unable to run effective ads on Google and social media', 'No platform for collecting leads and analytics', 'Low trust from partners and investors'] },
        { type: 'h2', value: 'A Website is a Sales Tool' },
        { type: 'p', value: 'A properly configured website works like a sales consultant: presents your services, answers questions, collects contacts, and converts visitors into customers.' },
        { type: 'p', value: 'We create websites that truly work: from landing pages to full e-commerce stores. Every project is optimized for conversion and customer acquisition.' },
      ],
    },
  },
  {
    slug: 'modern-site-is-necessity',
    date: '2025-01-10',
    uk: {
      title: 'Сучасний сайт — необхідність, а не розкіш',
      description: 'У конкурентному середовищі сучасний сайт — це не опція, а обов\'язкова умова для успішного бізнесу.',
      content: [
        { type: 'h2', value: 'Перше враження формується за секунди' },
        { type: 'p', value: 'Клієнти оцінюють ваш бізнес за першими секундами на сайті. Застарілий дизайн, повільне завантаження або незручна навігація — і клієнт вже на сайті конкурента.' },
        { type: 'h2', value: 'Швидкість та мобільність — обов\'язкові вимоги' },
        { type: 'p', value: 'Google та інші пошукові системи надають перевагу швидким та адаптивним сайтам. Швидкість завантаження безпосередньо впливає на позиції в пошуку та конверсію.' },
        { type: 'h2', value: 'SEO як джерело безкоштовного трафіку' },
        { type: 'p', value: 'Правильно оптимізований сайт приносить органічний трафік з пошукових систем. Це безкоштовні клієнти, які знаходять вас самостійно.' },
      ],
    },
    ru: {
      title: 'Современный сайт — необходимость, а не роскошь',
      description: 'В конкурентной среде современный сайт — это не опция, а обязательное условие для успешного бизнеса.',
      content: [
        { type: 'h2', value: 'Первое впечатление формируется за секунды' },
        { type: 'p', value: 'Клиенты оценивают ваш бизнес за первые секунды на сайте. Устаревший дизайн, медленная загрузка или неудобная навигация — и клиент уже на сайте конкурента.' },
        { type: 'h2', value: 'Скорость и мобильность — обязательные требования' },
        { type: 'p', value: 'Google и другие поисковые системы отдают предпочтение быстрым и адаптивным сайтам. Скорость загрузки напрямую влияет на позиции в поиске и конверсию.' },
        { type: 'h2', value: 'SEO как источник бесплатного трафика' },
        { type: 'p', value: 'Правильно оптимизированный сайт приносит органический трафик из поисковых систем. Это бесплатные клиенты, которые находят вас самостоятельно.' },
      ],
    },
    en: {
      title: 'A Modern Website is a Necessity, Not a Luxury',
      description: 'In a competitive environment, a modern website is not an option but a requirement for a successful business.',
      content: [
        { type: 'h2', value: 'First Impressions Form in Seconds' },
        { type: 'p', value: 'Customers evaluate your business in the first seconds on the site. Outdated design, slow loading, or poor navigation — and the customer is already on a competitor\'s site.' },
        { type: 'h2', value: 'Speed and Mobile Optimization are Must-Haves' },
        { type: 'p', value: 'Google and other search engines favor fast and responsive sites. Loading speed directly affects search rankings and conversion.' },
        { type: 'h2', value: 'SEO as a Source of Free Traffic' },
        { type: 'p', value: 'A properly optimized website brings organic traffic from search engines. These are free customers who find you on their own.' },
      ],
    },
  },
  {
    slug: 'how-site-helps-sell',
    date: '2025-01-05',
    uk: {
      title: 'Як сайт допомагає продавати 24/7',
      description: 'Ваш сайт працює як продавець, який ніколи не спить. Автоматизація продажів та збір заявок навіть уночі.',
      content: [
        { type: 'h2', value: 'Онлайн-вітрина, доступна завжди' },
        { type: 'p', value: 'Поки ви спите, клієнт може вивчати ваші послуги, читати відгуки та оформлювати замовлення. Сайт працює 24/7 без перерв та вихідних.' },
        { type: 'h2', value: 'Автоматизація продажів' },
        { type: 'p', value: 'Заявки автоматично потрапляють у CRM, клієнти отримують підтвердження, а ви — сповіщення. Немає втрачених клієнтів та пропущених можливостей.' },
      ],
    },
    ru: {
      title: 'Как сайт помогает продавать 24/7',
      description: 'Ваш сайт работает как продавец, который никогда не спит. Автоматизация продаж и сбор заявок даже ночью.',
      content: [
        { type: 'h2', value: 'Онлайн-витрина, доступная всегда' },
        { type: 'p', value: 'Пока вы спите, клиент может изучать ваши услуги, читать отзывы и оформлять заказ. Сайт работает 24/7 без перерывов и выходных.' },
        { type: 'h2', value: 'Автоматизация продаж' },
        { type: 'p', value: 'Заявки автоматически попадают в CRM, клиенты получают подтверждение, а вы — уведомление. Нет потерянных клиентов и упущенных возможностей.' },
      ],
    },
    en: {
      title: 'How a Website Sells for You 24/7',
      description: 'Your website works like a salesperson who never sleeps. Sales automation and lead collection even at night.',
      content: [
        { type: 'h2', value: 'Online Storefront, Always Available' },
        { type: 'p', value: 'While you sleep, customers can explore your services, read reviews, and place orders. The site works 24/7 without breaks or days off.' },
        { type: 'h2', value: 'Sales Automation' },
        { type: 'p', value: 'Requests automatically go to CRM, customers receive confirmation, and you get notifications. No lost customers or missed opportunities.' },
      ],
    },
  },
  {
    slug: 'website-mistakes-to-avoid',
    date: '2024-12-28',
    uk: {
      title: 'Головні помилки при створенні сайту',
      description: 'Які помилки коштують клієнтів та грошей, і як їх уникнути при розробці сайту.',
      content: [
        { type: 'h2', value: 'Відсутність чіткої мети' },
        { type: 'p', value: 'Створення сайту "бо треба" — найгірший підхід. Кожен сайт має мати чітку мету: збільшити продажі, залучити клієнтів, підвищити впізнаваність бренду.' },
        { type: 'h2', value: 'Ігнорування мобільних користувачів' },
        { type: 'p', value: 'Більше 60% трафіку йде з мобільних. Сайт без адаптивності — це втрата більшості потенційних клієнтів.' },
        { type: 'h2', value: 'Відсутність SEO-оптимізації' },
        { type: 'p', value: 'Навіть найкращий сайт не принесе результатів без SEO. Технічна оптимізація, правильна структура та якісний контент — обов\'язкові умови.' },
      ],
    },
    ru: {
      title: 'Главные ошибки при создании сайта',
      description: 'Какие ошибки стоят клиентов и денег, и как их избежать при разработке сайта.',
      content: [
        { type: 'h2', value: 'Отсутствие чёткой цели' },
        { type: 'p', value: 'Создание сайта "потому что надо" — худший подход. Каждый сайт должен иметь чёткую цель: увеличить продажи, привлечь клиентов, повысить узнаваемость бренда.' },
        { type: 'h2', value: 'Игнорирование мобильных пользователей' },
        { type: 'p', value: 'Более 60% трафика идёт с мобильных. Сайт без адаптивности — это потеря большинства потенциальных клиентов.' },
        { type: 'h2', value: 'Отсутствие SEO-оптимизации' },
        { type: 'p', value: 'Даже лучший сайт не принесёт результатов без SEO. Техническая оптимизация, правильная структура и качественный контент — обязательные условия.' },
      ],
    },
    en: {
      title: 'Top Website Mistakes to Avoid',
      description: 'What mistakes cost customers and money, and how to avoid them when developing a website.',
      content: [
        { type: 'h2', value: 'Lack of Clear Purpose' },
        { type: 'p', value: 'Creating a website "because we need one" is the worst approach. Every site must have a clear goal: increase sales, attract customers, boost brand recognition.' },
        { type: 'h2', value: 'Ignoring Mobile Users' },
        { type: 'p', value: 'Over 60% of traffic comes from mobile. A site without responsiveness means losing most potential customers.' },
        { type: 'h2', value: 'Lack of SEO Optimization' },
        { type: 'p', value: 'Even the best website won\'t deliver results without SEO. Technical optimization, proper structure, and quality content are essential.' },
      ],
    },
  },
]

export async function seedArticles(payload: Payload) {
  for (const article of articlesData) {
    try {
      // Check if article already exists
      const existing = await payload.find({
        collection: 'articles',
        where: {
          slug: {
            equals: article.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Article "${article.slug}" already exists, skipping...`)
        continue
      }

      // Create with default locale (uk)
      const articleData: any = {
        slug: article.slug,
        publishedDate: article.date,
        status: 'published',
        author: 'Veb-Dev Team',
        title: article.uk.title,
        excerpt: article.uk.description,
        content: contentArrayToLexical(article.uk.content),
      }

      const created = await payload.create({
        collection: 'articles',
        data: articleData,
        locale: 'uk',
      })

      // Update for ru locale
      await payload.update({
        collection: 'articles',
        id: created.id,
        data: {
          title: article.ru.title,
          excerpt: article.ru.description,
          content: contentArrayToLexical(article.ru.content),
        },
        locale: 'ru',
      })

      // Update for en locale
      await payload.update({
        collection: 'articles',
        id: created.id,
        data: {
          title: article.en.title,
          excerpt: article.en.description,
          content: contentArrayToLexical(article.en.content),
        },
        locale: 'en',
      })

      console.log(`  ✅ Created article: ${article.slug}`)
    } catch (error: any) {
      console.error(`  ❌ Failed to create article "${article.slug}":`, error.message)
    }
  }
}
