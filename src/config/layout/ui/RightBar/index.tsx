import { Button, Group } from '@mantine/core';
// import { IconHeart } from '@tabler/icons-react';
import Link from 'next/link';

import SearchSVG from 'public/icons/gg_search.svg';
import PhoneSVG from 'public/icons/Phone.svg';

import { Switcher } from '../LanguageSwitcher';

import { useStyles } from './styles';

export const RightBar = () => {
	const { classes } = useStyles();
	return (
		<Group>
			<Link href="#projects" className={classes.link}>
				<SearchSVG />
			</Link>
			<Link href="tel:+971506039118" className={classes.link}>
				<PhoneSVG />
			</Link>
			{/* <IconHeart className={classes.heart} /> */}
			<Switcher />
			<Button variant="sendHeader">Send Application</Button>
		</Group>
	);
};
