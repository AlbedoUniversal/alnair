import { Card, Group, Text } from '@mantine/core';

import { useStyles } from '../styles';

export const SquarePrice = ({
	minPrice,
	minArea,
	maxPrice,
}: {
	minPrice: any;
	minArea: any;
	maxPrice: any;
}) => {
	const { classes } = useStyles();

	return (
		<Card.Section className={classes.section} style={{ height: '100px' }}>
			<Group position="apart">
				<Group style={{ flexDirection: 'column' }}>
					{minArea.map((area: string) => (
						<Text fz="xs" key={area}>
							from {area} m2
						</Text>
					))}
				</Group>
				<Group position="right" style={{ gap: '3px' }}>
					<Group style={{ flexDirection: 'column' }}>
						{minPrice.map((price: string) => (
							<Text fz="xs" key={price}>
								{price} -
							</Text>
						))}
					</Group>
					<Group style={{ flexDirection: 'column' }}>
						{maxPrice.map((price: string) => (
							<Text fz="xs" key={price}>
								{price} AED
							</Text>
						))}
					</Group>
				</Group>
			</Group>
		</Card.Section>
	);
};
