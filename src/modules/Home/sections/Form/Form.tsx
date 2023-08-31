import {
	Box,
	Button,
	Container,
	createStyles,
	Flex,
	rem,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
	container: {
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
	const { t } = useTranslation('form');
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
		<Container fluid id="contacts" bg={'#F4F7FD'}>
			<Container size="xl" pb={100} pt={100}>
				<Box
					w={'100%'}
					component="form"
					onSubmit={form.onSubmit(() => null)}
					className={classes.form}
				>
					<Title align="center" mb={24} order={2}>
						{t('title')}
					</Title>
					<Text size={'xl'} maw={'775px'} mx={'auto'} mb={24}>
						{t('description')}
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
							label={t('labelName')}
							placeholder={t('placeholderName')}
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
							label={t('labelCountry')}
							placeholder={t('placeholderCountry')}
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
							label={t('labelEmail')}
							placeholder={t('placeholderEmail')}
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
						<Button variant="gradient" type="submit" mt={40}>
							{t('send')}
						</Button>
					</Flex>
				</Box>
			</Container>
		</Container>
	);
};
