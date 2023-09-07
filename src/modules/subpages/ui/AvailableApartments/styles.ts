import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		borderRadius: theme.radius.sm,
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.02)',
		},
	},

	imageSection: {
		paddingBlockStart: 0,
		display: 'flex',
		borderRadius: rem(8),
		margin: 0,
		marginBlockEnd: theme.spacing.xs,
		height: rem(250),
	},

	section: {
		marginInline: theme.spacing.xs,
		marginBlockEnd: theme.spacing.xs,
	},
}));
