import { Text } from '@mantine/core';

import { useStyles } from './styles';

export const NothingFound = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.container}>
			<Text fz="xl">Sorry! Nothing is found.</Text>
		</div>
	);
};
