import { useTranslation } from 'next-i18next';

import { Footers } from '../ui/FooterWrapper';
import { Headers } from '../ui/HeaderWrapper';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const { i18n } = useTranslation();
	const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

	return (
		<>
			<Headers dir={dir} />
			{children}
			<Footers dir={dir} />
		</>
	);
};
