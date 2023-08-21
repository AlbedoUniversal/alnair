import { Group } from '@mantine/core';

interface SortsData {
	ru: string;
	en: string;
	ar: string;
}

interface SortingDisplayProps {
	sorts: SortsData[];
}
export const SortingDisplay = ({ sorts }: SortingDisplayProps) => {
	console.log(sorts);

	return (
		<Group>
			<div></div>
		</Group>
	);
};
