import {
	Button,
	Col,
	Container,
	createStyles,
	Grid,
	rem,
	SimpleGrid,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core';
import {
	IconCircleDotted,
	IconFileCode,
	IconFlame,
	IconReceiptOff,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
	},

	title: {
		fontSize: rem(36),
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}));

const features = [
	{
		icon: IconReceiptOff,
		title: 'News',
		description:
			'This section is particularly useful for those who keep track of new projects. Here, you will find the latest news about sales launches, the addition of new projects to our platform, as well as information about events organized by developers',
	},
	{
		icon: IconFileCode,
		title: 'Knowledge base',
		description:
			'This section is particularly useful for beginners. Here you will find information about the principles of our system, key features, and their descriptions. Our system may seem complex, and this section will help you better understand how to make the most of its capabilities',
	},
	{
		icon: IconCircleDotted,
		title: 'Release Notes',
		description:
			'Our service is rapidly evolving, and we are constantly adding new useful features. In this section, you will find the update history of our system, which reflects all the releases and implemented enhancements.',
	},
	{
		icon: IconFlame,
		title: 'Flexible',
		description:
			'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
	},
];

export function Advantages() {
	const { classes } = useStyles();

	const items = features.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon
				size={44}
				radius="md"
				variant="gradient"
				gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
			>
				<feature.icon size={rem(26)} stroke={1.5} />
			</ThemeIcon>
			<Text fz="lg" mt="sm" fw={500}>
				{feature.title}
			</Text>
			<Text c="dimmed" fz="sm">
				{feature.description}
			</Text>
		</div>
	));

	return (
		<Container pb="160px" size="xl">
			<Grid gutter={80}>
				<Col span={12} md={5}>
					<Title className={classes.title} order={2}>
						A fully featured React components library for your next project
					</Title>
					<Text c="dimmed">
						Effortlessly maintain up-to-date information on your website or CRM
						system with our feed and web sites.
					</Text>

					<Button
						variant="gradient"
						gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
						size="lg"
						radius="md"
						mt="xl"
					>
						Get started
					</Button>
				</Col>
				<Col span={12} md={7}>
					<SimpleGrid
						cols={2}
						spacing={30}
						breakpoints={[{ maxWidth: 'md', cols: 1 }]}
					>
						{items}
					</SimpleGrid>
				</Col>
			</Grid>
		</Container>
	);
}
