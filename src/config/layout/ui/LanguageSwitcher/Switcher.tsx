import { Button, Menu } from '@mantine/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import ArrowSVG from 'public/icons/chevron-down.svg';

export const Switcher = () => {
	const router = useRouter();
	const { i18n, t } = useTranslation('layout');
	const changeLanguages = async (language: string) => {
		await i18n.changeLanguage(language);
		await router.push(router.pathname, router.asPath, { locale: language });
	};

	return (
		<Menu>
			<Menu.Target>
				<Button variant="switcher" rightIcon={<ArrowSVG />}>
					{t('language')}
				</Button>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item onClick={async () => changeLanguages('ru')}>Ru</Menu.Item>
				<Menu.Item onClick={async () => changeLanguages('en')}>En</Menu.Item>
				<Menu.Item onClick={async () => changeLanguages('ar')}>Ar</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
