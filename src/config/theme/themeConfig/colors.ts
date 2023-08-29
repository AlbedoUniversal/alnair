import {
	type MantineThemeColorsOverride,
	type MantineThemeOverride,
} from '@mantine/core';

/**
 * Назначаем основной цвет
 * @see https://mantine.dev/theming/colors/#primary-color
 */
export const primaryColor: MantineThemeOverride['primaryColor'] = 'blue';
/**
 * Назначаем основной оттенок, шестой элемент массива
 */
export const primaryShade: MantineThemeOverride['primaryShade'] = 5;

// Цвета сделанные с помощь прозрачности от основных пока не понятно куда записывать. Предлагаю просто использовать функции @see https://mantine.dev/theming/functions/#lighten-and-darken
export const colors: MantineThemeColorsOverride = {
	red: [
		'#fdf2f5',
		'#ffb3c4', // 0 unused
		'#fd829d', // 1 unused
		'#fb5176', // 2 unused
		'#f8214f', // 3 unused
		'#de0735', // 4 [primaryShade] primary
		'#cb2225', // 5 primary-hover
		'#b70e11', // 6 primary-active
		'#4d0011', // 7 unused
		'#200005', // 8 unused
	],
	blue: [
		'#dff3ff', // 0 unused
		'#b5d9fc', // 1 unused
		'#8abef5', // 2 unused
		'#5da3ed', // 3 unused
		'#3189e7', // 4 unused
		'#0B63E5', // 5 [primaryShade]
		'#2272c8', // 6 accent-hover.
		'#145ba7', // 7 accent-active.
		'#192B40', // 8 base-active.
		'#0C1F34', // 9 base.
	],
	dark: [
		'#f2f2f2', // 0 unused
		'#d9d9d9', // 1 unused
		'#bfbfbf', // 2 unused
		'#a6a6a6', // 3 unused
		'#8c8c8c', // 4 unused
		'#061C3D', // 5 [primaryShade] all texts
		'#595959', // 6 unused
		'#25364a', // 7 underlay.
		'#0C2036', // 8 underlay.
		'#151515', // 9 darkest.
	],
	gray: [
		'#ffffff', // 0
		'#f8f8f8', // 1
		'#f0f0f0', // 2
		'#e0e0e0', // 3
		'#7E8593', // 4
		'#FAFBFD', // 5 [primaryShade]. Background-color of MAIN
		'#a7a5a6', // 6 unused
		'#8c8c8c', // 7 unused
		'#767676', // 8
		'#17080d', // 9 unused
	],
	green: [
		'#ebf7f2', // 0
		'#c2ebda', // 1 unused
		'#a0ddc3', // 2 unused
		'#7ccdac', // 3 unused
		'#5CCF9F', // 4 unused
		'#56be92', // 5 [primaryShade] Цвет для различных элементов
		'#30815f', // 6 unused
		'#1f5c43', // 7 unused
		'#0d3828', // 8 unused
		'#00150b', // 9 unused
	],
	orange: [
		'#ffefe4', // 0
		'#ffd1ae', // 1 unused
		'#ffb47e', // 2 unused
		'#ff974c', // 3 unused
		'#ff791a', // 4 unused
		'#ff7b1d', // 5 [primaryShade] Цвет для различных элементов
		'#b44a00', // 6 unused
		'#813400', // 7 unused
		'#4f1e00', // 8 unused
		'#200800', // 9 unused
	],
};
