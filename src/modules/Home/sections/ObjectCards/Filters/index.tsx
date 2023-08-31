import { Grid, Input, MultiSelect, Select } from '@mantine/core';
import { IconMathEqualGreater } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';

import { type FiltersProps } from './Filters.helpers';
import { useStyles } from './styles';

export const Filters = ({
	handleFilter,
	districtsOptions,
	developersOptions,
	filters,
	constructionProgressesOptions,
}: FiltersProps) => {
	const { t } = useTranslation('placeholder');
	const { classes } = useStyles();
	return (
		<Grid className={classes.categories}>
			<Grid.Col span={2}>
				<Input
					placeholder={t('priceMin')}
					value={filters.minPrice}
					onChange={(e) => {
						handleFilter('minPrice', e.target.value);
					}}
					classNames={{ input: classes.input }}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<Input
					placeholder={t('priceMax')}
					value={filters.maxPrice}
					onChange={(e) => {
						handleFilter('maxPrice', e.target.value);
					}}
					classNames={{ input: classes.input }}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<MultiSelect
					data={developersOptions}
					placeholder={t('developer')}
					value={filters.developers}
					onChange={(value: string[]) => {
						handleFilter('developers', value);
					}}
					classNames={{ input: classes.input }}
				/>
			</Grid.Col>
			<Grid.Col span={3}>
				<MultiSelect
					data={districtsOptions}
					placeholder={t('district')}
					value={filters.districts}
					onChange={(value: any) => {
						handleFilter('districts', value);
					}}
					classNames={{ input: classes.input }}
				/>
			</Grid.Col>
			<Grid.Col span={3}>
				<Select
					data={constructionProgressesOptions}
					placeholder={t('completion')}
					value={filters.completion}
					onChange={(value: any) => {
						handleFilter('completion', value);
					}}
					classNames={{ input: classes.lastInput, icon: classes.iconInput }}
					icon={<IconMathEqualGreater size={12} />}
				/>
			</Grid.Col>
		</Grid>
	);
};
