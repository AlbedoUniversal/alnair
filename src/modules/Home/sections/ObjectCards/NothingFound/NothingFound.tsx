import { Text } from '@mantine/core';

export const NothingFound = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			justifyContent: 'center',
		}}
	>
		<Text fz="xl">Sorry! Nothing is found.</Text>
	</div>
);
