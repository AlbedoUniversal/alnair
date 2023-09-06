import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	form: {
		padding: rem(100),
	},
	input: {
		height: rem(50),
		borderRadius: theme.spacing.xxs,
		borderColor: theme.colors.gray[2],
	},
	inputQuestions: {
		height: rem(106),
		borderRadius: theme.spacing.xxs,
		borderColor: theme.colors.gray[2],
	},
	wrapper: {
		width: rem(616),
	},
	wrapperNameMail: { width: rem(298) },
	label: {
		paddingBottom: rem(6),
		fontSize: theme.fontSizes.md,
	},
	formContainer: {
		backgroundColor: theme.white,
		borderRadius: theme.radius.md,
		position: 'relative',
	},
	content: {
		paddingBlockStart: rem(72),
		paddingBlockEnd: rem(100),
		paddingInline: rem(72),
		maxWidth: rem(1320),
	},
}));
