import { type MantineThemeOverride } from '@mantine/core';

export const globalStyles: MantineThemeOverride['globalStyles'] = (theme) => ({
	'*, *::before, *::after': {
		boxSizing: 'border-box',
	},
	button: {
		all: 'unset',
		...theme.fn.focusStyles(),
	},
});
