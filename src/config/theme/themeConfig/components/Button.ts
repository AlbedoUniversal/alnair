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
			},
		};
	},
	variants: {
		filled: (theme: any) => ({
			root: {
				transition: 'background-color 0.2s ease-in-out',
				marginBlockStart: rem(40),
			},
		}),
		outline: (theme: any) => ({
			root: {
				color: theme.colors.blue,
				border: 'none',
			},
		}),
		gradient: (theme: any) => ({
			root: {
				gradient: { deg: 133, from: 'blue', to: 'cyan' },
				size: 'lg',
				borderRadius: rem(20),
			},
		}),
	},
};

export default Button;
