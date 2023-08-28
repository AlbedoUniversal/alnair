import { Card, createStyles, Image, Modal, rem, Text } from '@mantine/core';
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
	description: any;
	close: () => void;
	opened: boolean;
	src: string;
}
export const Modals = ({ description, close, opened, src }: ModalSideProps) => {
	const { classes } = useStyles();

	const des = parser(description[0]);
	return (
		<Modal onClose={close} opened={opened} centered radius={13}>
			<Card.Section>
				<Image src={src} />
			</Card.Section>
			<Card.Section className={classes.section}>
				<Text>{des}</Text>
			</Card.Section>
		</Modal>
	);
};
