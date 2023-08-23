import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ru">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<link rel="favicon.png" sizes="180x180" href="meta/favicon.png" />
					<meta name="msapplication-TileColor" content="#fbfbfb" />
					<meta name="theme-color" content="#fbfbfb" />
					<meta name="description" content="Real Estate" />
					<meta name="robots" content="index, follow" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="google" content="notranslate" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta property="og:title" content="Deep Digital" />
					<meta
						property="og:description"
						content="Deep Digital — инновационная ИТ-компания, помогающая Сберу, ВТБ, МКБ, Tele2 и Мегафону создавать цифровые сервисы для миллионов людей."
					/>
					<meta property="og:image" content="/meta/og.jpg" />
					<meta property="og:url" content="https://deep.digital/" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
