import {GlobalConfig} from 'payload';

export const Footer: GlobalConfig = {
	slug: 'footer',
	access: {
		read: () => true, // Публичный доступ на чтение
	},
	fields: [
		{
			name: 'text',
			type: 'text',
		},
		{
			name: 'copyright',
			type: 'text',
		},
	],
};
