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
// import { fontFamily, fontSizes, headings, lineHeight } from './typography';

/**
 * По сути тут происходит перенос дизайн токенов из дизайн системы
 * Дизайн система @see https://www.figma.com/file/CsqPMIK8CwVBxtLNe2Zchs/%D0%92%D0%B5%D1%80%D1%82%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C-%7C-%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=371-6289&t=ewqE2nQhjgeA23mb-4
 */
export const themeConfig: MantineThemeOverride = {
	colorScheme: 'light',
	colors,
	primaryColor,
	primaryShade,
	radius,
	// globalStyles,
	// fontFamily,
	// focusRingStyles,
	// fontSizes,
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
