import { createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import parser from 'html-react-parser';
import { useState } from 'react';

import { FrontSide } from './FrontSide';
import { Modals } from './Modal';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
	},
	cardBack: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		cursor: 'pointer',
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
}));

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
}: CardsProps) => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
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
				open={open}
			/>
			<Modals
				description={description}
				opened={opened}
				close={close}
				src={src}
			/>
		</>
	);
};
