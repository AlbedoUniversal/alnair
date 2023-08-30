import { Container, createStyles, Grid, rem, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { Left } from './ui/Left';
import { Right } from './ui/Right';

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
		<Container size="xl">
			<SimpleGrid cols={2} spacing="120px">
				<Left />
				<Right />
			</SimpleGrid>
		</Container>
	);
}
