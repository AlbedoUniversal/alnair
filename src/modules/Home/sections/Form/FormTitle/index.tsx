import { Box, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';

export const FormTitle = () => {
	const { t } = useTranslation('form');
	return (
		<Box>
			<Title align="center" mb={24} order={2}>
				{t('title')}
			</Title>
			<Text size={'xl'} maw={'800px'} mx={'auto'} mb={24}>
				{t('description')}
			</Text>
		</Box>
	);
};
