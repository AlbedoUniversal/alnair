import {
	Anchor,
	Container,
	createStyles,
	Group,
	Header,
	rem,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';

import SearchSVG from 'public/icons/gg_search.svg';
import PhoneSVG from 'public/icons/Phone.svg';
import LogoSVG from 'public/logos/logo.svg';

import { Switcher } from './LanguageSwitcher';

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		marginInlineEnd: rem(16),
	},
	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		fontSize: rem(16),
		fontWeight: 600,
		textDecoration: 'none',
		color: theme.colors.gray[3],
		'&:hover': {
			textDecoration: 'none',
			color: '#0B63E5',
		},
	},
	select: {
		border: 'none',
	},
}));

export const Headers = ({ dir }: { dir: string }) => {
	const { classes } = useStyles();
	const { t } = useTranslation('layout');
	const mainLinks = [
		{ name: t('contacts'), link: '#contacts' },
		{ name: t('projects'), link: '#projects' },
	];
	return (
		<Header height={HEADER_HEIGHT} dir={dir}>
			<Container className={classes.inner} size="xl">
				<Group>
					<Anchor
						href="/"
						className={classes.logo}
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<LogoSVG />
					</Anchor>
					{mainLinks.map((link) => (
						<Anchor key={link.name} href={link.link} className={classes.link}>
							{link.name}
						</Anchor>
					))}
				</Group>

				<Group>
					<Anchor
						href="#projects"
						style={{
							display: 'flex',
							alignItems: 'center',
							textDecoration: 'none',
						}}
					>
						<SearchSVG />
					</Anchor>
					<Anchor
						href="tel:+971506039118"
						style={{
							display: 'flex',
							alignItems: 'center',
							textDecoration: 'none',
						}}
					>
						<PhoneSVG />
					</Anchor>

					<Switcher />
				</Group>
			</Container>
		</Header>
	);
};
