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

const useStyles = createStyles(() => ({
	controls: {
		ref: getStylesRef('controls'),
		opacity: 1,
		justifyContent: 'flex-start',
		gap: rem(20),
		bottom: rem(-50),
		left: rem(50),
	},
}));

export const BannerSlider = ({ offers }: { offers: any }) => {
	const { t } = useTranslation('banner');
	const { classes } = useStyles();
	return (
		<Container fluid p={0} style={{ position: 'relative' }}>
			<div
				style={{
					position: 'absolute',
					paddingInline: rem(60),
					zIndex: 10000,
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
			<Carousel loop classNames={classes}>
				{offers.map((item: any) => {
					const { album } = item;

					return (
						<>
							{album.map((photo: any) => (
								<>
									{photo.image.map((x: string) => (
										<Carousel.Slide style={{ height: '600px' }} key={photo[0]}>
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
