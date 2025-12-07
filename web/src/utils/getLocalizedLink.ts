export const getLocalizedLink = (link: string, currentLocale: string) => {
	const defaultLang = 'uk';
	if (link === '/') {
		if (currentLocale !== defaultLang) {
			return `/${currentLocale}`;
		}
		return '/';
	}

	if (link.startsWith('/') || link.includes('://')) {
		return link;
	}

	if (currentLocale === defaultLang) {
		return `/${link}`; 
	} else {
		return `/${currentLocale}/${link}`; 
	}
};
