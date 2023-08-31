import { Container } from '@mantine/core';

import { BannerSlogan } from './BannerSlogan';
import { Slider } from './Slider';

export const BannerSlider = ({ offers }: { offers: any }) => (
	<Container fluid p={0} style={{ position: 'relative' }}>
		<BannerSlogan />
		<Slider offers={offers} />
	</Container>
);
