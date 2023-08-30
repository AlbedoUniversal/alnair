import {
	Button,
	Col,
	Container,
	createStyles,
	Grid,
	rem,
	SimpleGrid,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core';
import {
	IconCircleDotted,
	IconFileCode,
	IconFlame,
	IconReceiptOff,
} from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';

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
	const { t } = useTranslation('advantages');

	return <Container size="xl">frffrfr</Container>;
}
