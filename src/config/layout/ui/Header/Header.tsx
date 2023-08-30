import {
	Anchor,
	Container,
	createStyles,
	Group,
	Header,
	rem,
} from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
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
		paddingInlineEnd: rem(16),
		borderInlineEnd: '1px solid #E6E8EC',
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
		marginInlineStart: rem(16),
		'&:hover': {
			textDecoration: 'none',
			color: '#0B63E5',
		},
	},
	select: {
		border: 'none',
	},
	send: {
		paddingInline: rem(18),
		paddingBlock: rem(8),
		backgroundColor: theme.colors.blue[4],
		borderRadius: theme.radius.sm,
		fontWeight: 600,
		'&:hover': {
			textDecoration: 'none',
		},
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
				<Group style={{ gap: 0 }}>
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
					<IconHeart style={{ strokeWidth: '1.3px', color: '#0B63E5' }} />
					<Switcher />
					<Anchor className={classes.send}>Send Application</Anchor>
				</Group>
			</Container>
		</Header>
	);
};
