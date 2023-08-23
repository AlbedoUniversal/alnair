import { Graphik } from '@/shared/lib/utils/font';

import { HomePageMeta } from './Home.meta';
import { Cards } from './ui/Cards';
import { BannerSlider } from './ui/BannerSlider';
import { ObjectCards } from './ui/ObjectCards';

const HomePage = () => (
	<>
		<HomePageMeta />
		<main className={Graphik.className}>
			<BannerSlider />
			<ObjectCards />
		</main>
	</>
);

export { HomePage };
