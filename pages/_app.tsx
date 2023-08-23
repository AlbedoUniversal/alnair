import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import { AppLayout } from '@/pagesLayer/Home/ui/AppLayout';

const App = ({ Component, pageProps }: AppProps) => {
	const AnyComponent = Component as any;

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<AppLayout>
				<AnyComponent {...pageProps} />
			</AppLayout>
		</MantineProvider>
	);
};

export default App;
