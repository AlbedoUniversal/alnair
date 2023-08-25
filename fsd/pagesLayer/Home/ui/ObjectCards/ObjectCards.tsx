import {
	Container,
	createStyles,
	Grid,
	Input,
	MultiSelect,
	rem,
	Text,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useMemo, useState } from 'react';

import { DirContext } from '@/shared/lib/context/DirContext/DirContext';

import { Cards } from './Cards';
import { objects } from './data';

const useStyles = createStyles((theme) => ({
	container: {
		marginBlockStart: rem(-25),
		paddingBlockEnd: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
}));

export const ObjectCards = ({ offers }: { offers: any }) => {
	const { classes } = useStyles();
	const { language, dir } = useContext(DirContext);
	const { t } = useTranslation('translations');
	const [filters, setFilters] = useState({
		price: '',
		developers: [],
		districts: [],
		amenities: [],
	});

	const [filteredData, setFilteredData] = useState(offers);

	const handleFilterChange = (filterName: string, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filterName]: value,
		}));
	};

	const filterData = () => {
		let filtered = offers;

		if (filters.price) {
			filtered = filtered.filter((item: any) => {
				const priceMin = item.price.min;

				return Number(priceMin) >= Number(filters.price);
			});
		}

		filtered = filtered.filter((item: any) => {
			if (filters.developers.length) {
				return filters.developers.includes();
			}

			return true;
		});

		filtered = filtered.filter((item: any) => {
			if (filters.districts.length) {
				return filters.districts.includes(item.districts);
			}

			return true;
		});

		setFilteredData(filtered);
	};

	const developers = t('developerName', { returnObjects: true });

	console.log(developers.map((item: any) => item[0]));

	const developersOptions = useMemo(
		() => developers.map((item: any) => item[0]),
		[developers]
	);

	console.log(developersOptions, 'sdgdsfgdsfgs');

	// const districtsOptions = useMemo(
	// 	() => objects.map((item) => item.districts),
	// 	[]
	// );

	// useEffect(() => {
	// 	filterData();
	// }, [filters]);

	const placeholdersTranslations = {
		ru: {
			price: 'Минимальная цена',
			developer: 'Выберете строительную компанию',
			district: 'Выберете район',
		},
		en: {
			price: 'Minimum price',
			developer: 'Choose developers',
			district: 'Choose districts',
		},
		ar: {
			price: 'سعر الحد الأدنى',
			developer: 'اختر شركة بناء',
			district: 'اختر منطقة',
		},
	};
	return (
		<Container className={classes.container} size="xl" id="projects">
			<div
				style={{
					background: '#fff',
					zIndex: 10,
					position: 'relative',
					borderRadius: '8px',
				}}
			>
				<Grid className={classes.categories}>
					{/* <Grid.Col span={4}>
						<Input
							placeholder={placeholdersTranslations[language].price}
							value={filters.price}
							onChange={(e) => {
								handleFilterChange('price', e.target.value);
							}}
							styles={{
								input: {
									border: 'none',
								},
							}}
						/>
					</Grid.Col> */}
					<Grid.Col span={4}>
						<MultiSelect
							data={developersOptions}
							// placeholder={developersOptions}
							value={filters.developers}
							onChange={(value: any) => {
								handleFilterChange('developers', value);
							}}
							styles={{
								input: {
									border: 'none',
								},
							}}
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						{/* <MultiSelect
							data={districtsOptions}
							placeholder={placeholdersTranslations[language].district}
							value={filters.districts}
							onChange={(value: any) => {
								handleFilterChange('districts', value);
							}}
							styles={{
								input: {
									border: 'none',
								},
							}}
						/> */}
					</Grid.Col>
				</Grid>
			</div>
			{filteredData.length === 0 && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						justifyContent: 'center',
					}}
				>
					<Text fz="xl">Sorry! Nothing is found.</Text>
				</div>
			)}
			<Grid style={{ rowGap: '30px' }} gutter={24}>
				{offers.map((object: any, i: any) => (
					<Grid.Col span={3} key={object['complex-id']}>
						<Cards
							title={t('titles', { returnObjects: true })[i]}
							object={object}
							amenities={t('amenities', { returnObjects: true })[i]}
							description={t('description', { returnObjects: true })[i]}
							districts={object.districts.map((item) => item.district)}
							src={object.album.map((photo) => photo.image[1])}
							priceMin={object.price[0].min}
							priceMax={object.price[0].max}
							currency={object.price[0].currency}
							status={t('status', { returnObjects: true })[i]}
							dir={dir}
						/>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};
