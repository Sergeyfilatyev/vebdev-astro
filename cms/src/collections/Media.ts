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
	upload: true,
};
