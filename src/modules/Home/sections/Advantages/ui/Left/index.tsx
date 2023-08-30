import { Button, rem, SimpleGrid, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';

export const Left = () => {
	const { t } = useTranslation('advantages');

	return (
		<SimpleGrid>
			<Title mb={rem(24)} order={2}>
				{t('title')}
			</Title>
			<Text component="p" mb={rem(48)} size="lg">
				{t('description')}
			</Text>
			<Button size="xs" w="fit-content">
				More detailed
			</Button>
		</SimpleGrid>
	);
};
