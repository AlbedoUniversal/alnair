import {
	Container,
	Grid,
	Input,
	MultiSelect,
	Text,
	createStyles,
	rem,
} from '@mantine/core';
import { objects } from './data';
import { useContext, useEffect, useMemo, useState } from 'react';
import { DirContext } from '@/shared/lib/context/DirContext/DirContext';
import { Cards } from './Cards';
const useStyles = createStyles((theme) => ({
	container: {
		marginBlockStart: rem(-25),
		paddingBlockEnd: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
}));

export const ObjectCards = () => {
	const { classes } = useStyles();
	const [isFound, setIsFound] = useState(true);
	const { language, dir } = useContext(DirContext);
	const [filters, setFilters] = useState({
		price: '',
		developers: [],
		districts: [],
		amenities: [],
	});
	const [filteredData, setFilteredData] = useState(objects);

	const handleFilterChange = (filterName: string, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filterName]: value,
		}));
	};

	const filterData = () => {
		let filtered = objects;

		if (filters.price) {
			filtered = filtered.filter((item) => {
				const priceMin = item.price.min;

				return Number(priceMin) >= Number(filters.price);
			});
		}

		filtered = filtered.filter((item) => {
			if (filters.developers.length) {
				return filters.developers.includes(item.developer.title[language]);
			}

			return true;
		});

		filtered = filtered.filter((item) => {
			if (filters.districts.length) {
				return filters.districts.includes(item.districts);
			}

			return true;
		});

		setFilteredData(filtered);
	};

	const developersOptions = useMemo(
		() => objects.map((item) => item.developer.title[language]),
		[]
	);

	const districtsOptions = useMemo(
		() => objects.map((item) => item.districts),
		[]
	);

	useEffect(() => {
		filterData();
	}, [filters]);

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
					<Grid.Col span={4}>
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
					</Grid.Col>
					<Grid.Col span={4}>
						<MultiSelect
							data={developersOptions}
							placeholder={placeholdersTranslations[language].developer}
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
						<MultiSelect
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
						/>
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
				{filteredData.map((object) => {
					const { amenities } = object;
					const translations = {
						ru: {
							title: object.title.ru,
							description: object.description.ru,
							status: object.status.ru,
							amenities: amenities.map((amenity) => amenity.amenity.ru),
							developer: object.developer.title.ru,
							paymentPlan: object.payment_plans?.title.ru,
							salesStatus: object.sales_status?.ru,
						},
						en: {
							title: object.title.en,
							description: object.description.en,
							status: object.status.en,
							amenities: amenities.map((amenity) => amenity.amenity.en),
							developer: object.developer.title.en,
							paymentPlan: object.payment_plans?.title.en,
							salesStatus: object.sales_status?.en,
						},
						ar: {
							title: object.title.ar,
							description: object.description.ar,
							status: object.status.ar,
							amenities: amenities.map((amenity) => amenity.amenity.ar),
							developer: object.developer.title.ar,
							paymentPlan: object.payment_plans?.title.ar,
							salesStatus: object.sales_status?.ar,
						},
					};

					return (
						<Grid.Col span={3}>
							<Cards
								title={translations[language].title}
								object={object}
								amenities={translations[language].amenities}
								description={translations[language].description}
								districts={object.districts}
								src={object.album[1]}
								priceMin={object.price.min}
								priceMax={object.price.max}
								currency={object.price.currency}
								status={translations[language].status}
								dir={dir}
							/>
						</Grid.Col>
					);
				})}
			</Grid>
		</Container>
	);
};
