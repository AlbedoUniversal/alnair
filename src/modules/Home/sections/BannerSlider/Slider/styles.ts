import { createStyles, getStylesRef, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	controls: {
		ref: getStylesRef('controls'),
		justifyContent: 'flex-start',
		gap: rem(20),
		bottom: rem(-200),
	},
	control: {
		ref: getStylesRef('control'),
		backgroundColor: 'transparent',
		border: 'none',
	},
}));
