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
	form: {
		padding: rem(100),
		backgroundColor: theme.white,
		borderRadius: rem(15),
	},
	input: {
		height: rem(100),
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
			<Box
				component="form"
				mx="auto"
				onSubmit={form.onSubmit(() => {})}
				className={classes.form}
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
					styles={{
						input: {
							height: '50px',
							borderRadius: '8px',
						},
						label: {
							paddingBottom: '10px',
							fontSize: '16px',
						},
					}}
				/>
				<TextInput
					maw={400}
					label="Your country"
					placeholder="Write the desired country"
					withAsterisk
					mt="xl"
					{...form.getInputProps('job')}
					styles={{
						input: {
							height: '50px',
							borderRadius: '8px',
						},
						label: {
							paddingBottom: '10px',
							fontSize: '16px',
						},
					}}
				/>
				<TextInput
					maw={400}
					label="Your email"
					placeholder="Write your email"
					withAsterisk
					mt="xl"
					{...form.getInputProps('email')}
					styles={{
						input: {
							height: '50px',
							borderRadius: '8px',
						},
						label: {
							paddingBottom: '10px',
							fontSize: '16px',
						},
					}}
				/>
				<Group position="left" mt="xl">
					<Button type="submit" style={{ borderRadius: '8px' }}>
						Send
					</Button>
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
