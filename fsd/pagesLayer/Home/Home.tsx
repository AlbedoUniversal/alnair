import { HomePageMeta } from './Home.meta';
import { BannerSlider } from './ui/BannerSlider';
import { Form } from './ui/Form';
import { ObjectCards } from './ui/ObjectCards';
import { Lexend } from 'next/font/google';

const inter = Lexend({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
});
const HomePage = () => (
	<>
		<HomePageMeta />
		<main style={{ backgroundColor: '#FAFBFD' }} className={inter.className}>
			<BannerSlider />
			<ObjectCards />
			<Form />
		</main>
	</>
);

export { HomePage };
