import { Container, createStyles, Text } from '@mantine/core';

const useStyle = createStyles((theme) => ({
	container: {
		justifyContent: 'center',
		display: 'flex',
		width: '100vw',
	},
}));
export const Slogan = () => {
	const { classes } = useStyle();
	return (
		<Container className={classes.container}>
			<Text fz={40}>Your dream apartment is closer than you think.</Text>
		</Container>
	);
};
