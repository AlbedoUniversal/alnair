import { Container, createStyles, Grid, rem, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { Cards } from './ui/Cards';
import { Left } from './ui/Left';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
	},

	title: {
		fontSize: rem(36),
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}));

export function Advantages() {
	const { classes } = useStyles();

	return (
		<Container fluid size="xl" bg={'#F4F7FD'}>
			<Container size="xl" bg={'#F4F7FD'}>
				<SimpleGrid cols={2} spacing="120px">
					<Left />
					<Cards />
				</SimpleGrid>
			</Container>
		</Container>
	);
}
