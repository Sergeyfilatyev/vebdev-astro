export default function getLocalizedLink(link, currentLocale) {
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
}
