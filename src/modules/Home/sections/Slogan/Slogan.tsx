import { Container, createStyles, Flex, Grid, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

const useStyle = createStyles((theme) => ({
	container: {},
}));
export const Slogan = () => {
	const { classes } = useStyle();
	const { t } = useTranslation('slogan');
	return (
		<Container className={classes.container} pb="120px" size="xl">
			<Flex direction={'column'} gap={'30px'}>
				<Text fz={40}>{t('title')}</Text>
				<Text fz={20}>{t('description')}</Text>
			</Flex>
		</Container>
	);
};
