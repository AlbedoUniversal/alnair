import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	link: {
		fontSize: theme.fontSizes.md,
		fontWeight: 600,
		color: theme.colors.gray[3],
		marginInlineStart: theme.spacing.md,
		'&:hover': {
			textDecoration: 'none',
			color: theme.colors.blue[5],
		},
	},
}));
