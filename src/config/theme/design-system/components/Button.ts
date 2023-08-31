import { type ButtonStylesParams, type MantineTheme, rem } from '@mantine/core';

const Button = {
	defaultProps: {
		variant: 'filled',
		size: 'lg',
	},
	styles(theme: any, { compact }: ButtonStylesParams) {
		return {
			root: {
				height: 'fit-content',
			},
		};
	},
	variants: {
		switcher: (theme: any) => ({
			root: {
				border: 'none',
				fontSize: rem(14),
				lineHeight: rem(18),
				fontWeight: 400,
				color: '#6F7886',
			},

			rightIcon: {
				marginLeft: rem(2),
			},
		}),
	},
	sizes: {
		xs: (theme: MantineTheme, params: ButtonStylesParams) => ({
			root: {
				fontSize: theme.fontSizes.md,
				lineHeight: 1.5,
				paddingInline: theme.spacing.xl,
				paddingBlock: theme.spacing.xs,
			},
		}),
		md: (theme: MantineTheme, params: ButtonStylesParams) => ({
			root: {
				fontSize: theme.fontSizes.md,
				height: rem(24),
				paddingInline: params.compact ? 0 : theme.spacing.md,
			},
		}),
	},
};

export default Button;
