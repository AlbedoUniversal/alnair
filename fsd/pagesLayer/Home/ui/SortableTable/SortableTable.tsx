import {
	Input,
	MultiSelect,
	ScrollArea,
	Select,
	Table,
	Text,
} from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';

import { AppLayout } from '../AppLayout';

import { objects } from './data';

export const SortableTable = () => {
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

		// Фильтрация по цене
		if (filters.price) {
			filtered = filtered.filter((item) => {
				const priceMin = item.price.min;
				const priceMax = item.price.max;
				return (
					Number(priceMin) >= Number(filters.price) &&
					Number(priceMax) <= Number(filters.price)
				);
			});
		}

		filtered = filtered.filter((item) => {
			if (filters.developers.length) {
				return filters.developers.includes(item.developer.title.[language]);
			}

			return true;
		});

		filtered = filtered.filter((item) => {
			if (filters.districts.length) {
				return filters.districts.includes(item.districts);
			}

			return true;
		});

		filtered = filtered.filter((item) => {
			if (filters.amenities.length) {
				return item.amenities.some((a) =>
					filters.amenities.includes(a.amenity.en)
				);
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

	const amenityOptions = [
		...new Set(
			objects.flatMap((item) => item.amenities.map((a) => a.amenity.en))
		),
	];

	useEffect(() => {
		filterData();
	}, [filters]);

	return (
		<section style={{ maxWidth: '1300px', marginInline: 'auto' }}>
			<Input
				placeholder="Minimum price"
				value={filters.price}
				onChange={(e) => {
					handleFilterChange('price', e.target.value);
				}}
			/>
			<MultiSelect
				data={developersOptions}
				placeholder="Choose developers"
				value={filters.developers}
				onChange={(value: any) => {
					handleFilterChange('developers', value);
				}}
			/>
			<MultiSelect
				data={districtsOptions}
				placeholder="Choose districts"
				value={filters.districts}
				onChange={(value: any) => {
					handleFilterChange('districts', value);
				}}
			/>
			<MultiSelect
				data={amenityOptions}
				placeholder="Choose amenities"
				value={filters.amenities}
				onChange={(value: any) => {
					handleFilterChange('amenities', value);
				}}
			/>
			<ScrollArea>
				<Table sx={{ minWidth: 800 }} verticalSpacing="xs">
					<thead>
						<tr>
							<th>Complex id</th>
							<th>Complex name</th>
							<th>Developer</th>
							<th>District</th>
							<th>Amenities</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((row) => (
							<tr key={row['complex-id']}>
								<td>{row['complex-id']}</td>
								<td>{row.title.en}</td>
								<td>{row.developer.title.en}</td>
								<td>{row.districts}</td>
								<td>
									{row.amenities.map((amenity) => (
										<Text key={amenity.amenity.en}>{amenity.amenity.en}</Text>
									))}
								</td>
								<td>
									from: {row.price.min} {row.price.currency}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ScrollArea>
		</section>
	);
};
