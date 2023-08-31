import { Container, Header, rem } from '@mantine/core';

import { LeftBar } from '../LeftBar';
import { RightBar } from '../RightBar';

import { useStyles } from './styles';

const HEADER_HEIGHT = rem(80);
export const Headers = ({ dir }: { dir: string }) => {
	const { classes } = useStyles();
	return (
		<Header height={HEADER_HEIGHT} dir={dir}>
			<Container className={classes.inner} size="xl">
				<LeftBar />
				<RightBar />
			</Container>
		</Header>
	);
};
