import {Block} from 'payload';

export const MediaBlock: Block = {
	slug: 'mediaBlock',
	interfaceName: 'MediaBlock',
    labels: {
		singular: {en: 'Media Block', ru: 'Медиа Блок', uk: 'Медіа Блок'},
		plural: {en: 'Media Blocks', ru: 'Медиа Блоки', uk: 'Медіа Блоки'},
	},
	fields: [
		{
			name: 'media',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
	],
};
