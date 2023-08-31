import { Container, SimpleGrid } from '@mantine/core';

import { Cards } from './ui/Cards';
import { Description } from './ui/Description';

export function Advantages() {
	return (
		<Container fluid size="xl">
			<Container size="xl">
				<SimpleGrid cols={2} spacing="120px">
					<Description />
					<Cards />
				</SimpleGrid>
			</Container>
		</Container>
	);
}
