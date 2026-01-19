# ✅ CMS Test Checklist

## Структура файлов

### ✅ Коллекции (`src/collections/`)
- [x] `Users.ts` - пользователи
- [x] `Media.ts` - медиафайлы
- [x] `Pages.ts` - страницы
- [x] `Projects.ts` - проекты портфолио
- [x] `Articles.ts` - статьи блога
- [x] `Services.ts` - услуги
- [x] `FAQ.ts` - вопросы-ответы
- [x] `Steps.ts` - этапы работы
- [x] `ContactSubmissions.ts` - заявки из формы

### ✅ Блоки (`src/blocks/`)
- [x] `Hero.ts` - главный экран (с вариантами)
- [x] `Content.ts` - текстовый блок
- [x] `MediaBlock.ts` - медиа блок
- [x] `Advantages.ts` - преимущества
- [x] `Services.ts` - блок услуг
- [x] `Portfolio.ts` - блок портфолио
- [x] `Steps.ts` - блок шагов
- [x] `FAQ.ts` - блок FAQ
- [x] `Stats.ts` - блок статистики
- [x] `Contact.ts` - блок формы обратной связи
- [x] `index.ts` - экспорт всех блоков

### ✅ Глобальные настройки (`src/globals/`)
- [x] `SiteSettings.ts` - настройки сайта (10 вкладок)

### ✅ Утилиты (`src/utils/`)
- [x] `collectionHooks.ts` - хуки для пересборки фронтенда

## Что проверить при запуске CMS

1. **Запуск сервера:**
   ```bash
   cd cms
   pnpm dev
   ```

2. **Проверить админку:**
   - Открыть http://localhost:3000/admin
   - Убедиться, что все коллекции видны в меню
   - Проверить, что SiteSettings доступен

3. **Проверить коллекции:**
   - Pages - должна быть с блоками
   - Projects - должна работать
   - Articles - должна работать
   - Services - должна работать
   - FAQ - должна работать
   - Steps - должна работать
   - ContactSubmissions - должна работать

4. **Проверить блоки:**
   - В Pages → создать новую страницу
   - Проверить, что все блоки доступны в редакторе
   - Hero, Content, MediaBlock, Advantages, Services, Portfolio, Steps, FAQ, Stats, Contact

5. **Проверить SiteSettings:**
   - Открыть Site Settings
   - Проверить все вкладки:
     - Header
     - Footer
     - Contact
     - Social Media
     - Hero Section
     - About Section
     - Advantages Section
     - Statistics
     - Banner
     - SEO & Analytics

6. **Проверить локализацию:**
   - Убедиться, что все поля локализованы (uk, ru, en)
   - Проверить переключение языков в админке

7. **Проверить типы:**
   ```bash
   cd cms
   pnpm generate:types
   ```
   - Должен создаться `payload-types.ts` без ошибок

## Возможные проблемы

1. **Ошибки импорта:**
   - Проверить, что все файлы экспортируют правильные константы
   - Проверить пути импорта в `payload.config.ts`

2. **Ошибки типов:**
   - Запустить `pnpm generate:types`
   - Проверить TypeScript ошибки

3. **Ошибки базы данных:**
   - Проверить `DATABASE_URI` в `.env`
   - Убедиться, что PostgreSQL запущен

4. **Ошибки S3:**
   - Проверить переменные окружения S3
   - Если S3 не настроен, можно временно закомментировать плагин

## Следующие шаги после успешного теста

1. Создать тестовые данные в админке
2. Проверить API endpoints
3. Перейти к Phase 2 (Frontend)
