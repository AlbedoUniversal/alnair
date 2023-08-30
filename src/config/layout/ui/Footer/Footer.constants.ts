import { type TFunction } from 'next-i18next';

export const getFooterLinks = (t: TFunction) => [
	{ name: t('projects'), link: '#projects' },
	{ name: t('reviews'), link: '/' },
	{ name: t('news'), link: '/' },
	{ name: t('contacts'), link: '#contacts' },
];
