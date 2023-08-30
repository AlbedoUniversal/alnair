import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	link: {
		color: theme.colors.dark,

		'&:hover': {
			color: theme.colors.blue[5],
		},
	},
}));
