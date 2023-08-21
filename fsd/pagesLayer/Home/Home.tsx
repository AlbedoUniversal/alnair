import { Graphik } from '@/shared/lib/utils/font';

import { HomePageMeta } from './Home.meta';
import { AppLayout } from './ui/AppLayout';
import { Cards } from './ui/Cards';

const HomePage = () => (
	<AppLayout>
		<HomePageMeta />
		<main style={{ paddingInline: '40px' }} className={Graphik.className}>
			<Cards />
		</main>
	</AppLayout>
);

export { HomePage };
