import { Box, Container, createStyles, Grid, rem } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useState } from 'react';

import { Cards } from './Cards';
import { Filters } from './Filters';
import { NothingFound } from './NothingFound';
import { useStyles } from './styles';

export const ObjectCards = ({ offers }: { offers: any }) => {
	const { classes } = useStyles();
	const { t } = useTranslation('translations');
	const [filteredData, setFilteredData] = useState(offers);
	const [filters, setFilters] = useState({
		minPrice: '',
		maxPrice: '',
		completion: '',
		developers: [],
		districts: [],
		amenities: [],
	});

	const title = t('titles', { returnObjects: true }) as [];
	const description = t('description', { returnObjects: true }) as [];
	const amenitites = t('amenities', { returnObjects: true }) as [];
	const status = t('status', { returnObjects: true }) as [];
	const developers = t('developerName', { returnObjects: true }) as [];

	const handleFilterChange = (filterName: string, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filterName]: value,
		}));
	};

	const filterData = () => {
		let filtered = offers;

		if (filters.minPrice) {
			filtered = filtered.filter((item: any) => {
				const priceMin = item.price[0].max.toString();

				return Number(priceMin) <= Number(filters.minPrice);
			});
		}

		if (filters.maxPrice) {
			filtered = filtered.filter((item: any) => {
				const priceMax = item.price[0].min.toString();

				return Number(priceMax) >= Number(filters.maxPrice);
			});
		}

		if (filters.completion) {
			filtered = filtered.filter((item: any) => {
				const completion = item.construction_progress.toString();
				return Number(completion) >= Number(filters.completion);
			});
		}

		if (filters.developers.length > 0) {
			filtered = filtered.filter((item: any, i: number) => {
				const developer = developers.flatMap((developer) => developer);
				return filters.developers.includes(developer[i]);
			});
		}

		if (filters.districts.length > 0) {
			filtered = filtered.filter((item: any) => {
				const district = item.districts.flatMap(
					(district: any) => district.district
				);

				const districtString = district.toString() as never;
				return filters.districts.includes(districtString);
			});
		}

		setFilteredData(filtered);
	};

	const developersOptions = useMemo(
		() => developers.flatMap((item: string) => item),
		[developers]
	);

	const constructionProgressesOptions = ['0', '25', '50', '75', '90'];
	const districtsOptions = useMemo(
		() =>
			offers.flatMap((item: any) =>
				item.districts.flatMap((district: any) => district.district.toString())
			),
		[offers]
	);

	useEffect(() => {
		filterData();
	}, [filters]);

	return (
		<Container className={classes.container} size="xl" id="projects">
			<Box className={classes.filters}>
				<Filters
					filters={filters}
					handleFilter={handleFilterChange}
					districtsOptions={districtsOptions}
					developersOptions={developersOptions}
					constructionProgressesOptions={constructionProgressesOptions}
				/>
			</Box>
			{filteredData.length === 0 && <NothingFound />}
			<Grid style={{ rowGap: '30px' }} gutter={15}>
				{filteredData.map((object: any, i: number) => (
					<Grid.Col span={3} key={object['complex-id']}>
						<Cards
							title={title[i]}
							object={object}
							amenities={amenitites[i]}
							description={description[i]}
							districts={object.districts.map((item: any) => item.district)}
							src={object.album.map((photo: any) => photo.image[1])}
							priceMin={object.price[0].min}
							priceMax={object.price[0].max}
							currency={object.price[0].currency}
							status={status[i]}
							dir="false"
							maxArea={object.br_prices.flatMap(
								(item: any) => item.max_area[0].m2
							)}
							minArea={object.br_prices.flatMap(
								(item: any) => item.min_area[0].m2
							)}
							minPriceM2={object.br_prices.flatMap(
								(item: any) => item.min_price[0]
							)}
							maxPriceM2={object.br_prices.flatMap(
								(item: any) => item.max_price[0]
							)}
						/>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};
