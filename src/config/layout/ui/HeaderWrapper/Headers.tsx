import {
	Anchor,
	Container,
	createStyles,
	Group,
	Header,
	rem,
	Text,
} from '@mantine/core';

import SearchSVG from 'public/icons/gg_search.svg';
import PhoneSVG from 'public/icons/Phone.svg';
import LogoSVG from 'public/logos/logo.svg';

import { Switcher } from './LanguageSwitcher';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		fontSize: rem(23),
		fontWeight: 500,
		lineHeight: 1.1,
		color: '#061C3D',
	},
	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
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
	select: {
		border: 'none',
	},
}));

export const Headers = ({ dir }: { dir: string }) => {
	const { classes } = useStyles();

	return (
		<Header height={HEADER_HEIGHT} dir={dir}>
			<Container className={classes.inner} size="xl">
				<Group>
					<Anchor
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							textDecoration: 'none',
						}}
						href="/"
					>
						<LogoSVG
							style={{
								width: '30px',
								height: '30px',
								color: '#0B63E5',
								textDecoration: 'none',
							}}
						/>
						<Text className={classes.name}>Alnair</Text>
					</Anchor>
					<Anchor
						href="#projects"
						className={classes.link}
						style={{
							borderLeft: '1px solid #E6E8EC',
							paddingLeft: '20px',
						}}
					>
						Projects
					</Anchor>
					<Anchor href="#contacts" className={classes.link}>
						Contacts
					</Anchor>
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