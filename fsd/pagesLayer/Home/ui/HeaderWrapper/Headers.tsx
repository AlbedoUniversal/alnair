import {
	createStyles,
	Menu,
	Center,
	Header,
	Container,
	Group,
	Button,
	Burger,
	rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { useContext, useState } from 'react';

import LogoSVG from 'public/logos/logo.svg';
import { DirContext } from '@/shared/lib/context/DirContext/DirContext';

const mainLinks = [
	{
		name: {
			en: 'Cards',
			ar: 'البطاقات',
		},
		link: '/',
	},
	{
		name: {
			en: 'Sortable Table',
			ar: 'جدول قابل للفرز',
		},
		link: '/sortable',
	},
];

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `${rem(10)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
		fontSize: theme.fontSizes.m,
		fontWeight: 500,
		marginInlineEnd: rem(20),
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.blue[7],
		},
	},

	linkLabel: {
		marginRight: rem(5),
	},
}));

const langs = ['en', 'ar'];

export const Headers = () => {
	const { dir, setDir, language, setLanguage } = useContext(DirContext);
	const { classes } = useStyles();
	const [opened, { toggle }] = useDisclosure(false);
	const handleSwitchLang = (lang: string) => {
		setLanguage(lang);
		if (lang === 'ar') {
			setDir('rtl');
		} else {
			setDir('ltr');
		}
	};

	return (
		<Header
			height={HEADER_HEIGHT}
			style={{
				position: 'fixed',
				backgroundColor: 'transparent',
				border: 'transparent',
				maxWidth: '100%',
			}}
			pt={40}
		>
			<Container
				className={classes.inner}
				style={{ flexDirection: dir === 'ar' ? 'row-reverse' : 'row' }}
			>
				<div style={{ color: '#fff' }}>
					<LogoSVG style={{ width: '70px', height: '70px' }} />
				</div>

				<Group spacing={0} position="right" className={classes.links}>
					{mainLinks.map((item, index) => {
						const translations = {
							en: {
								name: item.name.en,
							},
							ar: {
								name: item.name.ar,
							},
						};
						return (
							<Link key={index} href={item.link} className={classes.link}>
								{translations[language].name}
							</Link>
						);
					})}
				</Group>
				<Group>
					{langs.map((lan) => {
						return (
							<Button
								key={lan}
								className={classes.langButton}
								onClick={() => handleSwitchLang(lan)}
							>
								{lan}
							</Button>
						);
					})}
				</Group>
				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
				/>
			</Container>
		</Header>
	);
};
function setLanguage(lang: string) {
	throw new Error('Function not implemented.');
}

function setDir(arg0: string) {
	throw new Error('Function not implemented.');
}
