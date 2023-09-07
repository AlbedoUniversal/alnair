import { createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import parser from 'html-react-parser';

import { FrontSide } from './FrontSide';

interface CardsProps {
	title: any;
	object: any;
	status: any;
	src: any;
	dir: any;
	districts: any;
	description: any;
	amenities: any;
	priceMin: any;
	priceMax: any;
	currency: any;
	maxArea: any;
	minArea: any;
	minPriceM2: any;
	maxPriceM2: any;
}
export const Cards = ({
	title,
	object,
	status,
	src,
	dir,
	districts,
	description,
	amenities,
	priceMin,
	priceMax,
	currency,
	maxArea,
	minArea,
	minPriceM2,
	maxPriceM2,
}: CardsProps) => (
	<>
		<FrontSide
			title={title}
			districts={districts}
			amenities={amenities}
			priceMax={priceMax}
			priceMin={priceMin}
			currency={currency}
			dir={dir}
			object={object}
			src={src}
			status={status}
			minArea={minArea}
			minPriceM2={minPriceM2}
			maxPriceM2={maxPriceM2}
		/>
	</>
);
