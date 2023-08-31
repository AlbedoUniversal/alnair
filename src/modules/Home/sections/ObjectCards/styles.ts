import { createStyles, getStylesRef, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	filters: {
		background: '#fff',
		zIndex: 10,
		position: 'relative',
		borderRadius: '8px',
	},
	container: {
		marginBlockStart: rem(-25),
		paddingBlockEnd: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
}));
