import { type ButtonStylesParams, rem } from '@mantine/core';

const Button = {
	defaultProps: {
		variant: 'filled',
		size: 'lg',
	},
	styles(theme: any, { compact }: ButtonStylesParams) {
		return {
			root: {
				paddingInline: rem(30),
				marginTop: rem(40),
			},
		};
	},
	variants: {
		filled: (theme: any) => ({
			root: {
				transition: 'background-color 0.2s ease-in-out',
			},
		}),
		outline: (theme: any) => ({
			root: {
				color: theme.colors.blue,
			},
		}),
	},
};

export default Button;
