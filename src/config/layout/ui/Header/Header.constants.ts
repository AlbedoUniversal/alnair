import { type TFunction } from 'next-i18next';

export const getHeaderLinks = (t: TFunction) => [
	{ name: t('contacts'), link: '#contacts' },
	{ name: t('projects'), link: '#projects' },
];
