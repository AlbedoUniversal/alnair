import {
	Box,
	Button,
	Container,
	Group,
	Text,
	TextInput,
	createStyles,
	rem,
	Modal,
} from '@mantine/core';
import {
	useForm,
	isNotEmpty,
	isEmail,
	isInRange,
	hasLength,
	matches,
} from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';

const useStyles = createStyles((theme) => ({
	container: {
		paddingBlock: rem(120),
		justifyContent: 'center',
		display: 'flex',
		width: '100vw',
	},
}));
export const Form = () => {
	const { classes } = useStyles();
	const [isValid, setIsValid] = useState(false);
	const [opened, { open, close }] = useDisclosure(false);

	const form = useForm({
		initialValues: {
			name: '',
			job: '',
			email: '',
		},

		validate: {
			name: hasLength({ min: 2, max: 30 }, 'Name must be 2-30 characters long'),
			job: isNotEmpty(
				`Write a country in which you're looking for an apartment `
			),
			email: isEmail('Invalid email'),
		},
	});

	return (
		<Container fluid className={classes.container} id="contacts">
			<Box component="form" mx="auto" onSubmit={form.onSubmit(() => {})}>
				<Text fz={40} lh={1.8} fw={400} mb={40}>
					Contact us to get more information
				</Text>
				<TextInput
					maw={400}
					label="Name"
					placeholder="Write your full name"
					withAsterisk
					{...form.getInputProps('name')}
				/>
				<TextInput
					maw={400}
					label="Your country"
					placeholder="Write the desired country"
					withAsterisk
					mt="md"
					{...form.getInputProps('job')}
				/>
				<TextInput
					maw={400}
					label="Your email"
					placeholder="Write your email"
					withAsterisk
					mt="md"
					{...form.getInputProps('email')}
				/>
				<Group position="left" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</Box>

			{/* {isValid && (
				<Modal
					centered
					opened={opened}
					onClose={close}
					title="Thank you!"
					style={{ textAlign: 'center' }}
				>
					<Text>We will contact you soon!</Text>
				</Modal>
			)}
			{!isValid && (
				<Modal
					centered
					opened={opened}
					onClose={close}
					title="Sorry!"
					style={{ textAlign: 'center' }}
				>
					<Text>Fill all fields correctly</Text>
				</Modal>
			)} */}
		</Container>
	);
};
