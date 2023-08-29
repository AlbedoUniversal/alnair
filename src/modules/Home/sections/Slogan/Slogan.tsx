import { Container, createStyles, Flex, Grid, Text } from '@mantine/core';

const useStyle = createStyles((theme) => ({
	container: {},
}));
export const Slogan = () => {
	const { classes } = useStyle();
	return (
		<Container className={classes.container} pb="120px" size="xl">
			<Flex direction={'column'} gap={'30px'}>
				<Text fz={40}>Your dream apartment is closer than you think.</Text>
				<Text fz={20}>
					This website provides comprehensive information about the Alnair
					service, helps maximize the efficient utilization of all its features,
					and offers a convenient way to provide feedback. Here, you can find
					answers to most of your questions, and if something remains unclear,
					feel free to reach out to us. Below are the main sections of our
					website and their brief descriptions.
				</Text>
			</Flex>
		</Container>
	);
};
