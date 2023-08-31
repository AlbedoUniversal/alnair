import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
		borderRadius: rem(10),
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.02)',
		},
	},

	imageSection: {
		paddingBlockStart: 0,
		display: 'flex',
		borderRadius: rem(8),
		margin: 0,
		marginBlockEnd: theme.spacing.xs,
	},

	section: {
		marginInline: theme.spacing.xs,
		marginBlockEnd: theme.spacing.xs,
	},

	icon: {
		marginRight: rem(5),
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[5],
	},
	rating: {
		position: 'absolute',
		top: rem(10),
		left: rem(10),
		pointerEvents: 'none',
		zIndex: 3,
		fontSize: rem(8),
		backgroundColor: theme.white,
		color: theme.black,
		paddingBlock: rem(16),
	},
	ratingRtl: {
		position: 'absolute',
		top: rem(10),
		right: rem(10),
		pointerEvents: 'none',
		zIndex: 3,
		fontSize: rem(8),
		backgroundColor: theme.white,
		color: theme.black,
		paddingBlock: rem(16),
	},
	titles: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	districtsInTitle: {
		color: theme.colors.gray[4],
	},
}));
