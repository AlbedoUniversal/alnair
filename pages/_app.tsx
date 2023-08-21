import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
	const AnyComponent = Component as any;

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<AnyComponent {...pageProps} />
		</MantineProvider>
	);
};

export default App;
