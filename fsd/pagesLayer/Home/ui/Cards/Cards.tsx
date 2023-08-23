import {
	Badge,
	Button,
	Card,
	Container,
	createStyles,
	Grid,
	Group,
	Image,
	rem,
	Text,
} from '@mantine/core';

import { data } from './data';
import { useContext } from 'react';
import { DirContext } from '@/shared/lib/context/DirContext/DirContext';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
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

const langs = ['en', 'ar'];
export const Cards = () => {
	const { classes } = useStyles();
	const { dir, language } = useContext(DirContext);
	return (
		<Container>
			<Grid gutter={50}>
				{data.map((item, i) => {
					const translations = {
						en: {
							name: item.feed.content['realty-feed'].offers.building_name.en,
							title: item.feed.content['realty-feed'].offers.title.en,
							amenities: {
								room:
									item.feed.content['realty-feed'].offers.rooms_count &&
									item.feed.content['realty-feed'].offers.rooms_count.en,
								concierge:
									item.feed.content['realty-feed'].offers.concierge &&
									item.feed.content['realty-feed'].offers.concierge.en,
							},
						},
						ar: {
							name: item.feed.content['realty-feed'].offers.building_name.ar,
							title: item.feed.content['realty-feed'].offers.title.ar,
							amenities: {
								room:
									item.feed.content['realty-feed'].offers.rooms_count &&
									item.feed.content['realty-feed'].offers.rooms_count.ar,
								concierge:
									item.feed.content['realty-feed'].offers.concierge &&
									item.feed.content['realty-feed'].offers.concierge.ar,
							},
						},
					};
					return (
						<Grid.Col key={i} span={4}>
							<Card withBorder radius="md" className={classes.card}>
								<Card.Section className={classes.imageSection}>
									<Image
										src={
											item.feed.content['realty-feed'].offers.levels_photos
												.level_photo.image
										}
										alt="photo"
									/>
								</Card.Section>
								<Card.Section className={classes.section}>
									<Group
										position="apart"
										style={{
											flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
										}}
									>
										<div>
											<Text fw={500}>{translations[language].name}</Text>
											<Text fz="xs" c="dimmed">
												{translations[language].title}
											</Text>
										</div>
										<Badge variant="outline">More details</Badge>
									</Group>
								</Card.Section>
								<Card.Section className={classes.section}>
									<Group
										style={{
											flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
										}}
									>
										{item.feed.content['realty-feed'].offers.rooms_count && (
											<Badge>{translations[language].amenities.room}</Badge>
										)}
										{item.feed.content['realty-feed'].offers.concierge && (
											<Badge>
												{translations[language].amenities.concierge}
											</Badge>
										)}
									</Group>
								</Card.Section>
								<Card.Section className={classes.section}>
									<Group
										position="apart"
										style={{
											flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
										}}
									>
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
						</Grid.Col>
					);
				})}
			</Grid>
		</Container>
	);
};
