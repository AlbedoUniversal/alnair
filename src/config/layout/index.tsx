import { useTranslation } from 'next-i18next';

import { Footers } from './ui/Footer';
import { Headers } from './ui/Header';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const { i18n } = useTranslation();
	const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

	return (
		<>
			<Headers dir={dir} />
			<main dir={dir} style={{ backgroundColor: '#FAFBFD' }}>
				{children}
			</main>
			<Footers dir={dir} />
		</>
	);
};
