import { Grid, rem, SimpleGrid, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import Cart2021Svg from 'public/assets/advantages/2021.svg';
import BallSvg from 'public/assets/advantages/ball.svg';
import GoodSvg from 'public/assets/advantages/good.svg';
import UrbanSvg from 'public/assets/advantages/urban.svg';

import { GoToMarker } from '@/shared/ui/GoToMarker';
import { InfoCard } from '@/shared/ui/InfoCard';

import { useStyles } from './styles';

export const Cards = () => {
	const { t } = useTranslation(['advantages', 'layout']);
	const { classes } = useStyles();
	return (
		<SimpleGrid cols={2} spacing={rem(24)}>
			<Grid className={classes.leftColumn}>
				<InfoCard SvgIcon={() => <GoodSvg />}>
					<Text size="lg" fw={500}>
						{t('winnerAward')}
					</Text>
					<GoToMarker text={t('layout:learnMore')} />
				</InfoCard>
				<InfoCard SvgIcon={() => <Cart2021Svg />}>
					<Text size="lg">{t('winnerAwards')}</Text>
					<GoToMarker text={t('layout:learnMore')} />
				</InfoCard>
			</Grid>

			<Grid className={classes.rightColumn}>
				<InfoCard SvgIcon={() => <UrbanSvg />}>
					<Text size="lg" fw={'500'}>
						{t('winnerLaureat')}
					</Text>
					<GoToMarker text={t('layout:learnMore')} />
				</InfoCard>
				<InfoCard SvgIcon={() => <BallSvg />}>
					<Text size="lg" fw={'500'}>
						{t('winnerObject')}
					</Text>
					<GoToMarker text={t('layout:learnMore')} />
				</InfoCard>
			</Grid>
		</SimpleGrid>
	);
};
