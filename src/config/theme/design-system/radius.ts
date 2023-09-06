import { type MantineThemeOverride, rem } from '@mantine/core';

export const radius: MantineThemeOverride['radius'] = {
	xxs: rem(5),
	xs: rem(8),
	sm: rem(16),
	md: rem(24),
	lg: rem(32),
	xl: rem(50),
	xxl: rem(100),
};
export const defaultRadius: MantineThemeOverride['defaultRadius'] = 'xs';
