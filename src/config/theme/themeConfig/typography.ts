/* eslint-disable prefer-destructuring */
import { type MantineThemeOverride, rem } from '@mantine/core';
import { Open_Sans } from 'next/font/google';

export const inter = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '700'],
});

export const fontFamily: MantineThemeOverride['fontFamily'] =
	inter.style.fontFamily;

export const fontSizes: MantineThemeOverride['fontSizes'] = {
	xs: '0.75rem', // 12
	sm: '0.875rem', // 14
	md: '1rem', // 16
	lg: '1.125rem', // 18
	xl: '1.25rem', // 20
	xxl: '1.375rem', // 22
} as const;
