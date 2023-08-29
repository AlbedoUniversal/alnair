import { Lexend } from 'next/font/google';
import { useTranslation } from 'next-i18next';

import { FeaturesTitle } from '../Advantages';
import { BannerSlider } from '../BannerSlider';
import { Form } from '../Form';
import { ObjectCards } from '../ObjectCards';
import { Slogan } from '../Slogan';

import { HomePageMeta } from './Home.meta';

const inter = Lexend({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
});

interface OffersData {
	'complex-id': string[];
	address: string[];
}
const HomePage = ({ data }: { data: any }) => {
	const { offers } = data['realty-feed'];
	const { i18n } = useTranslation();
	const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
	console.log(offers);

	return (
		<>
			<HomePageMeta />
			<main
				style={{ backgroundColor: '#FAFBFD' }}
				className={inter.className}
				dir={dir}
			>
				<BannerSlider offers={offers} />
				<ObjectCards offers={offers} />
				<Slogan />
				<FeaturesTitle />
				<Form />
			</main>
		</>
	);
};

export { HomePage };
