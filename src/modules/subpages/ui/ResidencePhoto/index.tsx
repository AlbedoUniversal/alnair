import { Carousel } from '@mantine/carousel';
import { Box, Container, Grid, Image, Title } from '@mantine/core';

export const PhotoResidence = ({
	album,
	title,
	logo,
}: {
	album: any;
	title: string;
	logo: string;
}) => (
	<Container fluid style={{ position: 'relative' }} p="0">
		<Grid grow gutter="xs">
			{album[0].image.map((photo: any, i: number) => (
				<Grid.Col span="content" key={i}>
					<Box style={{ backgroundColor: '#111' }}>
						<Image src={photo} height={330} style={{ opacity: 0.8 }} />
					</Box>
				</Grid.Col>
			))}
		</Grid>
		<Box
			style={{
				position: 'absolute',
				width: '100%',
				display: 'flex',
				height: '100%',
				top: 0,
				justifyContent: 'center',
				textAlign: 'center',

				alignItems: 'center',
			}}
		>
			<Title
				fz={115}
				lh={2}
				color="#fff"
				style={{
					textShadow: '7px 7px 5px #111',
					letterSpacing: '0px',
				}}
			>
				{title}
			</Title>
		</Box>
	</Container>
);
