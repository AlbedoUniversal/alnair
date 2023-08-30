import { type MantineThemeOverride } from '@mantine/core';

// import { activeStyles } from './activeStyles';
// import { breakpoints } from './breakpoints';
import { colors, primaryColor, primaryShade } from './colors';
import { components } from './components';
// import { focusRingStyles } from './focusRingStyles';
// import { globalStyles } from './globalStyles';
// import { other } from './other';
import { defaultRadius, radius } from './radius';
// import { shadows } from './shadows';
// import { spacing } from './spacing';
import { fontFamily, fontSizes } from './typography';

export const themeConfig: MantineThemeOverride = {
	colorScheme: 'light',
	colors,
	primaryColor,
	primaryShade,
	radius,
	// globalStyles,
	fontFamily,
	// focusRingStyles,
	fontSizes,
	// breakpoints,
	components,
	// spacing,
	// headings,
	// shadows,
	// lineHeight,
	defaultRadius,
	// activeStyles,
	// other,
};
