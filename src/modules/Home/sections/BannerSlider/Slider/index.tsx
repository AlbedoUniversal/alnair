import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useTranslation } from 'next-i18next';

import PrevSVG from 'public/icons/buttonNext.svg';
import NextSVG from 'public/icons/buttonPrev.svg';

import { useStyles } from './styles';

export const Slider = ({ offers }: { offers: [] }) => {
	const { i18n } = useTranslation('banner');
	const { classes } = useStyles();
	const arLng = i18n.language === 'ar';
	return (
		<Carousel
			loop
			classNames={classes}
			nextControlIcon={<NextSVG />}
			previousControlIcon={<PrevSVG />}
			styles={{
				controls: {
					width: '100%',
					left: arLng ? '-70px' : '70px',
					justifyContent: arLng ? 'flex-end !important' : 'flex-start',
				},
			}}
			dir="ltr"
		>
			{offers.map((item: any) => {
				const { album } = item;

				return (
					<>
						{album.map((photo: any) => (
							<>
								{photo.image.map((x: string) => (
									<Carousel.Slide style={{ height: '700px' }} key={photo[0]}>
										<Image key={x} src={x} />
									</Carousel.Slide>
								))}
							</>
						))}
					</>
				);
			})}
		</Carousel>
	);
};
