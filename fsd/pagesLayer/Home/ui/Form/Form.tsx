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
	Code,
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
import { useState } from 'react';

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
	const [submittedValues, setSubmittedValues] = useState('');
	const [opened, { open, close }] = useDisclosure(false);
	const form = useForm({
		initialValues: {
			name: '',
			job: '',
			email: '',
			favoriteColor: '',
			age: 18,
		},

		validate: {
			name: hasLength({ min: 2, max: 30 }, 'Name must be 2-30 characters long'),
			job: isNotEmpty(
				`Enter a country in which you're looking for an apartment `
			),
			email: isEmail('Invalid email'),
			favoriteColor: matches(
				/^#([0-9a-f]{3}){1,2}$/,
				'Enter a valid hex color'
			),
			age: isInRange(
				{ min: 18, max: 99 },
				'You must be 18-99 years old to register'
			),
		},
	});
	return (
		<Container fluid className={classes.container} id="contacts">
			<Box
				component="form"
				mx="auto"
				// onSubmit={form.onSubmit(() => )}
			>
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
					<Button type="submit" onClick={open}>
						Submit
					</Button>
				</Group>
			</Box>

			<Modal
				centered
				opened={opened}
				onClose={close}
				title="Thank you!"
				style={{ textAlign: 'center' }}
			>
				<Text>We will contact you soon!</Text>
			</Modal>
		</Container>
	);
};
