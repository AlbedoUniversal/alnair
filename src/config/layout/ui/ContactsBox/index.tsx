import { Group, SimpleGrid, Text } from '@mantine/core';
import Link from 'next/link';

import FaceSVG from 'public/icons/facebook.svg';
import InstaSVG from 'public/icons/insta.svg';
import TwitterSVG from 'public/icons/twitter.svg';

import { useStyles } from './ContactsBox.styles';

export const ContactsBox = () => {
	const { classes } = useStyles();

	return (
		<SimpleGrid spacing={24}>
			<Link href={'tel:+80000000000'}>
				<Text size="xl" fw="500">
					8-000-000-00-00
				</Text>
			</Link>
			<Group>
				<Link href="/">
					<InstaSVG className={classes.icon} />
				</Link>
				<Link href="/">
					<TwitterSVG className={classes.icon} />
				</Link>
				<Link href="/">
					<FaceSVG className={classes.icon} />
				</Link>
			</Group>
		</SimpleGrid>
	);
};
