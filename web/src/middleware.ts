import {defineMiddleware} from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	// Пропускаем API маршруты - они должны обрабатываться CMS
	if (context.url.pathname.startsWith('/api/')) {
		// Редирект на CMS для API запросов
		const cmsUrl = import.meta.env.CMS_URL || 'http://localhost:3000';
		return Response.redirect(`${cmsUrl}${context.url.pathname}`, 301);
	}

	return next();
});
