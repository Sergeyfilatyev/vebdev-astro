import {Block} from 'payload';

export const Hero: Block = {
	slug: 'hero',
	interfaceName: 'Hero',
	labels: {
		singular: 'Hero',
		plural: 'Heroes',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
			admin: {
				description: {
					en: 'The title of the hero',
					ru: 'Заголовок героя',
					uk: 'Заголовок героя',
				},
			},
		},
		{
			name: 'text',
			type: 'textarea',
			label: 'Текст под заголовком',
			localized: true,
		},
		{
			name: 'type',
			type: 'select',
			label: 'Тип фона',
			defaultValue: 'simple',
			localized: true,
			options: [
				{label: 'Простой', value: 'simple'},
				{label: 'С видео', value: 'video'},
			],
		},
	],
};