import Link from 'next/link';

import LogoSVG from 'public/logos/logo.svg';

export const FooterLogo = () => (
	<Link href="/" style={{ textDecoration: 'none' }}>
		<LogoSVG />
	</Link>
);
