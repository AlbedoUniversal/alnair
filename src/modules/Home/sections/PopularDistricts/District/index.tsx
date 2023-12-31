import {
	Badge,
	Card,
	createStyles,
	Grid,
	Image,
	rem,
	Text,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
	container: {
		paddingBlockEnd: rem(120),
	},
	imageWrap: {
		background: theme.colors.dark,
	},
	image: {
		opacity: 0.6,
	},
	textLtr: {
		position: 'absolute',
		bottom: rem(10),
		left: rem(10),
		color: theme.white,
	},
	textRtl: {
		position: 'absolute',
		bottom: rem(10),
		right: rem(10),
		color: theme.white,
	},
	badgeLtr: {
		position: 'absolute',
		bottom: rem(70),
		left: rem(10),
		pointerEvents: 'none',
		zIndex: 3,
		fontSize: rem(8),
		backgroundColor: theme.white,
		color: theme.black,
		paddingBlock: rem(16),
	},
	badgeRtl: {
		position: 'absolute',
		bottom: rem(70),
		right: rem(10),
		pointerEvents: 'none',
		zIndex: 3,
		fontSize: rem(8),
		backgroundColor: theme.white,
		color: theme.black,
		paddingBlock: rem(16),
	},
}));
export const District = ({ card }: { card: any }) => {
	const { classes } = useStyles();
	const { i18n } = useTranslation();
	return (
		<Grid.Col key={card.name} span={3}>
			<Card p={0}>
				<div className={classes.imageWrap}>
					<Image
						src={card.photo}
						alt={card.name}
						height={200}
						className={classes.image}
					/>
				</div>
				<Badge
					className={
						i18n.language === 'ar' ? classes.badgeRtl : classes.badgeLtr
					}
				>
					{card.name}
				</Badge>
				<Text
					className={i18n.language === 'ar' ? classes.textRtl : classes.textLtr}
				>
					{card.description}
				</Text>
			</Card>
		</Grid.Col>
	);
};
