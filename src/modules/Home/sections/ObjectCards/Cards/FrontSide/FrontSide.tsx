import {
	Badge,
	Card,
	createStyles,
	Group,
	Image,
	rem,
	Text,
} from '@mantine/core';

import CircleSVG from 'public/icons/Ellipse 2.svg';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
		borderRadius: rem(10),
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},

	imageSection: {
		paddingBlockStart: 0,
		display: 'flex',
		borderRadius: rem(8),
	},

	section: {
		margin: theme.spacing.md,
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
}));

interface FrontSideProps {
	title: string;
	districts: any;
	amenities: any;
	priceMin: string;
	priceMax: string;
	currency: string;
	dir: string;
	object: any;
	src: string;
	status: string;
	open: () => void;
}
export const FrontSide = ({
	title,
	districts,
	amenities,
	priceMin,
	currency,
	object,
	src,
	open,
}: FrontSideProps) => {
	const { classes } = useStyles();
	const { length } = districts[0];

	const district = () => {
		if (length > 1) {
			return (
				<>
					<Text>{districts[0][0]}</Text>
					<Text>{districts[0][1]}</Text>
				</>
			);
		}

		return <Text>{districts[0][0]}</Text>;
	};

	return (
		<Card className={classes.card} onClick={open} p={0}>
			{object.districts && (
				<Badge className={classes.rating}>{district()}</Badge>
			)}
			<Card.Section className={classes.imageSection}>
				<Image src={src} height={200} />
			</Card.Section>
			<Card.Section className={classes.section} style={{ height: '100px' }}>
				<Group>
					<Text fz="sm">{title}</Text>
					<CircleSVG style={{ alignSelf: 'center' }} />
					{district()}
				</Group>
			</Card.Section>
			<Card.Section
				className={classes.section}
				style={{
					height: '100px',
				}}
			>
				<Group
					style={{
						gap: '5px',
					}}
				>
					{amenities.map((amenity: string) => (
						<Text fz={12} color="#0B63E5" key={amenity}>
							{amenity}
						</Text>
					))}
				</Group>
			</Card.Section>
			<Card.Section className={classes.section} style={{ height: '60px' }}>
				<Group>
					<Text>
						from {priceMin} {currency}
					</Text>
				</Group>
			</Card.Section>
		</Card>
	);
};
