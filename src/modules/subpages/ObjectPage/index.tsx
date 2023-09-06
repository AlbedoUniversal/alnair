import parser from 'html-react-parser';
import Head from 'next/head';

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
	return (
		<>
			<Head>
				<title>Alnair</title>
			</Head>
			<div style={{ minHeight: '70vw' }}>
				<PhotoResidence
					album={album}
					title={offer.title[0][locale]}
					logo={offer.logo}
				/>
				<Description description={offer.description[0][locale][0]} />
			</div>
		</>
	);
};
