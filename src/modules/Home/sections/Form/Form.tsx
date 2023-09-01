import {
	Box,
	Button,
	Container,
	createStyles,
	Flex,
	getStylesRef,
	Group,
	Image,
	rem,
	Text,
	Textarea,
	TextInput,
	Title,
} from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useTranslation } from 'next-i18next';

import { FormTitle } from './FormTitle';

const useStyles = createStyles((theme) => ({
	container: {
		textAlign: 'center',
		justifyContent: 'center',
		display: 'flex',
		width: '100vw',
	},
	form: {
		padding: rem(100),
	},
	input: {
		height: rem(100),
	},
	formContainer: {
		backgroundColor: theme.white,
		borderRadius: rem(24),
		position: 'relative',
	},
	content: {
		paddingBlockStart: rem(72),
		paddingBlockEnd: rem(100),
		paddingInline: rem(72),
		maxWidth: rem(1320),
	},

	image: {
		borderEndStartRadius: rem(24),
		borderStartStartRadius: rem(24),
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
		<Container fluid id="contacts">
			<Container size="xl" pb={100} pt={100}>
				<FormTitle />
				<Box component="form" onSubmit={form.onSubmit(() => null)}>
					<Flex className={classes.formContainer}>
						<Image
							src="/images/image 5.png"
							classNames={{ image: classes.image }}
						/>
						<Flex
							direction={'column'}
							gap={10}
							m="0 auto"
							className={classes.content}
						>
							<Group>
								<TextInput
									label={t('labelName')}
									placeholder={t('placeholderName')}
									{...form.getInputProps('name')}
									styles={{
										wrapper: {
											width: '298px',
										},
										input: {
											height: '50px',
											borderRadius: '8px',
											borderColor: '#E6E8EC',
										},
										label: {
											paddingBottom: '10px',
											fontSize: '16px',
										},
									}}
								/>
								<TextInput
									label={t('labelEmail')}
									placeholder={t('placeholderEmail')}
									{...form.getInputProps('email')}
									styles={{
										wrapper: {
											width: '298px',
										},
										input: {
											height: '50px',
											borderRadius: '8px',
											borderColor: '#E6E8EC',
										},
										label: {
											paddingBottom: '10px',
											fontSize: '16px',
										},
									}}
								/>
							</Group>
							<TextInput
								label={t('labelPhone')}
								placeholder={t('placeholderPhone')}
								styles={{
									wrapper: {
										width: '616px',
									},
									input: {
										height: '50px',
										borderRadius: '8px',
										borderColor: '#E6E8EC',
									},
									label: {
										paddingBottom: '10px',
										fontSize: '16px',
									},
								}}
							/>
							<Textarea
								label={t('labelQuestions')}
								placeholder={t('placeholderQuestions')}
								styles={{
									wrapper: {
										width: '616px',
									},
									input: {
										height: '106px',

										borderRadius: '8px',
										borderColor: '#E6E8EC',
									},
									label: {
										paddingBottom: '10px',
										fontSize: '16px',
									},
								}}
							/>
							<Button maw="fit-content" size="xs" type="submit" mt={40}>
								{t('send')}
							</Button>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Container>
	);
};
