import { Box, Button, rem, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';

export const Description = () => {
	const { t } = useTranslation(['advantages', 'layout']);

	return (
		<Box>
			<Title mb={rem(24)} order={2}>
				{t('title')}
			</Title>
			<Text component="p" mb={rem(48)} size="lg">
				{t('description')}
			</Text>
			<Button size="xs" w="fit-content">
				{t('layout:learnMore')}
			</Button>
		</Box>
	);
};
