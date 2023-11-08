export const slugify = (str: string): string => {
	return str
		.trim()
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.toLowerCase();
};
