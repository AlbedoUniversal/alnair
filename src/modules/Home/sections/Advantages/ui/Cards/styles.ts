import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	leftColumn: {
		transform: 'translateY(-56px)',
		rowGap: rem(24),
		margin: 0,
	},
	rightColumn: {
		rowGap: rem(24),
		margin: 0,
	},
}));
