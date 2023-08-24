import { Carousel } from '@mantine/carousel';
import {
	Container,
	Image,
	Text,
	createStyles,
	getStylesRef,
	rem,
} from '@mantine/core';
import { objects } from '../ObjectCards/data';

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
export const BannerSlider = () => {
	const { classes } = useStyles();
	return (
		<Container fluid p={0} style={{ position: 'relative' }}>
			<div
				style={{
					position: 'absolute',
					zIndex: 1000000,
					top: '130px',
					left: '60px',
				}}
			>
				<Text fz={44} fw={600} lh={1.1} color="white">
					Bluewaters Bay by Meraas
				</Text>
				<Text fz={18} color="white" mt={20} w={450}>
					Is a new development with a unique location between Bluewaters Island
					and JBR.
				</Text>
			</div>
			<Carousel loop classNames={classes}>
				{objects.map((item) => {
					const { album } = item;

					return (
						<>
							{album.map((photo) => {
								return (
									<Carousel.Slide style={{ height: '600px' }} key={photo}>
										<Image src={photo} alt={item.title.en} />
									</Carousel.Slide>
								);
							})}
						</>
					);
				})}
			</Carousel>
		</Container>
	);
};
