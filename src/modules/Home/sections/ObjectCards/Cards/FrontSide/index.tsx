import { Card, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import { Amenities } from '../Amenities';
import { type FrontSideProps } from '../Cards.helpers';
import { Districts } from '../Districts';
import { ImageSection } from '../ImageSection';
import { MinPrice } from '../MinPrice';
import { SquarePrice } from '../SquarePrice';
import { useStyles } from '../styles';
import { TitleSection } from '../TitleSection';

export const FrontSide = ({
	title,
	districts,
	amenities,
	priceMin,
	currency,
	object,
	src,
	// open,
	minArea,
	minPriceM2,
	maxPriceM2,
}: FrontSideProps) => {
	const { classes } = useStyles();
	const { i18n } = useTranslation();
	const arLng = i18n.language === 'ar';
	const { length } = districts;
	const district = () => {
		if (length > 1) {
			return (
				<>
					<Text>{districts[0][0]}</Text>
					<Text>{districts[0][1]}</Text>
				</>
			);
		}

		return <Text color="#7E8593">{districts[0][0]}</Text>;
	};

	return (
		<Card className={classes.card} p={0}>
			{object.districts && <Districts arLng={arLng} district={district} />}
			<ImageSection src={src} />
			<TitleSection title={title} district={district} />
			<Amenities amenities={amenities} />
			<SquarePrice
				minArea={minArea}
				minPrice={minPriceM2}
				maxPrice={maxPriceM2}
			/>
			<MinPrice priceMin={priceMin} currency={currency} />
		</Card>
	);
};
