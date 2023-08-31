import { Card, Image } from '@mantine/core';

import { useStyles } from '../styles';

export const ImageSection = ({ src }: { src: string }) => {
	const { classes } = useStyles();
	return (
		<Card.Section className={classes.imageSection}>
			<Image
				src={src}
				height={200}
				styles={{
					image: {
						borderRadius: '8px',
					},
				}}
			/>
		</Card.Section>
	);
};
