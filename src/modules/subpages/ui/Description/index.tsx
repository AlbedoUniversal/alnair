import {
	Box,
	Container,
	Flex,
	Grid,
	Group,
	Paper,
	rem,
	SimpleGrid,
	Text,
	Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';

export const Description = ({ description }: { description: string }) => {
	const [cleanDescription, setCleanDescription] = useState(description);
	useEffect(() => {
		const cleaned = removePTags(description);
		setCleanDescription(cleaned);
	}, [description]);

	return (
		<Container size="xl" mt={rem(120)}>
			<SimpleGrid cols={2}>
				<Grid>
					<Grid.Col>
						<Paper radius="md" p="xl" shadow="xl">
							<Text size="xl" lh={2}>
								{cleanDescription}
							</Text>
						</Paper>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col>
						<Paper radius="md" p="xl" shadow="xl">
							<Box style={{ textAlign: 'center' }}>
								<Title fz={rem(40)}>Amenities for you</Title>
							</Box>
						</Paper>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</Container>
	);
};

export const removePTags = (html: string) => {
	const regex = /<\/?p>/gi;
	return html.replace(regex, ' ');
};
