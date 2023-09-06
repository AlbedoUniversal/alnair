import { Button, Flex, Group, Textarea, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useTranslation } from 'next-i18next';

import { useStyles } from './styles';

export const FormInputs = () => {
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
		<Flex direction="column" gap={10} m="0 auto" className={classes.content}>
			<Group>
				<TextInput
					label={t('labelName')}
					placeholder={t('placeholderName')}
					{...form.getInputProps('name')}
					classNames={{
						wrapper: classes.wrapperNameMail,
						input: classes.input,
						label: classes.label,
					}}
				/>
				<TextInput
					label={t('labelEmail')}
					placeholder={t('placeholderEmail')}
					{...form.getInputProps('email')}
					classNames={{
						wrapper: classes.wrapperNameMail,
						input: classes.input,
						label: classes.label,
					}}
				/>
			</Group>
			<TextInput
				label={t('labelPhone')}
				placeholder={t('placeholderPhone')}
				classNames={{
					wrapper: classes.wrapper,
					input: classes.input,
					label: classes.label,
				}}
			/>
			<Textarea
				label={t('labelQuestions')}
				placeholder={t('placeholderQuestions')}
				classNames={{
					wrapper: classes.wrapper,
					input: classes.inputQuestions,
					label: classes.label,
				}}
			/>
			<Button maw="fit-content" size="xs" type="submit" mt={40}>
				{t('send')}
			</Button>
		</Flex>
	);
};
