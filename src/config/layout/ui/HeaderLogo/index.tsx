import { rem } from '@mantine/core';
import Link from 'next/link';

import LogoSVG from 'public/logos/logo.svg';

export const HeaderLogo = () => (
	<Link
		href="/"
		style={{
			paddingInlineEnd: rem(16),
			borderInlineEnd: '1px solid #E6E8EC',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<LogoSVG />
	</Link>
);
