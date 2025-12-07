import type {CollectionConfig} from 'payload';

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	labels: {
		singular: {en: 'Media', ru: 'Медиа', uk: 'Медіа'},
		plural: {en: 'Media', ru: 'Медиа', uk: 'Медіа'},
	},
	admin: {
		useAsTitle: 'alt',
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			required: true,
			localized: true,
			admin: {
				description: {
					en: 'Alternative text for the media item',
					ru: 'Альтернативный текст для медиа-элемента',
					uk: 'Альтернативний текст для медіа-елемента',
				},
			},
		},
	],
	upload: {
		adminThumbnail: 'thumbnail',
		imageSizes: [
			{
				name: 'thumbnail',
				width: 300,
			},
			{
				name: 'square',
				width: 500,
				height: 500,
			},
			{
				name: 'small',
				width: 600,
			},
			{
				name: 'medium',
				width: 900,
			},
			{
				name: 'large',
				width: 1400,
			},
			{
				name: 'xlarge',
				width: 1920,
			},
			{
				name: 'og',
				width: 1200,
				height: 630,
				crop: 'center',
			},
		],
	},
};
