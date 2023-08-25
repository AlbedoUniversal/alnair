import { Text } from '@mantine/core';
import { Lexend } from 'next/font/google';
import { useTranslation } from 'next-i18next';

import { HomePageMeta } from './Home.meta';
import { BannerSlider } from './ui/BannerSlider';
import { Form } from './ui/Form';
import { ObjectCards } from './ui/ObjectCards';
import { Slogan } from './ui/Slogan';

const inter = Lexend({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
});

const HomePage = ({ data }: { data: any }) => {
	const { offers } = data['realty-feed'];

	return (
		<>
			<HomePageMeta />
			<main style={{ backgroundColor: '#FAFBFD' }} className={inter.className}>
				{/* <Text>{t('titles', { returnObjects: true })[0]}</Text> */}
				<BannerSlider offers={offers} />
				<ObjectCards offers={offers} />
				<Slogan />
				<Form />
			</main>
		</>
	);
};

export { HomePage };
