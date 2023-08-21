import {
	Anchor,
	Burger,
	Container,
	createStyles,
	Group,
	Header,
	rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';

import LogoSVG from 'public/logos/logo.svg';

const mainLinks = [
	{ name: 'Cards', link: '/' },
	{ name: 'Sortable Table', link: '/sortable' },
	{ name: 'Release Notes', link: '/' },
];
const HEADER_HEIGHT = rem(84);
const useStyles = createStyles((theme) => ({
	header: {
		backgroundColor: theme.fn.variant({
			variant: 'filled',
			color: theme.primaryColor,
		}).background,
		borderBottom: 0,
	},

	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	links: {
		paddingTop: theme.spacing.lg,
		height: HEADER_HEIGHT,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		textTransform: 'uppercase',
		fontSize: rem(13),
		color: theme.white,
		padding: `${rem(7)} ${theme.spacing.sm}`,
		fontWeight: 700,
		borderBottom: `${rem(2)} solid transparent`,
		transition: 'border-color 100ms ease, opacity 100ms ease',
		opacity: 0.9,
		borderTopRightRadius: theme.radius.sm,
		borderTopLeftRadius: theme.radius.sm,

		'&:hover': {
			opacity: 1,
			textDecoration: 'none',
		},
	},

	secondaryLink: {
		color: theme.colors[theme.primaryColor][1],
		fontSize: theme.fontSizes.xs,
		textTransform: 'uppercase',
		transition: 'color 100ms ease',

		'&:hover': {
			color: theme.white,
			textDecoration: 'none',
		},
	},

	mainLinkActive: {
		color: theme.white,
		opacity: 1,
		borderBottomColor:
			theme.colorScheme === 'dark'
				? theme.white
				: theme.colors[theme.primaryColor][5],
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
				.background!,
			0.1
		),
	},
}));
export const Headers = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes, cx } = useStyles();
	const [active, setActive] = useState(0);

	return (
		<Header height={HEADER_HEIGHT} mb={120} className={classes.header}>
			<Container className={classes.inner}>
				<div style={{ color: '#fff' }}>
					<LogoSVG style={{ width: '70px', height: '70px' }} />
				</div>

				<div className={classes.links}>
					<Group spacing={0} position="right" className={classes.mainLinks}>
						{mainLinks.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className={cx(classes.mainLink, {
									[classes.mainLinkActive]: index === active,
								})}
								onClick={() => {
									setActive(index);
								}}
							>
								{item.name}
							</Link>
						))}
					</Group>
				</div>
				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
					color="#fff"
				/>
			</Container>
		</Header>
	);
};
