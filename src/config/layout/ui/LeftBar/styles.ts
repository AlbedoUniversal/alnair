import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	link: {
		fontSize: rem(16),
		fontWeight: 600,
		textDecoration: 'none',
		color: theme.colors.gray[3],
		marginInlineStart: rem(16),
		'&:hover': {
			textDecoration: 'none',
			color: '#0B63E5',
		},
	},
}));
