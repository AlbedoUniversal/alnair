import { Button, Menu, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';

import { DirContext } from '@/shared/lib/context/DirContext/DirContext';

export const Switcher = () => {
	const { setLanguage } = useContext(DirContext);
	const router = useRouter();
	const { i18n, t } = useTranslation('header');
	const changeLanguages = async (language: string) => {
		await i18n.changeLanguage(language);
		setLanguage(language);
		await router.push(router.pathname, router.asPath, { locale: language });
	};

	return (
		<Menu>
			<Menu.Target>
				<Button>{t('language')}</Button>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item onClick={async () => changeLanguages('ru')}>Ru</Menu.Item>
				<Menu.Item onClick={async () => changeLanguages('en')}>En</Menu.Item>
				<Menu.Item onClick={async () => changeLanguages('ar')}>Ar</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
