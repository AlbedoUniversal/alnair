module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru', 'ar'],
	},
	localePath:
		typeof window === 'undefined'
			? require('path').resolve('./public/locales')
			: '/locales',
	ns: [
		'translations',
		'layout',
		'placeholder',
		'banner',
		'popular',
		'advantages',
		'form',
		'slogan',
	],
};
