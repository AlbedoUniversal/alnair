import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';

import '../styles/global.css';
import { AppLayout } from '@/config/layout';
import { themeConfig } from '@/config/theme';

const App = ({ Component, pageProps }: AppProps) => {
	const AnyComponent = Component as any;
	const { i18n } = useTranslation();
	return (
		<MantineProvider withGlobalStyles theme={themeConfig}>
			<AppLayout>
				<AnyComponent {...pageProps} />
			</AppLayout>
		</MantineProvider>
	);
};

export default appWithTranslation(App);
