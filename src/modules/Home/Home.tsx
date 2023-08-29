import { useTranslation } from 'next-i18next';

import { HomePageMeta } from './Home.meta';
import Ui from './sections';

interface OffersData {
	'complex-id': string[];
	address: string[];
}
const HomePage = ({ data }: { data: any }) => {
	const { offers } = data['realty-feed'];

	return (
		<>
			<HomePageMeta />
			<Ui.BannerSlider offers={offers} />
			<Ui.ObjectCards offers={offers} />
			<Ui.PopularDistricts />
			<Ui.Slogan />
			<Ui.Advantages />
			<Ui.Form />
		</>
	);
};

export { HomePage };
