import { Box, Card, Group, Text } from '@mantine/core';

import CircleSVG from 'public/icons/Ellipse 2.svg';

import { useStyles } from '../styles';

export const TitleSection = ({
	title,
	district,
}: {
	title: string;
	district: any;
}) => {
	const { classes } = useStyles();
	return (
		<Card.Section className={classes.section} style={{ height: '70px' }}>
			<Group className={classes.titles}>
				<Text fz="md" fw="bold">
					{title}
				</Text>
				<Box>{district()}</Box>
			</Group>
		</Card.Section>
	);
};
