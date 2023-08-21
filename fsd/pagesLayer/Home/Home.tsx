import { Graphik } from '@/shared/lib/utils/font';

import { HomePageMeta } from './Home.meta';
import { Cards } from './ui/Cards';
import { Footers } from './ui/FooterWrapper';
import { Headers } from './ui/HeaderWrapper';

const HomePage = () => (
	<>
		<HomePageMeta />
		<main className={Graphik.className}>
			<Headers />
			<Cards />
			<Footers />
		</main>
	</>
);

export { HomePage };
