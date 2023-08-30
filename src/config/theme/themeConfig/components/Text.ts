import { type MantineTheme } from '@mantine/core';

const Text = {
	defaultProps: {
		color: 'blue.9',
		sizes: 'sm',
	},
	sizes: {
		// xs: (theme: MantineTheme) => ({
		// 	root: {
		// 		lineHeight: 1.25,

		// 		[theme.fn.smallerThan(769)]: {
		// 			fontSize: theme.fontSizes.xs,
		// 		},
		// 	},
		// }),
		sm: (theme: MantineTheme) => ({
			root: {
				lineHeight: 1.4,

				[theme.fn.smallerThan(769)]: {
					fontSize: theme.fontSizes.sm,
				},
			},
		}),
		md: (theme: MantineTheme) => ({
			root: {
				lineHeight: 1.5,

				[theme.fn.smallerThan(769)]: {
					fontSize: theme.fontSizes.md,
				},
			},
		}),
		// lg: (theme: MantineTheme) => ({
		// 	root: {
		// 		lineHeight: 1.4,

		// 		[theme.fn.smallerThan(769)]: {
		// 			fontSize: theme.fontSizes.md,
		// 		},
		// 	},
		// }),
		xl: (theme: MantineTheme) => ({
			root: {
				lineHeight: 1.4,

				[theme.fn.smallerThan(769)]: {
					fontSize: theme.fontSizes.sm,
				},
			},
		}),
		// xxl: (theme: MantineTheme) => ({
		// 	root: {
		// 		lineHeight: 1.4,

		// 		[theme.fn.smallerThan(769)]: {
		// 			fontSize: theme.fontSizes.lg,
		// 		},
		// 	},
		// }),
	},
	// variants: {
	// 	primaryLink: (theme: MantineTheme) => ({
	// 		root: {
	// 			cursor: 'pointer',
	// 			transition: `color ${theme.other.vars.animTiming.sm} ease-in-out`,
	// 			fontWeight: 400,
	// 			color: theme.colors.blue[5],
	// 			'&:hover': {
	// 				color: theme.colors.blue[6],
	// 			},
	// 			'&:active': {
	// 				color: theme.colors.blue[7],
	// 			},
	// 		},
	// 	}),
	// 	secondaryLink: (theme: MantineTheme) => ({
	// 		root: {
	// 			cursor: 'pointer',
	// 			transition: `color ${theme.other.vars.animTiming.sm} ease-in-out`,
	// 			'&:hover': {
	// 				color: theme.colors.red[6],
	// 			},
	// 			'&:active': {
	// 				color: theme.colors.red[7],
	// 			},
	// 		},
	// 	}),
	// },
};

export default Text;
