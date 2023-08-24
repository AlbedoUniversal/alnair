import { Card, Text, rem, createStyles, Modal, Image } from '@mantine/core';
import parser from 'html-react-parser';
const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
	},
	section: {
		padding: theme.spacing.sm,
		height: rem(637),
	},
}));

interface ModalSideProps {
	description: string;
	close: () => void;
	opened: boolean;
	src: string;
}
export const Modals = ({ description, close, opened, src }: ModalSideProps) => {
	const { classes } = useStyles();
	return (
		<Modal onClose={close} opened={opened} centered radius={13}>
			<Card.Section>
				<Image src={src} />
			</Card.Section>
			<Card.Section className={classes.section}>
				<Text>{parser(description)}</Text>
			</Card.Section>
		</Modal>
	);
};
