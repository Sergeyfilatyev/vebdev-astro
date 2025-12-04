export const locales = ['en', 'ru', 'uk'] as const;
export const defaultLocale = 'uk' as const;

export type Locale = (typeof locales)[number];

export const localeNames = {
	en: 'English',
	ru: 'Русский',
	uk: 'Українська',
} as const;

export const localeFlags = {
	en: '🇬🇧',
	ru: '🇷🇺',
	uk: '🇺🇦',
} as const;
