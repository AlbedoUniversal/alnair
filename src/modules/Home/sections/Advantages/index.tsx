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
import { useTranslation } from 'next-i18next';

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

export function Advantages() {
	const { classes } = useStyles();
	const { t } = useTranslation('advantages');
	const features = [
		{
			icon: IconReceiptOff,
			title: t('itemNews'),
			description: t('descriptionNews'),
		},
		{
			icon: IconFileCode,
			title: t('itemKnowledge'),
			description: t('descriptionKnowledge'),
		},
		{
			icon: IconCircleDotted,
			title: t('itemRealese'),
			description: t('descriptionRealese'),
		},
		{
			icon: IconFlame,
			title: t('itemFlexible'),
			description: t('descriptionFlexible'),
		},
	];
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
						{t('title')}
					</Title>
					<Text c="dimmed">{t('description')}</Text>

					<Button
						variant="gradient"
						// gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
						// size="lg"
						// radius="md"
						mt="xl"
					>
						{t('start')}
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
