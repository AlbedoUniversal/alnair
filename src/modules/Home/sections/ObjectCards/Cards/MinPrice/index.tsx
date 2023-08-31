import { Button, Card, Group, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { useStyles } from '../styles';

export const MinPrice = ({
	priceMin,
	currency,
}: {
	priceMin: string;
	currency: string;
}) => {
	const { classes } = useStyles();
	const { t } = useTranslation('layout');
	return (
		<Card.Section className={classes.section} style={{ height: '40px' }}>
			<Group position="apart">
				<Text fw={600} fz="sm">
					from {priceMin} {currency}
				</Text>
				<Button variant="sendCard">{t('send')}</Button>
			</Group>
		</Card.Section>
	);
};
