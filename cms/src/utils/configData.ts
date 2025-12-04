export const mailConfig = {
	defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'admin@veb-dev.com',
	defaultFromName: process.env.SMTP_FROM_NAME || 'admin@veb-dev.com',
	transportOptions: {
		host: process.env.SMTP_HOST || 'smtp.zoho.eu',
		port: parseInt(process.env.SMTP_PORT || '587'),
		secure: false,
		auth: {
			user: process.env.SMTP_USER || 'admin@veb-dev.com',
			pass: process.env.SMTP_PASS || '',
		},
	},
};
export const s3Config = {
	collections: {
		media: true,
	},
	bucket: process.env.S3_BUCKET || '',
	config: {
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
		},
		endpoint: process.env.S3_ENDPOINT || '',
		region: 'auto',
	},
};
