export const removePTags = (html: string) => {
	const regex = /<\/?p>/gi;
	return html.replace(regex, ' ');
};
