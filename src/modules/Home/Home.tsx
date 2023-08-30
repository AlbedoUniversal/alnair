import { HomePageMeta } from './Home.meta';
import Ui from './sections';

const HomePage = ({ data }: { data: any }) => {
	const { offers } = data['realty-feed'];

	return (
		<>
			<HomePageMeta />
			<Ui.BannerSlider offers={offers} />
			<Ui.ObjectCards offers={offers} />
			<Ui.PopularDistricts />
			<Ui.Advantages />
			<Ui.Form />
		</>
	);
};

export { HomePage };
