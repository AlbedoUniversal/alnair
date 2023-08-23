import { Anchor, Container, createStyles, Group, rem } from '@mantine/core';

import LogoSVG from 'public/logos/logo.svg';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(120),
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},
	},
}));

const mainLinks = [
	{ name: 'Cards', link: '/' },
	{ name: 'Sortable table', link: '/sortable' },
];

export const Footers = () => {
	const { classes } = useStyles();
	const items = mainLinks.map((link) => (
		<Anchor<'a'> color="dimmed" key={link.name} href={link.link} size="sm">
			{link.name}
		</Anchor>
	));

	return (
		<div className={classes.footer}>
			<Container className={classes.inner} size="lg">
				<LogoSVG style={{ width: '60px', height: '60px', color: '#4F70F9' }} />
				<Group className={classes.links}>{items}</Group>
			</Container>
		</div>
	);
};
