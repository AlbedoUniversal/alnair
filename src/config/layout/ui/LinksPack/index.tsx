import { Grid, Text } from '@mantine/core';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { getFooterLinks } from '../Footer/Footer.constants';

import { useStyles } from './LinkPack.styles';

export const LinksPack = () => {
	const { t } = useTranslation('layout');
	const { classes } = useStyles();

	const footerLinks = getFooterLinks(t);

	return (
		<Grid>
			{footerLinks.map((link) => (
				<Grid.Col span={6} key={link.name}>
					<Link href="/">
						<Text size={'md'} component="p" className={classes.link}>
							{link.name}
						</Text>
					</Link>
				</Grid.Col>
			))}
		</Grid>
	);
};
