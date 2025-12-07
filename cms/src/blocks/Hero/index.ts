import {Block} from 'payload';

export const Hero: Block = {
	slug: 'hero',
	interfaceName: 'Hero',
	labels: {
		singular: {en: 'Hero', ru: 'Главный экран', uk: 'Головний екран'},
		plural: {en: 'Heroes', ru: 'Главные экраны', uk: 'Головні екрани'},
	},
	fields: [
		{
			name: 'titleBrand',
			type: 'text',
			label: {en: 'Brand Title', ru: 'Бренд Заголовок', uk: 'Бренд Заголовок'},
			localized: true,
		},
		{
			name: 'title',
			type: 'text',
			label: {en: 'Title', ru: 'Заголовок', uk: 'Заголовок'},
			required: true,
			localized: true,
		},

		{
			name: 'subtitle',
			type: 'text',
			label: {en: 'Subtitle', ru: 'Подзаголовок', uk: 'Підзаголовок'},
			localized: true,
		},
		{
			name: 'paragraph',
			type: 'textarea',
			label: {en: 'Paragraph', ru: 'Параграф', uk: 'Параграф'},
			localized: true,
		},
		{
			name: 'buttonText',
			type: 'text',
			label: {en: 'Button Text', ru: 'Текст кнопки', uk: 'Текст кнопки'},
			localized: true,
		},
		{
			name: 'type',
			type: 'select',
			label: {
				en: 'Hero Type',
				ru: 'Тип главного экрана',
				uk: 'Тип головного екрану',
			},
			defaultValue: 'left',
			localized: true,
			options: [
				{
					label: {en: 'Text Right', ru: 'Текст справа', uk: 'Текст справа'},
					value: 'right',
				},
				{
					label: {en: 'Text Left', ru: 'Текст слева', uk: 'Текст зліва'},
					value: 'left',
				},
				{
					label: {en: 'Centered', ru: 'По центру', uk: 'По центру'},
					value: 'center',
				},
			],
		},
	],
};
