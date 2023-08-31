import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	link: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
	},
	heart: {
		strokeWidth: rem(1.3),
		color: theme.colors.blue[0],
	},
}));
