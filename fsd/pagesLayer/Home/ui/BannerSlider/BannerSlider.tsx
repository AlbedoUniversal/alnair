import { Carousel } from '@mantine/carousel';
import { Container, Image, Text } from '@mantine/core';
import { objects } from '../SortableTable/data';

export const BannerSlider = () => {
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
			<Carousel>
				{objects.map((item) => {
					const { album } = item;

					return (
						<>
							{album.map((photo) => {
								return (
									<Carousel.Slide style={{ height: '500px' }}>
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
