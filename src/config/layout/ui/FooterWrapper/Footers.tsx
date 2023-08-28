import {
	Anchor,
	Container,
	createStyles,
	Grid,
	Group,
	rem,
	Text,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';

import LogoSVG from 'public/logos/logo.svg';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(15),
	},

	inner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		gap: rem(20),
		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},
	},
	logoGroup: {
		alignItems: 'flex-start',
		WebkitBoxAlign: 'start',
	},
	link: {
		textDecoration: 'none',
		color: theme.colors.dark,
		lineHeight: 1.5,
		fontSize: rem(16),

		'&:hover': {
			textDecoration: 'none',
			color: '#0B63E5',
		},
	},
}));

export const Footers = ({ dir }: { dir: string }) => {
	const { classes } = useStyles();
	const { t } = useTranslation('layout');

	const mainLinks = [
		{ name: t('projects'), link: '#projects' },
		{ name: t('reviews'), link: '/' },
		{ name: t('news'), link: '/' },
		{ name: t('contact'), link: '#contacts' },
	];
	return (
		<div className={classes.footer} dir={dir}>
			<Container className={classes.inner} size="xl">
				<Group pt={30} pb={38} position="apart">
					<Anchor href="/" style={{ textDecoration: 'none' }}>
						<Group mr={300} className={classes.logoGroup}>
							<LogoSVG
								style={{ width: '40px', height: '40px', color: '#0B63E5' }}
							/>
							<Text fz={30} fw={500} lh={1.2} color="#061C3D">
								Alnair
							</Text>
						</Group>
					</Anchor>
					<Grid className={classes.links}>
						{mainLinks.map((link) => (
							<Grid.Col span={6} key={link.name}>
								<Anchor<'a'>
									href={link.link}
									key={link.name}
									fz={16}
									lh={1.5}
									color="#061C3D"
									className={classes.link}
								>
									{link.name}
								</Anchor>
							</Grid.Col>
						))}
					</Grid>
				</Group>
				<div>
					<Text color="#6F7886" fz={14} lh={1.5}>
						{t('address')}
					</Text>
					<Text color="#6F7886" fz={14} lh={1.5}>
						{t('rights')}
					</Text>
				</div>
			</Container>
		</div>
	);
};
