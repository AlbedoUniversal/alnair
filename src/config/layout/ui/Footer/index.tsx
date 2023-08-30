import { Container } from '@mantine/core';

import { BottomBar } from '../BottomBar';
import { TopBar } from '../TopBar';

import { useStyles } from './Footer.styles';

export const Footers = ({ dir }: { dir: string }) => {
	const { classes } = useStyles();

	return (
		<footer dir={dir} className={classes.footer}>
			<Container size="xl">
				<TopBar />
				<BottomBar />
			</Container>
		</footer>
	);
};
