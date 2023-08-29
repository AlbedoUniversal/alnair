import { Lexend } from 'next/font/google';
import { useTranslation } from 'next-i18next';

import { Footers } from './ui/FooterWrapper';
import { Headers } from './ui/HeaderWrapper';

const inter = Lexend({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
});

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const { i18n } = useTranslation();
	const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

	return (
		<>
			<Headers dir={dir} />
			<main
				dir={dir}
				style={{ backgroundColor: '#FAFBFD' }}
				className={inter.className}
			>
				{children}
			</main>
			<Footers dir={dir} />
		</>
	);
};
