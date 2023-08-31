import { Card, Group, Text } from '@mantine/core';

import { useStyles } from '../styles';

export const Amenities = ({ amenities }: { amenities: [] }) => {
	const { classes } = useStyles();
	return (
		<Card.Section
			className={classes.section}
			style={{
				height: '80px',
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
	);
};
