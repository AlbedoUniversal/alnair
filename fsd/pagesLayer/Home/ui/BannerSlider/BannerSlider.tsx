import { Carousel } from '@mantine/carousel';
import { Container, Image, rem, createStyles } from '@mantine/core';
import { objects } from '../SortableTable/data';

export const BannerSlider = () => {
	return (
		<Container fluid p={0}>
			<Carousel>
				{objects.map((item) => {
					const { album } = item;

					return (
						<>
							{album.map((photo) => {
								return (
									<Carousel.Slide style={{ height: '600px' }}>
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
