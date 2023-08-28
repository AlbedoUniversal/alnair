import { Container, createStyles, Grid, rem } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useState } from 'react';

import { Cards } from './Cards';
import { Filters } from './Filters';
import { NothingFound } from './NothingFound';

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
	const { t } = useTranslation('translations');
	const [filteredData, setFilteredData] = useState(offers);
	const [filters, setFilters] = useState({
		price: '',
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

		if (filters.price) {
			filtered = filtered.filter((item: any) => {
				const priceMin = item.price[0].min.toString();

				return Number(priceMin) >= Number(filters.price);
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
			<div
				style={{
					background: '#fff',
					zIndex: 10,
					position: 'relative',
					borderRadius: '8px',
				}}
			>
				<Filters
					filters={filters}
					handleFilter={handleFilterChange}
					districtsOptions={districtsOptions}
					developersOptions={developersOptions}
				/>
			</div>
			{filteredData.length === 0 && <NothingFound />}
			<Grid style={{ rowGap: '30px' }} gutter={24}>
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
						/>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};