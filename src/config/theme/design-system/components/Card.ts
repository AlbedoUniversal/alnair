import { type CardProps, type MantineTheme, rem } from '@mantine/core';

const Card = {
	defaultProps: {
		variant: 'default',
		size: 'lg',
		p: 0,
	},
	styles(theme: MantineTheme) {
		return {
			root: {
				height: 'fit-content',
			},
		};
	},
	variants: {
		card: (theme: MantineTheme) => ({
			root: {
				backgroundColor:
					theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
				borderRadius: theme.radius.sm,
				transition: 'transform 0.3s',
				'&:hover': {
					transform: 'scale(1.02)',
				},
			},
		}),
	},
};

export default Card;
