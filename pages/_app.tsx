import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '../styles/global.css';
import { AppLayout } from '@/config/layout';
import { themeConfig } from '@/config/theme';

const App = ({ Component, pageProps }: AppProps) => (
	<MantineProvider withGlobalStyles theme={themeConfig}>
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	</MantineProvider>
);

export default appWithTranslation(App);
