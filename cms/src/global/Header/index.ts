import {GlobalConfig} from 'payload';

export const Header: GlobalConfig = {
	slug: 'header',
	access: {
		read: () => true, // Публичный доступ на чтение
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'logo',
			type: 'upload',
			relationTo: 'media',
		},
	],
};
