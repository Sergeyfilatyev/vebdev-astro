import {CollectionConfig} from 'payload';
import {Hero} from '@/blocks/Hero';
import {Content} from '@/blocks/Content';
import { MediaBlock } from '@/blocks/MediaBlock';

export const Pages: CollectionConfig = {
	slug: 'pages',
	labels: {
		singular: {en: 'Page', ru: 'Страница', uk: 'Сторінка'},
		plural: {en: 'Pages', ru: 'Страницы', uk: 'Сторінки'},
	},
	admin: {
		useAsTitle: 'title',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
			admin: {
				description: {
					en: 'The title of the page',
					ru: 'Заголовок страницы',
					uk: 'Заголовок сторінки',
				},
			},
		},
		{
			name: 'description',
			type: 'textarea',
			required: true,
			localized: true,
			admin: {
				description: {
					en: 'The description of the page',
					ru: 'Описание страницы',
					uk: 'Опис сторінки',
				},
			},
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				description: {
					en: 'The slug of the page',
					ru: 'Слаг страницы',
					uk: 'Слаг сторінки',
				},
			},
		},
		{
			name: 'blocks',
			type: 'blocks',
			blocks: [Hero, Content, MediaBlock],
			localized: true,
			admin: {
				description: {
					en: 'The blocks of the page',
					ru: 'Блоки страницы',
					uk: 'Блоки сторінки',
				},
			},
		},
	],
};
