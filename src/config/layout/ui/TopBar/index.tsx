import { Grid, rem } from '@mantine/core';

import { ContactsBox } from '../ContactsBox';
import { FooterLogo } from '../FooterLogo';
import { LinksPack } from '../LinksPack';

export const TopBar = () => (
	<Grid mb={rem(30)} justify="space-between">
		<FooterLogo />
		<LinksPack />
		<ContactsBox />
	</Grid>
);
