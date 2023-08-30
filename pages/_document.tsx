import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		const currentLocale =
			this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
		return (
			<Html lang={currentLocale}>
				<Head>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
