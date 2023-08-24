import {
	createStyles,
	Header,
	Container,
	Group,
	rem,
	Text,
	Anchor,
	Select,
} from '@mantine/core';
import PhoneSVG from 'public/icons/Phone.svg';
import SearchSVG from 'public/icons/gg_search.svg';
import { useContext } from 'react';

import LogoSVG from 'public/logos/logo.svg';
import { DirContext } from '@/shared/lib/context/DirContext/DirContext';

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

const langs = ['ru', 'en', 'ar'];

export const Headers = () => {
	const { dir, setDir, language, setLanguage } = useContext(DirContext);
	const { classes } = useStyles();
	const handleSwitchLang = (lang: string) => {
		setLanguage(lang);
		if (lang === 'ar') {
			setDir('rtl');
		} else {
			setDir('ltr');
		}
	};

	return (
		<Header height={HEADER_HEIGHT}>
			<Container
				className={classes.inner}
				size="xl"
				style={{ flexDirection: dir === 'ar' ? 'row-reverse' : 'row' }}
			>
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

					<Select
						data={langs}
						placeholder={language}
						value={language}
						onChange={handleSwitchLang}
						className={classes.select}
						styles={{
							input: {
								width: '70px',
								border: 'none',
								paddingLeft: `calc(2.35rem / 1.5)`,
								paddingRight: 0,
							},
							dropdown: {
								width: '70px',
							},
						}}
					/>
				</Group>
			</Container>
		</Header>
	);
};
