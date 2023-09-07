import Head from 'next/head';

import { AvailableApartments } from '../ui/AvailableApartments';
import { Description } from '../ui/Description';
import { PhotoResidence } from '../ui/ResidencePhoto';

export const ObjectPage = ({
	offer,
	locale,
}: {
	offer: any;
	locale: string;
}) => {
	const { album } = offer;
	const photo = offer.logo;

	return (
		<>
			<Head>
				<title>Alnair</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<link
					rel="icon"
					type="image/png"
					sizes="180x180"
					href="/meta/favicon.png"
				/>
				<meta name="msapplication-TileColor" content="#fbfbfb" />
				<meta name="theme-color" content="#fbfbfb" />
				<meta name="description" content="Real Estate" />
				<meta name="robots" content="index, follow" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="google" content="notranslate" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:title" content="Alnair Real Estate" />
				<meta property="og:image" content="/meta/ogA.jpg" />
			</Head>
			<div style={{ minHeight: '70vw' }}>
				<PhotoResidence album={album} title={offer.title[0][locale]} />
				<Description description={offer.description[0][locale][0]} />
				<AvailableApartments
					locale={locale}
					apartments={offer.br_prices}
					photo={photo}
				/>
			</div>
		</>
	);
};
