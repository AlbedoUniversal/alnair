import { Group } from '@mantine/core';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { getHeaderLinks } from '../Header/Header.constants';
import { HeaderLogo } from '../HeaderLogo';

import { useStyles } from './styles';

export const LeftBar = () => {
	const { t } = useTranslation('layout');
	const { classes } = useStyles();
	const mainLinks = getHeaderLinks(t);
	return (
		<Group style={{ gap: 0 }}>
			<HeaderLogo />
			{mainLinks.map((link) => (
				<Link key={link.name} href={link.link} className={classes.link}>
					{link.name}
				</Link>
			))}
		</Group>
	);
};
