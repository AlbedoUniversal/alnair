import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		marginBlockStart: rem(-25),
		paddingBlockEnd: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
	input: { border: 'none', borderRadius: 0, borderRight: '1px solid #E6E8EC' },
	lastInput: { border: 'none' },
	iconInput: { top: '2px' },
}));
