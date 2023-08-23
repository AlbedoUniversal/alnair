import {
	createStyles,
	Header,
	Container,
	Group,
	Button,
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
				size="lg"
				style={{ flexDirection: dir === 'ar' ? 'row-reverse' : 'row' }}
			>
				<Group>
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<LogoSVG
							style={{ width: '30px', height: '30px', color: '#0B63E5' }}
						/>
						<Text className={classes.name}>Alnair</Text>
					</div>
					<Anchor
						href="/projects"
						className={classes.link}
						style={{ borderLeft: '1px solid #E6E8EC', paddingLeft: '20px' }}
					>
						Projects
					</Anchor>
					<Anchor href="/projects" className={classes.link}>
						Contacts
					</Anchor>
				</Group>

				<Group>
					<SearchSVG />
					<PhoneSVG />

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
