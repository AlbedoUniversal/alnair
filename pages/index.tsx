import fs from 'fs';

import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import xml2js from 'xml2js';

import nextI18nextConfig from 'next-i18next.config';
import { HomePage } from 'src/modules/Home';

const Home = (props: any) => <HomePage {...props} />;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const xml = fs.readFileSync('./pages/data.xml');
	const result = await xml2js.parseStringPromise(xml);

	const localesFolderRu = './public/locales/ru/';
	if (!fs.existsSync(localesFolderRu)) {
		fs.mkdirSync(localesFolderRu);
	}

	const localesFolderEn = './public/locales/en/';
	if (!fs.existsSync(localesFolderEn)) {
		fs.mkdirSync(localesFolderEn);
	}

	const localesFolderAr = './public/locales/ar/';
	if (!fs.existsSync(localesFolderAr)) {
		fs.mkdirSync(localesFolderAr);
	}

	const { offers } = result['realty-feed'];

	const locales = {
		ru: {
			titles: [],
			amenities: [],
			description: [],
			developerName: [],
			status: [],
		},
		en: {
			titles: [],
			amenities: [],
			description: [],
			developerName: [],
			status: [],
		},
		ar: {
			titles: [],
			amenities: [],
			description: [],
			developerName: [],
			status: [],
		},
	};

	offers.forEach((offer) => {
		// RU

		// titles

		locales.ru.titles.push(offer.title.flatMap((item) => item.ru));
		// amenities

		locales.ru.amenities.push(
			offer.amenities.flatMap((item) =>
				item.amenity.flatMap((amenity: any) => amenity.ru)
			)
		);
		// description
		locales.ru.description.push(offer.description.flatMap((item) => item.ru));

		// developer
		locales.ru.developerName.push(
			offer.developer.flatMap((item) => item.title[0].ru.map((name) => name))
		);

		// status
		locales.ru.status.push(offer.sales_status.flatMap((status) => status.ru));

		// EN

		// titles
		locales.en.titles.push(offer.title.flatMap((item) => item.en));

		// amenities
		locales.en.amenities.push(
			offer.amenities.flatMap((item) =>
				item.amenity.flatMap((amenity: any) => amenity.en)
			)
		);

		// description
		locales.en.description.push(offer.description.flatMap((item) => item.en));

		// developer
		locales.en.developerName.push(
			offer.developer.flatMap((item) => item.title[0].en.map((name) => name))
		);

		// status
		locales.en.status.push(offer.sales_status.flatMap((status) => status.en));

		// AR

		// titles
		locales.ar.titles.push(offer.title.flatMap((item) => item.ar));

		// amenities
		locales.ar.amenities.push(
			offer.amenities.flatMap((item) =>
				item.amenity.flatMap((amenity) => amenity.ar)
			)
		);

		// description
		locales.ar.description.push(offer.description.flatMap((item) => item.ar));

		// developer
		locales.ar.developerName.push(
			offer.developer.flatMap((item) => item.title[0].ar.map((name) => name))
		);

		// status
		locales.ar.status.push(offer.sales_status.flatMap((status) => status.ar));
	});

	const ruLocales = locales.ru;
	const enLocales = locales.en;
	const arLocales = locales.ar;

	fs.writeFileSync(
		`${localesFolderRu}/translations.json`,
		JSON.stringify(ruLocales)
	);
	fs.writeFileSync(
		`${localesFolderEn}/translations.json`,
		JSON.stringify(enLocales)
	);
	fs.writeFileSync(
		`${localesFolderAr}/translations.json`,
		JSON.stringify(arLocales)
	);

	return {
		props: {
			...(await serverSideTranslations(locale, [
				'common',
				'translations',
				'layout',
				'placeholder',
				'banner',
				'popular',
				'advantages',
				'form',
				'slogan',
			])),
			nextI18nextConfig,
			data: result,
		},
	};
};

export default Home;
