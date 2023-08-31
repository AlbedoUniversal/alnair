import { Flex, Text } from '@mantine/core';

import ArrowSvg from 'public/icons/arrowRight.svg';

export const GoToMarker = ({ text }: { text: string }) => (
	<Flex gap={8}>
		<Text color="blue.5" size={'sm'} fw={500}>
			{text}
		</Text>
		<ArrowSvg />
	</Flex>
);
