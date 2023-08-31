import { createStyles, rem } from '@mantine/core';

const HEADER_HEIGHT = rem(80);
export const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));
