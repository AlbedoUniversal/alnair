import { MantineProvider } from '@mantine/core';
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';
import { useState } from 'react';

import { AppLayout } from '@/config/layout';
import { themeConfig } from '@/config/theme';

const QUERY_OPTIONS = {
	defaultOptions: {
		queries: {
			staleTima: 1 * 60 * 60 * 1000,
			cacheTime: 5 * 60 * 60 * 1000,
			refetchOnmount: false,
			refetchOnReconnect: false,
			retry: 1,
			refetchOnWindowFocus: true,
		},
	},
};
const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: QUERY_OPTIONS.defaultOptions })
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState} options={QUERY_OPTIONS}>
				<MantineProvider withGlobalStyles theme={themeConfig}>
					<AppLayout>
						<Component {...pageProps} />
					</AppLayout>
				</MantineProvider>
			</Hydrate>
		</QueryClientProvider>
	);
};

export default appWithTranslation(App);
