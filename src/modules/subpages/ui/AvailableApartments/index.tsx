import { Card, Container, Group, Image, rem, Text, Title } from '@mantine/core';

import { useStyles } from './styles';

const rooms = [
	'1 Bedroom Apartment',
	'2 Bedrooms Apartment',
	'3 Bedrooms Apartment',
	'4 Bedrooms Apartment',
];
export const AvailableApartments = ({
	photo,
	apartments,
	locale,
}: {
	photo: string;
	apartments: any;
	locale: string;
}) => {
	const { classes } = useStyles();
	return (
		<Container size="xl" mt={rem(120)} pb={rem(120)}>
			<Title mb={rem(60)}>Available Apartments </Title>
			<Group>
				{apartments.map((apartment: any, index: number) => (
					<Card key={apartment.key} variant="card" p={0} shadow="xl">
						<Card.Section className={classes.imageSection}>
							<Image src={photo} height={250} />
						</Card.Section>
						<Card.Section
							className={classes.section}
							style={{ height: rem(20) }}
						>
							{index === 0 ? (
								<Text fw={600}>{index + 1} Bedroom Apartment</Text>
							) : (
								<Text fw={600}>{index + 1} Bedrooms Apartment</Text>
							)}
						</Card.Section>
						<Card.Section
							className={classes.section}
							style={{ height: rem(40) }}
						>
							<Text fw={600}>
								Available amount:
								<span style={{ fontWeight: 400 }}> {apartment.count}</span>
							</Text>
						</Card.Section>
						<Card.Section
							className={classes.section}
							style={{ height: rem(100) }}
						>
							<Group
								style={{ flexDirection: 'column', alignItems: 'flex-start' }}
							>
								<Group>
									<Text fw={600}>
										from:{' '}
										<span style={{ fontWeight: 400 }}>
											{apartment.min_area[0].m2}m2
										</span>
									</Text>
									<Text fw={600}>
										to:{' '}
										<span style={{ fontWeight: 400 }}>
											{apartment.max_area[0].m2}m2
										</span>
									</Text>
								</Group>
								<Group>
									<Text fw={600}>
										from:{' '}
										<span style={{ fontWeight: 400 }}>
											{apartment.min_price_m2} AED
										</span>
									</Text>
									<Text fw={600}>
										to:{' '}
										<span style={{ fontWeight: 400 }}>
											{apartment.max_price_m2} AED
										</span>
									</Text>
								</Group>
							</Group>
						</Card.Section>
					</Card>
				))}
			</Group>
		</Container>
	);
};
