import { createStyles, Grid, Input, MultiSelect, rem } from '@mantine/core';
import { useTranslation } from 'next-i18next';

const useStyles = createStyles((theme) => ({
	container: {
		marginBlockStart: rem(-25),
		paddingBlockEnd: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
}));

interface FiltersProps {
	handleFilter: any;
	districtsOptions: string[];
	developersOptions: string[];
	filters: any;
}
export const Filters = ({
	handleFilter,
	districtsOptions,
	developersOptions,
	filters,
}: FiltersProps) => {
	const { t } = useTranslation('placeholder');
	const { classes } = useStyles();
	return (
		<Grid className={classes.categories}>
			<Grid.Col span={4}>
				<Input
					placeholder={t('price')}
					value={filters.price}
					onChange={(e) => {
						handleFilter('price', e.target.value);
					}}
					styles={{
						input: {
							border: 'none',
						},
					}}
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<MultiSelect
					data={developersOptions}
					placeholder={t('developer')}
					value={filters.developers}
					onChange={(value: string[]) => {
						handleFilter('developers', value);
					}}
					styles={{
						input: {
							border: 'none',
						},
					}}
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<MultiSelect
					data={districtsOptions}
					placeholder={t('district')}
					value={filters.districts}
					onChange={(value: any) => {
						handleFilter('districts', value);
					}}
					styles={{
						input: {
							border: 'none',
						},
					}}
				/>
			</Grid.Col>
		</Grid>
	);
};
