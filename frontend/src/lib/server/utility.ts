export const serializeNonPOJOs = (value: object | null) => {
	return structuredClone(value);
};
export const convertToSlug = (str: string): string => {
	return str
		.trim()
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.toLowerCase();
};
