import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	icon: {
		color: theme.colors.blue[2],

		'&:hover': {
			color: theme.colors.blue[3],
		},
	},
}));
