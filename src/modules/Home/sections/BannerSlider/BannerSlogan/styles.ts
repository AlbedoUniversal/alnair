import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		position: 'absolute',
		paddingInline: rem(70),
		zIndex: 10,
		top: rem(130),
	},
}));
