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

import FaceSVG from 'public/icons/facebook.svg';
import InstaSVG from 'public/icons/insta.svg';
import TwitterSVG from 'public/icons/twitter.svg';
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
		marginInlineEnd: rem(300),
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
	const { i18n, t } = useTranslation('layout');
	const arLng = i18n.language === 'ar';
	const mainLinks = [
		{ name: t('projects'), link: '#projects' },
		{ name: t('reviews'), link: '/' },
		{ name: t('news'), link: '/' },
		{ name: t('contacts'), link: '#contacts' },
	];
	return (
		<div className={classes.footer} dir={dir}>
			<Container className={classes.inner} size="xl">
				<Group pt={30} pb={38} position="apart">
					<Anchor href="/" style={{ textDecoration: 'none' }}>
						<Group className={classes.logoGroup}>
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
					<Group style={{ flexDirection: 'column' }}>
						<Anchor
							className={classes.link}
							href="tel: +971506039118"
							fw={500}
							style={{
								color: '#0B63E5',
							}}
						>
							{!arLng && <span>+</span>}9&nbsp;715&nbsp;060&nbsp;391&nbsp;18
							{arLng && <span>+</span>}
						</Anchor>
						<Group>
							<Anchor href="/">
								<InstaSVG />
							</Anchor>
							<Anchor href="/">
								<TwitterSVG />
							</Anchor>
							<Anchor href="/">
								<FaceSVG />
							</Anchor>
						</Group>
					</Group>
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
