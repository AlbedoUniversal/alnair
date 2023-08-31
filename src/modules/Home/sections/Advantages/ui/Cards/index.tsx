import { Grid, rem, SimpleGrid, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import Cart2021Svg from 'public/assets/advantages/2021.svg';
import BallSvg from 'public/assets/advantages/ball.svg';
import GoodSvg from 'public/assets/advantages/good.svg';
import UrbanSvg from 'public/assets/advantages/urban.svg';

import { Card } from './Card';

export const Cards = () => {
	const { t } = useTranslation('advantages');

	return (
		<SimpleGrid cols={2} spacing={rem(24)}>
			<Grid
				sx={{
					transform: 'translateY(-56px)',
					rowGap: rem(24),
					margin: 0,
				}}
			>
				<Card SvgIcon={() => <GoodSvg />}>
					<Text size="lg" fw={'500'}>
						Winner of the Good innovation Award
					</Text>
					<Text>Learn More</Text>
				</Card>
				<Card SvgIcon={() => <Cart2021Svg />}>
					<Text size="lg">Laureat of the Best Service Award</Text>
					<Text>ИкLearn Moreонка</Text>
				</Card>
			</Grid>

			<Grid
				sx={{
					rowGap: rem(24),
					margin: 0,
				}}
			>
				<Card SvgIcon={() => <UrbanSvg />}>
					<Text size="lg" fw={'500'}>
						Winner of the Good innovationurban awards
					</Text>
					<Text>Иконка</Text>
				</Card>
				<Card SvgIcon={() => <BallSvg />}>
					<Text size="lg" fw={'500'}>
						Winner of the Best Object award
					</Text>
					<Text>Learn More</Text>
				</Card>
			</Grid>
		</SimpleGrid>
	);
};
