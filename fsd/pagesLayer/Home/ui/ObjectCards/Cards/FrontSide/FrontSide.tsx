import {
	Badge,
	Card,
	Group,
	Text,
	rem,
	createStyles,
	Image,
} from '@mantine/core';
import parser from 'html-react-parser';
const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
		borderRadius: rem(10),
	},

	imageSection: {
		paddingBlockStart: 0,
		display: 'flex',
		borderRadius: rem(8),
	},

	section: {
		padding: theme.spacing.md,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
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
		paddingBlock: rem(12),
	},
}));

interface FrontSideProps {
	title: string;
	districts: string;
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
	priceMax,
	currency,
	dir,
	object,
	src,
	status,
	open,
}: FrontSideProps) => {
	const { classes } = useStyles();
	return (
		<Card className={classes.card} onClick={open} p={0}>
			{object.districts && (
				<Badge className={classes.rating}>{parser(districts)}</Badge>
			)}
			<Card.Section className={classes.imageSection}>
				<Image src={src} height={200} />
			</Card.Section>
			<Card.Section className={classes.section} style={{ height: '120px' }}>
				<Group
					style={{
						flexDirection: 'column',
						alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start',
					}}
				>
					<Text fz="sm">{parser(title)}</Text>

					<Text fz="sm">{parser(districts)}</Text>
				</Group>
			</Card.Section>
			<Card.Section
				className={classes.section}
				style={{
					height: '200px',

					msScrollbarBaseColor: 'black',
				}}
			>
				<Group
					style={{
						flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
					}}
				>
					{amenities.map((amenity: any) => {
						return <Badge>{amenity}</Badge>;
					})}
				</Group>
			</Card.Section>
			<Card.Section className={classes.section} style={{ height: '100px' }}>
				<Group
					style={{
						flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
					}}
				>
					<Text>
						from: {priceMin} {currency}
					</Text>
					<Text>
						to: {priceMax} {currency}
					</Text>
				</Group>
			</Card.Section>
		</Card>
	);
};