import {
	createStyles,
	Grid,
	Input,
	MultiSelect,
	rem,
	Select,
} from '@mantine/core';
import { IconMathEqualGreater } from '@tabler/icons-react';
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
	constructionProgressesOptions: string[];
}
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
					styles={{
						input: {
							border: 'none',
							borderRadius: 0,
							borderRight: '1px solid #E6E8EC',
						},
					}}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<Input
					placeholder={t('priceMax')}
					value={filters.maxPrice}
					onChange={(e) => {
						handleFilter('maxPrice', e.target.value);
					}}
					styles={{
						input: {
							border: 'none',
							borderRadius: 0,
							borderRight: '1px solid #E6E8EC',
						},
					}}
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
					styles={{
						input: {
							border: 'none',
							borderRadius: 0,
							borderRight: '1px solid #E6E8EC',
						},
					}}
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
					styles={{
						input: {
							border: 'none',
							borderRadius: 0,
							borderRight: '1px solid #E6E8EC',
						},
					}}
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
					styles={{
						input: {
							border: 'none',
						},
						icon: {
							top: '2px',
						},
					}}
					icon={<IconMathEqualGreater size={12} />}
				/>
			</Grid.Col>
		</Grid>
	);
};
