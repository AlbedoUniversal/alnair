import { Carousel } from '@mantine/carousel';
import {
	Container,
	createStyles,
	getStylesRef,
	Image,
	rem,
	Text,
} from '@mantine/core';
import { useTranslation } from 'next-i18next';

import PrevSVG from 'public/icons/buttonNext.svg';
import NextSVG from 'public/icons/buttonPrev.svg';

const useStyles = createStyles(() => ({
	controls: {
		ref: getStylesRef('controls'),
		justifyContent: 'flex-start',
		gap: rem(20),
		bottom: rem(-200),
	},
	control: {
		ref: getStylesRef('control'),
		backgroundColor: 'transparent',
		border: 'none',
	},
}));

export const BannerSlider = ({ offers }: { offers: any }) => {
	const { i18n, t } = useTranslation('banner');
	const { classes } = useStyles();
	const arLng = i18n.language === 'ar';
	return (
		<Container fluid p={0} style={{ position: 'relative' }}>
			<div
				style={{
					position: 'absolute',
					paddingInline: rem(70),
					zIndex: 10,
					top: rem(130),
				}}
			>
				<Text fz={44} fw={600} lh={1.1} color="white">
					{t('title')}
				</Text>
				<Text fz={18} color="white" mt={20} w={450}>
					{t('description')}
				</Text>
			</div>
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
		</Container>
	);
};
