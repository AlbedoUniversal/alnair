import { type MantineThemeOverride, rem } from '@mantine/core';

export const radius: MantineThemeOverride['radius'] = {
	xxs: rem(4),
	xs: rem(8),
	sm: rem(12),
	md: rem(20),
	lg: rem(32),
	xl: rem(50),
	xxl: rem(100),
};
export const defaultRadius: MantineThemeOverride['defaultRadius'] = 'xs';
