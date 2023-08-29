/* eslint-disable prefer-destructuring */
import { type MantineThemeOverride, rem } from '@mantine/core';
import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const fontFamily: MantineThemeOverride['fontFamily'] =
	inter.style.fontFamily;
export const lineHeight: MantineThemeOverride['lineHeight'] = 1.5;
export const fontSizes: MantineThemeOverride['fontSizes'] = {
	xs: '0.75rem', // 12
	sm: '0.875rem', // 14
	md: '1rem', // 16
	lg: '1.125rem', // 18
	xl: '1.25rem', // 20
	xxl: '1.375rem', // 22
} as const;

export const headings: MantineThemeOverride['headings'] = {
	fontWeight: 400,

	sizes: {
		h1: { fontWeight: 500, fontSize: rem(34), lineHeight: 1 },
		h2: { fontWeight: 500, fontSize: rem(28), lineHeight: 1.2 },
		h3: { fontWeight: 500, fontSize: rem(24), lineHeight: 1.4 },
		h4: { fontWeight: 500, fontSize: rem(20), lineHeight: 1.4 },
		h5: { fontWeight: 400, fontSize: rem(18), lineHeight: 1.4 },
	},
};
