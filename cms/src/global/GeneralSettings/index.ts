import {GlobalConfig} from 'payload';

export const GeneralSettings: GlobalConfig = {
	slug: 'general-settings',
	label: {
		en: 'General Settings',
		ru: 'Общие настройки',
		uk: 'Загальні налаштування',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				// --- Вкладка 1: ВИЗУАЛ САЙТА (перенесено из Header/Footer) ---
				{
					label: {en: 'Site Visuals', ru: 'Визуал сайта', uk: 'Візуал сайту'},
					fields: [
						{
							name: 'headerLogo',
							label: {
								en: 'Header Logo',
								ru: 'Логотип шапки',
								uk: 'Логотип шапки',
							},
							type: 'upload',
							relationTo: 'media',
							required: true,
						},
						{
							name: 'footerLogo',
							label: {
								en: 'Footer Logo (optional)',
								ru: 'Логотип футера (опц.)',
								uk: 'Логотип футера (опц.)',
							},
							type: 'upload',
							relationTo: 'media',
						},
						{
							name: 'footerCopyright',
							label: {en: 'Copyright Text', ru: 'Копирайт', uk: 'Копірайт'},
							type: 'text',
							localized: true,
							defaultValue: '© 2025 Veb-Dev. All rights reserved.',
						},
						{
							name: 'buttonCTA',
							label: {
								en: 'Button CTA Text',
								ru: 'Текст кнопки CTA',
								uk: 'Текст кнопки CTA',
							},
							type: 'text',
							localized: true,
						},
					],
				},

				// --- Вкладка 2: НАВИГАЦИЯ ---
				{
					label: {en: 'Navigation', ru: 'Навигация', uk: 'Навігація'},
					fields: [
						{
							name: 'headerMenu',
							label: {
								en: 'Header Menu Items',
								ru: 'Пункты меню шапки',
								uk: 'Пункти меню шапки',
							},
							type: 'array',
							fields: [
								{
									type: 'row',
									fields: [
										{
											name: 'label',
											label: {en: 'Label', ru: 'Название', uk: 'Назва'},
											type: 'text',
											localized: true,
											required: true,
										},
										{
											name: 'link',
											label: {en: 'Link', ru: 'Ссылка', uk: 'Посилання'},
											type: 'text',
											required: true,
										},
										{
											name: 'visibility',
											label: {
												en: 'Visibility',
												ru: 'Где показывать?',
												uk: 'Де показувати?',
											},
											type: 'select',
											defaultValue: 'all',
											options: [
												{label: {en: 'Everywhere', ru: 'Везде'}, value: 'all'},
												{
													label: {en: 'Desktop Only', ru: 'Только Десктоп'},
													value: 'desktop',
												},
												{
													label: {en: 'Mobile Only', ru: 'Только Мобильный'},
													value: 'mobile',
												},
											],
											required: true,
										},
									],
								},
							],
						},
						{
							name: 'footerMenu',
							label: {
								en: 'Footer Menu',
								ru: 'Меню в подвале',
								uk: 'Меню в футері',
							},
							type: 'array',
							fields: [
								{
									name: 'label',
									type: 'text',
									localized: true,
								},
								{
									name: 'link',
									type: 'text',
								},
							],
						},
					],
				},

				// --- Вкладка 3: КОНТАКТЫ ---
				{
					label: {en: 'Contacts', ru: 'Контакты', uk: 'Контакти'},
					fields: [
						{
							name: 'email',
							label: 'Email',
							type: 'group',
							fields: [
								{name: 'label', type: 'text', localized: true},
								{name: 'value', type: 'text'},
							],
						},
						{
							name: 'phone',
							label: {en: 'Phone', ru: 'Телефон', uk: 'Телефон'},
							type: 'group',
							fields: [
								{name: 'label', type: 'text', localized: true},
								{name: 'value', type: 'text'},
							],
						},
						{
							name: 'address',
							label: {en: 'Address', ru: 'Адрес', uk: 'Адреса'},
							type: 'group',
							fields: [
								{name: 'label', type: 'textarea', localized: true},
								{name: 'url', type: 'text'},
							],
						},
					],
				},

				// --- Вкладка 4: СОЦСЕТИ ---
				{
					label: {en: 'Social Media', ru: 'Соцсети', uk: 'Соцмережі'},
					fields: [
						{
							type: 'row',
							fields: [
								{
									name: 'telegram',
									type: 'group',
									fields: [
										{name: 'label', type: 'text', localized: true},
										{name: 'url', type: 'text'},
									],
								},
								{
									name: 'whatsapp',
									type: 'group',
									fields: [
										{name: 'label', type: 'text', localized: true},
										{name: 'url', type: 'text'},
									],
								},
								{
									name: 'viber',
									type: 'group',
									fields: [
										{name: 'label', type: 'text', localized: true},
										{name: 'url', type: 'text'},
									],
								},
							],
						},
						{
							type: 'row',
							fields: [
								{
									name: 'instagram',
									type: 'group',
									fields: [
										{name: 'label', type: 'text', localized: true},
										{name: 'url', type: 'text'},
									],
								},
								{
									name: 'facebook',
									type: 'group',
									fields: [
										{name: 'label', type: 'text', localized: true},
										{name: 'url', type: 'text'},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};
