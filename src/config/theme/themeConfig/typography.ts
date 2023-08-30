/* eslint-disable prefer-destructuring */
import { type MantineThemeOverride, rem } from '@mantine/core';
import { Open_Sans } from 'next/font/google';

export const inter = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '700'],
});

export const fontFamily: MantineThemeOverride['fontFamily'] =
	inter.style.fontFamily;
