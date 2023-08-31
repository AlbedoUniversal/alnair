import { Grid, rem, Text } from '@mantine/core';
import Link from 'next/link';
import { type FC, type ReactNode } from 'react';

const colStyles = {
	borderRadius: rem(16),
	backgroundColor: 'white',
	gap: rem(20),
	display: 'grid',
	columnGap: rem(20),
};

export const InfoCard = ({
	SvgIcon,
	children,
}: {
	SvgIcon: FC;
	children: ReactNode;
}) => (
	<Link href="/">
		<Grid.Col sx={colStyles} p={rem(24)}>
			<SvgIcon />
			{children}
		</Grid.Col>
	</Link>
);
