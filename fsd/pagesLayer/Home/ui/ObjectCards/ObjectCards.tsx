import {
	Badge,
	Card,
	Container,
	Grid,
	Group,
	Image,
	Input,
	MultiSelect,
	Text,
	createStyles,
	rem,
} from '@mantine/core';
import { objects } from '../SortableTable/data';
import { useContext, useEffect, useMemo, useState } from 'react';
import { DirContext } from '@/shared/lib/context/DirContext/DirContext';
import parser from 'html-react-parser';
const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},
	imageSection: {
		paddingBlockStart: 0,
		display: 'flex',
		justifyContent: 'center',
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	section: {
		padding: theme.spacing.md,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	icon: {
		marginRight: rem(5),
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[5],
	},
	rating: {
		position: 'absolute',
		top: theme.spacing.xs,
		pointerEvents: 'none',
		zIndex: 3,
	},
	container: {
		marginBlockStart: rem(120),
	},
	categories: {
		marginBlockEnd: rem(50),
	},
}));

export const ObjectCards = () => {
	const { classes } = useStyles();
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
		<Container className={classes.container}>
			<Grid className={classes.categories}>
				<Grid.Col span={4}>
					<Input
						placeholder={placeholdersTranslations[language].price}
						value={filters.price}
						onChange={(e) => {
							handleFilterChange('price', e.target.value);
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
					/>
				</Grid.Col>
			</Grid>
			<Grid gutter={30}>
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
						<Grid.Col span={4}>
							<Card withBorder className={classes.card}>
								{object.status && (
									<Badge
										className={classes.rating}
										variant="gradient"
										gradient={{ from: 'blue', to: 'darkBlue' }}
									>
										{parser(translations[language].status)}
									</Badge>
								)}
								<Card.Section className={classes.imageSection}>
									<Image src={object.album[1]} height={200} />
								</Card.Section>
								<Card.Section
									className={classes.section}
									style={{ height: '120px' }}
								>
									<Group
										style={{
											flexDirection: 'column',
											alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start',
										}}
									>
										<Text>{parser(translations[language].title)}</Text>

										<Text>{parser(object.districts)}</Text>
									</Group>
								</Card.Section>
								<Card.Section
									className={classes.section}
									style={{ height: '200px' }}
								>
									<Group
										style={{
											flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
										}}
									>
										{translations[language].amenities.map((amenity) => {
											return <Badge>{amenity}</Badge>;
										})}
									</Group>
								</Card.Section>
								<Card.Section
									className={classes.section}
									style={{ height: '100px' }}
								>
									<Group
										style={{
											flexDirection: dir === 'rtl' ? 'row-reverse' : 'row',
										}}
									>
										<Text>
											from: {object.price.min} {object.price.currency}
										</Text>
										<Text>
											to: {object.price.max} {object.price.currency}
										</Text>
									</Group>
								</Card.Section>
							</Card>
						</Grid.Col>
					);
				})}
			</Grid>
		</Container>
	);
};
