import {
	Badge,
	Button,
	Card,
	Center,
	createStyles,
	Group,
	Image,
	rem,
	Text,
} from '@mantine/core';

import { data } from './data';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		maxHeight: '600px',
		maxWidth: '300px',
	},

	imageSection: {
		padding: theme.spacing.md,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
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
}));

export const Cards = () => {
	const { classes } = useStyles();

	return (
		<Center style={{ gap: '15px' }}>
			{data.map((item, i) => (
				<Card withBorder radius="md" className={classes.card} key={i}>
					<Card.Section className={classes.imageSection}>
						<Center>
							<Image
								src={
									item.feed.content['realty-feed'].offers.levels_photos
										.level_photo.image
								}
								alt="photo"
							/>
						</Center>
					</Card.Section>
					<Card.Section className={classes.section}>
						<Group position="apart">
							<div>
								<Text fw={500}>
									{item.feed.content['realty-feed'].offers.building_name.en}
									{item.feed.content['realty-feed'].offers.title.en}
								</Text>
								<Text fz="xs" c="dimmed">
									{item.feed.content['realty-feed'].offers.title.en}
								</Text>
							</div>
							<Badge variant="outline">More details</Badge>
						</Group>
					</Card.Section>
					<Card.Section className={classes.section}>
						<Group position="apart">
							<div>
								<Text fz="m" fw={600} sx={{ lineHeight: 1 }}>
									{item.feed.content['realty-feed'].offers.price.min}
									{item.feed.content['realty-feed'].offers.price.currency}
								</Text>
							</div>

							<Button radius="xl">Buy now</Button>
						</Group>
					</Card.Section>
				</Card>
			))}
		</Center>
	);
};
