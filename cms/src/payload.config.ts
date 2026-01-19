// storage-adapter-import-placeholder
import {postgresAdapter} from '@payloadcms/db-postgres'; // database-adapter-import
import {lexicalEditor} from '@payloadcms/richtext-lexical';
import path from 'path';
import {buildConfig} from 'payload';
import {fileURLToPath} from 'url';
import sharp from 'sharp';

import {Users} from './collections/Users';
import {Media} from './collections/Media';
import {Pages} from './collections/Pages';
import {Projects} from './collections/Projects';
import {Articles} from './collections/Articles';
import {Services} from './collections/Services';
import {FAQ} from './collections/FAQ';
import {Steps} from './collections/Steps';
import {ContactSubmissions} from './collections/ContactSubmissions';
import {SiteSettings} from './globals/SiteSettings';

import {en} from '@payloadcms/translations/languages/en';
import {ru} from '@payloadcms/translations/languages/ru';
import {uk} from '@payloadcms/translations/languages/uk';
import {nodemailerAdapter} from '@payloadcms/email-nodemailer';
import {mailConfig, s3Config} from '@/utils/configData';
import {s3Storage, type S3StorageOptions} from '@payloadcms/storage-s3';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Users,
		Media,
		Pages,
		Projects,
		Articles,
		Services,
		FAQ,
		Steps,
		ContactSubmissions,
	],
	globals: [SiteSettings],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
	sharp,
	plugins: [s3Storage(s3Config as S3StorageOptions)],
	i18n: {
		supportedLanguages: {en, uk, ru},
		fallbackLanguage: 'ru',
	},
	localization: {
		locales: [
			{label: 'English', code: 'en'},
			{label: 'Русский', code: 'ru'},
			{label: 'Українська', code: 'uk'},
		],
		defaultLocale: 'uk',
		fallback: true,
	},
	email: nodemailerAdapter(mailConfig),
	cors: [
		'http://localhost:3000', // Админка Payload
		'http://localhost:4321', // Фронтенд Astro
	],
	csrf: [
		'http://localhost:3000', // Админка Payload
		'http://localhost:4321', // Фронтенд Astro
	],
});
