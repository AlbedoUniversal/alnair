import { Container, Paper, rem, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import { removePTags } from './helper';

export const Description = ({ description }: { description: string }) => {
	const [cleanDescription, setCleanDescription] = useState(description);
	useEffect(() => {
		const cleaned = removePTags(description);
		setCleanDescription(cleaned);
	}, [description]);

	return (
		<Container size="xl" mt={rem(120)}>
			<Paper radius="md" p="xl" shadow="xl">
				<Text size="xl" lh={2}>
					{cleanDescription}
				</Text>
			</Paper>
		</Container>
	);
};
