import {GlobalConfig} from 'payload';

export const Header: GlobalConfig = {
	slug: 'header',
	access: {
		read: () => true,
	},
	label: {en: 'Header', ru: 'Хедер', uk: 'Хедер'},
	fields: [
		{
			name: 'logo',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'navItems',
			type: 'array',
			fields: [
				{
					name: 'label',
					type: 'text',
				},
				{
					name: 'link',
					type: 'text',
				},
			],
		},
	],
};
