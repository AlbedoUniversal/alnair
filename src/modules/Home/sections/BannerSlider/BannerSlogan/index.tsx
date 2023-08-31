import { Box, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { useStyles } from './styles';

export const BannerSlogan = () => {
	const { t } = useTranslation('banner');
	const { classes } = useStyles();
	return (
		<Box className={classes.container}>
			<Text fz={44} fw={600} lh={1.1} color="white">
				{t('title')}
			</Text>
			<Text fz={18} color="white" mt={20} w={450}>
				{t('description')}
			</Text>
		</Box>
	);
};
