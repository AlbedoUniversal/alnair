import fs from 'fs';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import xml2js from 'xml2js';

import { ObjectPage } from '@/modules/subpages/ObjectPage';

const ObjectPages = (props: any) => <ObjectPage {...props} />;

export async function getStaticPaths({ locales }: { locales: string[] }) {
	const xml = fs.readFileSync('./pages/data.xml');
	const result = await xml2js.parseStringPromise(xml);
	const { offers } = result['realty-feed'];
	const paths: Array<{ params: { slug: string }; locale: string }> = [];

	offers.forEach((offer: any) =>
		locales.map((locale) =>
			paths.push({ params: { slug: offer['complex-id'].toString() }, locale })
		)
	);

	return {
		paths,
		fallback: true,
	};
}

export const getStaticProps = async ({
	params,
	locale,
}: {
	params: any;
	locale: string;
}) => {
	const xml = fs.readFileSync('./pages/data.xml');
	const result = await xml2js.parseStringPromise(xml);
	const { offers } = result['realty-feed'];
	const { slug } = params;
	const offer = offers.find((o: any) => o['complex-id'].toString() === slug); // найти нужный объект по slug

	if (!offer) {
		return [];
	}

	return {
		props: {
			...(await serverSideTranslations(locale, [
				'translations',
				'layout',
				'placeholder',
				'banner',
				'popular',
				'advantages',
				'form',
				'slogan',
			])),
			offer,
			locale,
		},
	};
};

export default ObjectPages;
