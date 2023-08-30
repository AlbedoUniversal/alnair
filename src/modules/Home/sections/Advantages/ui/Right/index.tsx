import { Grid, rem, SimpleGrid, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import Cart2021 from 'public/assets/advantages/2021.svg';
import GoodSvg from 'public/assets/advantages/good.svg';

export const Right = () => {
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
				<Grid.Col
					sx={{
						borderRadius: rem(16),
					}}
					p={rem(24)}
					bg="chocolate"
				>
					<GoodSvg />
					<Text>Иконка</Text>
					<Text>Иконка</Text>
				</Grid.Col>
				<Grid.Col
					sx={{
						borderRadius: rem(16),
					}}
					p={rem(24)}
					bg="brown"
				>
					<Cart2021 />
					<Text>Иконка</Text>
					<Text>Иконка</Text>
				</Grid.Col>
			</Grid>

			<Grid
				sx={{
					rowGap: rem(24),
					margin: 0,
				}}
			>
				<Grid.Col
					sx={{
						borderRadius: rem(16),
					}}
					p={rem(24)}
					bg="silver"
				>
					<Text>Иконка</Text>
					<Text>Иконка</Text>
					<Text>Иконка</Text>
				</Grid.Col>
				<Grid.Col
					sx={{
						borderRadius: rem(16),
					}}
					p={rem(24)}
					bg="tomato"
				>
					<Text>Иконка</Text>
					<Text>Иконка</Text>
					<Text>Иконка</Text>
				</Grid.Col>
			</Grid>
		</SimpleGrid>
	);
};
