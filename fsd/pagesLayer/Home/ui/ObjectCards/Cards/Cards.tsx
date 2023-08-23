import { rem, createStyles } from '@mantine/core';
import { useState } from 'react';
import { FrontSide } from './FrontSide';
import { Modals } from './Modal';
import { useDisclosure } from '@mantine/hooks';
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
	title: string;
	object: any;
	status: string;
	src: string;
	dir: string;
	districts: string;
	description: string;
	amenities: any;
	priceMin: string;
	priceMax: string;
	currency: string;
	index: number;
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
	index,
}: CardsProps) => {
	const { classes } = useStyles();
	const [side, setSide] = useState('front');
	const [opened, { open, close }] = useDisclosure(false);
	const handleFlip = () => {
		if (side === 'front') {
			setSide('back');
		} else {
			setSide('front');
		}
	};
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
