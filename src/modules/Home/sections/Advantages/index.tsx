import { Container, SimpleGrid } from '@mantine/core';

import { Cards } from './ui/Cards';
import { Description } from './ui/Description';

export function Advantages() {
	return (
		<Container fluid size="xl" bg={'#F4F7FD'}>
			<Container size="xl" bg={'#F4F7FD'}>
				<SimpleGrid cols={2} spacing="120px">
					<Description />
					<Cards />
				</SimpleGrid>
			</Container>
		</Container>
	);
}
