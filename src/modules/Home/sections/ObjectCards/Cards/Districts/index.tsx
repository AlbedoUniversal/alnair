import { Badge } from '@mantine/core';

import { useStyles } from '../styles';

export const Districts = ({
	district,
	arLng,
}: {
	district: any;
	arLng: boolean;
}) => {
	const { classes } = useStyles();

	return (
		<Badge className={arLng ? classes.ratingRtl : classes.rating}>
			{district()}
		</Badge>
	);
};
