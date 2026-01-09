# 🗺️ Roadmap: Veb-Dev Studio → Astro + Payload CMS

## 📋 Обзор проекта

Создание современного сайта веб-студии на базе **Astro 5.x** и **Payload CMS 3.x** с темной темой, анимациями и поддержкой 3 языков (uk, ru, en).

---

## 🎯 Цель

Перенести структуру и контент из `veb-dev-studio` (SvelteKit) в новый проект на Astro + Payload CMS, сохранив только **структуру и контент**, создав новый современный дизайн в темных тонах с анимациями.

---

## 📦 Структура данных (Payload CMS)

### 1. Коллекции (`cms/src/collections/`)

Каждая коллекция — отдельный файл `.ts`, экспортирующий `CollectionConfig`.

#### **Pages.ts** (улучшить существующий)
```typescript
- title (text, required, localized)
- slug (text, required, unique)
- metaDescription (text, localized)
- seoKeywords (text, localized)
- ogImage (upload → media, optional)
- status (select: draft, published, default: draft)
- blocks (blocks array, использует blocks из ../blocks)
- hooks: createFrontendRebuildHooks({ triggerOnlyIfStatus: 'published' })
```

#### **Projects.ts** (новый)
```typescript
- title (text, required, localized)
- subtitle (text, localized)
- description (richText, localized)
- advantages (textarea, localized)
- slug (text, required, unique)
- url (text - ссылка на сайт)
- image (upload → media, required)
- featured (checkbox - показывать на главной)
- order (number, default: 0)
- hooks: createFrontendRebuildHooks()
```

#### **Articles.ts** (новый - для блога)
```typescript
- title (text, required, localized)
- slug (text, required, unique)
- excerpt (textarea, localized)
- content (richText, required, localized)
- featuredImage (upload → media, optional)
- publishedDate (date, pickerAppearance: 'dayAndTime')
- author (text)
- status (select: draft, published, default: draft)
- hooks: createFrontendRebuildHooks({ triggerOnlyIfStatus: 'published' })
```

#### **Services.ts** (новый)
```typescript
- title (text, required, localized)
- description (textarea, localized)
- slug (text, required, unique)
- list (array of text, localized)
- price (text)
- price_discount (text, optional)
- icon (text - iconify name)
- order (number, default: 0)
- hooks: createFrontendRebuildHooks()
```

#### **FAQ.ts** (новый)
```typescript
- question (text, required, localized)
- answer (richText, required, localized)
- category (select: general, services, portfolio, pricing, other, default: general)
- order (number, default: 0)
- hooks: createFrontendRebuildHooks()
```

#### **Steps.ts** (новый)
```typescript
- step (text, required - "01", "02", etc.)
- icon (text, required - emoji)
- title (text, required, localized)
- description (textarea, localized)
- order (number, default: 0)
- hooks: createFrontendRebuildHooks()
```

#### **ContactSubmissions.ts** (новый - для формы обратной связи)
```typescript
- name (text, required)
- email (email, optional)
- phone (text, required)
- message (textarea, optional)
- status (select: new, contacted, closed, default: new)
- createdAt (auto)
```

#### **Media.ts** (уже существует)
- Оставить как есть

#### **Users.ts** (уже существует)
- Оставить как есть

---

### 2. Глобальные настройки (`cms/src/globals/SiteSettings.ts`)

Переименовать `GeneralSettings` → `SiteSettings`, структура как в `transinpack`:

#### **Вкладка: Header**
- `logo` (upload → media)
- `navigation` (array):
  - `label` (text, required, localized)
  - `url` (text, required)
- `ctaButton` (group):
  - `text` (text, localized)
  - `url` (text)

#### **Вкладка: Footer**
- `footerLogo` (upload → media, optional)
- `companyInfo` (richText, localized)
- `footerLinkGroups` (array):
  - `title` (text, required, localized)
  - `links` (array):
    - `label` (text, required, localized)
    - `url` (text, required)
- `copyright` (text, localized)

#### **Вкладка: Contact**
- `email` (email, required)
- `phone` (text)
- `address` (textarea, localized)
- `workingHours` (group):
  - `weekdays` (text, localized)
  - `weekend` (text, localized)

#### **Вкладка: Social Media**
- `socialLinks` (array):
  - `platform` (select: telegram, whatsapp, viber, instagram, facebook, other)
  - `url` (text, required)
  - `icon` (text - iconify name, optional)

#### **Вкладка: Hero Section**
- `heroTitle1` (text, localized)
- `heroTitle2` (text, localized)
- `heroText` (textarea, localized)
- `consultButtonText` (text, localized)

#### **Вкладка: About Section**
- `aboutTitle` (text, localized)
- `aboutSubtitle` (textarea, localized)
- `aboutParagraph` (richText, localized)

#### **Вкладка: Advantages Section**
- `advTitle` (text, localized)
- `advantages` (array):
  - `icon` (text - emoji)
  - `title` (text, localized)
  - `description` (textarea, localized)
  - `points` (array of text, localized)
  - `order` (number)

#### **Вкладка: Statistics**
- `statsClients` (number)
- `statsYears` (number)
- `statsProjects` (number)

#### **Вкладка: Banner**
- `bannerTitle` (text, localized)
- `bannerText1` (text, localized)
- `bannerText2` (text, localized)
- `bannerButtonText` (text, localized)
- `bannerSubtext` (text, localized)
- `bannerActive` (checkbox)

#### **Вкладка: SEO & Analytics**
- `siteUrl` (text)
- `allowIndexing` (checkbox, default: false)
- `defaultMetaTitle` (text, localized)
- `defaultMetaDescription` (textarea, localized)
- `defaultOgImage` (upload → media)
- `analytics` (group):
  - `headScript` (textarea)
  - `bodyEndScript` (textarea)

---

### 3. Блоки контента (`cms/src/blocks/`)

Каждый блок — отдельный файл `.ts`, экспортирующий `Block`. Все блоки экспортируются через `index.ts`.

#### **Hero.ts** (улучшить существующий)
```typescript
- variant (select: default, left, right, center, default: default)
- headline (text, localized) - для default variant
- subheadline (textarea, localized) - для default variant
- primaryCTA (group):
  - text (text, required, localized)
  - url (text, required)
- secondaryCTA (group, optional):
  - text (text, localized)
  - url (text)
- backgroundVideo (upload → media, optional) - для default variant
- backgroundVideoWebm (upload → media, optional) - для default variant
- backgroundImage (upload → media, optional)
- title (text, localized) - для других variants
- subtitle (text, localized) - для других variants
- ctaButtons (array) - для других variants:
  - text (text, required, localized)
  - url (text, required)
  - variant (select: primary, secondary, outline)
```

#### **Content.ts** (уже существует, улучшить)
```typescript
- sectionIdentifier (text, required)
- title (text, required, localized)
- content (richText, required, localized)
- isVisible (checkbox, default: true)
```

#### **MediaBlock.ts** (уже существует)
- Оставить как есть

#### **Advantages.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- advantages (relationship → можно использовать relationship к SiteSettings или inline array)
```

#### **Services.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- services (relationship → services, hasMany: true)
```

#### **Portfolio.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- projects (relationship → projects, hasMany: true)
- showAllButton (checkbox)
- buttonText (text, localized)
```

#### **Steps.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- steps (relationship → steps, hasMany: true)
```

#### **FAQ.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- faqs (relationship → faq, hasMany: true)
```

#### **Stats.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- stats (array):
  - number (number, required)
  - label (text, required, localized)
  - icon (text, optional)
```

#### **Contact.ts** (новый)
```typescript
- title (text, localized)
- subtitle (text, localized)
- formFields (можно использовать данные из SiteSettings или inline)
```

#### **index.ts** (новый - экспортирует все блоки)
```typescript
import { HeroBlock } from './Hero'
import { ContentBlock } from './Content'
import { MediaBlock } from './MediaBlock'
import { AdvantagesBlock } from './Advantages'
import { ServicesBlock } from './Services'
import { PortfolioBlock } from './Portfolio'
import { StepsBlock } from './Steps'
import { FAQBlock } from './FAQ'
import { StatsBlock } from './Stats'
import { ContactBlock } from './Contact'

export const blocks = [
  HeroBlock,
  ContentBlock,
  MediaBlock,
  AdvantagesBlock,
  ServicesBlock,
  PortfolioBlock,
  StepsBlock,
  FAQBlock,
  StatsBlock,
  ContactBlock,
]
```

---

## 🎨 Структура страниц (Astro)

### 1. Главная страница (`/`)
**Блоки:**
- Hero Block
- About Block (из SiteSettings)
- Advantages Block (из SiteSettings)
- Services Block (показывать 3-6 услуг)
- Portfolio Block (показывать 3-6 проектов)
- Steps Block
- Stats Block
- FAQ Block (показывать 3-5 вопросов)
- Contact Block

### 2. Страница услуг (`/services`)
**Блоки:**
- Hero Block
- Services Block (все услуги)
- Advantages Block (из SiteSettings)
- Contact Block

### 3. Страница портфолио (`/portfolio`)
**Блоки:**
- Hero Block
- Portfolio Block (все проекты)
- Contact Block

### 4. Страница проекта (`/portfolio/[slug]`)
**Блоки:**
- Hero Block (с данными проекта)
- Content Block (описание проекта)
- MediaBlock (изображение проекта)
- Contact Block

### 5. Страница блога (`/blog`)
**Блоки:**
- Hero Block
- Blog Posts List (динамический список)
- Contact Block

### 6. Страница статьи (`/blog/[slug]`)
**Блоки:**
- Hero Block (заголовок статьи)
- Content Block (контент статьи)
- Contact Block

### 7. Страница контактов (`/contacts`)
**Блоки:**
- Hero Block
- Contact Info (из SiteSettings)
- Contact Block

### 8. Политика конфиденциальности (`/privacy-policy`)
**Блоки:**
- Hero Block
- Content Block (текст политики)

---

## 🔧 Технические задачи

### Phase 1: Настройка Payload CMS

1. **Создать утилиту для хуков** (`cms/src/utils/collectionHooks.ts`)
   - Функция `createFrontendRebuildHooks()` для автоматической пересборки фронтенда

2. **Переименовать GeneralSettings → SiteSettings**
   - Создать `cms/src/globals/SiteSettings.ts`
   - Структура как в `transinpack` с вкладками

3. **Создать коллекции**
   - `cms/src/collections/Projects.ts`
   - `cms/src/collections/Articles.ts`
   - `cms/src/collections/Services.ts`
   - `cms/src/collections/FAQ.ts`
   - `cms/src/collections/Steps.ts`
   - `cms/src/collections/ContactSubmissions.ts`
   - Обновить `cms/src/collections/Pages.ts`

4. **Создать блоки**
   - `cms/src/blocks/Hero.ts` (улучшить)
   - `cms/src/blocks/Content.ts` (улучшить)
   - `cms/src/blocks/Advantages.ts`
   - `cms/src/blocks/Services.ts`
   - `cms/src/blocks/Portfolio.ts`
   - `cms/src/blocks/Steps.ts`
   - `cms/src/blocks/FAQ.ts`
   - `cms/src/blocks/Stats.ts`
   - `cms/src/blocks/Contact.ts`
   - `cms/src/blocks/index.ts` (экспорт всех блоков)

5. **Обновить payload.config.ts**
   - Импортировать все коллекции
   - Импортировать SiteSettings
   - Импортировать blocks в Pages

### Phase 2: Frontend (Astro)

1. **Создать компоненты блоков**
   - `web/src/components/blocks/Hero.astro` (исправить props)
   - `web/src/components/blocks/Content.astro` (уже есть)
   - `web/src/components/blocks/MediaBlock.astro` (новый)
   - `web/src/components/blocks/Advantages.astro` (новый)
   - `web/src/components/blocks/Services.astro` (новый)
   - `web/src/components/blocks/Portfolio.astro` (новый)
   - `web/src/components/blocks/Steps.astro` (новый)
   - `web/src/components/blocks/FAQ.astro` (новый)
   - `web/src/components/blocks/Stats.astro` (новый)
   - `web/src/components/blocks/Contact.astro` (новый)

2. **Обновить BlockRenderer**
   - Добавить все новые блоки в switch

3. **Создать страницы**
   - `web/src/pages/index.astro` (главная)
   - `web/src/pages/[...slug].astro` (обновить для динамических страниц)
   - `web/src/pages/portfolio/[slug].astro` (страница проекта)
   - `web/src/pages/blog/[slug].astro` (страница статьи)

4. **Создать компоненты**
   - `web/src/components/global/Footer.astro` (новый)
   - Улучшить `web/src/components/global/Header.astro`
   - `web/src/components/ui/ProjectCard.astro`
   - `web/src/components/ui/ServiceCard.astro`
   - `web/src/components/ui/BlogCard.astro`

5. **Стили и анимации**
   - Темная тема (уже есть базовая)
   - Добавить анимации (fade-in, slide-up, etc.)
   - Улучшить responsive дизайн
   - Добавить hover эффекты

### Phase 3: Интеграции

1. **Форма обратной связи**
   - API endpoint в Payload (`cms/src/collections/ContactSubmissions.ts`)
   - Валидация на клиенте
   - Интеграция с Telegram Bot (опционально)

2. **SEO**
   - Динамические meta теги из Pages
   - Open Graph из SiteSettings
   - Structured Data (JSON-LD)

---

## 📝 Контент для миграции

### Данные из `veb-dev-studio`:

1. **Messages (uk.json, ru.json, en.json)**
   - Все тексты → в SiteSettings или блоки

2. **Projects (projects.json)**
   - 16 проектов → коллекция Projects

3. **Blog (blog.json)**
   - 4 статьи → коллекция Articles

4. **Services (services.json)**
   - 6 услуг → коллекция Services

5. **FAQ (faq.json)**
   - 8 вопросов → коллекция FAQ

6. **Steps (steps.json)**
   - 10 шагов → коллекция Steps

7. **Services Advantages (services_adv.json)**
   - 10 преимуществ → в SiteSettings → Advantages

8. **SEO (seo.json)**
   - Meta данные → в Pages или SiteSettings

---

## 🎯 Приоритеты разработки

### 🔴 Высокий приоритет
1. Создать `collectionHooks.ts` утилиту
2. Переименовать GeneralSettings → SiteSettings
3. Создать коллекции: Projects, Articles, Services, FAQ, Steps, ContactSubmissions
4. Создать блоки: Hero, Advantages, Services, Portfolio, Steps, FAQ, Stats, Contact
5. Создать `blocks/index.ts`
6. Исправить Hero.astro компонент
7. Создать Footer.astro
8. Создать основные страницы

### 🟡 Средний приоритет
1. Contact Form с API интеграцией
2. Страницы проектов и статей блога
3. Анимации и улучшения UI
4. SEO оптимизация

### 🟢 Низкий приоритет
1. Интеграция с Telegram Bot
2. Analytics
3. Дополнительные блоки

---

## 📦 Структура файлов

```
cms/src/
├── collections/
│   ├── Pages.ts (улучшить)
│   ├── Projects.ts (новый)
│   ├── Articles.ts (новый)
│   ├── Services.ts (новый)
│   ├── FAQ.ts (новый)
│   ├── Steps.ts (новый)
│   ├── ContactSubmissions.ts (новый)
│   ├── Media.ts (уже есть)
│   └── Users.ts (уже есть)
├── blocks/
│   ├── Hero.ts (улучшить)
│   ├── Content.ts (улучшить)
│   ├── MediaBlock.ts (уже есть)
│   ├── Advantages.ts (новый)
│   ├── Services.ts (новый)
│   ├── Portfolio.ts (новый)
│   ├── Steps.ts (новый)
│   ├── FAQ.ts (новый)
│   ├── Stats.ts (новый)
│   ├── Contact.ts (новый)
│   └── index.ts (новый - экспорт всех блоков)
├── globals/
│   └── SiteSettings.ts (переименовать из GeneralSettings)
├── utils/
│   └── collectionHooks.ts (новый)
└── payload.config.ts (обновить)

web/src/
├── components/
│   ├── blocks/
│   │   ├── Hero.astro (исправить)
│   │   ├── Content.astro (уже есть)
│   │   ├── MediaBlock.astro (новый)
│   │   ├── Advantages.astro (новый)
│   │   ├── Services.astro (новый)
│   │   ├── Portfolio.astro (новый)
│   │   ├── Steps.astro (новый)
│   │   ├── FAQ.astro (новый)
│   │   ├── Stats.astro (новый)
│   │   └── Contact.astro (новый)
│   ├── global/
│   │   ├── Header.astro (улучшить)
│   │   └── Footer.astro (новый)
│   ├── ui/
│   │   ├── Button.astro (уже есть)
│   │   ├── ProjectCard.astro (новый)
│   │   ├── ServiceCard.astro (новый)
│   │   └── BlogCard.astro (новый)
│   └── BlockRenderer.astro (обновить)
├── pages/
│   ├── index.astro (новый/обновить)
│   ├── [...slug].astro (обновить)
│   ├── portfolio/
│   │   └── [slug].astro (новый)
│   └── blog/
│       └── [slug].astro (новый)
└── styles/
    └── global.css (улучшить - темная тема, анимации)
```

---

## ✅ Чеклист готовности

### Payload CMS
- [ ] Создан `collectionHooks.ts`
- [ ] Переименован GeneralSettings → SiteSettings
- [ ] Создана коллекция Projects
- [ ] Создана коллекция Articles
- [ ] Создана коллекция Services
- [ ] Создана коллекция FAQ
- [ ] Создана коллекция Steps
- [ ] Создана коллекция ContactSubmissions
- [ ] Обновлена коллекция Pages
- [ ] Созданы все блоки
- [ ] Создан `blocks/index.ts`
- [ ] Обновлен `payload.config.ts`

### Astro Frontend
- [ ] Исправлен Hero.astro
- [ ] Создан Footer.astro
- [ ] Улучшен Header.astro
- [ ] Созданы все компоненты блоков
- [ ] Обновлен BlockRenderer
- [ ] Созданы все страницы
- [ ] Добавлены анимации
- [ ] Улучшена темная тема

### Контент
- [ ] Мигрированы проекты
- [ ] Мигрированы статьи блога
- [ ] Мигрированы услуги
- [ ] Мигрированы FAQ
- [ ] Мигрированы шаги
- [ ] Заполнен SiteSettings

### Интеграции
- [ ] Работает форма обратной связи
- [ ] Настроен SEO

---

## 🚀 Следующие шаги

1. **Начать с Payload CMS:**
   - Создать `collectionHooks.ts`
   - Переименовать GeneralSettings → SiteSettings
   - Создать коллекции
   - Создать блоки и `blocks/index.ts`
   - Обновить `payload.config.ts`

2. **Затем Frontend:**
   - Исправить существующие компоненты
   - Создать новые компоненты
   - Создать страницы

3. **Миграция контента:**
   - Импортировать данные из JSON файлов
   - Заполнить SiteSettings

4. **Полировка:**
   - Анимации
   - SEO
   - Тестирование

---

**Дата создания:** 2025-01-XX  
**Версия:** 2.0.0 (обновлено по структуре transinpack)
