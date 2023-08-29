import {
	Box,
	Button,
	Container,
	createStyles,
	Flex,
	Group,
	Modal,
	rem,
	Text,
	TextInput,
} from '@mantine/core';
import {
	hasLength,
	isEmail,
	isInRange,
	isNotEmpty,
	matches,
	useForm,
} from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';

const useStyles = createStyles((theme) => ({
	container: {
		// paddingBlock: rem(120),
		textAlign: 'center',
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
				w={'100%'}
				component="form"
				onSubmit={form.onSubmit(() => {
					console.log('correct');
				})}
				className={classes.form}
			>
				<Text fz={40} lh={1.8} fw={400} mb={40}>
					Contact us to get more information
				</Text>
				<Flex
					direction={'column'}
					align="center"
					gap={10}
					maw={800}
					m="0 auto"
					p={30}
					sx={{
						borderRadius: '30px',
						boxShadow: '0px 0px 7px 2px #dadada',
					}}
				>
					<TextInput
						label="Name"
						placeholder="Write your full name"
						withAsterisk
						{...form.getInputProps('name')}
						styles={{
							wrapper: {
								width: '300px',
							},
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
							wrapper: {
								width: '300px',
							},
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
							wrapper: {
								width: '300px',
							},
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
					<Button type="submit" style={{ borderRadius: '8px' }}>
						Send
					</Button>
				</Flex>
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
