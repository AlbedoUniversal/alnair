import { Container } from '@mantine/core';

import { useStyles } from './Footer.styles';
import { BottomBar } from './ui/BottomBar';
import { TopBar } from './ui/TopBar';

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
