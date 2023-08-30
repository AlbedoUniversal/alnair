import { Grid, SimpleGrid, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import LogoSvg from 'public/icons/footerLogo.svg';

export const BottomBar = () => {
	const { t } = useTranslation('layout');

	return (
		<Grid justify={'space-between'}>
			<SimpleGrid verticalSpacing={0}>
				<Text component="p" size="sm" color="#6F7886">
					{t('address')}
				</Text>
				<Text component="p" size="sm" color="#6F7886">
					{t('rights')}
				</Text>
			</SimpleGrid>
			<LogoSvg />
		</Grid>
	);
};
